import MainCard from 'components/MainCard';
import React, { useState } from 'react';

// react-bootstrap
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// ==============================|| PROFILE - CHANGE PASSWORD ||============================== //

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <>
      <Alert variant="warning">
        <h5 className="alert-heading">
          <i className="ti ti-alert-circle me-2 f-20" />
          Alert!
        </h5>
        <p>Your Password will expire every 3 months. Please change it periodically.</p>
        <hr />
        <p className="mb-0">Do not share your password</p>
      </Alert>
      <MainCard
        title={
          <h5>
            <i className="ti ti-lock me-2 f-20 text-primary" />
            <span>Change Password</span>
          </h5>
        }
        footer={
          <Stack direction="horizontal" className="justify-content-end">
            <Button variant="danger" type="submit">
              Change Password
            </Button>
            <Button variant="outline-dark" className="ms-2" type="button">
              Clear
            </Button>
          </Stack>
        }
      >
        <Form>
          <Row>
            <Col sm={6}>
              <Form.Group className="mb-3 ">
                <Form.Label>
                  Current Password <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter Your Current password"
                />
                <Form.Text className="text-muted">
                  Forgot password? <a href="#!">Click here</a>
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  New Password <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter New password"
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Confirm Password <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter your password again"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </MainCard>
    </>
  );
}
