import { useMemo, useState } from 'react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import Tooltip from 'react-bootstrap/Tooltip';

// third-party
import {
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedMinMaxValues,
  getFacetedUniqueValues,
  flexRender,
  useReactTable,
  ColumnDef,
  ColumnFiltersState,
  HeaderGroup,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table';
import { PatternFormat } from 'react-number-format';

// project-imports
import MainCard from '@/components/MainCard';
import { DebouncedInput, HeaderSort, SortingData, TablePagination } from '@/components/third-party/react-table';

import makeData from '@/data/react-table';
import { getImageUrl, ImagePath } from '@/utils/getImageUrl';

// types
import { TableDataProps } from '@/types/table';

interface ReactTableProps {
  columns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
}

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data }: ReactTableProps) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: { columnFilters, globalFilter },
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    debugTable: true
  });

  return (
    <Row>
      <Col sm={12}>
        <MainCard className="table-card" title="Membership list">
          {/* toolbar */}
          <Stack direction="horizontal" className="justify-content-between align-items-center p-4 flex-wrap gap-2">
            <SortingData getState={table.getState} setPageSize={table.setPageSize} />
            <div className="datatable-search">
              <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
            </div>
          </Stack>

          {/* table */}
          <Table hover responsive className="mb-0 border-top">
            <thead>
              {table.getHeaderGroups().map((headerGroup: HeaderGroup<any>) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, index) => {
                    return (
                      <th key={index} onClick={header.column.getToggleSortingHandler()}>
                        {header.isPlaceholder ? null : (
                          <Stack direction="horizontal" className={`justify-content-between`}>
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {header.column.getCanSort() && <HeaderSort column={header.column} />}
                          </Stack>
                        )}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.map((row, index) => (
                <tr key={index}>
                  {row.getVisibleCells().map((cell, cellIndex) => (
                    <td key={cellIndex} {...cell.column.columnDef.meta}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
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
      </Col>
    </Row>
  );
}

// ==============================|| MEMBERSHIP - LIST ||============================== //

export default function StudentApply() {
  const [tableData, setTableData] = useState<TableDataProps[]>(() => makeData(100));
  const getRandomDate = (start: Date, end: Date): string => {
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split('T')[0].replace(/-/g, '/');
  };

  const handleDelete = (rowIndex: number) => {
    setTableData((prev) => prev.filter((_, i) => i !== rowIndex));
  };

  const columns = useMemo<ColumnDef<TableDataProps>[]>(() => {
    return [
      {
        header: 'Name',
        accessorKey: 'fullName',
        cell: ({ row, getValue }) => (
          <Stack direction="horizontal" gap={2} className="align-items-center">
            <Image src={getImageUrl(`avatar-${row.original.avatar}.png`, ImagePath.USER)} alt="User Avatar" className="avatar avatar-xs" />
            <h6>{getValue() as string} </h6>
          </Stack>
        )
      },
      {
        header: 'Mobile',
        accessorKey: 'contact',
        cell: ({ getValue }) => <PatternFormat displayType="text" format="+1 (###) ###-####" mask="_" defaultValue={getValue() as number} />
      },
      {
        header: 'Start Date',
        accessorKey: 'date',
        cell: ({ getValue }) => (
          <>
            {getRandomDate(new Date(2020, 0, 1), new Date(2025, 11, 31))}
            <span className="text-muted text-sm d-block">
              <PatternFormat displayType="text" format="0#:#5 PM" mask="_" defaultValue={getValue() as number} />
            </span>
          </>
        )
      },
      {
        header: 'Status',
        accessorKey: 'progress',
        cell: ({ row }) => (
          <Stack
            direction="horizontal"
            gap={1}
            className={`${row.original.progress > 50 ? 'text-success' : 'text-secondary'} align-items-center `}
          >
            <i className="ti ti-circle-filled align-baseline f-10 m-r-10" />
            {row.original.progress > 50 ? 'Active' : 'Inactive'}
          </Stack>
        )
      },
      {
        header: 'Plan',
        cell: () => {
          const plans = ['Casual', 'Addicted', 'Diehard'];
          const plan = plans[Math.floor(Math.random() * plans.length)];
          const badgeColor = plan === 'Casual' ? 'success' : plan === 'Addicted' ? 'primary' : 'warning';
          return <Badge bg={badgeColor}>{plan}</Badge>;
        }
      },
      {
        header: 'Action',
        cell: ({ row }) => (
          <Stack direction="horizontal" gap={1}>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>{'View'}</Tooltip>}>
              <a href="#" className="btn-link-secondary avatar avatar-xs mx-1">
                <i className="ti ti-eye f-20" />
              </a>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>{'Edit'}</Tooltip>}>
              <a href="#" className="btn-link-primary avatar avatar-xs mx-1">
                <i className="ti ti-edit f-20" />
              </a>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>{'Delete'}</Tooltip>}>
              <a href="#" className="btn-link-danger avatar avatar-xs mx-1" onClick={() => handleDelete(row.index)}>
                <i className="ti ti-trash f-20" />
              </a>
            </OverlayTrigger>
          </Stack>
        )
      }
    ];
  }, []);

  return <ReactTable data={tableData} columns={columns} />;
}
