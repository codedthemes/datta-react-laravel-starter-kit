import { useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// assets
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import SettingsInputCompositeTwoToneIcon from '@mui/icons-material/SettingsInputCompositeTwoTone';
import HourglassTopTwoToneIcon from '@mui/icons-material/HourglassTopTwoTone';
import EmojiFlagsTwoToneIcon from '@mui/icons-material/EmojiFlagsTwoTone';

// ===========================|| DETAILS - EDIT TASK DETAILS ||=========================== //

export default function EditTaskDetail() {
  const [priority, setPriority] = useState('Normal');
  const [status, setStatus] = useState('Open');
  return (
    <MainCard
      title={
        <h5>
          <DesignServicesTwoToneIcon className="w-20 text-primary" /> Edit task details
        </h5>
      }
    >
      <Row>
        <Col md={4} className="d-flex align-items-center my-1">
          <div className="h6 mb-0 me-2">
            <SettingsInputCompositeTwoToneIcon className="w-20 text-primary" /> Priority:
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="light-success" size="sm">
              {priority}
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item onClick={() => setPriority('Highest Priority')}>
                <span className="fas fa-circle text-danger f-10 me-2" />
                Highest Priority
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setPriority('High Priority')}>
                <span className="fas fa-circle text-warning f-10 me-2"></span> High Priority
              </Dropdown.Item>
              <Dropdown.Item active onClick={() => setPriority('Normal')}>
                <span className="fas fa-circle text-success f-10 me-2" /> Normal Priority
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setPriority('Low Priority')}>
                <span className="fas fa-circle text-success f-10 me-2" /> Low Priority
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col md={4}>
          <Stack direction="horizontal" className="align-items-center my-1">
            <div className="h6 mb-0 me-2">
              <HourglassTopTwoToneIcon className="w-20 text-primary" /> Status:
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="light-primary" size="sm">
                {status}
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item onClick={() => setStatus('Open')}>Open</Dropdown.Item>
                <Dropdown.Item active onClick={() => setStatus('On Hold')}>
                  On Hold
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setStatus('Resolved')}>Resolved</Dropdown.Item>
                <Dropdown.Item onClick={() => setStatus('Closed')}>Closed</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setStatus('Duplicate')}>Duplicate</Dropdown.Item>
                <Dropdown.Item onClick={() => setStatus('Invalid')}>Invalid</Dropdown.Item>
                <Dropdown.Item onClick={() => setStatus('Wontfix')}>Wontfix</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Stack>
        </Col>

        <Col md={4}>
          <Stack direction="horizontal" className="align-items-center my-1">
            <div className="h6 mb-0 me-2">
              <EmojiFlagsTwoToneIcon className="w-20 text-primary" /> Action:
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="light-primary" size="sm">
                <i className="fas fa-bars" />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item href="#!">Check In</Dropdown.Item>
                <Dropdown.Item href="#!">Attach Screenshot</Dropdown.Item>
                <Dropdown.Item href="#!">Reassign</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#!">Edit Task</Dropdown.Item>
                <Dropdown.Item href="#!">Remove</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Stack>
        </Col>
      </Row>
    </MainCard>
  );
}
