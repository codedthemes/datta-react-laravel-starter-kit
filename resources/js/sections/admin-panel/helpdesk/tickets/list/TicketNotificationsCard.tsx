// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

// project-imports
import MainCard from '@/components/MainCard';

// types
import { TicketNotificationsCardProps } from 'types/helpdesk';

// ==========================|| TICKET - NOTIFICATIONS CARD ||========================== //

export default function TicketNotificationsCard({ title, tickets }: TicketNotificationsCardProps) {
  return (
    <MainCard title={title} bodyClassName="p-0">
      <ListGroup className="list-group-flush pb-2">
        {tickets.map((ticket, index) => (
          <ListGroup.Item key={index}>
            <div className="d-inline-block">
              <Image src={ticket.avatar} alt="" className="wid-20 rounded me-1" />
              <a className="link-secondary">{ticket.name}</a>
            </div>
            <div className="float-end">
              {ticket.badges?.primary && (
                <Badge
                  bg="light-danger"
                  className="rounded-circle me-1 cursor-pointer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="tooltip on top"
                >
                  {ticket.badges.primary}
                </Badge>
              )}
              {ticket.badges?.secondary && (
                <Badge
                  bg="light-secondary"
                  className="rounded-circle me-0 cursor-pointer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="tooltip on top"
                >
                  {ticket.badges.secondary}
                </Badge>
              )}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </MainCard>
  );
}
