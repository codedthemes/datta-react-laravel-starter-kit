// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| STUDENT - ADD ||============================== //

export default function StudentAddPage() {
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
                <Form.Label>Registration Date</Form.Label>
                <Form.Control type="date" />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>ID Number</Form.Label>
                <Form.Control type="number" placeholder="Enter ID number" />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>Course</Form.Label>
                <Form.Select>
                  <option>Course</option>
                  <option>Course 1</option>
                  <option>Course 2</option>
                </Form.Select>
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
                <Form.Label>Parents Name</Form.Label>
                <Form.Control type="text" placeholder="Enter parents name" />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Form.Label>Parents Mobile Number</Form.Label>
                <Form.Control type="phone" placeholder="Enter parents mobile number" />
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
                <Form.Label>Blood Group</Form.Label>
                <Form.Control type="text" placeholder="Enter blood group" />
              </div>
            </Col>
            <Col md={12}>
              <div className="mb-3">
                <Form.Label>Shipping Address</Form.Label>
                <Form.Control as="textarea" rows={2} type="text" placeholder="Enter address" />
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
