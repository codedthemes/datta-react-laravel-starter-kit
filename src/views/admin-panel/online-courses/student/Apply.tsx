// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import StudentApply from 'sections/admin-panel/online-courses/student/Apply';

// ==============================|| STUDENT - APPLY ||============================== //

export default function StudentApplyPage() {
  return (
    <Row>
      <Col xs={12}>
        <StudentApply />
      </Col>
    </Row>
  );
}
