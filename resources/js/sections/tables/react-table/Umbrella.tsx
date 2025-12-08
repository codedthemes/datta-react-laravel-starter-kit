import { useEffect, useMemo, useState, Fragment, CSSProperties, ReactNode } from 'react';

// react-bootstrap
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';

// third party
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  type DragEndEvent,
  type UniqueIdentifier,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import { restrictToHorizontalAxis, restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, horizontalListSortingStrategy, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { compareItems, rankItem, RankingInfo } from '@tanstack/match-sorter-utils';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedMinMaxValues,
  getFacetedUniqueValues,
  getPaginationRowModel,
  getSortedRowModel,
  getGroupedRowModel,
  getExpandedRowModel,
  flexRender,
  useReactTable,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  GroupingState,
  FilterFn,
  SortingFn,
  sortingFns,
  Header,
  Row
} from '@tanstack/react-table';
import { LabelKeyObject } from 'react-csv/lib/core';

// project-imports

import {
  CSVExport,
  DebouncedInput,
  EmptyTable,
  EditRow,
  Filter,
  HeaderSort,
  IndeterminateCheckbox,
  RowSelection,
  SelectColumnVisibility,
  SortingData,
  TablePagination
} from '@/components/third-party/react-table';

import ExpandingUserDetail from '@/sections/tables/react-table/expanding/ExpandingUserDetailsTable';
import MainCard from '@/components/MainCard';
import makeData from '@/data/react-table';
import useConfig from '@/hooks/useConfig';

// types
import { TableDataProps } from '@/types/table';

interface ColumnMeta {
  className: string;
}

const fuzzyFilter: FilterFn<TableDataProps> = (row, columnId, value, addMeta) => {
  // rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // store the ranking info
  addMeta(itemRank);

  // return if the item should be filtered in/out
  return itemRank.passed;
};

const fuzzySort: SortingFn<TableDataProps> = (rowA, rowB, columnId) => {
  let dir = 0;

  // only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(rowA.columnFiltersMeta[columnId]! as RankingInfo, rowB.columnFiltersMeta[columnId]! as RankingInfo);
  }

  // provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

const nonOrderableColumnId: UniqueIdentifier[] = ['drag-handle', 'expander', 'select'];

// ==============================|| REACT TABLE - DRAGGABLE HEADER ||============================== //

function DraggableTableCell({ header }: { header: Header<TableDataProps, unknown> }) {
  const { themeDirection } = useConfig();

  const { attributes, isDragging, listeners, setNodeRef, transform } = useSortable({
    id: header.column.id
  });

  const style: CSSProperties = {
    opacity: isDragging ? 0.7 : 1,
    position: 'relative',
    transform: CSS.Translate.toString(transform),
    transition: 'width transform 0.2s ease-in-out',
    whiteSpace: 'nowrap',
    width: header.column.getSize(),
    zIndex: isDragging ? 1 : 0
  };

  const meta = header.column.columnDef.meta as ColumnMeta | undefined;

  return (
    <th colSpan={header.colSpan} ref={setNodeRef} style={style} {...header.column.columnDef.meta}>
      {header.isPlaceholder ? null : (
        <Stack direction="horizontal" gap={1} className="align-items-center">
          {header.column.getCanGroup() && (
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
              <div
                {...(!nonOrderableColumnId.includes(header.id) && {
                  ...attributes,
                  ...listeners,
                  sx: { cursor: isDragging ? 'grabbing' : 'grab' }
                })}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </div>
              {header.column.getCanSort() && <HeaderSort column={header.column} sort />}
            </Stack>
          )}
        </Stack>
      )}
    </th>
  );
}

// ==============================|| REACT TABLE - DRAGGABLE ROW ||============================== //

