// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import InvoiceListCard from 'sections/admin-panel/invoice/list/ListCard';
import ListTable from 'sections/admin-panel/invoice/list/ListTable';
import InvoiceReceiveableCard from 'sections/admin-panel/invoice/list/ReceiveableCard';

// ==============================|| ADMIN PANEL - INVOICE LIST ||============================== //

export default function InvoiceListPage() {
  return (
    <Row>
      <Col xxl={8}>
        <InvoiceListCard />
      </Col>
      <Col xxl={4}>
        <InvoiceReceiveableCard />
      </Col>
      <Col xs={12}>
        <ListTable />
      </Col>
    </Row>
  );
}
