import { useEffect, useMemo, useState } from 'react';
import { router } from '@inertiajs/react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Tooltip from 'react-bootstrap/Tooltip';

// third-party
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  ColumnFiltersState,
  getFilteredRowModel,
  getSortedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel
} from '@tanstack/react-table';

// project-imports
import AlertProductDelete from '../AlertProductDelete';
import { DebouncedInput, SortingData, TablePagination } from '@/components/third-party/react-table';
import EmptyReactTable from '@/sections/tables/react-table/EmptyTable';
import MainCard from '@/components/MainCard';
import { getImageUrl, ImagePath } from '@/utils/getImageUrl';
import { deleteInvoice, handlerDelete, useGetInvoice, useGetInvoiceMaster } from '@/api/invoice';

// type
import { InvoiceList } from '@/types/invoice';

interface ReactTableProps {
  data: InvoiceList[];
  columns: ColumnDef<InvoiceList>[];
}

// ==============================|| REACT TABLE - LIST ||============================== //

function ReactTable({ columns, data }: ReactTableProps) {
  const groups = ['All', ...new Set(data.map((item: InvoiceList) => item.status))];

  const countGroup = data.map((item: InvoiceList) => item.status);
  const counts = countGroup.reduce(
    (acc: any, value: any) => ({
      ...acc,
      [value]: (acc[value] || 0) + 1
    }),
    {}
  );

  const [activeTab, setActiveTab] = useState(groups[0]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  useEffect(() => {
    setColumnFilters(activeTab === 'All' ? [] : [{ id: 'status', value: activeTab }]);
  }, [activeTab]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      globalFilter
    },
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter
  });

  return (
    <>
      <Tab.Container defaultActiveKey={activeTab} onSelect={(key) => setActiveTab(key || 'All')}>
        <Nav className="nav-tabs invoice-tab p-4" role="tablist">
          {groups.map((status: string, index: number) => (
            <Nav.Item key={index}>
              <Nav.Link eventKey={status}>
                <Stack direction="horizontal" gap={2}>
                  {status}
                  <Badge
                    pill
                    bg={
                      status === 'All'
                        ? 'light-primary'
                        : status === 'Paid'
                          ? 'light-success'
                          : status === 'Unpaid'
                            ? 'light-warning'
                            : 'light-danger'
                    }
                  >
                    {status === 'All' ? data.length : counts[status] || 0}
                  </Badge>
                </Stack>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey={activeTab}>
            <Stack direction="horizontal" className="justify-content-between align-items-center flex-wrap p-4 pt-0" gap={2}>
              <SortingData getState={table.getState} setPageSize={table.setPageSize} />
              <div className="datatable-search">
                <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
              </div>
            </Stack>
            <Table responsive hover className="mb-0 border-top">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} {...header.column.columnDef.meta}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
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
            <TablePagination
              setPageSize={table.setPageSize}
              setPageIndex={table.setPageIndex}
              getState={table.getState}
              getPageCount={table.getPageCount}
              initialPageSize={10}
              totalEntries={100}
            />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
}

// ==============================|| INVOICE - LIST ||============================== //

export default function ListTable() {
  const { invoiceLoading, invoice: list } = useGetInvoice();
  const { invoiceMaster } = useGetInvoiceMaster();
  const [invoiceId, setInvoiceId] = useState(0);

  const columns = useMemo<ColumnDef<InvoiceList>[]>(
    () => [
      {
        header: 'Invoice Id',
        accessorKey: 'id',
        meta: { className: 'cell-center' }
      },
      {
        header: 'User Info',
        accessorKey: 'customer_name',
        cell: ({ row, getValue }) => (
          <Stack direction="horizontal" gap={2} className="align-items-center">
            <Image
              src={getImageUrl(`avatar-${!row.original.avatar ? 1 : row.original.avatar}.png`, ImagePath.USER)}
              alt="User Avatar"
              className="avatar avatar-xs"
            />
            <Stack>
              <h6 className="text-truncate w-100 mb-1">{getValue() as string} </h6>
              <span className="f-12 mb-0">{row.original.email as string}</span>
            </Stack>
          </Stack>
        )
      },
      {
        header: 'Create Date',
        accessorKey: 'date'
      },
      {
        header: 'Due Date',
        accessorKey: 'due_date'
      },
      {
        header: 'Quantity',
        accessorKey: 'quantity'
      },
      {
        header: 'Status',
        accessorKey: 'status',
        filterFn: (row, columnId, filterValue) => {
          return row.getValue(columnId) === filterValue;
        },
        cell: (cell) => {
          switch (cell.getValue()) {
            case 'Cancelled':
              return <Badge bg="light-danger">Cancelled</Badge>;
            case 'Paid':
              return <Badge bg="light-success">Paid</Badge>;
            case 'Unpaid':
            default:
              return <Badge bg="light-primary">Unpaid</Badge>;
          }
        }
      },
      {
        header: 'Actions',
        meta: { className: 'cell-center' },
        disableSortBy: true,
        cell: ({ row }) => {
          return (
            <Stack direction="horizontal" gap={1}>
              <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
                <a
                  href="#"
                  className="btn-link-secondary avatar avatar-xs mx-1"
                  onClick={(e: any) => {
                    e.stopPropagation();
                    router.visit(`/admin-panel/invoice/details/${row?.original?.id}`);
                  }}
                >
                  <i className="ti ti-eye f-20" />
                </a>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                <a
                  href="#"
                  className="btn-link-secondary avatar avatar-xs mx-1"
                  onClick={(e: any) => {
                    e.stopPropagation();
                    router.visit(`/admin-panel/invoice/edit/${row?.original?.id}`);
                  }}
                >
                  <i className="ti ti-edit f-20" />
                </a>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                <a
                  href="#"
                  className="btn-link-secondary avatar avatar-xs mx-1"
                  onClick={(e: any) => {
                    e.stopPropagation();
                    setInvoiceId(row?.original?.id);
                    handlerDelete(true);
                  }}
                >
                  <i className="ti ti-trash f-20" />
                </a>
              </OverlayTrigger>
            </Stack>
          );
        }
      }
    ],
    []
  );

  const handleClose = (status: boolean) => {
    if (status) {
      deleteInvoice(invoiceId);
    }
    handlerDelete(false);
  };

  return (
    <MainCard className="table-card">
      <AlertProductDelete title={invoiceId.toString()} open={invoiceMaster ? invoiceMaster.alertPopup : false} handleClose={handleClose} />
      {invoiceLoading ? <EmptyReactTable /> : <ReactTable {...{ data: list, columns }} />}
    </MainCard>
  );
}
