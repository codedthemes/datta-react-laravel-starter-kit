// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import UserActivityTable from 'sections/widgets/tables/UserActivityTable';
import LeaderBoard from 'sections/widgets/tables/LeaderBoard';
import ApplicationListTable from 'sections/widgets/tables/ApplicationListTable';
import UserProjectListTable from 'sections/widgets/tables/UserProjectListTable';
import UserWebListTable from 'sections/widgets/tables/UserWebList';
import FullWidthTable from 'sections/widgets/tables/FullWidthTable';
import RecentUsersTable from 'sections/widgets/tables/RecentUsersTable';

// ==============================|| BOOTSTRAP TABLE - BASIC ||============================== //

export default function BasicTablePage() {
  return (
    <Row>
      <Col sm={8}>
        <UserActivityTable />
      </Col>
      <Col sm={4}>
        <LeaderBoard />
      </Col>
      <Col xs={12}>
        <ApplicationListTable />
      </Col>
      <Col sm={8}>
        <UserProjectListTable />
      </Col>
      <Col sm={4}>
        <UserWebListTable />
      </Col>
      <Col xs={12}>
        <FullWidthTable />
      </Col>
      <Col xs={12}>
        <RecentUsersTable />
      </Col>
    </Row>
  );
}
