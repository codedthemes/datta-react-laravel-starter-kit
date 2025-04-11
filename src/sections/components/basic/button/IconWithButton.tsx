// react-bootstrap
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| BUTTON - ICON WITH BUTTON ||============================== //

export default function IconWithButton() {
  return (
    <MainCard title="Button With Icon">
      <Stack direction="horizontal" gap={2} className="flex-wrap">
        <Button>
          <i className="ti ti-thumb-up me-1" />
          Primary
        </Button>
        <Button variant="secondary">
          <i className="ti ti-camera me-1" />
          Secondary
        </Button>
        <Button variant="success">
          <i className="ti ti-circle-check me-1" />
          Success
        </Button>
        <Button variant="danger">
          <i className="ti ti-alert-triangle me-1" />
          Danger
        </Button>
        <Button variant="warning">
          <i className="ti ti-triangle me-1" />
          Warning
        </Button>
        <Button variant="info">
          <i className="ti ti-info-circle me-1" />
          Info
        </Button>
      </Stack>
    </MainCard>
  );
}
