import { useState } from 'react';

// react-bootstrap
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Avater1 from 'assets/images/user/avatar-1.jpg';
import Avater2 from 'assets/images/user/avatar-2.jpg';
import Avater3 from 'assets/images/user/avatar-3.jpg';

const userData = [
  { name: 'Silje Larsen', score: 3784, up: true, avatar: Avater1 },
  { name: 'Storm Hanse', score: 2739, up: false, avatar: Avater3 },
  { name: 'Frida Thomse', score: 1032, up: false, avatar: Avater1 },
  { name: 'Silje Larsen', score: 8750, up: true, avatar: Avater2 },
  { name: 'Storm Hanse', score: 8750, up: true, avatar: Avater3 }
];

// ==============================|| TABLE DATA ||============================== //

function TableData() {
  return (
    <div className="p-4">
      {userData.map((user, index) => (
        <Stack direction="horizontal" key={index} className="align-items-center justify-content-between mb-3">
          <Stack direction="horizontal" className="align-items-center">
            <Image src={user.avatar} roundedCircle width={40} height={40} className="me-3" />
            <span>{user.name}</span>
          </Stack>
          <Stack direction="horizontal" className="align-items-center">
            {user.up ? <i className="fas fa-caret-up text-success f-20" /> : <i className="fas fa-caret-down text-danger f-20" />}
            <span className="ms-2">{user.score}</span>
          </Stack>
        </Stack>
      ))}
    </div>
  );
}

// ==============================|| WIDGETS TABLES - LEADER BOARD TABLE ||============================== //

export default function LeaderBoardTable() {
  const [activeTab, setActiveTab] = useState<string>('home');

  return (
    <MainCard
      bodyClassName="p-0"
      title={
        <Nav activeKey={activeTab} variant="pills" onSelect={(k) => k && setActiveTab(k)} className="mx-0">
          <Nav.Item>
            <Nav.Link eventKey="home">Today</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="profile">This Week</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contact">All</Nav.Link>
          </Nav.Item>
        </Nav>
      }
    >
      <Tab.Container activeKey={activeTab} onSelect={(k) => k && setActiveTab(k)}>
        <Tab.Content>
          <Tab.Pane eventKey="home">
            <TableData />
          </Tab.Pane>
          <Tab.Pane eventKey="profile">
            <TableData />
          </Tab.Pane>
          <Tab.Pane eventKey="contact">
            <TableData />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </MainCard>
  );
}
