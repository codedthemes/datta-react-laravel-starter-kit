import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tooltip from 'react-bootstrap/Tooltip';

// project-imports
import { ThemeMode } from '@/config';
import useConfig from '@/hooks/useConfig';

// third-party
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/coy-without-shadows';
import SyntaxHighlighter from 'react-syntax-highlighter';

// type
import { TicketDetailProps } from 'types/helpdesk';

// ==============================|| TICKET DETAILS - COMMON CARD ||============================== //

export default function TicketDetailsCommonCard({
  avatar,
  likes,
  codeString,
  ticketNumber,
  supportAgentName,
  customerName,
  chipLabel,
  timeAgo,
  message,
  images
}: TicketDetailProps) {
  const { mode } = useConfig();
  return (
    <Row>
      <Col sm="auto" className="mb-3 mb-sm-0">
        <Stack className="d-sm-inline-block align-items-center">
          <Image src={avatar} className="wid-60 img-radius mb-2" />
          {codeString ? (
            <div className="ms-3 ms-sm-0 text-sm-center">
              <p>
                <i className="ph ph-thumbs-up f-18 text-primary align-middle" /> {likes}
              </p>
            </div>
          ) : (
            <div className="ms-3 ms-sm-0 text-sm-center">
              <div className="ms-3 ms-sm-0 text-sm-center">
                <Badge bg="light-danger">{ticketNumber}</Badge> Ticket
              </div>
            </div>
          )}
        </Stack>
      </Col>
      <Col>
        <Row>
          <Col>
            <div>
              <h4 className="d-inline-block me-1">{supportAgentName}</h4>
              <Badge bg="secondary">{chipLabel}</Badge>
              <p className="text-muted">{timeAgo}</p>
            </div>
          </Col>
          <Col xs="auto">
            <ul className="list-unstyled mb-0">
              <li className="d-inline-block f-20 me-1">
                <OverlayTrigger placement="top" overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>}>
                  <i className="ph ph-note-pencil f-20 text-success cursor-pointer me-1" />
                </OverlayTrigger>
              </li>
              <li className="d-inline-block f-20">
                <OverlayTrigger placement="top" overlay={<Tooltip id="delete-tooltip">Delete</Tooltip>}>
                  <i className="ph ph-trash f-20 text-danger cursor-pointer" />
                </OverlayTrigger>
              </li>
            </ul>
          </Col>
        </Row>
        <div>
          <p>
            <b> hello {customerName},</b>
          </p>
          <div dangerouslySetInnerHTML={{ __html: message }} />
        </div>
        {images.length > 0 && (
          <>
            <Row className="text-center mb-2">
              {images.map((image, index) => (
                <Col xl={2} lg={3} sm={4} xs={6} key={index}>
                  <Image src={image} className="m-b-10" fluid />
                </Col>
              ))}
            </Row>
            <Button variant="light-danger" size="sm">
              <i className="ph ph-thumbs-up align-middle me-2" />
              Like
            </Button>
          </>
        )}
        {codeString && (
          <SyntaxHighlighter
            language="javascript"
            style={dark}
            customStyle={{ backgroundColor: mode === ThemeMode.DARK ? '#1e1e1e' : '#f5f5f5', borderRadius: 2 }}
          >
            {codeString}
          </SyntaxHighlighter>
        )}
      </Col>
    </Row>
  );
}
