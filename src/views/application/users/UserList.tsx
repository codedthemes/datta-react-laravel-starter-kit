// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';

// assets
import avtar1 from 'assets/images/user/avatar-1.jpg';
import avtar2 from 'assets/images/user/avatar-2.jpg';
import avtar3 from 'assets/images/user/avatar-3.jpg';
import avtar4 from 'assets/images/user/avatar-4.jpg';
import avtar5 from 'assets/images/user/avatar-5.jpg';

const users = [
  {
    name: 'Quinn Flynn',
    email: 'Qf@domain.com',
    position: 'Support Lead',
    office: 'Edinburgh',
    age: 61,
    startDate: '2011/04/25',
    status: 'Active',
    image: avtar1
  },
  {
    name: 'Garrett Winters',
    email: 'gw@domain.com',
    position: 'Accountant',
    office: 'Tokyo',
    age: 63,
    startDate: '2011/07/25',
    status: 'Disabled',
    image: avtar2
  },
  {
    name: 'Ashton Cox',
    email: 'ac@domain.com',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    age: 66,
    startDate: '2009/01/12',
    status: 'Disabled',
    image: avtar3
  },
  {
    name: 'Cedric Kelly',
    email: 'ck@domain.com',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    age: 22,
    startDate: '2012/03/29',
    status: 'Active',
    image: avtar4
  },
  {
    name: 'Airi Satou',
    email: 'as@domain.com',
    position: 'Accountant',
    office: 'Tokyo',
    age: 33,
    startDate: '2008/11/28',
    status: 'Active',
    image: avtar4
  },
  {
    name: 'Brielle Williamson',
    email: 'bw@domain.com',
    position: 'Integration Specialist',
    office: 'New York',
    age: 61,
    startDate: '2012/12/02',
    status: 'Disabled',
    image: avtar5
  }
];

// ==============================|| USERS - USER LIST ||============================== //

export default function UserListPage() {
  return (
    <Row>
      <Col lg={12}>
        <Card className="user-profile-list">
          <Card.Body className="p-0">
            <div className="dt-responsive table-responsive">
              <Table hover className="nowrap">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>
                        <Stack direction="horizontal" className="align-items-center">
                          <Image src={user.image} roundedCircle width={40} className="me-2" />
                          <div>
                            <h6 className="mb-0">{user.name}</h6>
                            <p className="mb-0">{user.email}</p>
                          </div>
                        </Stack>
                      </td>
                      <td>{user.position}</td>
                      <td>{user.office}</td>
                      <td>{user.age}</td>
                      <td>{user.startDate}</td>
                      <td>
                        <Badge bg={user.status === 'Active' ? 'light-success' : 'light-danger'}>{user.status}</Badge>
                        <div className="overlay-edit ">
                          <Button variant="success" className="btn-icon">
                            <i className="ti ti-circle-check" />
                          </Button>
                          <Button variant="danger" className="btn-icon">
                            <i className="ti ti-trash" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Status</th>
                  </tr>
                </tfoot>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
