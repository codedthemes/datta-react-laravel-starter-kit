import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import { sourceData, supportData } from '@/data/helpdesk';
import SupportCard from '@/sections/admin-panel/helpdesk/dashboard/support';
import CustomerSatisfaction from '@/sections/admin-panel/helpdesk/dashboard/CustomerSatisfaction';
import SocialSourceCard from '@/sections/admin-panel/helpdesk/dashboard/SocialSource';
import LatestActivity from '@/sections/admin-panel/helpdesk/dashboard/LatestActivity';
import TicketsAnsweredCard from '@/sections/admin-panel/helpdesk/dashboard/TicketsAnswered';

// =============================|| HELP DESK - DASHBOARD ||============================== //

export default function DashboardPage() {
  return (
    <AppLayout>
      <Head title="Dashboard" />
      <Row>
        {/* row 1 */}
        {supportData.map((data, index) => (
          <Col key={index} xs={12} md={data.fullWidth ? 12 : 6} xl={4}>
            <SupportCard
              count={data.count}
              title={data.title}
              details={data.details}
              color={data.color}
              bgColor={data.bgColor}
              openValue={data.open}
              runningValue={data.running}
              solvedValue={data.solved}
              chartData={data.chartData}
            />
          </Col>
        ))}

        {/* row 2 */}
        <Col xl={7} md={6}>
          <Row>
            <Col xs={12}>
              <CustomerSatisfaction />
            </Col>
            {sourceData.map((source, index) => (
              <Col xl={6} md={12} key={index}>
                <SocialSourceCard color={source.color} title={source.title} progressData={source.progressData} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xl={5} md={6}>
          <LatestActivity />
          <TicketsAnsweredCard />
        </Col>
      </Row>
    </AppLayout>
  )
}
