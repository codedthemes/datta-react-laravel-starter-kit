import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import LayoutCard from '@/sections/layouts/LayoutCard';

export default function TabPage() {
  return (
    <AppLayout>
      <Head title="VERTICAL" />
      <Row>
        <Col xs={12}>
          <LayoutCard />
        </Col>
      </Row>
    </AppLayout>
  );
}