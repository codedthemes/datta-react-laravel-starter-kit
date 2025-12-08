import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import SortingTable from '@/sections/tables/react-table/SortingTable';

// ==============================|| REACT TABLE - SORTING  ||============================== //

export default function SortingTablePage() {
  return (
    <AppLayout>
      <Head title="Sorting table" />
      <Row>
        <Col>
        <SortingTable title="Sorting Table" />
        </Col>
      </Row>
    </AppLayout>
  );
}
