// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import FilteringTable from 'sections/tables/react-table/FilteringTable';

// ==============================|| REACT TABLE - FILTERING  ||============================== //

export default function FilteringTablePage() {
  return (
    <Row>
      <Col>
        <FilteringTable />
      </Col>
    </Row>
  );
}
