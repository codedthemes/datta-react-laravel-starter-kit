// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import TeacherApply from 'sections/admin-panel/online-courses/teacher/Apply';

// ==============================|| TEACHER - APPLY ||============================== //

export default function TeacherApplyPage() {
  return (
    <Row>
      <Col xs={12}>
        <TeacherApply />;
      </Col>
    </Row>
  );
}
