import { useEffect, useMemo, useRef, useState } from 'react';

// react-bootstrap
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import {
  ColumnDef,
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  Table as TableType,
  Row,
  getFilteredRowModel
} from '@tanstack/react-table';
import { LabelKeyObject } from 'react-csv/lib/core';

// project-imports
import MainCard from '@/components/MainCard';
import LinearWithLabel from '@/components/@extended/progress/LinearWithLabel';
import makeData from '@/data/react-table';
import { CSVExport, DebouncedInput, StatusPill, SortingData, TablePagination } from '@/components/third-party/react-table';

// types
import { TableDataProps } from '@/types/table';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ data, columns, title }: { data: TableDataProps[]; columns: ColumnDef<TableDataProps>[]; title: string }) {
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: { rowSelection, globalFilter },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  useEffect(() => setRowSelection({ 5: true }), []);

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
      title={
        <Stack direction="horizontal" className="align-items-center justify-content-between">
          <h5 className="mb-0">{title}</h5>
          <CSVExport data={data} headers={headers} filename="data.csv" />
        </Stack>
      }
      className="table-card"
    >
      {/* Toolbar */}
      <Stack direction="horizontal" className="justify-content-between align-items-center p-4 flex-wrap gap-2">
        <SortingData getState={table.getState} setPageSize={table.setPageSize} />
        <div className="datatable-search">
          <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
        </div>
      </Stack>

      {/* Table */}
      <Table hover responsive className="mb-0 border-top">
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

// ==============================|| ROW SELECTION TABLE ||============================== //

export default function RowSelectionTable({ title }: { title: string }) {
  const data = makeData(100);

  const columns = useMemo<ColumnDef<TableDataProps>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }: { table: TableType<TableDataProps> }) => {
          const ref = useRef<HTMLInputElement>(null);

          useEffect(() => {
            if (ref.current) {
              const isIndeterminate = table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected();
              ref.current.indeterminate = isIndeterminate;
            }
          }, [table.getIsSomeRowsSelected(), table.getIsAllRowsSelected()]);

          return (
            <Form.Check
              type="checkbox"
              ref={ref}
              checked={table.getIsAllRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          );
        },
        cell: ({ row }: { row: Row<TableDataProps> }) => (
          <Form.Check
            type="checkbox"
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
          />
        )
      },
      { header: 'Name', accessorKey: 'fullName' },
      { header: 'Email', accessorKey: 'email' },
      { header: 'Age', accessorKey: 'age', meta: { className: 'text-end' } },
      { header: 'Status', accessorKey: 'status', cell: (cell) => <StatusPill status={cell.getValue() as string} /> },
      {
        header: 'Profile Progress',
        accessorKey: 'progress',
        cell: ({ getValue }) => <LinearWithLabel value={getValue<number>()} />
      }
    ],
    []
  );

  return <ReactTable {...{ data, columns, title }} />;
}
