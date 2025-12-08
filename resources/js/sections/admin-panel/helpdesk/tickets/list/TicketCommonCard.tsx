// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project import
import MainCard from '@/components/MainCard';

// types
import { TicketCommonCardProps } from 'types/helpdesk';

// ==============================|| TICKET COMMON CARD ||============================== //

export default function TicketCommonCard({
  proClass,
  showAvatarStack = true,
  showBox = true,
  customerAvatar,
  ticketCount,
  likes,
  customerName,
  chipLabel,
  productAvatar,
  productName,
  supporterAvatar,
  supporterName,
  updateTime,
  messageCount,
  issueTitle,
  addCode,
  removeCode,
  drawerOpen
}: TicketCommonCardProps) {
  return (
    <MainCard className={`ticket-card ${proClass}`}>
      <Row>
        <Col sm="auto" className="mb-3 md-sm-0">
          <Stack direction="horizontal" className="d-sm-inline-block align-items-center">
            <Image src={customerAvatar} className="wid-60 img-radius" />
            <div className="ms-3 ms-sm-0">
              <Nav className="flex-column">
                <a href="#" className="p-0 mt-2 text-muted text-center">
                  {ticketCount} Ticket
                </a>
                <a href="#" className="p-0 text-center text-danger">
                  <i className="ti ti-heart-filled me-1" />
                  {likes}
                </a>
              </Nav>
            </div>
          </Stack>
        </Col>

        <Col>
          <div>
            <h5>
              {customerName}
              <Badge bg="light-secondary" className="ms-2">
                {chipLabel}
              </Badge>
            </h5>

            {showAvatarStack && (
              <Stack direction="horizontal" gap={2} className="mt-3 flex-wrap">
                <Stack direction="horizontal">
                  <Image src={productAvatar} className="wid-20 me-2 rounded" />
                  {productName}
                </Stack>

                <Stack direction="horizontal">
                  <Image src={supporterAvatar} className="wid-20 me-2" />
                  <span>Assigned to </span>
                  <b className="ms-1 me-2">{supporterName}</b>
                </Stack>

                <Stack direction="horizontal">
                  <i className="ph ph-calendar-blank me-1" />
                  Updated {updateTime}
                </Stack>

                <Stack direction="horizontal">
                  <i className="ph ph-chat-dots ms-2 me-2" />
                  {messageCount}
                </Stack>
              </Stack>
            )}

            <div className="h5 mt-3">
              <i className="ph ph-lock-key f-16 me-1" /> {issueTitle}
            </div>

            {showBox && (
              <div className="bg-body mb-3 p-3 cursor-pointer" onClick={drawerOpen}>
                <h6>
                  <Image src={supporterAvatar} className="wid-20  me-2 rounded" />
                  Last comment from <a className="link-secondary">{supporterName}:</a>
                </h6>
                <p className="mb-0">
                  <b> hello {customerName},</b>,<br />
                  you need to create <b>{addCode}</b> once in a page&nbsp;in your code,
                  <br />
                  {removeCode}
                  <br />
                  just remove those things and also in option button add
                </p>
              </div>
            )}
          </div>

          <Stack direction="horizontal" gap={2}>
            <a className="btn btn-sm btn-light-primary" href="/admin-panel/helpdesk/ticket/details">
              <i className="ph ph-eye align-middle me-1" />
              View Ticket
            </a>

            <Button size="sm" variant="light-danger">
              <i className="ph ph-trash align-middle me-1" />
              Delete
            </Button>
          </Stack>
        </Col>
      </Row>
    </MainCard>
  );
}
