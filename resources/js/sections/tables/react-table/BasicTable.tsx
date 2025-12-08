import { useMemo, useState } from 'react';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import { flexRender, useReactTable, ColumnDef, getCoreRowModel, getPaginationRowModel, getFilteredRowModel } from '@tanstack/react-table';
import { LabelKeyObject } from 'react-csv/lib/core';

// project-imports
import MainCard from '@/components/MainCard';
import { CSVExport, DebouncedInput, SortingData, StatusPill, TablePagination } from '@/components/third-party/react-table';
import LinearWithLabel from '@/components/@extended/progress/LinearWithLabel';
import makeData from '@/data/react-table';

// types
import { TableDataProps } from '@/types/table';

interface ReactTableProps {
  columns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
  striped?: boolean;
  footer?: boolean;
  title?: string;
}

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, title, striped, footer }: ReactTableProps) {
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, columnVisibility: !footer ? { visits: false, role: false } : {} },
    getCoreRowModel: getCoreRowModel(),
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
    <MainCard title={title} secondary={<CSVExport {...{ data, headers, filename: 'data.csv' }} />} className="table-card">
      {/* Toolbar */}
      <Stack direction="horizontal" className="justify-content-between align-items-center p-4 flex-wrap gap-2">
        <SortingData getState={table.getState} setPageSize={table.setPageSize} />
        <div className="datatable-search">
          <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
        </div>
      </Stack>

      {/* Table */}
      <Table hover responsive className="mb-0 border-top" striped={striped}>
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

        <tbody className={striped ? 'striped' : undefined}>
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

        {footer && (
          <tfoot className="footer-bg">
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((footer) => (
                  <td key={footer.id} {...(footer.column.columnDef.meta ?? {})}>
                    {footer.isPlaceholder ? null : flexRender(footer.column.columnDef.header, footer.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        )}
      </Table>

      {/* Pagination */}
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

// ==============================|| BASIC TABLE ||============================== //

export default function BasicTable({ title, striped, footer = false }: { title?: string; striped?: boolean; footer?: boolean }) {
  const data: TableDataProps[] = makeData(20);

  const columns = useMemo<ColumnDef<TableDataProps>[]>(
    () => [
      { header: 'Name', accessorKey: 'fullName', meta: { className: 'text-nowrap' } },
      { header: 'Email', accessorKey: 'email' },
      {
        header: 'Age',
        accessorKey: 'age',
        meta: {
          className: 'text-end'
        }
      },
      { header: 'Role', footer: 'Role', accessorKey: 'role' },
      {
        header: 'Visits',
        accessorKey: 'visits',
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

  return <ReactTable {...{ data, columns, title, striped, footer }} />;
}
