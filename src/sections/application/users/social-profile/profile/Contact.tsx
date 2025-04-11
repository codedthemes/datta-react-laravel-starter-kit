import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

interface InfoField {
  label: string;
  value: string;
  type: string;
}

const contactFields: InfoField[] = [
  { label: 'Mobile Number', value: '+1 9999-999-999', type: 'text' },
  { label: 'Email Address', value: 'Demo@domain.com', type: 'text' },
  { label: 'Twitter', value: '@phonixcoded', type: 'text' },
  { label: 'Skype', value: '@phonixcoded demo', type: 'text' }
];

// ==============================|| PROFILE - CONTACT ||============================== //

export default function Contact() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between">
        <h5 className="mb-0">Contact Information</h5>
        <Button variant="primary" size="sm" className="rounded m-0 float-end" onClick={toggleCollapse}>
          <i className="ti ti-edit text-white f-20" />
        </Button>
      </Stack>
      <Collapse in={isCollapsed}>
        <Card.Body className="border-top">
          <Form>
            {contactFields.map((item, index) => (
              <Row key={index} className="mb-3 align-items-center">
                <Col sm={3} className="col-form-label font-weight-bolder">
                  {item.label}
                </Col>
                <Col sm={9}>{item.value}</Col>
              </Row>
            ))}
          </Form>
        </Card.Body>
      </Collapse>
      <Collapse in={!isCollapsed}>
        <Card.Body className="border-top">
          <Form>
            {contactFields.map((item, index) => (
              <Row key={index} className="mb-3 align-items-center">
                <Col sm={3} className="col-form-label font-weight-bolder">
                  {item.label}
                </Col>
                <Col sm={9}>
                  <Form.Control type={item.type} defaultValue={item.value} />
                </Col>
              </Row>
            ))}
            <Row className="mb-3 align-items-center">
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
