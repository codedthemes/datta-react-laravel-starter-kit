// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import ColumnResizing from 'sections/tables/react-table/ColumnResizing';

// ==============================|| REACT TABLE - COLUMN RESIZING ||============================== //

export default function ColumnResizingPage() {
  return (
    <Row>
      <Col xs={12}>
        <ColumnResizing />
      </Col>
    </Row>
  );
}
