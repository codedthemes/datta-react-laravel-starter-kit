import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
// react-bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// project-imports
import TicketDetailsCard from '@/sections/admin-panel/helpdesk/tickets/details/TicketDetailsCard';
import TicketDetailsSideCard from '@/sections/admin-panel/helpdesk/tickets/details/TicketDetailsSideCard';

// =============================|| TICKET - DETAILS ||============================== //

export default function DetailsPage() {
  return (
    <AppLayout>
      <Head title="Details" />      
        <Row>
        <Col lg={8}>
          <TicketDetailsCard />
        </Col>
        <Col lg={4}>
          <TicketDetailsSideCard />
        </Col>
      </Row>
    </AppLayout>
  )
}
