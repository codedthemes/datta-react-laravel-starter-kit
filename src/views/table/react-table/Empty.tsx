// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project imports
import EmptyReactTable from 'sections/tables/react-table/EmptyTable';

// ==============================|| REACT TABLE - EMPTY ||============================== //

export default function EmptyReactTablePage() {
  return (
    <Row>
      <Col xs={12}>
        <EmptyReactTable />
      </Col>
    </Row>
  );
}
