// react-bootstrap
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// ==============================|| FORM FLOATING - LABELS ||============================== //

export default function FloatingLabels() {
  return (
    <MainCard title="Floating Labels">
      {/* --- Form Controls --- */}
      <h5>Form Controls</h5>
      <hr />
      <Form>
        <Row className="g-4">
          <Col md={6}>
            <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>

          <Col md={6}>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Col>
        </Row>
      </Form>

      {/* --- Default Value --- */}
      <h5 className="mt-3">Default Value</h5>
      <hr />
      <Row className="g-4">
        <Col md={6}>
          <FloatingLabel controlId="floatingEmailDefault" label="Input with value">
            <Form.Control type="email" placeholder="Email" defaultValue="test@example.com" />
          </FloatingLabel>
        </Col>

        <Col md={6}>
          <FloatingLabel controlId="floatingPasswordDefault" label="Password">
            <Form.Control type="password" placeholder="Password" defaultValue="" />
          </FloatingLabel>
        </Col>
      </Row>

      {/* --- Validation Styles --- */}
      <h5 className="mt-3">Validation Styles</h5>
      <hr />
      <Row className="g-4">
        <Col md={6}>
          <FloatingLabel controlId="floatingEmailValid" label="Valid input">
            <Form.Control type="email" placeholder="Email" defaultValue="test@example.com" isValid />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </FloatingLabel>
        </Col>

        <Col md={6}>
          <FloatingLabel controlId="floatingEmailInvalid" label="Invalid input">
            <Form.Control type="email" placeholder="Email" defaultValue="test@example.com" isInvalid />
            <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
          </FloatingLabel>
        </Col>
      </Row>
    </MainCard>
  );
}
