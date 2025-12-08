// react-bootstrap
import Stack from 'react-bootstrap/Stack';

// third-party
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

// project-imports
import MainCard from '@/components/MainCard';

// ===============================|| BOOTSTRAP SWITCH - COLORS ||============================== //

const MyComponent = () => {
  return (
    <MainCard title="Colors" subheader="Bootstrap Switch Button implements all standard bootstrap 4 button colors.">
      <Stack direction="horizontal" gap={2} className="flex-wrap">
        <BootstrapSwitchButton checked={true} />
        <BootstrapSwitchButton checked={true} onstyle="secondary" />
        <BootstrapSwitchButton checked={true} onstyle="success" />
        <BootstrapSwitchButton checked={true} onstyle="danger" />
        <BootstrapSwitchButton checked={true} onstyle="warning" />
        <BootstrapSwitchButton checked={true} onstyle="info" />
        <BootstrapSwitchButton checked={true} onstyle="light" />
        <BootstrapSwitchButton checked={true} onstyle="dark" />
      </Stack>
    </MainCard>
  );
};

export default MyComponent;
