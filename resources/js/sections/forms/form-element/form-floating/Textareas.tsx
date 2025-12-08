// react-bootstrap
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// ==============================|| FORM FLOATING - TEXTAREA ||============================== //

export default function TextAreas() {
  return (
    <MainCard title="Textareas">
      {/* --- Default & Custom Height --- */}
      <Row className="g-4">
        <Col md={6}>
          <h5>Default style</h5>
          <hr />
          <FloatingLabel controlId="floatingTextareaDefault" label="Comments">
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
        </Col>

        <Col md={6}>
          <h5>Custom height</h5>
          <hr />
          <FloatingLabel controlId="floatingTextareaCustom" label="Comments">
            <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
          </FloatingLabel>
        </Col>
      </Row>

      {/* --- Validation Styles --- */}
      <h5 className="mt-3">Validation styles</h5>
      <hr />
      <Row className="g-4">
        <Col md={6}>
          <FloatingLabel controlId="floatingTextareaValid" label="Comments">
            <Form.Control as="textarea" placeholder="Leave a comment here" defaultValue="Valid textarea" isValid />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </FloatingLabel>
        </Col>

        <Col md={6}>
          <FloatingLabel controlId="floatingTextareaInvalid" label="Comments">
            <Form.Control as="textarea" placeholder="Leave a comment here" defaultValue="Invalid textarea" isInvalid />
            <Form.Control.Feedback type="invalid">Please provide a valid comment.</Form.Control.Feedback>
          </FloatingLabel>
        </Col>
      </Row>
    </MainCard>
  );
}
