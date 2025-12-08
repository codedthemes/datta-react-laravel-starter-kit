import { useMemo, useState } from 'react';

// react-bootstrap
import Table from 'react-bootstrap/Table';

// third-party
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
  HeaderGroup,
  flexRender,
  getFilteredRowModel
} from '@tanstack/react-table';
import { LabelKeyObject } from 'react-csv/lib/core';

// project-imports
import MainCard from '@/components/MainCard';
import makeData from '@/data/react-table';
import LinearWithLabel from '@/components/@extended/progress/LinearWithLabel';
import { CSVExport, StatusPill, TablePagination } from '@/components/third-party/react-table';

// types
import { TableDataProps } from '@/types/table';

interface ReactTableProps {
  columns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
  position: string;
  title: string;
}

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, position, title }: ReactTableProps) {
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    state: { globalFilter },
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true
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
    <MainCard
      title={title}
      secondary={<CSVExport {...{ data, headers, filename: position === 'top' ? 'pagination-top.csv' : 'pagination-bottom.csv' }} />}
      className="table-card"
    >
      {position === 'top' && (
        <TablePagination
          setPageSize={table.setPageSize}
          setPageIndex={table.setPageIndex}
          getState={table.getState}
          getPageCount={table.getPageCount}
          initialPageSize={10}
          totalEntries={data.length}
          className="p-4 pb-4 border-top-0"
        />
      )}

      {/* Table */}
      <Table hover responsive className="mb-0 border-top">
        <thead>
          {table.getHeaderGroups().map((headerGroup: HeaderGroup<TableDataProps>) => (
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} {...(cell.column.columnDef.meta ?? {})}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      {position === 'bottom' && (
        <TablePagination
          setPageSize={table.setPageSize}
          setPageIndex={table.setPageIndex}
          getState={table.getState}
          getPageCount={table.getPageCount}
          initialPageSize={10}
          totalEntries={100}
        />
      )}
    </MainCard>
  );
}

// ==============================|| PAGINATION - PAGINATION BOTTOM ||============================== //

export default function PaginationTable({ title, position }: { title: string; position: string }) {
  const data: TableDataProps[] = makeData(100);

  const columns = useMemo<ColumnDef<TableDataProps>[]>(
    () => [
      { header: 'Name', accessorKey: 'fullName', meta: { className: 'text-nowrap' } },
      { header: 'Email', accessorKey: 'email' },
      { header: 'Age', accessorKey: 'age', meta: { className: 'text-end' } },
      { header: 'Status', accessorKey: 'status', cell: (cell) => <StatusPill status={cell.getValue() as string} /> },
      {
        header: 'Profile Progress',
        accessorKey: 'progress',
        cell: (cell) => <LinearWithLabel value={cell.getValue() as number} />
      }
    ],
    []
  );

  return <ReactTable {...{ data, columns, position, title }} />;
}
