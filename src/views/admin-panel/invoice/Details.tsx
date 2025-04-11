// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import InvoiceDetails from 'sections/admin-panel/invoice/detailes/Details';
import InvoiceDetailsCard from 'sections/admin-panel/invoice/detailes/DetailsCard';

// ==============================|| ADMIN PANEL - INVOICE DETAILS ||============================== //

export default function InvoiceDetailsPage() {
  return (
    <Row>
      <Col sm={12}>
        <InvoiceDetailsCard />
      </Col>
      <Col sm={12}>
        <InvoiceDetails />
      </Col>
    </Row>
  );
}
