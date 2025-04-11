// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import InlineSwitch from 'sections/forms/form-element/switch/InlineSwitch';
import SizingSwitch from 'sections/forms/form-element/switch/SizingSwitch';
import SwitchDefault from 'sections/forms/form-element/switch/SwitchDefault';
import SwitchHorizontalForm from 'sections/forms/form-element/switch/SwitchHorizontalForm';

// ==============================|| FORM ELEMENTS - SWITCH ||============================== //

export default function SwitchPage() {
  return (
    <Row>
      <Col xs={12}>
        <SwitchDefault />
      </Col>
      <Col lg={6}>
        <InlineSwitch />
        <SwitchHorizontalForm />
      </Col>
      <Col lg={6}>
        <SizingSwitch />
      </Col>
    </Row>
  );
}
