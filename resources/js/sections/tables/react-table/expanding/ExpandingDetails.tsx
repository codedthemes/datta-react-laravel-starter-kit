import { Fragment, useMemo, useState } from 'react';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import {
  useReactTable,
  flexRender,
  getExpandedRowModel,
  ColumnDef,
  getCoreRowModel,
  Row,
  CellContext,
  getPaginationRowModel,
  getFilteredRowModel
} from '@tanstack/react-table';
import { LabelKeyObject } from 'react-csv/lib/core';

// project-imports
import ExpandingUserDetail from './ExpandingUserDetailsTable';
import MainCard from '@/components/MainCard';
import LinearWithLabel from '@/components/@extended/progress/LinearWithLabel';
import makeData from '@/data/react-table';
import { CSVExport, DebouncedInput, SortingData, StatusPill, TablePagination } from '@/components/third-party/react-table';

// types
import { TableDataProps } from '@/types/table';

interface ReactTableProps {
  columns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
  title: string;
}

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ data, columns, title }: ReactTableProps) {
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    state: { globalFilter },
    columns,
    getRowCanExpand: () => true,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  const headers = useMemo<LabelKeyObject[]>(
    () =>
      table.getAllColumns().map((column) => ({
        label: typeof column.columnDef.header === 'string' ? column.columnDef.header : '#',
        key: (column.columnDef as { accessorKey?: string }).accessorKey ?? ''
      })),
    [table]
  );

  return (
    <MainCard title={title} secondary={<CSVExport data={data} headers={headers} filename="expanding-details.csv" />} className="table-card">
      {/* Toolbar */}
      <Stack direction="horizontal" className="justify-content-between align-items-center flex-wrap p-4" gap={2}>
        <SortingData getState={table.getState} setPageSize={table.setPageSize} />
        <div className="datatable-search">
          <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
        </div>
      </Stack>

      {/* Table */}
      <Table responsive className="border-top">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} {...header.column.columnDef.meta}>
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
              {row.getIsExpanded() && !row.getIsGrouped() && (
                <tr>
                  <td colSpan={row.getVisibleCells().length + 2}>
                    <ExpandingUserDetail data={row.original} />
                  </td>
                </tr>
              )}
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

// ==============================|| EXPANDING - EXPANDING DETAILS ||============================== //

export default function ExpandingDetails({ title }: { title: string }) {
  const data: TableDataProps[] = makeData(50);

  const columns = useMemo<ColumnDef<TableDataProps>[]>(
    () => [
      {
        id: 'expander',
        header: () => null,
        cell: ({ row }: { row: Row<TableDataProps> }) => (
          <i
            className={`ti ${row.getIsExpanded() ? 'ti-chevron-down' : 'ti-chevron-right'} fs-5`}
            onClick={row.getToggleExpandedHandler()}
          />
        )
      },
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
        },
        cell: ({ getValue }: CellContext<TableDataProps, number>) => <div>{getValue()}</div>
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
