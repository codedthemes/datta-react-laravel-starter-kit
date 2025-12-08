import { useEffect, useMemo, useState } from 'react';

// react-bootstrap
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';

// third-party
import { flexRender, useReactTable, ColumnDef, getCoreRowModel, getPaginationRowModel, getFilteredRowModel } from '@tanstack/react-table';
import { LabelKeyObject } from 'react-csv/lib/core';

// project-imports
import MainCard from '@/components/MainCard';
import LinearWithLabel from '@/components/@extended/progress/LinearWithLabel';
import makeData from '@/data/react-table';
import {
  CSVExport,
  DebouncedInput,
  SortingData,
  StatusPill,
  TablePagination,
  SelectColumnVisibility
} from '@/components/third-party/react-table';
import { getImageUrl, ImagePath } from '@/utils/getImageUrl';

// types
import { TableDataProps } from '@/types/table';

interface ReactTableProps {
  columns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
  title: string;
}

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, title }: ReactTableProps) {
  const [columnVisibility, setColumnVisibility] = useState({});
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: { columnVisibility, globalFilter },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true
  });

  useEffect(() => setColumnVisibility({ id: false, role: false, contact: false, country: false }), []);

  const headers: LabelKeyObject[] = [];
  table.getAllColumns().map((column) => {
    const accessorKey = (column.columnDef as { accessorKey?: string }).accessorKey;
    headers.push({
      label: typeof column.columnDef.header === 'string' ? column.columnDef.header : '#',
      key: accessorKey ?? ''
    });
  });

  return (
    <MainCard
      title={title}
      secondary={
        <Stack direction="horizontal" gap={2} className="justify-content-center flex-wrap">
          <SelectColumnVisibility
            {...{
              getVisibleLeafColumns: table.getVisibleLeafColumns,
              getIsAllColumnsVisible: table.getIsAllColumnsVisible,
              getToggleAllColumnsVisibilityHandler: table.getToggleAllColumnsVisibilityHandler,
              getAllColumns: table.getAllColumns
            }}
          />
          <CSVExport {...{ data, headers, filename: 'column-visibility.csv' }} />
        </Stack>
      }
      className="table-card"
    >
      {/* toolbar */}
      <Stack direction="horizontal" className="justify-content-between align-items-center flex-wrap p-4" gap={2}>
        <SortingData getState={table.getState} setPageSize={table.setPageSize} />
        <div className="datatable-search">
          <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
        </div>
      </Stack>

      {/* table */}
      <Table responsive hover className="mb-0 border-top">
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
                <td key={cell.id} {...cell.column.columnDef.meta}>
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

// ==============================|| REACT TABLE - COLUMN VISIBILITY ||============================== //

export default function ColumnVisibility({ title }: { title: string }) {
  const data: TableDataProps[] = makeData(10);

  const columns = useMemo<ColumnDef<TableDataProps>[]>(
    () => [
      { header: '#', accessorKey: 'id', title: 'Id' },
      {
        header: 'Avatar',
        accessorKey: 'avatar',
        cell: (cell) => (
          <Image
            className="avatar avatar-xs"
            alt={`Avatar ${cell.getValue()}`}
            src={getImageUrl(`avatar-${cell.getValue()}.png`, ImagePath.USER)}
          />
        )
      },
      { header: 'Name', accessorKey: 'fullName', meta: { className: 'text-nowrap' } },
      { header: 'Email', accessorKey: 'email' },
      { header: 'Age', accessorKey: 'age', meta: { className: 'text-end' } },
      { header: 'Role', accessorKey: 'role' },
      { header: 'Contact', accessorKey: 'contact' },
      { header: 'Country', accessorKey: 'country' },
      { header: 'Visits', accessorKey: 'visits', meta: { className: 'text-end' } },
      { header: 'Status', accessorKey: 'status', cell: (cell) => <StatusPill status={cell.getValue() as string} /> },
      {
        header: 'Profile Progress',
        accessorKey: 'progress',
        cell: (cell) => <LinearWithLabel value={cell.getValue() as number} />
      }
    ],
    []
  );

  return <ReactTable {...{ columns, data, title }} />;
}
