// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import Setting from 'sections/admin-panel/membership/Setting';

// =============================|| MEMBERSHIP - SETTING ||============================== //

export default function SettingMainPage() {
  return (
    <Row>
      <Col xs={12}>
        <Setting />
      </Col>
    </Row>
  );
}
