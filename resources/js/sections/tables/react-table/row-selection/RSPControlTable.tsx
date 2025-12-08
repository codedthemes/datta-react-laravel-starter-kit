import { useEffect, useMemo, useRef, useState } from 'react';

// react-bootstrap
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import { ColumnDef, useReactTable, flexRender, getCoreRowModel, Row, Table as TableType, PaginationState } from '@tanstack/react-table';
import { keepPreviousData, useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LabelKeyObject } from 'react-csv/lib/core';

// project-imports
import MainCard from '@/components/MainCard';
import makeData from '@/data/react-table';
import LinearWithLabel from '@/components/@extended/progress/LinearWithLabel';
import { CSVExport, DebouncedInput, StatusPill, SortingData, TablePagination } from '@/components/third-party/react-table';

// types
import { TableDataProps } from '@/types/table';

const queryClient = new QueryClient();

async function fetchData(options: { pageIndex: number; pageSize: number }) {
  // simulate some network latency
  await new Promise((r) => setTimeout(r, 500));

  const data = makeData(100);

  return {
    rows: data.slice(options.pageIndex * options.pageSize, (options.pageIndex + 1) * options.pageSize),
    pageCount: Math.ceil(data.length / options.pageSize)
  };
}

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ title }: { title: string }) {
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

  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState('');

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 });

  const defaultData = useMemo(() => [], []);

  const pagination = useMemo(() => ({ pageIndex, pageSize }), [pageIndex, pageSize]);

  const fetchDataOptions = { pageIndex, pageSize };

  const { data } = useQuery({
    queryKey: ['data', fetchDataOptions],
    queryFn: () => fetchData(fetchDataOptions),
    placeholderData: keepPreviousData
  });

  const table = useReactTable({
    data: data?.rows ?? defaultData,
    columns,
    pageCount: data?.pageCount ?? -1,
    state: { pagination, rowSelection },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: true
  });

  useEffect(() => setRowSelection({ 1: true, 5: true, 7: true }), []);

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
      title={
        <Stack direction="horizontal" className="align-items-center justify-content-between">
          <h5 className="mb-0">{title}</h5>
          <CSVExport
            {...{
              data:
                table.getSelectedRowModel().flatRows.map((row) => row.original).length === 0
                  ? table.getRowModel().rows.map((row) => row.original)
                  : table.getSelectedRowModel().flatRows.map((row) => row.original),
              headers,
              filename: 'rsp-control.csv'
            }}
          />
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
      <Table hover responsive className="mb-0 border-top">
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
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
        totalEntries={100}
      />
    </MainCard>
  );
}

// ==============================|| ROW SELECTION - RSP CONTROL TABLE ||============================== //

export default function RSPControl({ title }: { title: string }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactTable {...{ title }} />
    </QueryClientProvider>
  );
}
