// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import SortingTable from 'sections/tables/react-table/sorting/SortingTable';

// ==============================|| REACT TABLE - SORTING  ||============================== //

export default function SortingTablePage() {
  return (
    <Row>
      <Col>
        <SortingTable />
      </Col>
    </Row>
  );
}
