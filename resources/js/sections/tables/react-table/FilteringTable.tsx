import { useMemo, useState } from 'react';

// react-bootstrap
import Table from 'react-bootstrap/Table';

// third-party
import {
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedMinMaxValues,
  getFacetedUniqueValues,
  flexRender,
  useReactTable,
  ColumnDef,
  ColumnFiltersState,
  HeaderGroup,
  FilterFn,
  SortingFn,
  sortingFns
} from '@tanstack/react-table';
import { LabelKeyObject } from 'react-csv/lib/core';
import { compareItems, rankItem, RankingInfo } from '@tanstack/match-sorter-utils';

// project-imports
import LinearWithLabel from '@/components/@extended/progress/LinearWithLabel';
import MainCard from '@/components/MainCard';
import makeData from '@/data/react-table';
import { CSVExport, EmptyTable, Filter, StatusPill } from '@/components/third-party/react-table';

// types
import { TableDataProps } from '@/types/table';

export const fuzzyFilter: FilterFn<TableDataProps> = (row, columnId, value, addMeta) => {
  // rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // store the ranking info
  addMeta(itemRank);

  // return if the item should be filtered in/out
  return itemRank.passed;
};

export const fuzzySort: SortingFn<TableDataProps> = (rowA, rowB, columnId) => {
  let dir = 0;

  // only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(rowA.columnFiltersMeta[columnId]! as RankingInfo, rowB.columnFiltersMeta[columnId]! as RankingInfo);
  }

  // provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

interface ReactTableProps {
  columns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
  title: string;
}

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, title }: ReactTableProps) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: { columnFilters, globalFilter },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter
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
      secondary={<CSVExport {...{ data: table.getRowModel().rows.map((d) => d.original), headers, filename: 'filtering.csv' }} />}
      className="table-card"
      bodyClassName="pb-0"
    >
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

        <thead>
          {table.getHeaderGroups().map((headerGroup: HeaderGroup<any>) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <td key={header.id} {...header.column.columnDef.meta}>
                  {header.column.getCanFilter() && <Filter column={header.column} table={table} />}
                </td>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} {...cell.column.columnDef.meta}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={table.getAllColumns().length}>
                <EmptyTable msg="No Data" themeMode="light" />
              </td>
            </tr>
          )}
        </tbody>

        <tfoot className="footer-bg">
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((footer) => {
                return (
                  <td key={footer.id} {...footer.column.columnDef.meta}>
                    {footer.isPlaceholder ? null : flexRender(footer.column.columnDef.header, footer.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tfoot>
      </Table>
    </MainCard>
  );
}

// ==============================|| FILTERING TABLE ||============================== //

export default function FilteringTable({ title }: { title: string }) {
  const data: TableDataProps[] = useMemo(() => makeData(10), []);

  const columns = useMemo<ColumnDef<TableDataProps>[]>(
    () => [
      { header: 'Name', footer: 'Name', accessorKey: 'fullName', meta: { className: 'text-nowrap' } },
      { header: 'Email', footer: 'Email', accessorKey: 'email' },
      {
        header: 'Role',
        footer: 'Role',
        accessorKey: 'role',
        filterFn: fuzzyFilter,
        sortingFn: fuzzySort,
        meta: { className: 'text-nowrap' }
      },
      {
        header: 'Age',
        footer: 'Age',
        accessorKey: 'age',
        meta: {
          className: 'text-end'
        }
      },
      {
        header: 'Visits',
        footer: 'Visits',
        accessorKey: 'visits',
        meta: {
          className: 'text-end'
        }
      },
      { header: 'Status', footer: 'Status', accessorKey: 'status', cell: (cell) => <StatusPill status={cell.getValue() as string} /> },
      {
        header: 'Profile Progress',
        footer: 'Profile Progress',
        accessorKey: 'progress',
        cell: ({ getValue }) => <LinearWithLabel value={getValue<number>()} />
      }
    ],
    []
  );

  return <ReactTable {...{ data, columns, title }} />;
}
