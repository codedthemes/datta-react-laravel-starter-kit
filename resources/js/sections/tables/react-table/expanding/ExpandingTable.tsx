import { Fragment, useEffect, useMemo, useState } from 'react';

// react-bootstrap
import Placeholder from 'react-bootstrap/Placeholder';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import {
  flexRender,
  useReactTable,
  ColumnDef,
  getExpandedRowModel,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel
} from '@tanstack/react-table';
import { LabelKeyObject } from 'react-csv/lib/core';

// project-imports
import MainCard from '@/components/MainCard';
import LinearWithLabel from '@/components/@extended/progress/LinearWithLabel';
import makeData from '@/data/react-table';
import mockData from '@/utils/mock-data';
import { CSVExport, DebouncedInput, StatusPill, SortingData, TablePagination } from '@/components/third-party/react-table';

// types
import { TableDataProps } from '@/types/table';

// ==============================|| RENDER - SUB TABLE ||============================== //

function RenderSubComponent() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<[]>([]);

  const columns = useMemo<ColumnDef<TableDataProps>[]>(
    () => [
      {
        header: 'Name',
        accessorKey: 'fullName',
        meta: {
          className: 'text-nowrap'
        }
      },
      {
        header: 'Email',
        accessorKey: 'email'
      },
      {
        header: 'Age',
        accessorKey: 'age',
        meta: {
          className: 'text-end'
        }
      },
      { header: 'Status', accessorKey: 'status', cell: (cell) => <StatusPill status={cell.getValue() as string} /> },
      {
        header: 'Profile Progress',
        accessorKey: 'progress',
        cell: ({ getValue }) => <LinearWithLabel value={getValue<number>()} />
      }
    ],
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(makeData(mockData(1).number.status(1, 5)));
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <TableSubRows {...{ columns, data, loading }} />;
}

// ==============================|| REACT TABLE - SUB ROWS ||============================== //

interface ReactSubTableProps {
  columns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
  loading?: boolean;
}

function TableSubRows({ columns, data, loading }: ReactSubTableProps) {
  const table = useReactTable({
    data,
    columns,
    getRowCanExpand: () => true,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel()
  });

  return loading
    ? Array.from({ length: 3 }).map((_, rowIdx) => (
        <tr key={rowIdx}>
          <td />
          {Array.from({ length: 5 }).map((_, colIdx) => (
            <td key={colIdx}>
              <Placeholder className="w-100 h-100 bg-secondary-200" />
            </td>
          ))}
        </tr>
      ))
    : table.getRowModel().rows.map((row, index) => (
        <tr key={index} className="expand-bg-color">
          <td />
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} {...cell.column.columnDef.meta}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ));
}

// ==============================|| REACT TABLE ||============================== //

interface ReactTableProps {
  columns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
  title: string;
}

function ReactTable({ columns, data, title }: ReactTableProps) {
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter },
    getRowCanExpand: () => true,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  const headers: LabelKeyObject[] = useMemo(
    () =>
      table.getAllColumns().map((col) => ({
        label: typeof col.columnDef.header === 'string' ? col.columnDef.header : '#',
        key: (col.columnDef as any).accessorKey ?? col.id
      })),
    [table]
  );

  return (
    <MainCard title={title} secondary={<CSVExport {...{ data, headers, filename: 'expanding.csv' }} />} className="table-card">
      {/* Toolbar */}
      <Stack direction="horizontal" className="justify-content-between align-items-center flex-wrap p-4" gap={2}>
        <SortingData getState={table.getState} setPageSize={table.setPageSize} />
        <div className="datatable-search">
          <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
        </div>
      </Stack>

      {/* Table */}
      <Table responsive className="mb-0 border-top">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} {...(header.column.columnDef.meta ?? {})}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <Fragment key={row.id}>
              <tr>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} {...cell.column.columnDef.meta}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
              {row.getIsExpanded() && <RenderSubComponent />}
            </Fragment>
          ))}
        </tbody>
      </Table>

      {/* pagination */}
      <TablePagination
        setPageSize={table.setPageSize}
        setPageIndex={table.setPageIndex}
        getState={table.getState}
        getPageCount={table.getPageCount}
        initialPageSize={10}
        totalEntries={data.length}
      />
    </MainCard>
  );
}

// ==============================|| REACT TABLE - EXPANDING TABLE ||============================== //

export default function ExpandingTable({ title }: { title: string }) {
  const data: TableDataProps[] = makeData(50);

  const columns = useMemo<ColumnDef<TableDataProps>[]>(
    () => [
      {
        id: 'expander',
        header: () => null,
        cell: ({ row }) => {
          return row.getCanExpand() ? (
            <i
              className={`${row.getIsExpanded() ? 'ti ti-chevron-down text-primary' : 'ti ti-chevron-right text-secondary'} fs-5 cursor-pointer`}
              onClick={row.getToggleExpandedHandler()}
            />
          ) : (
            <i className="ti ti-ban fs-5 text-secondary" />
          );
        }
      },
      {
        header: 'Names',
        accessorKey: 'fullName',
        meta: { className: 'text-nowrap' }
      },
      {
        header: 'Email',
        accessorKey: 'email'
      },
      {
        header: 'Age',
        accessorKey: 'age',
        meta: {
          className: 'text-end'
        }
      },
      { header: 'Status', accessorKey: 'status', cell: (cell) => <StatusPill status={cell.getValue() as string} /> },
      {
        header: 'Profile Progress',
        accessorKey: 'progress',
        cell: ({ getValue }) => <LinearWithLabel value={getValue<number>()} />
      }
    ],
    []
  );

  return <ReactTable {...{ columns, data, title }} />;
}
