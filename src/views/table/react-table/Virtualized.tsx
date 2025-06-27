// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import VirtualizedInfiniteScrollTable from 'sections/tables/react-table/virtualized/VirtualizedInfiniteScrollTable';
import VirtualizedRowsTable from 'sections/tables/react-table/virtualized/VirtualizedRowsTable';

// ==============================|| REACT TABLE - VIRTUALIZED  ||============================== //

export default function Virtualized() {
  return (
    <Row>
      <Col xs={12}>
        <VirtualizedInfiniteScrollTable />
        <VirtualizedRowsTable />
      </Col>
    </Row>
  );
}
