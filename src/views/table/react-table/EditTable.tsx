// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import EditableCellPage from 'sections/tables/react-table/edit-table/EditableCell';
import EditTablePage from 'sections/tables/react-table/edit-table/EditableRow';

// ==============================|| REACT TABLE - EDITABLE  ||============================== //

export default function EditTable() {
  return (
    <Row>
      <Col xs={12}>
        <EditTablePage />
        <EditableCellPage />
      </Col>
    </Row>
  );
}
