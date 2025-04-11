// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import UserCountCard from 'sections/online-courses/dashboard/UserCountCard';
import StatisticsChart from 'sections/online-courses/dashboard/StatisticsChart';
import InviteGoalChart from 'sections/online-courses/dashboard/InviteGoalChart';
import UpcomingCourseCard from 'sections/online-courses/dashboard/UpcomingCourse';
import CoursesChart from 'sections/online-courses/dashboard/CoursesChart';
import TotalRevenueChart from 'sections/online-courses/dashboard/TotalRevenueChart';
import TotalSubscriptionChart from 'sections/online-courses/dashboard/TotalSubscriptionChart';
import StudentStatesChart from 'sections/online-courses/dashboard/StudentStatesChart';
import StudentQuery from 'sections/online-courses/dashboard/StudentQuery';
import ActivityChart from 'sections/online-courses/dashboard/ActivityChart';
import ActivityTable from 'sections/online-courses/dashboard/ActivityTable';
import TraningCourseCard from 'sections/online-courses/dashboard/TradingCourse';
import VisitorChart from 'sections/online-courses/dashboard/VisitorChart';
import EarningCourses from 'sections/online-courses/dashboard/EarningCourses';
import Notification from 'sections/online-courses/dashboard/Notification';
import CourseStateTable from 'sections/online-courses/dashboard/CourseStates';
import DashboardCalendar from 'sections/online-courses/dashboard/DashboardCalendar';

// ==============================|| ONLINE COURSES - DASHBOARD ||============================== //

export default function OnlineCoursesDashboard() {
  return (
    <Row>
      <Col lg={3} md={6}>
        <UserCountCard icon="users" color="primary" title="New Students" members="400+" percentage={30.6} />
      </Col>
      <Col lg={3} md={6}>
        <UserCountCard icon="notebook" color="warning" title="Total Course" members="520+" percentage={30.6} />
      </Col>
      <Col lg={3} md={6}>
        <UserCountCard icon="eye" color="success" title="New Visitor" members="800+" percentage={30.6} />
      </Col>
      <Col lg={3} md={6}>
        <UserCountCard icon="credit-card" color="danger" title="Total sale" members="1065" percentage={30.6} />
      </Col>
      <Col lg={7} md={12}>
        <StatisticsChart />
      </Col>
      <Col lg={5} md={12}>
        <InviteGoalChart />
      </Col>
      <Col lg={5} md={12}>
        <UpcomingCourseCard />
      </Col>
      <Col lg={7} md={12}>
        <CoursesChart />
      </Col>
      <Col lg={4} md={6}>
        <TotalRevenueChart />
        <TotalSubscriptionChart />
      </Col>
      <Col lg={4} md={6}>
        <StudentStatesChart />
      </Col>
      <Col lg={4} md={6}>
        <StudentQuery />
      </Col>
      <Col lg={8} md={12}>
        <ActivityChart />
      </Col>
      <Col lg={4} md={12}>
        <DashboardCalendar />
      </Col>
      <Col lg={6} md={12}>
        <ActivityTable />
      </Col>
      <Col lg={6} md={12}>
        <TraningCourseCard />
      </Col>
      <Col lg={4} md={6}>
        <VisitorChart />
      </Col>
      <Col lg={4} md={6}>
        <EarningCourses />
      </Col>
      <Col lg={4} md={6}>
        <Notification />
      </Col>
      <Col xs={12}>
        <CourseStateTable />
      </Col>
    </Row>
  );
}
