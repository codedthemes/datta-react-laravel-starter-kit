// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import StickyTable from 'sections/tables/react-table/StickyHeader';

// ==============================|| REACT TABLE - STICKY HEADER ||============================== //

export default function StickyTablePage() {
  return (
    <Row>
      <Col xs={12}>
        <StickyTable />
      </Col>
    </Row>
  );
}
