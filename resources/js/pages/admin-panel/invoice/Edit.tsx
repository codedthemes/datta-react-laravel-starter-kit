// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import InvoiceEdit from '@/sections/admin-panel/invoice/Edit';

// ==============================|| ADMIN PANEL - INVOICE EDIT ||============================== //

export default function InvoiceEditPage() {
  return (
    <Row>
      <Col xs={12}>
        <InvoiceEdit />
      </Col>
    </Row>
  );
}
