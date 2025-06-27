// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import ColumnVisibility from 'sections/tables/react-table/ColumnVisibility';

// ==============================|| REACT TABLE - COLUMN VISIBILITY ||============================== //

export default function ColumnVisibilityPage() {
  return (
    <Row>
      <Col xs={12}>
        <ColumnVisibility />
      </Col>
    </Row>
  );
}
