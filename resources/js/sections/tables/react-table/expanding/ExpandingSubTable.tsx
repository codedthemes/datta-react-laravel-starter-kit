import { Fragment, useEffect, useMemo, useState } from 'react';

// react-bootstrap
import Image from 'react-bootstrap/Image';
import Placeholder from 'react-bootstrap/Placeholder';
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
import LinearWithLabel from '@/components/@extended/progress/LinearWithLabel';
import MainCard from '@/components/MainCard';
import makeData from '@/data/react-table';
import mockData from '@/utils/mock-data';
import { getImageUrl, ImagePath } from '@/utils/getImageUrl';
import { CSVExport, StatusPill } from '@/components/third-party/react-table';

// types
import { TableDataProps } from '@/types/table';

interface ReactTableProps {
  columns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
  loading?: boolean;
}

const numRows = mockData(1);

// ==============================|| RENDER - SUB TABLE ||============================== //

function RenderSubComponent({ row }: { row: Row<TableDataProps> }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<[]>([]);

  const columns = useMemo<ColumnDef<TableDataProps>[]>(
    () => [
      {
        header: 'Avatar',
        accessorKey: 'avatar',
        cell: (cell) => (
          <Image
            alt="Avatar 1"
            src={getImageUrl(`avatar-${cell.getValue()}.png`, ImagePath.USER)}
            className="rounded-circle"
            width={'32px'}
            height={'32px'}
          />
        ),
        meta: { align: 'center' }
      },
      { header: 'Name', accessorKey: 'fullName' },
      { header: 'Email', accessorKey: 'email' },
      { header: 'Role', accessorKey: 'role' },
      { header: 'Country', accessorKey: 'country' },
      { header: 'Contact', accessorKey: 'contact', meta: { align: 'right' } }
    ],
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(makeData(numRows.number.status(1, 5)));
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const userData = row.original;

  const headers: LabelKeyObject[] = [];
  columns.forEach((column) => {
    const accessorKey = (column as { accessorKey?: string }).accessorKey;
    if (accessorKey) {
      headers.push({
        label: typeof column.header === 'string' ? column.header : '#',
        key: accessorKey ?? ''
      });
    }
  });

  return (
    <MainCard
      title={`${userData.fullName}'s Employee List`}
      secondary={<CSVExport {...{ data, headers, filename: 'expanding-sub-data.csv' }} />}
      content={false}
    >
      <ReactTable {...{ columns, data, loading }} />
    </MainCard>
  );
}

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ data, columns, loading }: ReactTableProps) {
  const table = useReactTable({
    data,
    columns,
    getRowCanExpand: () => true,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  if (loading) {
    return (
      <Table responsive className="border-top">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {Array.from({ length: 3 }).map((_, rowIdx) => (
            <tr key={rowIdx}>
              {Array.from({ length: 6 }).map((_, colIdx) => (
                <td key={colIdx}>
                  <Placeholder className="w-100 h-100 bg-secondary-200" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  return (
    <Table responsive className="border-top">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <Fragment key={row.id}>
            <tr>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
            {row.getIsExpanded() && (
              <tr>
                <td colSpan={row.getVisibleCells().length} className="bg-light">
                  <RenderSubComponent {...{ row }} />
                </td>
              </tr>
            )}
          </Fragment>
        ))}
      </tbody>
    </Table>
  );
}

// ==============================|| EXPANDING - EXPANDING SUB TABLE ||============================== //

export default function ExpandingSubTablePage({ title }: { title: string }) {
  const data: TableDataProps[] = makeData(50);

  const columns = useMemo<ColumnDef<TableDataProps>[]>(
    () => [
      {
        id: 'expander',
        header: () => null,
        cell: ({ row }: { row: Row<TableDataProps> }) => (
          <i
            className={`ti ${row.getIsExpanded() ? 'ti-chevron-down' : 'ti-chevron-right'} fs-5 cursor-pointer`}
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
        cell: ({ getValue }: CellContext<TableDataProps, number>) => <LinearWithLabel value={getValue()} />
      }
    ],
    []
  );

  return (
    <MainCard title={title} secondary={<CSVExport data={data} filename="expanding-sub-data.csv" />} className="table-card">
      <ReactTable columns={columns} data={data} />
    </MainCard>
  );
}
