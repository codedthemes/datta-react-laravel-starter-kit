import { Link } from 'react-router-dom';

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

const queryList = [
  { title: 'Python $ Data Manage', image: Avatar2 },
  { title: 'Website Error', image: Avatar1 },
  { title: 'How to Illustrate', image: Avatar3 },
  { title: 'PHP Learning', image: Avatar4 }
];

// ===============================|| DASHBOARD - STUDENT QUERY ||============================== //

export default function StudentQuery() {
  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
        <h5 className="mb-1">Student Queries</h5>
        <Dropdown>
          <Dropdown.Toggle bsPrefix="false" as="a" className="avatar avatar-s btn-link-secondary p-0 border-0">
            <i className="ti ti-dots-vertical f-18" />
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item>Today</Dropdown.Item>
            <Dropdown.Item>Weekly</Dropdown.Item>
            <Dropdown.Item>Monthly</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
      <ListGroup variant="flush">
        {queryList.map((item, index) => (
          <ListGroupItem key={index} className="px-0 py-2">
            <Stack direction="horizontal" className="align-item-center">
              <div className="flex-shrink-0">
                <Image src={item.image} alt="img" className="wid-40 rounded" />
              </div>
              <div className="flex-grow-1 mx-3">{item.title}</div>
              <div className="flex-shrink-0">
                <Link to="#" className="avatar avatar-xs btn-light-secondary mx-1">
                  <i className="ti ti-eye f-20" />
                </Link>
                <Link to="#" className="avatar avatar-xs btn-light-secondary mx-1">
                  <i className="ti ti-trash f-20" />
                </Link>
              </div>
            </Stack>
          </ListGroupItem>
        ))}
      </ListGroup>
    </MainCard>
  );
}
