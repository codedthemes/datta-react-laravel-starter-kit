import { Dispatch, SetStateAction, useMemo, useState } from 'react';

// react-bootstrap
import Table from 'react-bootstrap/Table';

// project-imports
import MainCard from '@/components/MainCard';
import makeData from '@/data/react-table';
import { CSVExport, EditCell } from '@/components/third-party/react-table';

// third party
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { LabelKeyObject } from 'react-csv/lib/core';

// types
import { TableDataProps } from '@/types/table';

interface ReactTableProps {
  columns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
  setData: Dispatch<SetStateAction<TableDataProps[]>>;
  title?: string;
}

// =============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, setData, title }: ReactTableProps) {
  const table = useReactTable<TableDataProps>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
      secondary={
        <CSVExport {...{ data: table.getRowModel().flatRows.map((row) => row.original), headers, filename: 'editable-cell.csv' }} />
      }
      className="table-card"
    >
      {/* table */}
      <Table hover responsive className="mb-0">
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <EditCell
                  key={cell.id}
                  cell={cell}
                  onSave={(updatedValue) => {
                    setData((prevData) =>
                      prevData.map((item) => (item.id === row.original.id ? { ...item, [cell.column.id]: updatedValue } : item))
                    );
                  }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </MainCard>
  );
}

// ==============================|| EDIT TABLE - EDITABLE CELL ||============================== //

export default function EditableCellTable({ title }: { title: string }) {
  const [data, setData] = useState<TableDataProps[]>(() => makeData(10));

  const columns = useMemo<ColumnDef<TableDataProps>[]>(
    () => [
      { header: 'Name', accessorKey: 'fullName', dataType: 'text', meta: { className: 'text-nowrap' } },
      { header: 'Email', accessorKey: 'email', dataType: 'text' },
      { header: 'Age', accessorKey: 'age', dataType: 'number', meta: { className: 'text-end' } },
      { header: 'Visits', accessorKey: 'visits', dataType: 'number', meta: { className: 'text-end' } },
      { header: 'Status', accessorKey: 'status', dataType: 'select' },
      { header: 'Profile Progress', accessorKey: 'progress', dataType: 'progress' }
    ],
    []
  );

  return <ReactTable {...{ data, columns, setData, title }} />;
}
