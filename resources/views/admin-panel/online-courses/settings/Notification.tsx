// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import Notification from 'sections/admin-panel/online-courses/setting/Notification';

// ==============================|| SETTING - NOTIFICATION ||============================== //

export default function NotificationPage() {
  return (
    <Row>
      <Col xs={12}>
        <Notification />
      </Col>
    </Row>
  );
}
