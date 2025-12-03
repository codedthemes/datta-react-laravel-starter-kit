// react-bootstrap
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import Avatar1 from '@assets/images/user/avatar-1.png';
import Avatar2 from '@assets/images/user/avatar-2.png';
import Avatar3 from '@assets/images/user/avatar-3.png';
import Avatar4 from '@assets/images/user/avatar-4.png';

// user data
const users = [
  { name: 'Sortino media', role: 'Software Engineer', img: Avatar1 },
  { name: 'Larry heading', role: 'Web Designer', img: Avatar2 },
  { name: 'Mark', role: 'Chief Financial Officer (CFO)', img: Avatar3 },
  { name: 'John Doe', role: 'Senior Marketing Designer', img: Avatar4 }
];

// ===========================|| DETAILS - ASSIGNED USERS ||=========================== //

export default function AssignedUsers() {
  return (
    <MainCard title="Assigned Users" bodyClassName="p-0">
      <ListGroup variant="flush" as="ul">
        {users.map((user, index) => (
          <ListGroup.Item key={index} as="li" className="d-flex gap-2 justify-content-between align-items-center">
            <Image src={user.img} alt={user.name} roundedCircle width={45} height={45} fluid className="avatar" />
            <Stack className="align-self-center">
              <a href="#!" className="text-decoration-none text-dark">
                {user.name}
              </a>
              <small className="text-muted">{user.role}</small>
            </Stack>
            <a href="#!" aria-label="view details">
              <i className="ti ti-chevron-right text-primary f-18" />
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </MainCard>
  );
}
