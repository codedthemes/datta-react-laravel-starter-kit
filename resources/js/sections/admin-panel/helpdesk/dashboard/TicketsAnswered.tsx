import MainCard from '@/components/MainCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// ==============================|| DASHBOARD - TICKETS ANSWERED ||============================== //

export default function TicketsAnsweredCard() {
  return (
    <MainCard className="feed-card" bodyClassName="p-0">
      <Row className="g-0">
        <Col xs={4} className="bg-primary border-feed">
          <i className="ph ph-book-open-text d-block f-46" />
        </Col>
        <Col xs={8}>
          <div className="p-25">
            <h2 className="f-w-400 m-b-10">379</h2>
            <p className="text-muted m-0">
              Tickets <span className="text-primary f-w-400">Answered</span>
            </p>
          </div>
        </Col>
      </Row>
    </MainCard>
  );
}
