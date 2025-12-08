// react-bootstrap
import Stack from 'react-bootstrap/Stack';

// third-party
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

// project-imports
import MainCard from '@/components/MainCard';

// ===============================|| BOOTSTRAP SWITCH - DARK THEMES COLORS ||============================== //

export default function DarkThemesColors() {
  return (
    <MainCard
      className="bg-dark text-white"
      title={<p className="text-white mb-0">Dark Themes Colors</p>}
      subheader={<div className="text-white">Bootstrap Switch Button colors look great on dark backgrounds. </div>}
    >
      <Stack direction="horizontal" gap={2} className="flex-wrap">
        <BootstrapSwitchButton checked={true} />
        <BootstrapSwitchButton checked={true} onstyle="secondary" />
        <BootstrapSwitchButton checked={true} onstyle="success" />
        <BootstrapSwitchButton checked={true} onstyle="danger" />
        <BootstrapSwitchButton checked={true} onstyle="warning" />
        <BootstrapSwitchButton checked={true} onstyle="info" />
        <BootstrapSwitchButton checked={true} onstyle="light" />
        <BootstrapSwitchButton checked={true} onstyle="dark" style="border" />
      </Stack>
    </MainCard>
  );
}
