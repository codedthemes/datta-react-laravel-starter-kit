import { useState } from 'react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Avatar from 'assets/images/user/avatar-1.jpg';
import Avatar1 from 'assets/images/user/avatar-2.jpg';
import Avatar2 from 'assets/images/user/avatar-3.jpg';
import Avatar3 from 'assets/images/user/avatar-4.jpg';

interface User {
  name: string;
  phone: string;
  date: string;
  time: string;
  status: string;
  badge: string;
  avatar: string;
}

export default function MembershipList() {
  const users: User[] = [
    {
      name: 'Airi Satou',
      phone: '(123) 4567 890',
      date: '2023/02/07',
      time: '09:05 PM',
      status: 'Active',
      badge: 'Casual',
      avatar: Avatar
    },
    {
      name: 'Ashton Cox',
      phone: '(123) 4567 890',
      date: '2023/02/01',
      time: '02:14 PM',
      status: 'Inactive',
      badge: 'Addicted',
      avatar: Avatar1
    },
    {
      name: 'Bradley Greer',
      phone: '(123) 4567 890',
      date: '2023/01/22',
      time: '10:32 AM',
      status: 'Active',
      badge: 'Diehard',
      avatar: Avatar2
    },
    {
      name: 'Brielle Williamson',
      phone: '(123) 4567 890',
      date: '2023/02/07',
      time: '09:05 PM',
      status: 'Active',
      badge: 'Casual',
      avatar: Avatar3
    },
    {
      name: 'Airi Satou',
      phone: '(123) 4567 890',
      date: '2023/02/07',
      time: '09:05 PM',
      status: 'Active',
      badge: 'Casual',
      avatar: Avatar
    },
    {
      name: 'Ashton Cox',
      phone: '(123) 4567 890',
      date: '2023/02/01',
      time: '02:14 PM',
      status: 'Inactive',
      badge: 'Addicted',
      avatar: Avatar1
    },
    {
      name: 'Bradley Greer',
      phone: '(123) 4567 890',
      date: '2023/01/22',
      time: '10:32 AM',
      status: 'Active',
      badge: 'Diehard',
      avatar: Avatar2
    },
    {
      name: 'Brielle Williamson',
      phone: '(123) 4567 890',
      date: '2023/02/07',
      time: '09:05 PM',
      status: 'Active',
      badge: 'Casual',
      avatar: Avatar3
    },
    {
      name: 'Airi Satou',
      phone: '(123) 4567 890',
      date: '2023/02/07',
      time: '09:05 PM',
      status: 'Active',
      badge: 'Casual',
      avatar: Avatar
    },
    {
      name: 'Ashton Cox',
      phone: '(123) 4567 890',
      date: '2023/02/01',
      time: '02:14 PM',
      status: 'Inactive',
      badge: 'Addicted',
      avatar: Avatar1
    },
    {
      name: 'Bradley Greer',
      phone: '(123) 4567 890',
      date: '2023/01/22',
      time: '10:32 AM',
      status: 'Active',
      badge: 'Diehard',
      avatar: Avatar2
    },
    {
      name: 'Brielle Williamson',
      phone: '(123) 4567 890',
      date: '2023/02/07',
      time: '09:05 PM',
      status: 'Active',
      badge: 'Casual',
      avatar: Avatar3
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users
    .filter((user) => {
      return (
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.includes(searchQuery) ||
        user.date.includes(searchQuery) ||
        user.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.badge.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = 10;

  return (
    <Row>
      <Col xs={12}>
        <MainCard title="Membership list">
          <Stack direction="horizontal" className="justify-content-between align-items-center mb-3">
            <div className="datatable-dropdown">
              <Form.Label className="text-muted">
                <Form.Select className="datatable-selector" name="per-page" onChange={(e) => setItemsPerPage(Number(e.target.value))}>
                  <option value="5">5</option>
                  <option value="10" selected>
                    10
                  </option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                </Form.Select>
                entries per page
              </Form.Label>
            </div>
            <div className="datatable-search">
              <Form.Control
                className="datatable-input"
                placeholder="Search..."
                type="search"
                name="search"
                title="Search within table"
                aria-controls="pc-dt-simple"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </Stack>

          <div className="table-responsive">
            <Table hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Start Date</th>
                  <th>Status</th>
                  <th>Plan</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <Image src={user.avatar} alt="user image" roundedCircle width="40" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">{user.name}</h6>
                        </div>
                      </div>
                    </td>
                    <td>{user.phone}</td>
                    <td>
                      {user.date} <span className="text-muted text-sm d-block">09:05 PM</span>
                    </td>
                    <td className={user.status === 'Active' ? 'text-success' : 'text-secondary'}>
                      <i className="fas fa-circle f-10 m-r-10" /> {user.status}
                    </td>
                    <td>
                      <Badge bg={user.badge === 'Casual' ? 'success' : user.badge === 'Addicted' ? 'primary' : 'warning'}>
                        {user.badge}
                      </Badge>
                    </td>
                    <td>
                      <Button variant="link-secondary" className="avatar avatar-xs mx-1">
                        <i className="ti ti-eye f-20" />
                      </Button>
                      <Button variant="link-secondary" className="avatar avatar-xs mx-1">
                        <i className="ti ti-pencil f-20" />
                      </Button>
                      <Button variant="link-secondary" className="avatar avatar-xs mx-1">
                        <i className="ti ti-trash f-20" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <Stack direction="horizontal" className="justify-content-between align-items-center mt-3">
            <p className="mb-0">
              Showing {indexOfFirstUser + 1} to {indexOfLastUser} of {users.length} entries
            </p>
            <Pagination>
              <Pagination.Prev
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`${currentPage > 1 ? 'visible-class' : 'hidden-class'} p-1 custom-prev-arrow`} // Custom class for arrow color
              />

              {pageNumbers.map((number) => (
                <Pagination.Item
                  bsPrefix="bg-secondary-1"
                  key={number}
                  active={number === currentPage}
                  className={`p-1 ${number === currentPage ? 'active-page' : 'inactive-page'}`}
                  onClick={() => handlePageChange(number)}
                >
                  {number}
                </Pagination.Item>
              ))}

              <Pagination.Next
                bsPrefix="bg-secondary"
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`${currentPage > 1 ? 'hidden-class ' : ' visible-class'} p-1 custom-next-arrow`} // Custom class for arrow color
              />
            </Pagination>
          </Stack>
        </MainCard>
      </Col>
    </Row>
  );
}
