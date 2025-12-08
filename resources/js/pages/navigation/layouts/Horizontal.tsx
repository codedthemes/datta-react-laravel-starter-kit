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

// ==============================|| LAYOUT - HORIZONTAL ||============================== //

export default function HorizontalPage() {
  
  const { onChangeMenuOrientation } = useConfig();
  useEffect(() => {
    localStorage.removeItem('datta-able-react-ts-config');
    onChangeMenuOrientation(MenuOrientation.HORIZONTAL);
  }, []);

  return (
    <AppLayout>
      <Head title="HORIZONTAL" />
      <Row>
        <Col xs={12}>
          <LayoutCard />
        </Col>
      </Row>
    </AppLayout>
  );
}
