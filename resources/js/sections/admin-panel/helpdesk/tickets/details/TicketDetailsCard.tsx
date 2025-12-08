// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-import
import MainCard from '@/components/MainCard';
import { messageData } from '@/data/helpdesk';
import TicketDetailsCommonCard from './TicketDetailsCommonCard';

// ==============================|| HELPDESK  - TICKET DETAILS CARD ||============================== //

export default function TicketDetailsCard() {
  return (
    <MainCard
      bodyClassName="p-0"
      title={
        <>
          <h5>
            <i className="ph ph-lock f-20 align-middle text-primary" />
            <span className="p-l-5">Private Ticket #1831786</span>
          </h5>
        </>
      }
    >
      <div className="card-body border-bottom py-2">
        <Row className="align-items-center">
          <Col md={8}>
            <h4 className="d-inline-block mb-0">Theme customization issue</h4>
          </Col>
          <Col md={4} className="text-md-end">
            <Stack direction="horizontal" gap={1} className="justify-content-end">
              <Button variant="light-success" size="sm">
                Make as unread
              </Button>
              <i className="ph ph-star f-20 text-warning" />
            </Stack>
          </Col>
        </Row>
      </div>

      <div className="card-body border-bottom py-2">
        <Row className="align-items-center">
          <Col md={12}>
            <Button size="sm" variant="light-success" className="me-1">
              <i className="me-2 ph ph-chat align-middle" />
              Post a reply
            </Button>

            <Button size="sm" variant="light-warning" className="me-1">
              <i className="me-2 ph ph-note-pencil align-middle" />
              Post a Note
            </Button>

            <Button size="sm" variant="light-danger" className="my-2">
              <i className="me-2 ph ph-user-circle-check align-middle" />
              Customer Notes
            </Button>
          </Col>
        </Row>
      </div>
      {messageData.map((data, index) => (
        <div className="card-body border-bottom" key={index}>
          <TicketDetailsCommonCard
            avatar={data.avatar}
            chipLabel={data.chipLabel}
            images={data.images}
            message={data.message}
            supportAgentName={data.supportAgentName}
            customerName={data.customerName}
            timeAgo={data.timeAgo}
            codeString={data.codeString as string}
            likes={data.likes}
            ticketNumber={data.ticketNumber as number}
          />
        </div>
      ))}
    </MainCard>
  );
}
