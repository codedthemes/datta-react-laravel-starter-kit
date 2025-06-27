import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

interface InfoField {
  label: string;
  value: string;
  type: string;
}

// profile data
const profileData: InfoField[] = [
  { label: 'Full Name', value: 'Lary Doe', type: 'text' },
  { label: 'Gender', value: 'Male', type: 'radio' },
  { label: 'Birth Date', value: '1994-12-16', type: 'date' },
  { label: 'Marital Status', value: 'Unmarried', type: 'select' },
  {
    label: 'Location',
    value: '4289 Calvin Street, Baltimore, near MD Tower Maryland, Maryland (21201)',
    type: 'textarea'
  }
];

// ==============================|| PROFILE - PERSONAL ||============================== //

export default function Personal() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <MainCard bodyClassName="p-0">
      <Card.Body className="d-flex align-items-center justify-content-between">
        <h5 className="mb-0">Personal details</h5>
        <Button variant="primary" size="sm" className="rounded m-0 float-end" onClick={toggleCollapse}>
          <i className="ph ph-note-pencil align-middle" /> {isCollapsed}
        </Button>
      </Card.Body>
      <Collapse in={isCollapsed}>
        <Card.Body className="border-top">
          <Form>
            {profileData.map((item, index) => (
              <Row key={index} className="mb-3 align-items-center col-form-label">
                <Col sm={3} className="font-weight-bolder">
                  {item.label}
                </Col>
                <Col sm={9} className="text-muted">
                  {item.type === 'textarea'
                    ? item.value.split(', ').map((line, idx) => (
                        <p key={idx} className="mb-0">
                          {line}
                        </p>
                      ))
                    : item.value}
                </Col>
              </Row>
            ))}
          </Form>
        </Card.Body>
      </Collapse>
      <Collapse in={!isCollapsed}>
        <Card.Body className="border-top">
          <Form>
            {profileData.map((item, index) => (
              <Row key={index} className=" align-items-center mb-3">
                <Col sm={3} className="font-weight-bolder">
                  {item.label}
                </Col>
                <Col sm={9}>
                  {item.type === 'text' && <Form.Control type="text" defaultValue={item.value} />}
                  {item.type === 'date' && <Form.Control type="date" defaultValue={item.value} />}
                  {item.type === 'radio' && (
                    <>
                      <Form.Check type="radio" name="gender" label="Male" defaultChecked={item.value === 'Male'} />
                      <Form.Check type="radio" name="gender" label="Female" defaultChecked={item.value === 'Female'} />
                    </>
                  )}
                  {item.type === 'select' && (
                    <Form.Control as="select" defaultValue={item.value}>
                      <option>Married</option>
                      <option>Unmarried</option>
                    </Form.Control>
                  )}
                  {item.type === 'textarea' && <Form.Control as="textarea" defaultValue={item.value} />}
                </Col>
              </Row>
            ))}
            <Row className="align-items-center">
              <Col sm={3}></Col>
              <Col sm={9}>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Collapse>
    </MainCard>
  );
}
