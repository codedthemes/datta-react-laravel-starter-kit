import { useMemo, useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
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
import HeaderSort from 'sections/tables/react-table/sorting/HeaderSort';
import DebouncedInput from 'components/third-party/react-table/DebouncedInput';
import TablePagination from 'components/third-party/react-table/Pagination';
import SortingData from 'components/third-party/react-table/SortingData';
import MainCard from 'components/MainCard';

import makeData from 'data/react-table';
import { getImageUrl, ImagePath } from 'utils/getImageUrl';

// types
import { TableDataProps } from 'types/table';

interface LabelKeyObject {
  label: string;
  key: string;
}

interface ReactTableProps {
  columns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
}
interface ColumnMeta {
  className: string;
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
    onGlobalFilterChange: setGlobalFilter
  });

  let headers: LabelKeyObject[] = [];
  table.getAllColumns().map((column) => {
    const accessorKey = column.columnDef;

    headers.push({
      label: typeof column.columnDef.header === 'string' ? column.columnDef.header : '#',
      key: typeof accessorKey === 'string' ? accessorKey : 'unknown'
    });
  });

  return (
    <MainCard
      bodyClassName="p-0"
      title="Student list"
      secondary={
        <Stack direction="horizontal" gap={2}>
          <Button href="/online-course/student/apply" variant="outline-secondary">
            Apply Student List
          </Button>
          <Button href="/online-course/student/add">Add Student</Button>
        </Stack>
      }
    >
      <Stack direction="horizontal" className="justify-content-between align-items-center p-3">
        <SortingData getState={table.getState} setPageSize={table.setPageSize} />
        <div className="datatable-search">
          <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
        </div>
      </Stack>
      <Table hover responsive className="mb-0">
        <thead>
          {table.getHeaderGroups().map((headerGroup: HeaderGroup<any>) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => {
                return (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className={` ${index === 0 ? 'ps-24' : ''} ${index === headerGroup.headers.length - 1 ? 'pe-24' : ''}`}
                  >
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
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, cellIndex) => (
                <td
                  key={cell.id}
                  {...cell.column.columnDef.meta}
                  className={`${(cell.column.columnDef.meta as ColumnMeta)?.className} ${cellIndex === 0 ? 'ps-24' : ''} ${cellIndex === row.getVisibleCells().length - 1 ? 'pe-24' : ''}`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <hr className="m-0" />
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

// ==============================|| STUDENT - LIST ||============================== //

export default function StudentListPage() {
  const data: TableDataProps[] = useMemo(() => makeData(100), []);
  const getRandomDate = (start: Date, end: Date): string => {
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split('T')[0].replace(/-/g, '/');
  };

  const columns = useMemo<ColumnDef<TableDataProps>[]>(() => {
    const getRandomDegree = () => {
      const degrees = ['B.Tech', 'M.Tech', 'MBA', 'PhD', 'B.Sc', 'M.Sc'];
      return degrees[Math.floor(Math.random() * degrees.length)];
    };

    return [
      {
        header: 'Name',
        accessorKey: 'fullName',
        cell: ({ row, getValue }) => (
          <Stack direction="horizontal" gap={2} className="align-items-center">
            <Image src={getImageUrl(`avatar-${row.original.avatar}.jpg`, ImagePath.USER)} alt="User Avatar" className="avatar avatar-xs" />
            <h6>{getValue() as string} </h6>
          </Stack>
        )
      },
      {
        header: 'Mobile',
        accessorKey: 'contact',
        cell: ({ getValue }) => <PatternFormat displayType="text" format="+1 (###) ###-####" mask="_" defaultValue={getValue() as number} />
      },
      { header: 'Qualification', cell: getRandomDegree },
      { header: 'Email', cell: () => 'Info@123.com' },

      {
        header: 'Admission Date',
        accessorKey: 'date',
        cell: () => getRandomDate(new Date(2020, 0, 1), new Date(2025, 11, 31))
      },
      {
        header: 'Action',
        cell: () => (
          <Stack direction="horizontal" gap={1}>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>View</Tooltip>}>
              <Button className="avatar avatar-xs btn-link-secondary">
                <i className="ti ti-eye f-20" />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Edit</Tooltip>}>
              <Button className="avatar avatar-xs btn-link-secondary">
                <i className="ti ti-edit f-20" />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Delete</Tooltip>}>
              <Button className="avatar avatar-xs btn-link-secondary">
                <i className="ti ti-trash f-20" />
              </Button>
            </OverlayTrigger>
          </Stack>
        )
      }
    ];
  }, []);

  return <ReactTable data={data} columns={columns} />;
}
