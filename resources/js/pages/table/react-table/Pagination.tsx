import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import PaginationTable from '@/sections/tables/react-table/PaginationTable';

// ==============================|| REACT TABLE - PAGINATION  ||============================== //

export default function PaginationTablePage() {
  return (
    <AppLayout>
      <Head title="Pagination table" />
    <Row>
      <Col xs={12}>
        <PaginationTable title="Pagination at Top" position="top" />
      </Col>
      <Col xs={12}>
        <PaginationTable title="Pagination at Bottom" position="bottom" />
      </Col>
    </Row>
    </AppLayout>
  );
}
