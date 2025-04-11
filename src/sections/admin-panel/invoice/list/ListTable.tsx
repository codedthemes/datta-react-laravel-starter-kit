import { useState } from 'react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Image1 from 'assets/images/user/avatar-1.jpg';
import Image2 from 'assets/images/user/avatar-2.jpg';
import Image3 from 'assets/images/user/avatar-3.jpg';
import Image4 from 'assets/images/user/avatar-4.jpg';
import Image5 from 'assets/images/user/avatar-5.jpg';
import Image7 from 'assets/images/user/avatar-7.jpg';
import Image8 from 'assets/images/user/avatar-8.jpg';
import Image9 from 'assets/images/user/avatar-9.jpg';
import Image10 from 'assets/images/user/avatar-10.jpg';

const tableList1 = [
  {
    id: 1,
    image: Image5,
    name: 'Mickie Melmoth',
    description: 'mmsht23@gmail.com',
    createdate: '5/5/2022',
    dueedate: '7/11/2022',
    quantity: '3000',
    badge: 'Paid',
    installClass: 'text-success m-0',
    badgeClass: 'light-success'
  },
  {
    id: 2,
    image: Image9,
    name: 'Shelba Thews',
    description: 'Shelba Thews',
    createdate: '7/6/2022',
    dueedate: '7/8/2022',
    quantity: '3000',
    badge: 'Cancelled',
    installClass: 'text-muted m-o',
    badgeClass: 'light-danger'
  },
  {
    id: 3,
    image: Image10,
    name: 'tass23@gmail.com',
    description: 'Shelba Thews',
    createdate: '05/01/2022	',
    dueedate: '06/02/2022',
    quantity: '1000',
    badge: 'Unpaid',
    installClass: 'text-success m-0',
    badgeClass: 'light-primary'
  },
  {
    id: 4,
    image: Image1,
    name: 'Mickie Melmoth',
    description: 'mmsht23@gmail.com',
    createdate: '5/5/2022',
    dueedate: '7/11/2022',
    quantity: '3000',
    badge: 'Paid',
    installClass: 'text-success m-0',
    badgeClass: 'light-success'
  },
  {
    id: 5,
    image: Image2,
    name: 'Shelba Thews',
    description: 'Shelba Thews',
    createdate: '7/6/2022',
    dueedate: '7/8/2022',
    quantity: '3000',
    badge: 'Cancelled',
    installClass: 'text-success m-0',
    badgeClass: 'light-danger'
  },
  {
    id: 6,
    image: Image3,
    name: 'tass23@gmail.com',
    description: 'Shelba Thews',
    createdate: '05/01/2022	',
    dueedate: '06/02/2022',
    quantity: '1000',
    badge: 'Unpaid',
    installClass: 'text-success m-0',
    badgeClass: 'light-primary'
  },
  {
    id: 7,
    image: Image4,
    name: 'Mickie Melmoth',
    description: 'mmsht23@gmail.com',
    createdate: '5/5/2022',
    dueedate: '7/11/2022',
    quantity: '3000',
    badge: 'Paid',
    installClass: 'text-success m-0',
    badgeClass: 'light-success'
  },
  {
    id: 8,
    image: Image7,
    name: 'Shelba Thews',
    description: 'Shelba Thews',
    createdate: '7/6/2022',
    dueedate: '7/8/2022',
    quantity: '3000',
    badge: 'Cancelled',
    installClass: 'text-success m-0',
    badgeClass: 'light-danger'
  },
  {
    id: 9,
    image: Image8,
    name: 'tass23@gmail.com',
    description: 'Shelba Thews',
    createdate: '05/01/2022',
    dueedate: '06/02/2022',
    quantity: '1000',
    badge: 'Unpaid',
    installClass: 'text-success m-0',
    badgeClass: 'light-primary'
  }
];

