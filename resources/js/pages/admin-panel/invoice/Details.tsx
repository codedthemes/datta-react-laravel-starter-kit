import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import DetailsInvoice from '@/sections/admin-panel/invoice/DetailsInvoice';

// ==============================|| ADMIN PANEL - INVOICE DETAILS ||============================== //

export default function InvoiceDetailsPage() {
  return (
    <AppLayout>
      <Head title="Invoice details" />
      <Row>
        <Col xs={12}>
          <DetailsInvoice />
        </Col>
      </Row>
    </AppLayout>
  );
}
