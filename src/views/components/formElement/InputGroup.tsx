// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import BasicExample from 'sections/forms/form-element/input-group/Basicexample';
import InputgroupOptions from 'sections/forms/form-element/input-group/InputGroupOptions';
import InputGroupSizing from 'sections/forms/form-element/input-group/InputGroupSizing';

// =============================|| FORM-ELEMENTS - INPUT GROUP ||============================== //

export default function InputGroupPage() {
  return (
    <Row>
      <Col md={6}>
        <BasicExample />
        <InputGroupSizing />
      </Col>

      <Col md={6}>
        <InputgroupOptions />
      </Col>
    </Row>
  );
}