const tableList2 = [
  {
    id: 5,
    image: Image2,
    name: 'Shelba Thews',
    description: 'Shelba Thews',
    createdate: '7/6/2022',
    dueedate: '7/8/2022',
    quantity: '3000',
    badge: 'Cancelled',
    installClass: 'text-success m-0',
    badgeClass: 'light-danger'
  },
  {
    id: 6,
    image: Image3,
    name: 'tass23@gmail.com',
    description: 'Shelba Thews',
    createdate: '05/01/2022	',
    dueedate: '06/02/2022',
    quantity: '1000',
    badge: 'Unpaid',
    installClass: 'text-success m-0',
    badgeClass: 'light-primary'
  },
  {
    id: 1,
    image: Image5,
    name: 'Mickie Melmoth',
    description: 'mmsht23@gmail.com',
    createdate: '5/5/2022',
    dueedate: '7/11/2022',
    quantity: '3000',
    badge: 'Paid',
    installClass: 'text-success m-0',
    badgeClass: 'light-success'
  },
  {
    id: 2,
    image: Image9,
    name: 'Shelba Thews',
    description: 'Shelba Thews',
    createdate: '7/6/2022',
    dueedate: '7/8/2022',
    quantity: '3000',
    badge: 'Cancelled',
    installClass: 'text-muted m-o',
    badgeClass: 'light-danger'
  },
  {
    id: 3,
    image: Image10,
    name: 'tass23@gmail.com',
    description: 'Shelba Thews',
    createdate: '05/01/2022	',
    dueedate: '06/02/2022',
    quantity: '1000',
    badge: 'Unpaid',
    installClass: 'text-success m-0',
    badgeClass: 'light-primary'
  },
  {
    id: 4,
    image: Image1,
    name: 'Mickie Melmoth',
    description: 'mmsht23@gmail.com',
    createdate: '5/5/2022',
    dueedate: '7/11/2022',
    quantity: '3000',
    badge: 'Paid',
    installClass: 'text-success m-0',
    badgeClass: 'light-success'
  },
  {
    id: 7,
    image: Image4,
    name: 'Mickie Melmoth',
    description: 'mmsht23@gmail.com',
    createdate: '5/5/2022',
    dueedate: '7/11/2022',
    quantity: '3000',
    badge: 'Paid',
    installClass: 'text-success m-0',
    badgeClass: 'light-success'
  },
  {
    id: 8,
    image: Image7,
    name: 'Shelba Thews',
    description: 'Shelba Thews',
    createdate: '7/6/2022',
    dueedate: '7/8/2022',
    quantity: '3000',
    badge: 'Cancelled',
    installClass: 'text-success m-0',
    badgeClass: 'light-danger'
  },
  {
    id: 9,
    image: Image8,
    name: 'tass23@gmail.com',
    description: 'Shelba Thews',
    createdate: '05/01/2022',
    dueedate: '06/02/2022',
    quantity: '1000',
    badge: 'Unpaid',
    installClass: 'text-success m-0',
    badgeClass: 'light-primary'
  }
];

const buttondata = [
  { icon: <i className="ti ti-eye" />, variant: 'info' },
  { icon: <i className="ti ti-edit" />, variant: 'success' },
  { icon: <i className="ti ti-trash" />, variant: 'danger' }
];

// ==============================|| TABLE DATA ||============================== //

