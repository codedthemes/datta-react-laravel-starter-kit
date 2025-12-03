import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project imports
import { ticketNotificationsData } from '@/data/helpdesk';
import TicketListCard from '@/sections/admin-panel/helpdesk/tickets/list/TicketListCard';
import TicketNotificationsCard from '@/sections/admin-panel/helpdesk/tickets/list/TicketNotificationsCard';

// ==============================|| TICKET - LIST ||============================== //

export default function ListPage() {
  return (
    <AppLayout>
      <Head title="List" />
      <Row>
        {/* row 1 */}
        <Col xl={8} lg={12} className="help-main large-view">
          <TicketListCard />
        </Col>

        {/* row 2 */}
        <Col xl={4} lg={12}>
          {ticketNotificationsData.map((data, index) => (
            <TicketNotificationsCard key={index} title={data.title} tickets={data.notifications} />
          ))}
        </Col>
      </Row>
    </AppLayout>
  )
}
