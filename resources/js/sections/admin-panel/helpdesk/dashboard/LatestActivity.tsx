// react-bootstrap
import SimpleBarScroll from '@/components/third-party/SimpleBar';
import { feeds } from '@/data/helpdesk';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';

// ==============================|| DASHBOARD - LATEST ACTIVITY ||============================== //

export default function LatestActivity() {
  return (
    <Card className="feed-card">
      <Card.Header>
        <Stack direction="horizontal" className="justify-content-between align-items-center">
          <h5 className="mb-0">Latest Activity</h5>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-custom-components" className="avatar avatar-xs btn-link-secondary arrow-none">
              <i className="ti ti-dots-vertical f-18" />
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              <Dropdown.Item href="#">Today</Dropdown.Item>
              <Dropdown.Item href="#">Weekly</Dropdown.Item>
              <Dropdown.Item href="#">Monthly</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Stack>
      </Card.Header>
      <SimpleBarScroll style={{ maxHeight: '400px' }}>
        <Card.Body>
          {feeds.map((feed, index) => (
            <Row key={index} className="align-items-center m-b-30">
              <Col xs="auto" className="pe-0">
                <i className={`${feed.icon} ${feed.bgColor} feed-icon text-${feed.textColor}`} />
              </Col>
              <Col>
                <a href="#">
                  <h6>
                    {feed.text} <span className="text-muted float-end f-13">{feed.time}</span>
                  </h6>
                </a>
              </Col>
            </Row>
          ))}
        </Card.Body>
      </SimpleBarScroll>
    </Card>
  );
}
