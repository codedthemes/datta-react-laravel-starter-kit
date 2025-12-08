import { CSSProperties, useMemo, useState } from 'react';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import { DndContext, closestCenter, useSensor, useSensors, TouchSensor, DragEndEvent, MouseSensor, KeyboardSensor } from '@dnd-kit/core';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import { arrayMove, horizontalListSortingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Cell,
  ColumnDef,
  ColumnOrderState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  Header,
  useReactTable
} from '@tanstack/react-table';
import { LabelKeyObject } from 'react-csv/lib/core';

// project-imports
import MainCard from '@/components/MainCard';
import LinearWithLabel from '@/components/@extended/progress/LinearWithLabel';
import makeData from '@/data/react-table';
import useConfig from '@/hooks/useConfig';
import { ThemeDirection } from '@/config';
import { CSVExport, DebouncedInput, SortingData, StatusPill, TablePagination } from '@/components/third-party/react-table';

// types
import { TableDataProps } from '@/types/table';

interface ReactTableProps {
  defaultColumns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
  title: string;
}

interface ColumnMeta {
  className?: string;
}

// ==============================|| DRAGGABLE HEADER ||============================== //

function DraggableTableHeader({ header, className }: { header: Header<TableDataProps, unknown>; className?: string }) {
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

  return (
    <th colSpan={header.colSpan} ref={setNodeRef} style={style} {...header.column.columnDef.meta}>
      {header.isPlaceholder ? null : (
        <div {...attributes} {...listeners} style={{ cursor: isDragging ? 'grabbing' : 'grab' }} className={`${className}`}>
          {flexRender(header.column.columnDef.header, header.getContext())}
        </div>
      )}
    </th>
  );
}

// ==============================|| DRAGGABLE CELL ||============================== //

function DragAlongCell({ cell }: { cell: Cell<TableDataProps, unknown> }) {
  const { isDragging, setNodeRef, transform } = useSortable({
    id: cell.column.id
  });

  const style: CSSProperties = {
    opacity: isDragging ? 0.7 : 1,
    position: 'relative',
    transform: CSS.Translate.toString(transform),
    transition: 'width transform 0.2s ease-in-out',
    zIndex: isDragging ? 1 : 0
  };

  return (
    <td style={style} ref={setNodeRef} {...cell.column.columnDef.meta}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
}

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ defaultColumns, data, title }: ReactTableProps) {
  const [columns] = useState(() => [...defaultColumns]);
  const [globalFilter, setGlobalFilter] = useState('');

  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(
    columns.map((column) => column.id as string) // must start out with populated columnOrder so we can splice
  );

  const table = useReactTable({
    data,
    columns,
    state: { columnOrder, globalFilter },
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true
  });

  const headers: LabelKeyObject[] = [];
  table.getAllColumns().map((column) => {
    const accessorKey = (column.columnDef as { accessorKey?: string }).accessorKey;
    headers.push({
      label: typeof column.columnDef.header === 'string' ? column.columnDef.header : '#',
      key: accessorKey ?? ''
    });
  });

  const sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {}));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setColumnOrder((columnOrder) => {
        const oldIndex = columnOrder.indexOf(active.id as string);
        const newIndex = columnOrder.indexOf(over.id as string);
        return arrayMove(columnOrder, oldIndex, newIndex);
      });
    }
  }

  return (
    <MainCard title={title} className="mb-0 table-card" secondary={<CSVExport {...{ data, headers, filename: 'column-dragable.csv' }} />}>
      <Stack direction="horizontal" className="justify-content-between align-items-center flex-wrap p-4" gap={2}>
        <SortingData getState={table.getState} setPageSize={table.setPageSize} />
        <div className="datatable-search">
          <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
        </div>
      </Stack>

      <DndContext collisionDetection={closestCenter} modifiers={[restrictToHorizontalAxis]} onDragEnd={handleDragEnd} sensors={sensors}>
        <Table responsive hover className="mb-0 border-top">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                <SortableContext items={columnOrder} strategy={horizontalListSortingStrategy}>
                  {headerGroup.headers.map((header) => (
                    <DraggableTableHeader
                      key={header.id}
                      header={header}
                      className={`${(header.column.columnDef.meta as ColumnMeta)?.className}`}
                    />
                  ))}
                </SortableContext>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <SortableContext key={cell.id} items={columnOrder} strategy={horizontalListSortingStrategy}>
                    <DragAlongCell key={cell.id} cell={cell} />
                  </SortableContext>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </DndContext>

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

// ==============================|| DRAG & DROP - COLUMN DRAG & DROP TABLE ||============================== //

export default function ColumnDragDrop({ title }: { title: string }) {
  const data = useMemo(() => makeData(10), []);

  const { themeDirection } = useConfig();

  const defaultColumns: ColumnDef<TableDataProps>[] = [
    { id: 'fullName', header: 'Name', accessorKey: 'fullName', meta: { className: 'text-nowrap' } },
    { id: 'email', header: 'Email', accessorKey: 'email' },
    { id: 'age', header: 'Age', accessorKey: 'age', meta: { className: 'text-end' } },
    { id: 'role', header: 'Role', accessorKey: 'role' },
    { id: 'visits', header: 'Visits', accessorKey: 'visits', meta: { align: themeDirection === ThemeDirection.RTL ? 'left' : 'right' } },
    { id: 'status', header: 'Status', accessorKey: 'status', cell: (cell) => <StatusPill status={cell.getValue() as string} /> },
    {
      id: 'progress',
      header: 'Profile Progress',
      accessorKey: 'progress',
      cell: (props) => <LinearWithLabel value={props.getValue() as number} />
    }
  ];

  return <ReactTable {...{ defaultColumns, data, title }} />;
}
