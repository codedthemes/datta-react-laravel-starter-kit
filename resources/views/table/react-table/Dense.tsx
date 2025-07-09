// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import DenseTable from 'sections/tables/react-table/DenseTable';

// ==============================|| REACT TABLE - DENSE  ||============================== //

export default function DenseTablePage() {
  return (
    <Row>
      <Col>
        <DenseTable />
      </Col>
    </Row>
  );
}
