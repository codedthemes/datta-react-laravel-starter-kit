import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import LayoutCard from '@/sections/layouts/LayoutCard';
import useConfig from '@/hooks/useConfig';
import { MenuOrientation } from '@/config';
// ==============================|| LAYOUT - TAB ||============================== //
export default function TabPage() {

  const { onChangeMenuOrientation } = useConfig();
  useEffect(() => {
    localStorage.removeItem('datta-able-react-ts-config');
    onChangeMenuOrientation(MenuOrientation.TAB);
  }, []);

  return (
    <AppLayout>
      <Head title="Tab" />
      <Row>
        <Col xs={12}>
          <LayoutCard />
        </Col>
      </Row>
    </AppLayout>
  );
}