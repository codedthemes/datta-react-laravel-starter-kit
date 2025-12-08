// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import Avatar2 from '@assets/images/user/avatar-2.png';

const subtasks = [
  { id: 1, name: 'Design mockup', date: '22 December, 20' },
  { id: 2, name: 'Software Engineer', date: '01 December, 20' },
  { id: 3, name: 'Photoshop & Illustrator', date: '15 December, 20' },
  { id: 4, name: 'Allocated Resource', date: '28 December, 20' },
  { id: 5, name: 'Financial Controller', date: '20 December, 20' }
];

// ===========================|| DETAILS - DESIGN DETAIL ||=========================== //

export default function DesignDetail() {
  return (
    <MainCard
      title={
        <h5>
          <i className="ph ph-devices align-middle f-24 text-primary" /> #24. Create UI design model
        </h5>
      }
      secondary={
        <Button variant="light-primary" size="sm">
          <i className="ph ph-bell align-middle me-1 " />
          Check in
        </Button>
      }
      bodyClassName="p-0"
    >
      <Card.Body className="border-bottom">
        <p className="m-0">
          A collection of textile samples lay <b>spread out</b> on the table One morning, when <b>Gregor Samsa</b> woke from troubled Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...
        </p>
      </Card.Body>
      <Card.Body className="py-3 border-bottom">
        <Row className="g-1">
          <Col sm={6}>
            <h6 className="mb-0">
              <i className="ph ph-calendar-blank text-primary f-18 align-text-bottom" />
              <span className="f-w-500"> Date : </span>
              28 January, 2020
            </h6>
          </Col>
          <Col sm={6}>
            <h6 className="d-inline-block mb-0 f-w-500">
              <i className="ph ph-chart-bar align-text-bottom f-18 text-primary me-1" /> Priority :
            </h6>{' '}
            <Badge bg="light-danger">Highest</Badge>
          </Col>
          <Col sm={6}>
            <h6 className="d-inline-block mb-0 f-w-500">
              <i className="ph ph-user-circle align-text-bottom f-18 text-primary" /> Assign to :{' '}
            </h6>{' '}
            <Image className="wid-20 me-2" roundedCircle fluid src={Avatar2} alt="Assignee avatar" />
            Joseph William
          </Col>
          <Col sm={6}>
            <h6 className="d-inline-block mb-0 f-w-500">
              <i className="ph ph-timer align-text-bottom f-18 text-primary me-1" /> Due :
            </h6>{' '}
            <Badge bg="light-warning">23 hours</Badge>
          </Col>
        </Row>
      </Card.Body>
      <Card.Body className="border-bottom">
        <h6 className="f-w-500">Overview :</h6>
        <p className="m-0 text-muted">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </Card.Body>
      <Card.Body className="border-bottom">
        <h6 className="f-w-500">What we need :</h6>
        <p className="text-muted mb-md-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <Row className="g-3">
          <Col md={6}>
            <h6 className="f-w-500 m-b-10">
              <span className="wid-25 hei-25 me-2 rounded bg-primary text-white d-inline-flex align-items-center justify-content-center">
                1
              </span>
              Design simple layouts
            </h6>
            <p className="text-muted mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </Col>
          <Col md={6}>
            <h6 className="f-w-500 m-b-10">
              <span className="wid-25 hei-25 me-2 rounded bg-primary text-white d-inline-flex align-items-center justify-content-center">
                2
              </span>
              Make responsive of it
            </h6>
            <p className="text-muted mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </Col>
        </Row>
      </Card.Body>
      <Card.Body className="border-bottom">
        <h6 className="f-w-500">Requirements :</h6>
        <p className="m-0 text-muted">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </Card.Body>
      <Card.Body className="py-3">
        <h6 className="f-w-500 mb-0">Sub task directory:</h6>
      </Card.Body>
      <Card.Body className="table-body p-0">
        <Table hover responsive className="mb-0 border-top">
          <thead>
            <tr>
              <th scope="col">
                <Form.Check type="checkbox" label="Task" aria-label="select all tasks" />
              </th>
              <th scope="col">Due Date</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {subtasks.map((task) => (
              <tr key={task.id}>
                <td>
                  <Form.Check type="checkbox" label={<h6 className="mb-0">{task.name}</h6>} aria-label={`Select subtask ${task.name}`} />
                </td>
                <td>
                  <i className="ph ph-calendar-blank align-text-bottom f-18 text-primary" />
                  {` ${task.date}`}
                </td>
                <td className="text-muted">The standard Lorem Ipsum</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </MainCard>
  );
}
