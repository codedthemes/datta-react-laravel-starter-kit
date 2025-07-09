// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import SubTaskList from 'sections/application/task/list/SubTaskList';
import TaskList from 'sections/application/task/list/TaskList';

// ==============================|| BOOTSTRAP TABLE - BASIC ||============================== //

export default function BasicTablePage() {
  return (
    <Row>
      <Col sm={12}>
        <TaskList />
      </Col>
      <Col sm={12}>
        <SubTaskList />
      </Col>
    </Row>
  );
}