function TableData1() {
  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th>INVOICE ID</th>
          <th>USER NAME</th>
          <th>CREATE DATE</th>
          <th>DUE DATE </th>
          <th>QUANTITY</th>
          <th>STATUS</th>
          <th className="text-end">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {tableList1.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>
              <Row className="align-items-center">
                <Col xs="auto" className="pe-0">
                  <Image src={user.image} width="40px" />
                </Col>
                <Col>
                  <h6 className="mb-1">
                    <span className="text-truncate">{user.name}</span>
                  </h6>
                  <p className="f-12 mb-0">{user.description}</p>
                </Col>
              </Row>
            </td>
            <td>
              <h6 className="mb-0">{user.createdate}</h6>
            </td>

            <td>
              <h6 className="mb-1">{user.dueedate}</h6>
            </td>
            <td>
              <h6 className="mb-0">{user.quantity}</h6>
            </td>
            <td>
              <Badge bg={user.badgeClass}>{user.badge}</Badge>
            </td>
            <td className="text-end">
              <Stack direction="horizontal" className="justify-content-end">
                {buttondata.map((btn, index) => (
                  <Button variant={`link-${btn.variant}`} key={index} className={`avatar avatar-s btn-pc-default`}>
                    {btn.icon}
                  </Button>
                ))}
              </Stack>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
function TableData2() {
  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th>INVOICE ID</th>
          <th>USER NAME</th>
          <th>CREATE DATE</th>
          <th>DUE DATE </th>
          <th>QUANTITY</th>
          <th>STATUS</th>
          <th className="text-end">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {tableList2.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>
              <Row className="align-items-center">
                <div className="col-auto pe-0">
                  <Image src={user.image} width="40px" />
                </div>
                <Col>
                  <h6 className="mb-1">
                    <span className="text-truncate">{user.name}</span>
                  </h6>
                  <p className="f-12 mb-0">{user.description}</p>
                </Col>
              </Row>
            </td>
            <td>
              <h6 className="mb-0">{user.createdate}</h6>
            </td>

            <td>
              <h6 className="mb-1">{user.dueedate}</h6>
            </td>
            <td>
              <h6 className="mb-0">{user.quantity}</h6>
            </td>
            <td>
              <Badge bg={user.badgeClass}>{user.badge}</Badge>
            </td>
            <td className="text-end">
              <Stack direction="horizontal" className="justify-content-end">
                {buttondata.map((btn, index) => (
                  <Button key={index} className={`avatar avatar-s btn-link-${btn.variant} btn-pc-default`}>
                    {btn.icon}
                  </Button>
                ))}
              </Stack>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
// ==============================|| ADMIN PANEL - INVOICE LIST TABLE ||============================== //

export default function ListTable() {
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <MainCard>
      <Tab.Container activeKey={activeTab} onSelect={(k) => k && setActiveTab(k)}>
        <Nav className="nav-tabs invoice-tab mb-3" id="myTab" role="tablist">
          <Nav.Item>
            <Nav.Link eventKey="all">
              <Stack direction="horizontal" className="align-items-center" gap={2}>
                All
                <Badge bg="light-primary" className="avatar rounded-circle">
                  5
                </Badge>
              </Stack>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="paid">
              <Stack direction="horizontal" className="align-items-center" gap={2}>
                Paid
                <Badge bg="light-success" className="avatar rounded-circle">
                  2
                </Badge>
              </Stack>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="unpaid">
              <Stack direction="horizontal" className="align-items-center" gap={2}>
                Unpaid
                <Badge bg="light-warning" className="avatar rounded-circle">
                  2
                </Badge>
              </Stack>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="cancelled">
              <Stack direction="horizontal" className="align-items-center" gap={2}>
                Cancelled
                <Badge bg="light-danger" className="avatar rounded-circle">
                  1
                </Badge>
              </Stack>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="datatable-top">
          <div className="datatable-dropdown">
            <Form.Label>
              <Form.Select className="datatable-selector">
                <option value="5">5</option>
                <option defaultValue="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
              </Form.Select>
              entries per page
            </Form.Label>
          </div>
          <div className="datatable-search">
            <Form.Control aria-label="First name" type="search" placeholder="search..." />
          </div>
        </div>
        <Tab.Content>
          <Tab.Pane eventKey="all">
            <TableData1 />
          </Tab.Pane>
          <Tab.Pane eventKey="paid">
            <TableData2 />
          </Tab.Pane>
          <Tab.Pane eventKey="unpaid">
            <TableData1 />
          </Tab.Pane>
          <Tab.Pane eventKey="cancelled">
            <TableData2 />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </MainCard>
  );
}
