import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import BasicTable from '@/sections/tables/react-table/BasicTable';

// ==============================|| REACT TABLE - BASIC TABLE ||============================== //

export default function BasicTablePage() {
  return (
    <AppLayout>
      <Head title="Basic table" />
      <Row>
        <Col xl={6} md={12}>
          <BasicTable title="Basic Table" />
        </Col>
        <Col xl={6} md={12}>
          <BasicTable title="Striped Table" striped />
        </Col>
        <Col sm={12}>
          <BasicTable title="Footer" footer />
        </Col>
      </Row>
    </AppLayout>
  );
}
