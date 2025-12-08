import { useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// project-imports
import MainCard from '@/components/MainCard';

// ==============================|| FORM VALIDATION ||============================== //

export default function FormValidation() {
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;

    // Prevent submit if invalid or passwords don’t match
    if (form.checkValidity() === false || password !== confirmPassword) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <MainCard title="Form Validation">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* File Upload */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Upload any file:
          </Col>
          <Col lg={6}>
            <Form.Control type="file" accept=".jpg,.png,.pdf" required />
            <Form.Control.Feedback type="invalid">Please upload a file.</Form.Control.Feedback>
          </Col>
        </Row>

        {/* Color Picker */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Color Picker:
          </Col>
          <Col lg={6}>
            <Form.Control type="color" name="color" required />
            <Form.Text className="text-muted">7-Character Hexadecimal (e.g., #f7f7f7)</Form.Text>
          </Col>
        </Row>

        {/* Date */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Date:
          </Col>
          <Col lg={6}>
            <Form.Control type="date" required />
            <Form.Control.Feedback type="invalid">Please fill out this field.</Form.Control.Feedback>
            <Form.Text className="text-muted">YYYY-MM-DD</Form.Text>
          </Col>
        </Row>

        {/* Time */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Time:
          </Col>
          <Col lg={6}>
            <Form.Control type="time" required />
            <Form.Control.Feedback type="invalid">Please fill out this field.</Form.Control.Feedback>
            <Form.Text className="text-muted">HH:MM (24-hour time)</Form.Text>
          </Col>
        </Row>

        {/* Month */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Month:
          </Col>
          <Col lg={6}>
            <Form.Control type="month" required />
            <Form.Control.Feedback type="invalid">Please fill out this field.</Form.Control.Feedback>
            <Form.Text className="text-muted">YYYY-MM</Form.Text>
          </Col>
        </Row>

        {/* Email */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Email:
          </Col>
          <Col lg={6}>
            <Form.Control type="email" required />
            <Form.Control.Feedback type="invalid">Enter a valid email address.</Form.Control.Feedback>
          </Col>
        </Row>

        {/* URL */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            URL:
          </Col>
          <Col lg={6}>
            <Form.Control type="url" required />
            <Form.Control.Feedback type="invalid">Enter a valid URL.</Form.Control.Feedback>
          </Col>
        </Row>

        {/* URL without TLD */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            URL without TLD allowed:
          </Col>
          <Col lg={6}>
            <Form.Control
              type="url"
              pattern="https?://.+" // allows localhost or IPs
              placeholder="http://localhost"
              required
            />
            <Form.Control.Feedback type="invalid">Enter a valid URL.</Form.Control.Feedback>
          </Col>
        </Row>

        {/* Number */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Number:
          </Col>
          <Col lg={6}>
            <Form.Control type="number" required />
            <Form.Control.Feedback type="invalid">Enter a number.</Form.Control.Feedback>
          </Col>
        </Row>

        {/* Number (no decimals) */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Number (no decimals):
          </Col>
          <Col lg={6}>
            <Form.Control type="number" step="1" required />
            <Form.Control.Feedback type="invalid">Enter a whole number.</Form.Control.Feedback>
          </Col>
        </Row>

        {/* Number with Min and Max */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Number with Min and Max:
          </Col>
          <Col lg={6}>
            <Form.Control type="number" min={2} max={7} required />
            <Form.Control.Feedback type="invalid">Must be between 2 and 7.</Form.Control.Feedback>
          </Col>
        </Row>

        {/* Telephone */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Telephone Number:
          </Col>
          <Col lg={6}>
            <Form.Control type="tel" pattern="\d{3}-\d{3}-\d{4}" placeholder="123-456-7890" required />
            <Form.Control.Feedback type="invalid">Format: 123-456-7890</Form.Control.Feedback>
          </Col>
        </Row>

        {/* Password */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Password:
          </Col>
          <Col lg={6}>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
            <Form.Control.Feedback type="invalid">
              At least 6 characters, with 1 uppercase, 1 lowercase, and 1 number.
            </Form.Control.Feedback>
          </Col>
        </Row>

        {/* Confirm Password */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Confirm Password:
          </Col>
          <Col lg={6}>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              isInvalid={validated && password !== confirmPassword}
            />
            <Form.Control.Feedback type="invalid">Passwords must match.</Form.Control.Feedback>
          </Col>
        </Row>

        {/* Text Min/Max length */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Text (3-9 chars):
          </Col>
          <Col lg={6}>
            <Form.Control type="text" minLength={3} maxLength={9} required />
            <Form.Control.Feedback type="invalid">Must be between 3 and 9 characters.</Form.Control.Feedback>
          </Col>
        </Row>

        {/* Select */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Select:
          </Col>
          <Col lg={6}>
            <Form.Select required>
              <option value="">Select</option>
              <option value="harry_potter">Harry Potter</option>
              <option value="lotr">Lord of the Rings</option>
              <option value="star_wars">Star Wars</option>
              <option value="star_trek">Star Trek</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">Please select a value.</Form.Control.Feedback>
          </Col>
        </Row>

        {/* Radio */}
        <Row className="mb-3">
          <Col lg={4} className="col-form-label text-lg-end">
            Radio Buttons:
          </Col>
          <Col lg={6}>
            <Form.Check type="radio" name="radioGroup" label="Yes" id="radioYes" required />
            <Form.Check type="radio" name="radioGroup" label="No" id="radioNo" required />
            <Form.Control.Feedback type="invalid">Please select an option.</Form.Control.Feedback>
          </Col>
        </Row>

        {/* Checkbox */}
        <Row className="mb-3 align-items-center">
          <Col lg={4} className="col-form-label text-lg-end">
            Checkboxes:
          </Col>
          <Col lg={6}>
            <Form.Check type="checkbox" required label="Default checkbox" feedback="This field is required." feedbackType="invalid" />
          </Col>
        </Row>

        {/* Submit */}
        <Row>
          <Col lg={4}></Col>
          <Col lg={6}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </MainCard>
  );
}
