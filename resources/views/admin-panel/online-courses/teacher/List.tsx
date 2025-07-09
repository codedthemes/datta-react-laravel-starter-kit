// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import TeacherList from 'sections/admin-panel/online-courses/teacher/List';

// ==============================|| TEACHER - LIST ||============================== //

export default function TeacherListPage() {
  return (
    <Row>
      <Col xs={12}>
        <TeacherList />
      </Col>
    </Row>
  );
}
