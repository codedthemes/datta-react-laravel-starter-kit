import { useState, useCallback } from 'react';

// react-bootstrap
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import avatar1 from '@assets/images/user/avatar-1.png';
import avatar2 from '@assets/images/user/avatar-2.png';
import avatar3 from '@assets/images/user/avatar-3.png';
import avatar4 from '@assets/images/user/avatar-4.png';
import avatar5 from '@assets/images/user/avatar-5.png';

interface User {
  id: number;
  name: string;
  location: string;
  avatar: string;
}

interface Status {
  label: string;
  value: number;
  variant: string;
}

// user data
const users: User[] = [
  { id: 1, name: 'Josephin Doe', location: 'Santa Ana, CA', avatar: avatar1 },
  { id: 2, name: 'Ashoka T.', location: 'Santa Ana, CA', avatar: avatar2 },
  { id: 3, name: 'Josephin Doe', location: 'Santa Ana, CA', avatar: avatar3 },
  { id: 4, name: 'Ashoka T.', location: 'Santa Ana, CA', avatar: avatar4 },
  { id: 5, name: 'Josephin Doe', location: 'Santa Ana, CA', avatar: avatar5 }
];

const statusItems: Status[] = [
  { label: 'Highest priority', value: 85, variant: 'success' },
  { label: 'High priority', value: 68, variant: 'primary' },
  { label: 'Normal priority', value: 48, variant: 'warning' },
  { label: 'Low priority', value: 35, variant: 'danger' }
];

// ==============================|| BOARD - STATUS ||============================== //

export default function TaskBoardStatus() {
  const [statusOpen, setStatusOpen] = useState(true);
  const [assignOpen, setAssignOpen] = useState(true);

  const toggleStatus = useCallback(() => setStatusOpen((s) => !s), []);
  const toggleAssign = useCallback(() => setAssignOpen((s) => !s), []);

  return (
    <MainCard
      title={
        <InputGroup>
          <FormControl placeholder="Search" aria-label="Search tasks" />
          <InputGroup.Text>
            <i className="ph ph-magnifying-glass" style={{ marginBottom: '-4px' }} />
          </InputGroup.Text>
        </InputGroup>
      }
      bodyClassName="p-0"
    >
      <Card.Body className="py-3 border-bottom px-0">
        <a onClick={toggleStatus} href="#!" className="link-dark d-block px-3">
          <h6 className="mb-0">
            <i className="ph ph-flag-checkered align-middle f-20 text-primary" style={{ marginInlineEnd: '0.25rem' }} />
            Completed Status
            <i className="ti ti-chevron-down float-end" style={{ marginTop: '4px' }} />
          </h6>
        </a>
        <Collapse in={statusOpen}>
          <div style={{ overflow: 'hidden' }}>
            <div id="taskboard-status-panel" className="border-top pt-3 mt-3 px-3">
              {statusItems.map((status, index) => (
                <div key={status.label}>
                  <h6>{status.label}</h6>
                  <ProgressBar
                    className={`rounded ${index !== statusItems.length - 1 ? 'mb-3' : ''}`}
                    now={status.value}
                    variant={status.variant}
                    style={{ height: '5px' }}
                    aria-label={status.label}
                  />
                </div>
              ))}
            </div>
          </div>
        </Collapse>
      </Card.Body>

      <Card.Body className="py-3 px-0">
        <a onClick={toggleAssign} href="#!" className="link-dark d-block px-3">
          <h6 className="mb-0">
            <i className="ph ph-user-circle align-middle f-20 text-primary" style={{ marginInlineEnd: '0.25rem' }} />
            Assign User
            <i className="ti ti-chevron-down float-end" style={{ marginTop: '4px' }} />
          </h6>
        </a>
        <Collapse in={assignOpen}>
          <div style={{ overflow: 'hidden' }}>
            <div id="taskboard-assign-panel" className="border-top pt-3 mt-3 px-3">
              {users.map((user, index) => (
                <Stack direction="horizontal" className={`align-items-center ${index !== users.length - 1 ? 'mb-3' : ''}`} key={user.id}>
                  <Image src={user.avatar} roundedCircle className="me-3" width={45} height={45} alt={`${user.name} avatar`} />
                  <div>
                    <h6>{user.name}</h6>
                    <small className="text-muted d-block">{user.location}</small>
                  </div>
                </Stack>
              ))}
            </div>
          </div>
        </Collapse>
      </Card.Body>
    </MainCard>
  );
}
