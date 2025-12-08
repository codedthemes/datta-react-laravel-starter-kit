import { useMemo, useRef, useState } from 'react';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import {
  useReactTable,
  ColumnDef,
  flexRender,
  GroupingState,
  getGroupedRowModel,
  getExpandedRowModel,
  getCoreRowModel,
  Row as TableRowType,
  getPaginationRowModel,
  getFilteredRowModel
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { LabelKeyObject } from 'react-csv/lib/core';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
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

interface ColumnMeta {
  className: string;
}

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, title }: ReactTableProps) {
  const [grouping, setGrouping] = useState<GroupingState>(['age']);

  const [globalFilter, setGlobalFilter] = useState('');

  const { themeDirection } = useConfig();

  const table = useReactTable({
    data,
    columns,
    state: { grouping, globalFilter },
    onGroupingChange: setGrouping,
    getExpandedRowModel: getExpandedRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true
  });

  const tableContainerRef = useRef<HTMLDivElement>(null);
  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 34,
    overscan: 10
  });

  const virtualRows = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();

  const paddingTop = virtualRows.length > 0 ? virtualRows[0]?.start || 0 : 0;
  const paddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows[virtualRows.length - 1]?.end || 0) : 0;

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
      secondary={<CSVExport {...{ data: table.getGroupedRowModel().rows.map((row) => row.original), headers, filename: 'grouping.csv' }} />}
      className="table-card"
    >
      {/* toolbar */}
      <Stack direction="horizontal" className="justify-content-between flex-wrap align-items-center p-4" gap={2}>
        <SortingData getState={table.getState} setPageSize={table.setPageSize} />
        <div className="datatable-search">
          <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
        </div>
      </Stack>

      {/* table */}
      <div ref={tableContainerRef}>
        <Table hover responsive className="mb-0 border-top">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const meta = header.column.columnDef.meta as ColumnMeta | undefined;

                  return (
                    <th key={header.id} style={{ textAlign: meta?.className?.includes('text-end') ? 'right' : 'left' }}>
                      <Stack
                        direction="horizontal"
                        className={
                          meta?.className?.includes('text-end')
                            ? themeDirection === 'rtl'
                              ? 'justify-content-start'
                              : 'justify-content-end'
                            : undefined
                        }
                      >
                        {header.column.getCanGroup() && (
                          <div onClick={header.column.getToggleGroupingHandler()} className="me-2">
                            {header.column.getIsGrouped() ? (
                              <i className="ti ti-article text-danger f-18" />
                            ) : (
                              <i className="ti ti-command text-primary f-18" />
                            )}
                          </div>
                        )}
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </Stack>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          <tbody>
            {paddingTop > 0 && (
              <tr>
                <td style={{ height: `${paddingTop}px` }} colSpan={columns.length} />
              </tr>
            )}
            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index] as TableRowType<TableDataProps>;
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    let bgColor = '';
                    let textColor = '';
                    if (cell.getIsGrouped()) {
                      ((bgColor = '#e6f4ff'), (textColor = '#000'));
                    }
                    if (cell.getIsAggregated()) {
                      ((bgColor = 'lightyellow'), (textColor = '#000'));
                    }
                    if (cell.getIsPlaceholder()) {
                      ((bgColor = '#fff1f0'), (textColor = '#000'));
                    }
                    const columnMetaClass = (cell.column.columnDef.meta as ColumnMeta)?.className ?? '';
                    return (
                      <td key={cell.id} style={{ backgroundColor: bgColor, color: textColor }} className={columnMetaClass}>
                        {cell.getIsGrouped() ? (
                          <Stack direction="horizontal" className="align-items-center justify-content-end" gap={1}>
                            <div className="avatar avatar-xxs cursor-pointer" onClick={row.getToggleExpandedHandler()}>
                              {row.getIsExpanded() ? <i className="ti ti-chevron-down f-18" /> : <i className="ti ti-chevron-right f-18" />}
                            </div>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())} ({row.subRows.length})
                          </Stack>
                        ) : cell.getIsAggregated() ? (
                          flexRender(cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell, cell.getContext())
                        ) : cell.getIsPlaceholder() ? null : (
                          flexRender(cell.column.columnDef.cell, cell.getContext())
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            {paddingBottom > 0 && (
              <tr>
                <td style={{ height: `${paddingBottom}px` }} colSpan={columns.length} />
              </tr>
            )}
          </tbody>
        </Table>
      </div>

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

// ==============================|| GROUPING TABLE ||============================== //

export default function GroupingTable({ title }: { title: string }) {
  const data: TableDataProps[] = makeData(100);

  const columns = useMemo<ColumnDef<TableDataProps>[]>(
    () => [
      { header: 'Name', accessorKey: 'fullName', enableGrouping: false, meta: { className: 'text-nowrap' } },
      { header: 'Email', accessorKey: 'email', enableGrouping: false },
      { header: 'Age', accessorKey: 'age', meta: { className: 'text-end' } },
      { header: 'Visits', accessorKey: 'visits', enableGrouping: false, meta: { className: 'text-end' } },
      { header: 'Status', accessorKey: 'status', cell: (cell) => <StatusPill status={cell.getValue() as string} /> },
      {
        header: 'Profile Progress',
        accessorKey: 'progress',
        cell: (cell) => <LinearWithLabel value={cell.getValue() as number} />,
        enableGrouping: false
      }
    ],
    []
  );

  return <ReactTable {...{ data, columns, title }} />;
}
