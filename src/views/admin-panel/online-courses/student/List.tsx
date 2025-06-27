// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import StudentList from 'sections/admin-panel/online-courses/student/List';

// ==============================|| STUDENT - LIST ||============================== //

export default function StudentListPage() {
  return (
    <Row>
      <Col xs={12}>
        <StudentList />
      </Col>
    </Row>
  );
}
