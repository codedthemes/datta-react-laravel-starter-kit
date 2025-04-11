// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| TEACHER - ADD ||============================== //

export default function TeacherAddPage() {
  return (
    <Row>
      <Col class="col-12">
        <MainCard title="Basic Information">
          <Row>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>Joining Date</Form.Label>
                <Form.Control type="date" />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Enter confirm password" />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="phone" placeholder="Enter mobile number" />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select>
                  <option>Female</option>
                  <option>Male</option>
                </Form.Select>
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>Designation</Form.Label>
                <Form.Control type="text" placeholder="Enter designation" />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Select>
                  <option>Department</option>
                  <option>Department 1</option>
                  <option>Department 2</option>
                </Form.Select>
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>Education</Form.Label>
                <Form.Control type="text" placeholder="Enter education" />
              </div>
            </Col>
            <Col md={12}>
              <div className="mb-3">
                <Form.Control type="file" />
              </div>
            </Col>
            <Col md={12} className="text-end">
              <Button>Submit</Button>
            </Col>
          </Row>
        </MainCard>
      </Col>
    </Row>
  );
}