function DraggableRow({ children, row, groupedColumns }: { children: ReactNode; row: Row<TableDataProps>; groupedColumns: string[] }) {
  const { transform, transition, setNodeRef, isDragging, attributes, listeners, setActivatorNodeRef } = useSortable({
    id: row.original.id
  });

  const nonEditableCells = row.getVisibleCells().filter((cell) => nonOrderableColumnId.includes(cell.column.id));

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1 : 0,
    position: 'relative'
  };

  const isGrouped = groupedColumns.length > 0;

  return (
    <tr ref={setNodeRef} style={style}>
      {isGrouped && <td colSpan={groupedColumns.length} className="bg-red-100" />}
      {nonEditableCells.map((cell) => {
        if (cell.column.id === 'drag-handle') {
          if (!isGrouped) {
            return (
              <td key={cell.id} className="wid-60">
                <div ref={setActivatorNodeRef} {...listeners} {...attributes}>
                  <i
                    {...attributes}
                    {...listeners}
                    className="ti ti-drag-drop-2 text-secondary f-18 wid-25 hei-25 f-16"
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                  />
                </div>
              </td>
            );
          } else {
            return null;
          }
        }

        return (
          <td key={cell.id} {...cell.column.columnDef.meta}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
      {children}
    </tr>
  );
}

// ==============================|| REACT TABLE - EXPANDER BUTTON ||============================== //

function ExpanderButton({ row }: { row: Row<TableDataProps> }) {
  return (
    <i
      className={`${row.getIsExpanded() ? 'ti ti-chevron-down text-primary' : 'ti ti-chevron-right text-secondary'} fs-5 cursor-pointer`}
      onClick={row.getToggleExpandedHandler()}
    />
  );
}

// ==============================|| REACT TABLE - UMBRELLA ||============================== //

export default function UmbrellaTable() {
  const columns = useMemo<ColumnDef<TableDataProps, unknown>[]>(
    () => [
      { id: 'drag-handle', size: 60 },
      {
        id: 'expander',
        enableGrouping: false,
        header: () => null,
        cell: ({ row }) => {
          return row.getCanExpand() ? <ExpanderButton row={row} /> : <i className="ti ti-wash-dryclean-off text-secondary" />;
        },
        size: 60
      },
      {
        id: 'select',
        enableGrouping: false,
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler()
            }}
          />
        ),
        cell: ({ row }) => (
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        ),
        size: 60
      },
      {
        id: 'id',
        title: 'Id',
        header: '#',
        accessorKey: 'id',
        dataType: 'text',
        enableColumnFilter: false,
        enableGrouping: false,
        meta: {
          className: 'cell-center'
        }
      },
      {
        id: 'avatar',
        header: 'Avatar',
        accessorKey: 'avatar',
        enableColumnFilter: false,
        enableGrouping: false,
        dataType: 'avatar',
        meta: {
          className: 'cell-center'
        }
      },
      {
        id: 'fullName',
        header: 'Name',
        footer: 'Name',
        accessorKey: 'fullName',
        dataType: 'text',
        enableGrouping: false
      },
      {
        id: 'email',
        header: 'Email',
        footer: 'Email',
        accessorKey: 'email',
        dataType: 'text',
        enableGrouping: false
      },
      {
        id: 'age',
        header: 'Age',
        footer: 'Age',
        accessorKey: 'age',
        dataType: 'number',
        meta: {
          className: 'text-end'
        },
        enableGrouping: true
      },
      {
        id: 'role',
        header: 'Role',
        footer: 'Role',
        accessorKey: 'role',
        dataType: 'text',
        enableGrouping: false,
        filterFn: fuzzyFilter,
        sortingFn: fuzzySort
      },
      { id: 'contact', header: 'Contact', footer: 'Contact', accessorKey: 'contact', dataType: 'text', enableGrouping: false },
      { id: 'country', header: 'Country', footer: 'Country', accessorKey: 'country', dataType: 'text', enableGrouping: false },
      {
        id: 'visits',
        header: 'Visits',
        footer: 'Visits',
        accessorKey: 'visits',
        dataType: 'text',
        enableGrouping: false,
        meta: {
          className: 'text-end'
        }
      },
      { id: 'status', header: 'Status', footer: 'Status', accessorKey: 'status', dataType: 'select', enableGrouping: true },
      {
        id: 'progress',
        header: 'Profile Progress',
        footer: 'Profile Progress',
        accessorKey: 'progress',
        dataType: 'progress',
        enableGrouping: false
      },
      {
        id: 'actions',
        header: 'Actions',
        dataType: 'actions',
        meta: {
          className: 'text-center'
        }
      }
    ],
    []
  );

  const [data, setData] = useState(() => makeData(100));
  const [columnOrder, setColumnOrder] = useState<string[]>(() => columns.map((c) => c.id!));
  const dataIds = useMemo<UniqueIdentifier[]>(() => data?.map(({ id }: TableDataProps) => id), [data]);

  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);
  const [grouping, setGrouping] = useState<GroupingState>([]);

  const [columnVisibility, setColumnVisibility] = useState({});
  const [statusFilter, setStatusFilter] = useState<string>('');

  const filteredData = useMemo(() => {
    if (!statusFilter) return data;
    return data.filter((user: TableDataProps) => user.status === statusFilter);
  }, [statusFilter, data]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getRowId: (row) => row.id.toString(),
    state: { rowSelection, columnFilters, globalFilter, sorting, grouping, columnOrder, columnVisibility },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onGroupingChange: setGrouping,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onColumnOrderChange: setColumnOrder,
    onColumnVisibilityChange: setColumnVisibility,
    getRowCanExpand: () => true,
    getExpandedRowModel: getExpandedRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    globalFilterFn: fuzzyFilter,
    debugTable: true,
    debugHeaders: true,
    debugColumns: true
  });

  const headers: LabelKeyObject[] = [];
  table.getVisibleLeafColumns().map((column) => {
    const accessorKey = (column.columnDef as { accessorKey?: string }).accessorKey;
    headers.push({
      label: typeof column.columnDef.header === 'string' ? column.columnDef.header : '#',
      key: accessorKey ?? ''
    });
  });

  // Handle Column Drag End
  function handleColumnDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      if (nonOrderableColumnId.includes(over.id)) return;
      setColumnOrder((columnOrder) => {
        const oldIndex = columnOrder.indexOf(active.id as string);
        const newIndex = columnOrder.indexOf(over.id as string);
        return arrayMove(columnOrder, oldIndex, newIndex);
      });
    }
  }

  // Handle Row Drag End
  function handleRowDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setData((data: unknown[]) => {
        const oldIndex = dataIds.indexOf(active.id);
        const newIndex = dataIds.indexOf(over.id);
        return arrayMove(data, oldIndex, newIndex);
      });
    }
  }

  const columnSensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {}));
  const rowSensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {}));
  const groupedColumns = table.getState().grouping;

  useEffect(() => setColumnVisibility({ id: false, role: false, contact: false, country: false, progress: false }), []);

  const filteredColumns = table.getAllColumns().filter((col) => !nonOrderableColumnId.includes(col.id));

  // Ensure utility columns are visible whenever any data column is visible
  useEffect(() => {
    const anyDataColumnVisible = filteredColumns.some((col) => col.getIsVisible?.());
    if (!anyDataColumnVisible) return;

    const anyUtilityHidden = nonOrderableColumnId.some((utilityId) => table.getColumn(String(utilityId))?.getIsVisible?.() === false);
    if (!anyUtilityHidden) return;

    setColumnVisibility((prev: Record<string, boolean>) => {
      const next: Record<string, boolean> = { ...prev };
      nonOrderableColumnId.forEach((utilityId) => {
        next[utilityId as string] = true;
      });
      return next;
    });
  }, [columnVisibility, filteredColumns, table]);

  return (
    <MainCard className="table-card">
      <Stack direction="horizontal" gap={2} className="align-items-center flex-wrap justify-content-between p-4">
        <Stack direction="horizontal" gap={2} className="align-items-center">
          <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
          <SortingData getState={table.getState} setPageSize={table.setPageSize} />
        </Stack>
        <Stack direction="horizontal" gap={2} className="align-items-center justify-content-end">
          <Form.Select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="Status Filter">
            <option value="">All Status</option>
            <option value="Single">Single</option>
            <option value="Relationship">Relationship</option>
            <option value="Complicated">Complicated</option>
          </Form.Select>
          <Stack className="flex-end" direction="horizontal" gap={1}>
            <RowSelection selected={Object.keys(rowSelection).length} />
            <SelectColumnVisibility
              {...{
                getVisibleLeafColumns: table.getVisibleLeafColumns,
                getIsAllColumnsVisible: table.getIsAllColumnsVisible,
                getToggleAllColumnsVisibilityHandler: table.getToggleAllColumnsVisibilityHandler,
                getAllColumns: table.getAllColumns
              }}
            />
            <CSVExport
              {...{
                data:
                  table.getSelectedRowModel().flatRows.map((row) => row.original).length === 0
                    ? data
                    : table.getSelectedRowModel().flatRows.map((row) => row.original),
                headers,
                filename: 'umbrella.csv'
              }}
            />
          </Stack>
        </Stack>
      </Stack>

      <RowSelection selected={Object.keys(rowSelection).length} />
      {/* Column DnD Context */}
      <DndContext
        collisionDetection={closestCenter}
        modifiers={[restrictToHorizontalAxis]}
        onDragEnd={handleColumnDragEnd}
        sensors={columnSensors}
      >
        <Table hover responsive className="mb-0 border-top">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                <SortableContext items={columnOrder} strategy={horizontalListSortingStrategy}>
                  {headerGroup.headers.map((header) => {
                    if (groupedColumns.length > 0 && header.column.id === 'drag-handle') return null;

                    return <DraggableTableCell key={header.id} header={header} />;
                  })}
                </SortableContext>
              </tr>
            ))}
          </thead>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  if (groupedColumns.length > 0 && header.column.id === 'drag-handle') return null;
                  return (
                    <th key={header.id} {...header.column.columnDef.meta}>
                      {header.column.getCanFilter() && <Filter column={header.column} table={table} />}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {/* Row DnD Context */}
            <DndContext
              collisionDetection={closestCenter}
              modifiers={[restrictToVerticalAxis]}
              onDragEnd={handleRowDragEnd}
              sensors={rowSensors}
            >
              {table.getRowModel().rows.length > 0 ? (
                <SortableContext items={dataIds} strategy={verticalListSortingStrategy}>
                  {table.getRowModel().rows.map((row) => {
                    if (row.getIsGrouped()) {
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
                                      {row.getIsExpanded() ? (
                                        <i className="ti ti-chevron-down f-18" />
                                      ) : (
                                        <i className="ti ti-chevron-right f-18" />
                                      )}
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
                    } else {
                      return (
                        <Fragment key={row.id}>
                          <DraggableRow row={row} groupedColumns={groupedColumns}>
                            <EditRow
                              row={row}
                              onSave={(updatedData) => {
                                setData((prev: TableDataProps[]) =>
                                  prev.map((item: TableDataProps) => (item.id === row.original.id ? { ...item, ...updatedData } : item))
                                );
                              }}
                              groupedColumns={groupedColumns}
                            />
                          </DraggableRow>
                          {row.getIsExpanded() && !row.getIsGrouped() && (
                            <tr key={`${row.id}-expanded`}>
                              <td colSpan={table.getAllLeafColumns().length} className="p-3">
                                <ExpandingUserDetail data={row.original} />
                              </td>
                            </tr>
                          )}
                        </Fragment>
                      );
                    }
                  })}
                </SortableContext>
              ) : (
                <tr>
                  <td colSpan={table.getAllColumns().length}>
                    <EmptyTable msg="No Data" themeMode="light" />
                  </td>
                </tr>
              )}
            </DndContext>
          </tbody>

          <tfoot className="footer-bg">
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((footer) => {
                  // hide drag-handle column if table is grouped
                  if (groupedColumns.length > 0 && footer.column.id === 'drag-handle') return null;

                  return (
                    <th key={footer.id} {...footer.column.columnDef.meta}>
                      {footer.isPlaceholder ? null : flexRender(footer.column.columnDef.header, footer.getContext())}
                    </th>
                  );
                })}
              </tr>
            ))}
          </tfoot>
        </Table>
      </DndContext>

      <TablePagination
        {...{
          setPageSize: table.setPageSize,
          setPageIndex: table.setPageIndex,
          getState: table.getState,
          getPageCount: table.getPageCount,
          totalEntries: 20
        }}
      />
    </MainCard>
  );
}
