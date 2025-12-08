// react-bootstrap
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// ==============================|| FORM FLOATING - SELECT ||============================== //

export default function Selects() {
  return (
    <MainCard title="Select">
      {/* Basic Floating Select */}
      <FloatingLabel controlId="floatingSelect1" label="Works with selects">
        <Form.Select aria-label="Floating label select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </FloatingLabel>

      <h5 className="mt-3">Validation styles</h5>
      <hr />

      <Row className="g-4">
        {/* ✅ Valid Select */}
        <Col md={6}>
          <FloatingLabel controlId="floatingSelect2" label="Valid select">
            <Form.Select aria-label="Valid select example" isValid defaultValue="1">
              <option value="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </FloatingLabel>
        </Col>

        {/* ❌ Invalid Select */}
        <Col md={6}>
          <FloatingLabel controlId="floatingSelect3" label="Invalid select">
            <Form.Select aria-label="Invalid select example" isInvalid>
              <option value="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">Please select a valid option.</Form.Control.Feedback>
          </FloatingLabel>
        </Col>
      </Row>
    </MainCard>
  );
}
