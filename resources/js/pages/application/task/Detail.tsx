import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import AssignedUsers from '@/sections/application/task/details/AssignedUsers';
import AttachedFiles from '@/sections/application/task/details/AttachedFiles';
import Comments from '@/sections/application/task/details/Comments';
import CountdownTimer from '@/sections/application/task/details/CountdownTimer';
import DesignDetail from '@/sections/application/task/details/DesignDetail';
import EditTaskDetail from '@/sections/application/task/details/EditTaskDetail';
import TaskDetail from '@/sections/application/task/details/TaskDetail';
import TaskSettings from '@/sections/application/task/details/TaskSettings';

// ===========================|| TASK - DETAIL ||=========================== //

export default function TaskDetailPage() {
  return (
    <AppLayout>
      <Head title="Task detail" />
      <Row>
        <Col xxl={3} xl={4} lg={12}>
          <Row>
            <Col lg={12}>
              <CountdownTimer />
            </Col>
            <Col md={6} xl={12}>
              <TaskDetail />
            </Col>
            <Col md={6} xl={12}>
              <AttachedFiles />
            </Col>
            <Col md={6} xl={12}>
              <AssignedUsers />
            </Col>
            <Col md={6} xl={12}>
              <TaskSettings />
            </Col>
          </Row>
        </Col>
        <Col xxl={9} xl={8} lg={12}>
          <DesignDetail />
          <EditTaskDetail />
          <Comments />
        </Col>
      </Row>
    </AppLayout>
  );
}
