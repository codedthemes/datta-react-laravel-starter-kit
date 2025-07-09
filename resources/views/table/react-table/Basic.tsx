// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import BasicTable from 'sections/tables/react-table/basic/BasicTable';
import FooterTable from 'sections/tables/react-table/basic/FooterTable';
import StripedTable from 'sections/tables/react-table/basic/StripedTable';

// ==============================|| REACT TABLE - BASIC TABLE ||============================== //

export default function BasicTablePage() {
  return (
    <Row>
      <Col xl={6} md={12}>
        <BasicTable />
      </Col>
      <Col xl={6} md={12}>
        <StripedTable />
      </Col>
      <Col sm={12}>
        <FooterTable />
      </Col>
    </Row>
  );
}
