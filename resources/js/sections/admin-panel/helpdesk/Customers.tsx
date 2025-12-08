import { useMemo, useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

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

// project-imports
import { DebouncedInput, HeaderSort, SortingData, TablePagination } from '@/components/third-party/react-table';
import MainCard from '@/components/MainCard';
import makeData from '@/data/react-table';

// types
import { TableDataProps } from '@/types/table';

interface ReactTableProps {
  columns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
}
interface ColumnMeta {
  className: string;
}

// ==============================|| HELP DESK - CUSTOMERS ||============================== //

function ReactTable({ columns, data }: ReactTableProps) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  return (
    <Row>
      <Col xs={12}>
        <MainCard
          title={
            <Stack direction="horizontal" className="justify-content-between">
              <h5>Customers</h5>
              <Button variant="light-warning" onClick={handleShow}>
                New Customer
              </Button>
            </Stack>
          }
          className="table-card"
        >
          {/* toolbar */}
          <Stack direction="horizontal" className="justify-content-between align-items-center p-4 flex-wrap gap-2">
            <SortingData getState={table.getState} setPageSize={table.setPageSize} />
            <div className="datatable-search">
              <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
            </div>
          </Stack>

          {/*  Table */}
          <Table hover responsive striped className="mb-0 border-top">
            <thead>
              {table.getHeaderGroups().map((headerGroup: HeaderGroup<any>) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
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
                  {row.getVisibleCells().map((cell, index) => (
                    <td
                      key={index}
                      {...cell.column.columnDef.meta}
                      className={`${(cell.column.columnDef.meta as ColumnMeta)?.className ?? ''}`}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Table Pagination */}
          <TablePagination
            setPageSize={table.setPageSize}
            setPageIndex={table.setPageIndex}
            getState={table.getState}
            getPageCount={table.getPageCount}
            initialPageSize={10}
            totalEntries={100}
          />
        </MainCard>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title as="h6" className="d-flex align-items-center">
              <i className="ph ph-user f-20 me-2 text-primary" />
              Add Customer
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <small id="emailHelp" className="form-text text-muted mb-2 mt-0">
              We'll never share your email with anyone else.
            </small>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
              </Form.Group>
              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
              </Form.Group>
              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="email" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="email" placeholder="Confirm Password" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light-danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="light-primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
  );
}

// ==============================|| HELP DESK - CUSTOMERS ||============================== //

export default function CustomersSection() {
  const data: TableDataProps[] = useMemo(() => makeData(10), []);
  const getRandomDate = (start: Date, end: Date): Date => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  const columns = useMemo<ColumnDef<TableDataProps>[]>(() => {
    return [
      {
        header: 'Name',
        accessorKey: 'fullName',
        cell: ({ getValue }) => <h6>{getValue() as string} </h6>
      },
      {
        header: 'Email',
        accessorKey: 'email'
      },
      {
        header: 'Account',
        accessorKey: 'account',
        cell: () => <span>N/A</span>
      },
      {
        header: 'Last Login',
        accessorKey: 'date',
        cell: () => {
          const date = getRandomDate(new Date(2019, 0, 1), new Date(2025, 11, 31));
          const formatted = date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          });
          return <span>{formatted.replace(',', '')}</span>;
        }
      },
      {
        header: 'Action',
        cell: () => (
          <Stack direction="horizontal" gap={2}>
            <Button variant="light-success" size="sm" className="wid-30">
              <i className="ph ph-note-pencil " />
            </Button>
            <Button variant="light-danger" size="sm" className="wid-30">
              <i className="ph ph-trash" />
            </Button>
          </Stack>
        )
      }
    ];
  }, []);

  return <ReactTable data={data} columns={columns} />;
}
