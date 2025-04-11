// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import GroupingTable from 'sections/tables/react-table/grouping/GroupingTable';

// ==============================|| REACT TABLE - GROUPING  ||============================== //

export default function GroupingTablePage() {
  return (
    <Row>
      <Col>
        <GroupingTable />
      </Col>
    </Row>
  );
}
