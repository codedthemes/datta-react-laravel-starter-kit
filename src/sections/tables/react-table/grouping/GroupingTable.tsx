import { useMemo, useRef, useState } from 'react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
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

// project-imports
import MainCard from 'components/MainCard';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import TablePagination from 'components/third-party/react-table/Pagination';
import SortingData from 'components/third-party/react-table/SortingData';
import DebouncedInput from 'components/third-party/react-table/DebouncedInput';
import makeData from 'data/react-table';

// types
import { TableDataProps } from 'types/table';

// assets
import { Command, TableDocument } from 'iconsax-react';

interface ReactTableProps {
  columns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
}

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data }: ReactTableProps) {
  const [grouping, setGrouping] = useState<GroupingState>(['age']);
  const [globalFilter, setGlobalFilter] = useState('');

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

  return (
    <MainCard title="Grouping">
      <Stack direction="horizontal" className="justify-content-between align-items-center pb-4 ">
        <SortingData getState={table.getState} setPageSize={table.setPageSize} />
        <div className="datatable-search">
          <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
        </div>
      </Stack>
      <div ref={tableContainerRef}>
        <Table hover responsive className="mb-0">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const isRightAligned = ['age', 'visits'].includes(header.column.id);

                  return (
                    <th key={header.id} style={{ textAlign: isRightAligned ? 'right' : 'left' }}>
                      <Stack direction="horizontal" className={` ${isRightAligned ? 'justify-content-end' : ''}`}>
                        {header.column.getCanGroup() && (
                          <div onClick={header.column.getToggleGroupingHandler()} className="me-2">
                            {header.column.getIsGrouped() ? (
                              <TableDocument size={16} className="text-danger" />
                            ) : (
                              <Command size={16} className="text-primary" />
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
                <td style={{ height: `${paddingTop}px` }} colSpan={columns.length}></td>
              </tr>
            )}
            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index] as TableRowType<TableDataProps>;
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    let bgColor = '';
                    if (cell.getIsGrouped()) bgColor = '#e6f4ff';
                    if (cell.getIsAggregated()) bgColor = 'lightyellow';
                    if (cell.getIsPlaceholder()) bgColor = '#fff1f0';

                    return (
                      <td key={cell.id} style={{ backgroundColor: bgColor }}>
                        {cell.getIsGrouped() ? (
                          <Stack direction="horizontal" className="align-items-center justify-content-end">
                            <div className="mr-8 cursor-pointer" onClick={row.getToggleExpandedHandler()}>
                              {row.getIsExpanded() ? <i className="ti ti-chevron-down" /> : <i className="ti ti-chevron-right" />}
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
                <td style={{ height: `${paddingBottom}px` }} colSpan={columns.length}></td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
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

// ==============================|| GROUPING TABLE ||============================== //

export default function GroupingTable() {
  const data: TableDataProps[] = makeData(100);

  const columns = useMemo<ColumnDef<TableDataProps>[]>(
    () => [
      {
        header: 'Name',
        accessorKey: 'fullName',
        enableGrouping: false
      },
      {
        header: 'Email',
        accessorKey: 'email',
        enableGrouping: false
      },
      {
        header: 'Age',
        accessorKey: 'age'
      },
      {
        header: 'Visits',
        accessorKey: 'visits',
        enableGrouping: false,
        meta: {
          className: 'text-end'
        }
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (cell) => {
          switch (cell.getValue()) {
            case 'Complicated':
              return <Badge bg="light-danger">Complicated</Badge>;
            case 'Relationship':
              return <Badge bg="light-success">Relationship</Badge>;
            case 'Single':
            default:
              return <Badge bg="light-info">Single</Badge>;
          }
        }
      },
      {
        header: 'Profile Progress',
        accessorKey: 'progress',
        cell: (props) => <LinearWithLabel value={props.getValue() as number} />,
        enableGrouping: false
      }
    ],
    []
  );

  return <ReactTable {...{ data, columns }} />;
}
