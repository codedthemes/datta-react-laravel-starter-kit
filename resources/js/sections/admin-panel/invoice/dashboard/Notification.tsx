// react-bootstrap
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';

// project-imports
import { NotificationData } from '@/data/invoice';
import MainCard from '@/components/MainCard';

// ==============================|| ADMIN PANEL - DASHBOARD NOTIFICATION ||============================== //

export default function Notification() {
  return (
    <MainCard bodyClassName="p-0">
      <Stack direction="horizontal" className="align-items-center justify-content-between p-4 pb-0">
        <h5 className="mb-0">Notification</h5>
        <Dropdown>
          <Dropdown.Toggle variant="link-secondary" className="avatar avatar-s arrow-none border-0">
            <i className="ti ti-dots-vertical f-18" />
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Weekly</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Monthly</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
      <ListGroup>
        {NotificationData.map((item, index) => (
          <ListGroup.Item className="border-0" key={index}>
            <Stack direction="horizontal" className="align-items-center">
              <div className="flex-shrink-0">
                <div className={`avatar ${item.bg} rounded-circle`}>
                  {item.icon && <i className={`${item.icon} f-26`} />}
                  {!item.icon && item.avatar && <span className="f-24 fw-normal">{item.avatar}</span>}
                </div>
              </div>
              <div className="flex-grow-1 mx-2">
                <h6 className="mb-1">
                  Johnny sent you an invoice billed <span className="text-primary">$1,000.</span>
                </h6>
                <p className="mb-0 text-sm">2 August</p>
              </div>
              <div className="flex-shrink-0">
                <a href="#!" className="avatar avatar-s btn-link-secondary">
                  <i className="ti ti-link" />
                </a>
              </div>
            </Stack>
          </ListGroup.Item>
        ))}
        <ListGroup.Item className="border-0">
          <div className="d-grid">
            <Button variant="outline-secondary">View All</Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </MainCard>
  );
}
