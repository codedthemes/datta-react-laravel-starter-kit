import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import CreateInvoice from '@/sections/admin-panel/invoice/CreateInvoice';

// ==============================|| ADMIN PANEL - INVOICE CREATE ||============================== //

export default function InvoiceCreatePage() {
  return (
    <AppLayout>
      <Head title="Create" />
      <Row>
        <Col xs={12}>
          <CreateInvoice />
        </Col>
      </Row>
    </AppLayout>
  );
}
