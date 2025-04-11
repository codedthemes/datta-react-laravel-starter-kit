// react-bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Avatar1 from 'assets/images/user/avatar-1.jpg';
import Avatar2 from 'assets/images/user/avatar-2.jpg';
import Avatar3 from 'assets/images/user/avatar-3.jpg';
import Avatar4 from 'assets/images/user/avatar-4.jpg';

const notificationList = [
  { title: 'Report Successfully', image: Avatar1, due: 'Today | 9:00 AM' },
  { title: 'Reminder: Test time', image: Avatar2, due: 'Yesterday | 6:30 PM' },
  { title: 'Send course pdf', image: Avatar3, due: '05 Feb | 3:45 PM' },
  { title: 'Report Successfully', image: Avatar4, due: '05 Feb | 4:00 PM' }
];

// ===============================|| DASHBOARD - NOTIFICATION ||============================== //

export default function Notification() {
  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
        <h5 className="mb-1">Notifications</h5>
        <Dropdown>
          <Dropdown.Toggle bsPrefix="false" className="avatar avatar-s text-secondary p-0 border-0">
            <i className="ti ti-dots-vertical f-18" />
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item href="#">Today</Dropdown.Item>
            <Dropdown.Item href="#">Weekly</Dropdown.Item>
            <Dropdown.Item href="#">Monthly</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
      <ListGroup variant="flush">
        {notificationList.map((item, index) => (
          <ListGroupItem key={index} className="px-0 py-2">
            <Stack direction="horizontal" className="align-items-center">
              <div className="flex-shrink-0">
                <Image src={item.image} alt="img" className="wid-40 rounded-circle" />
              </div>
              <div className="flex-grow-1 mx-3">
                <h6 className="mb-1">{item.title}</h6>
                <p className="mb-0 text-muted">{item.due}</p>
              </div>
            </Stack>
          </ListGroupItem>
        ))}
      </ListGroup>
    </MainCard>
  );
}
