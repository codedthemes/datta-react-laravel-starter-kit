import { useState, useEffect, useMemo } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// project-imports
import MainCard from 'components/MainCard';

interface Customer {
  id: number;
  name: string;
  email: string;
  account: string;
  lastLogin: string;
}

const fetchedCustomers: Customer[] = [
  { id: 1, name: 'Mark Jason', email: 'mark@mark.com', account: 'N/A', lastLogin: 'January 01, 2019 at 03:35 PM' },
  { id: 2, name: 'Alice Nicol', email: 'alice@mark.com', account: 'N/A', lastLogin: 'January 02, 2019 at 04:00 PM' },
  { id: 3, name: 'Harry Cook', email: 'harry@mark.com', account: 'N/A', lastLogin: 'January 03, 2019 at 05:15 PM' },
  { id: 4, name: 'Tom Hannry', email: 'tom@mark.com', account: 'N/A', lastLogin: 'January 04, 2019 at 06:20 PM' },
  { id: 5, name: 'Martin Frank', email: 'martin@mark.com', account: 'N/A', lastLogin: 'January 05, 2019 at 07:25 PM' },
  { id: 6, name: 'Endrew Khan', email: 'endrew@mark.com', account: 'N/A', lastLogin: 'January 06, 2019 at 08:30 PM' },
  { id: 7, name: 'Christina Methewv', email: 'christina@mark.com', account: 'N/A', lastLogin: 'January 07, 2019 at 09:40 PM' },
  { id: 8, name: 'Jakson Pit', email: 'jakson@mark.com', account: 'N/A', lastLogin: 'January 08, 2019 at 10:50 PM' },
  { id: 9, name: 'Nikolas Jons', email: 'nikolas@mark.com', account: 'N/A', lastLogin: 'January 09, 2019 at 11:55 PM' },
  { id: 10, name: 'Nik Cage', email: 'nik@mark.com', account: 'N/A', lastLogin: 'January 10, 2019 at 12:05 AM' }
];

// =============================|| HELP DESK - CUSTOMERS ||============================== //

export default function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setCustomers(fetchedCustomers);
  }, []);

  const filteredCustomers = useMemo(
    () => customers.filter((customer) => customer.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [customers, searchTerm]
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const indexOfFirstUser = (currentPage - 1) * itemsPerPage;
  const indexOfLastUser = indexOfFirstUser + itemsPerPage - 1;
  const pageNumbers = [...Array(totalPages)].map((_, index) => index + 1);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const showPagination = filteredCustomers.length > itemsPerPage;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <MainCard
        bodyClassName="shadow border-0"
        title={
          <Stack direction="horizontal" className="justify-content-between">
            <h5>Customers</h5>
            <Button variant="light-warning" onClick={handleShow}>
              New Customer
            </Button>
          </Stack>
        }
      >
        <Stack direction="horizontal" className="justify-content-between">
          <Stack direction="horizontal">
            <Form.Group controlId="perPage" className="wid-100">
              <Form.Control as="select" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
              </Form.Control>
            </Form.Group>
            <label className="ms-2">entries per page</label>
          </Stack>
          <Form.Control className="w-25" type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
        </Stack>

        <Table striped bordered hover className="mt-3">
          <thead>
            <tr className="text-uppercase">
              <th>Name</th>
              <th>Email</th>
              <th>Account</th>
              <th>Last Login</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.slice(indexOfFirstUser, indexOfLastUser + 1).map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.account}</td>
                <td>{customer.lastLogin}</td>
                <td>
                  <Stack direction="horizontal" gap={2}>
                    <Button variant="light-success" size="sm" className="wid-30">
                      <i className="ti ti-edit" />
                    </Button>
                    <Button variant="light-danger" size="sm" className="wid-30">
                      <i className="ti ti-trash" />
                    </Button>
                  </Stack>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Stack direction="horizontal" className="justify-content-between align-items-center mt-3">
          <p className="mb-0">
            Showing {indexOfFirstUser + 1} to {indexOfLastUser + 1} of {filteredCustomers.length} entries
          </p>
          {showPagination && (
            <Pagination>
              {currentPage > 1 && <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />}
              {pageNumbers.map((number) => (
                <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                  {number}
                </Pagination.Item>
              ))}
              {currentPage < totalPages && <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />}
            </Pagination>
          )}
        </Stack>
      </MainCard>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title as="h6">
            <i className="ti ti-user f-20 me-2 text-primary" />
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
    </>
  );
}
