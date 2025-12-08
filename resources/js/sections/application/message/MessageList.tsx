import { Link } from 'react-router-dom';

// react-bootstrap
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';

// project-imports
import SimpleBarScroll from '@/components/third-party/SimpleBar';
import UserAvatar from './UserAvatar';

// assets
import Avatar1 from '@assets/images/user/avatar-1.png';
import Avatar2 from '@assets/images/user/avatar-2.png';
import Avatar3 from '@assets/images/user/avatar-3.png';
import Avatar5 from '@assets/images/user/avatar-5.png';

const menuItems = [
  { label: 'Preferences', to: '#' },
  { label: 'Edit profile', to: '#' },
  { label: 'Go offline', to: '#' },
  { label: 'Mark all read', to: '#' }
];

const statusItems = [
  { label: 'Active', color: 'bg-success', to: '#' },
  { label: 'Away', color: 'bg-warning', to: '#' },
  { label: 'Do not disturb', color: 'bg-danger', to: '#' }
];

// user data
const users = [
  {
    id: 1,
    name: 'John Doe',
    message: 'when meeting schedule',
    time: '2h ago',
    avatar: Avatar1,
    status: 'active'
  },
  {
    id: 2,
    name: 'Keefs',
    message: 'when meeting schedule',
    time: '1:20 AM',
    avatar: Avatar2,
    status: 'active'
  },
  {
    id: 3,
    name: 'Lazaro',
    message: 'when meeting schedule',
    time: 'Yesterday',
    avatar: Avatar3,
    status: 'dnd'
  },
  {
    id: 4,
    name: 'Adeline',
    message: 'when meeting schedule',
    time: '4/25/2023',
    avatar: Avatar3,
    status: 'dnd'
  }
];

// =============================|| MESSAGE - MESSAGE LIST ||============================== //

export default function MessageList() {
  return (
    <div className="chat-user_list p-4">
      <Card className="bg-transparent shadow-none border-0 mb-0">
        <Card.Body className="px-0 pt-0">
          <Stack direction="horizontal" className="align-items-center mb-2">
            <div className="me-auto">
              <h5 className="mb-0">
                Inbox <span className="avatar avatar-xs bg-light-secondary rounded-circle">9</span>
              </h5>
            </div>
            <div className="ms-auto">
              <Dropdown>
                <Dropdown.Toggle className="avatar avatar-s btn-link-secondary arrow-none">
                  <i className="ti ti-dots f-18" />
                </Dropdown.Toggle>

                <Dropdown.Menu align="end">
                  {menuItems.map((item, index) => (
                    <Dropdown.Item as={Link} to={item.to} key={index}>
                      {item.label}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Stack>
          <div className="form-search">
            <i className="ph ph-magnifying-glass icon-search" />
            <Form.Control type="search" placeholder="Search here..." />
          </div>
        </Card.Body>
      </Card>
      <SimpleBarScroll style={{ maxHeight: 'calc(100vh - 395px)' }} browserStyle={{ height: 'unset' }}>
        <Card.Body className="p-0">
          <ListGroup variant="flush">
            {Array(2)
              .fill(users)
              .flat()
              .map((user, index) => (
                <ListGroup.Item action key={index} className="px-2 py-3 p-xl-3">
                  <Stack direction="horizontal" className="align-items-center justify-content-between">
                    <UserAvatar userName={user.name} userRole={user.message} userAvatar={user.avatar} status={user.status} />
                    <span className="text-sm text-muted">{user.time}</span>
                  </Stack>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Card.Body>
      </SimpleBarScroll>

      <ListGroup variant="flush">
        <ListGroup.Item className="p-3" action>
          <i className="ti ti-power me-1 f-18" />
          <span> Logout</span>
        </ListGroup.Item>
        <ListGroup.Item className="p-3" action>
          <i className="ti ti-settings me-1 f-18" />
          <span> Setting</span>
        </ListGroup.Item>
        <ListGroup.Item className="px-0 pb-0">
          <Stack direction="horizontal" className="align-items-center justify-content-between">
            <UserAvatar userName="John Doe" userRole="UI/UX Designer" userAvatar={Avatar5} status="active" />
            <Dropdown align="end">
              <Dropdown.Toggle className="avatar avatar-xs arrow-none btn-link-secondary p-0">
                <i className="ti ti-chevron-right f-16" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {statusItems.map((status, index) => (
                  <Dropdown.Item as={Link} to={status.to} key={index}>
                    <span className={`chat-badge ${status.color} me-2`}></span>
                    {status.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Stack>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
