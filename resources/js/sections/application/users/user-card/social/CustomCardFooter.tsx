// react-bootstrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const stats = [
  { value: '37', label: 'Projects' },
  { value: '1.5K', label: 'Followers' },
  { value: '678', label: 'Following' }
];

// ==============================|| SOCIAL -  CUSTOM CARD FOOTER ||============================== //

export default function CustomCardFooter() {
  return (
    <Card.Footer className="bg-light">
      <Row className="text-center">
        {stats.map((stat, index) => (
          <Col key={index}>
            <h6 className="mb-1 f-w-500">{stat.value}</h6>
            <p className="mb-0 text-muted">{stat.label}</p>
          </Col>
        ))}
      </Row>
    </Card.Footer>
  );
}
