import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
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

// field data
const infoFields: InfoField[] = [
  { label: 'Occupation', value: 'Designer', type: 'text' },
  { label: 'Skills', value: 'C#, Javascript, Scss', type: 'text' },
  { label: 'Jobs', value: 'Phoenixcoded', type: 'text' }
];

const editFields: InfoField[] = [
  { label: 'Occupation', value: 'Designer', type: 'text' },
  { label: 'Email Address', value: 'Demo@domain.com', type: 'text' }
];

const skillsOptions: string[] = ['C#', 'Javascript', 'Scss', 'Html'];

// ==============================|| PROFILE - OTHER ||============================== //

export default function Other() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <MainCard bodyClassName="p-o">
      <Card.Body className="d-flex align-items-center justify-content-between">
        <h5 className="mb-0">Other Information</h5>
        <Button variant="primary" size="sm" className="rounded m-0 float-end" onClick={toggleCollapse}>
          <i className="ph ph-note-pencil align-middle" />
        </Button>
      </Card.Body>
      <Collapse in={isCollapsed}>
        <Card.Body className="border-top">
          <Form>
            {infoFields.map((item, index) => (
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
            {editFields.map((item, index) => (
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
              <Col sm={3} className="col-form-label font-weight-bolder">
                Jobs
              </Col>
              <Col sm={9}>
                {skillsOptions.map((skill, index) => (
                  <Form.Check key={index} type="checkbox" label={skill} value={skill} />
                ))}
              </Col>
            </Row>
            <Row className="mb-3 align-items-center">
              <Col sm={3} />
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
