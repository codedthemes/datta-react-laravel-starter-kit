import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

// react-bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// project-imports
import { dashboardWidgetData, calenderData } from '@/data/membership';
import ReportCard from '@/sections/admin-panel/membership/dashboard/Report';
import RevenueAnalytics from '@/sections/admin-panel/membership/dashboard/RevenueAnalytics';
import CalendarEventsCard from '@/sections/admin-panel/membership/dashboard/CalendarEvents';
import MembershipState from '@/sections/admin-panel/membership/dashboard/MembershipState';
import ActivityCard from '@/sections/admin-panel/membership/dashboard/Activity';
import LatestSignupList from '@/sections/admin-panel/membership/dashboard/LatestSignupList';
import Notifications from '@/sections/admin-panel/membership/dashboard/Notifications';

// =============================|| MEMBERSHIP - DASHBOARD ||============================== //

export default function DashboardPage() {
  return (
    <AppLayout>
      <Head title="Dashboard" />
      <Row>
        {/* row 1 */}
        {dashboardWidgetData.map((item, index) => (
          <Col xxl={3} md={6} xs={12} key={index}>
            <ReportCard title={item.title} value={item.value} content={item.content} iconPrimary={item.iconPrimary} bgColor={item.bgColor} />
          </Col>
        ))}

        {/* row 2 */}
        <Col lg={7} md={12}>
          <RevenueAnalytics />
        </Col>
        <Col lg={5} md={12}>
          <CalendarEventsCard data={calenderData} />
        </Col>

        {/* row 3 */}
        <Col lg={5} md={6} xs={12}>
          <MembershipState />
        </Col>
        <Col lg={7} md={6} xs={12}>
          <ActivityCard />
        </Col>

        {/* row 4 */}
        <Col lg={7} md={12}>
          <LatestSignupList />
        </Col>

        <Col lg={5} md={12}>
          <Notifications />
        </Col>
      </Row>
    </AppLayout>
  )
}
