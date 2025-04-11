// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import BasicTable from 'sections/table/bootstrap-table/basic-table/BasicTable';
import ContextualTable from 'sections/table/bootstrap-table/basic-table/ContextualTable';
import DarkTable from 'sections/table/bootstrap-table/basic-table/DarkTable';
import HoverTable from 'sections/table/bootstrap-table/basic-table/HoverTable';
import StripedTable from 'sections/table/bootstrap-table/basic-table/StripedTable';

// ==============================|| BOOTSTRAP TABLE - BASIC TABLE ||============================== //

export default function BasicTablePage() {
  return (
    <Row>
      <Col sm={6}>
        <BasicTable />
      </Col>
      <Col sm={6}>
        <HoverTable />
      </Col>
      <Col sm={6}>
        <DarkTable />
      </Col>
      <Col sm={6}>
        <StripedTable />
      </Col>
      <Col>
        <ContextualTable />
      </Col>
    </Row>
  );
}
