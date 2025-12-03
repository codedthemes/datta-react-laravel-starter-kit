import { useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// Option types and lists as simple constants (no useMemo) — easy to extend or move to a service later
type PriorityOption = { value: string; label: string; iconColor?: string };
type StatusOption = { value: string; label: string };
type ActionOption = { value: string; label: string };

const priorityOptions: PriorityOption[] = [
  { value: 'Highest Priority', label: 'Highest Priority', iconColor: 'text-danger' },
  { value: 'High Priority', label: 'High Priority', iconColor: 'text-warning' },
  { value: 'Normal', label: 'Normal', iconColor: 'text-success' },
  { value: 'Low Priority', label: 'Low Priority', iconColor: 'text-muted' }
];

const statusOptions: StatusOption[] = [
  { value: 'Open', label: 'Open' },
  { value: 'On Hold', label: 'On Hold' },
  { value: 'Resolved', label: 'Resolved' },
  { value: 'Closed', label: 'Closed' },
  { value: 'Duplicate', label: 'Duplicate' },
  { value: 'Invalid', label: 'Invalid' },
  { value: 'Wontfix', label: 'Wontfix' }
];

const actionOptions: ActionOption[] = [
  { value: 'checkin', label: 'Check In' },
  { value: 'attach', label: 'Attach Screenshot' },
  { value: 'reassign', label: 'Reassign' },
  { value: 'edit', label: 'Edit Task' },
  { value: 'remove', label: 'Remove' }
];

// ===========================|| DETAILS - EDIT TASK DETAILS ||=========================== //

export interface EditTaskDetailProps {
  initialPriority?: string;
  initialStatus?: string;
  onPriorityChange?: (priority: string) => void;
  onStatusChange?: (status: string) => void;
  onActionSelect?: (action: string) => void;
}

export default function EditTaskDetail({
  initialPriority = 'Normal',
  initialStatus = 'Open',
  onPriorityChange,
  onStatusChange,
  onActionSelect
}: EditTaskDetailProps) {
  const [priority, setPriority] = useState(initialPriority);
  const [status, setStatus] = useState(initialStatus);

  // using the module-level option lists defined above

  const handlePrioritySelect = (value: string) => {
    setPriority(value);
    onPriorityChange?.(value);
  };

  const handleStatusSelect = (value: string) => {
    setStatus(value);
    onStatusChange?.(value);
  };

  const handleActionSelect = (value: string) => {
    onActionSelect?.(value);
  };

  return (
    <MainCard
      title={
        <h5>
          <i className="ph ph-pencil-ruler align-text-top f-20 text-primary" /> Edit task details
        </h5>
      }
    >
      <Row>
        <Col md={4} className="d-flex align-items-center my-1">
          <h6 className="mb-0 me-2">
            <i className="ph ph-chart-bar align-text-bottom f-20 text-primary" /> Priority:
          </h6>
          <Dropdown>
            <Dropdown.Toggle variant="light-success" size="sm">
              {priority}
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              {priorityOptions.map((opt) => (
                <Dropdown.Item key={opt.value} active={opt.value === priority} onClick={() => handlePrioritySelect(opt.value)}>
                  <span className={`ti ti-circle-filled f-10 me-2 ${opt.iconColor || ''}`} />
                  {opt.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col md={4}>
          <Stack direction="horizontal" className="align-items-center my-1">
            <h6 className="mb-0 me-2">
              <i className="ph ph-hourglass-high align-text-top f-20 text-primary" /> Status:
            </h6>
            <Dropdown>
              <Dropdown.Toggle variant="light-primary" size="sm">
                {status}
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                {statusOptions.slice(0, 4).map((opt) => (
                  <Dropdown.Item key={opt.value} active={opt.value === status} onClick={() => handleStatusSelect(opt.value)}>
                    {opt.label}
                  </Dropdown.Item>
                ))}

                <hr className="m-0 my-2" />

                {statusOptions.slice(4).map((opt) => (
                  <Dropdown.Item key={opt.value} active={opt.value === status} onClick={() => handleStatusSelect(opt.value)}>
                    {opt.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Stack>
        </Col>

        <Col md={4}>
          <Stack direction="horizontal" className="align-items-center my-1">
            <h6 className="mb-0 me-2">
              <i className="ph ph-flag-checkered align-text-top f-20 text-primary me-1" />
              Action:
            </h6>
            <Dropdown>
              <Dropdown.Toggle variant="light-primary" size="sm">
                <i className="ti ti-menu-2" />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                {actionOptions.slice(0, 3).map((a) => (
                  <Dropdown.Item key={a.value} onClick={() => handleActionSelect(a.value)}>
                    {a.label}
                  </Dropdown.Item>
                ))}

                <hr className="m-0 my-2" />

                {actionOptions.slice(3).map((a) => (
                  <Dropdown.Item key={a.value} onClick={() => handleActionSelect(a.value)}>
                    {a.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Stack>
        </Col>
      </Row>
    </MainCard>
  );
}
