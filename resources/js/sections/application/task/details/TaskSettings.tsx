import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

// project-imports
import MainCard from '@/components/MainCard';

const DEFAULT_SETTINGS = {
  publishAfterSave: true,
  allowComments: true,
  allowEdit: true,
  useTaskTimer: false,
  autoSaving: false,
  allowAttachments: false
};

const SETTINGS_LIST = [
  { id: 'publishAfterSave', label: 'Publish after save' },
  { id: 'allowComments', label: 'Allow comments' },
  { id: 'allowEdit', label: 'Allow users to edit the task' },
  { id: 'useTaskTimer', label: 'Use task timer' },
  { id: 'autoSaving', label: 'Auto saving' },
  { id: 'allowAttachments', label: 'Allow attachments' }
];

// ===========================|| DETAILS - TASK SETTINGS ||=========================== //

export default function TaskSettings() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  const handleToggle = (key: keyof typeof DEFAULT_SETTINGS) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <MainCard title="Task settings" bodyClassName="p-0">
      <ListGroup variant="flush">
        {SETTINGS_LIST.map((item) => (
          <ListGroup.Item key={item.id}>
            <Form.Check
              type="switch"
              id={item.id}
              label={item.label}
              checked={settings[item.id as keyof typeof DEFAULT_SETTINGS]}
              onChange={() => handleToggle(item.id as keyof typeof DEFAULT_SETTINGS)}
            />
          </ListGroup.Item>
        ))}
        <ListGroup.Item>
          <Button variant="light-secondary" size="sm">
            Reset
          </Button>
          <Button variant="light-primary" size="sm" className="ms-2">
            Save
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </MainCard>
  );
}
