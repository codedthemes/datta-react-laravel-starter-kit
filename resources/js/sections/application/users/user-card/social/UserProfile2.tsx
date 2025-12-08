// react-bootstrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// assets
import imgRound1 from '@assets/images/widget/img-round1.jpg';
import background from '@assets/images/widget/slider5.jpg';

const stats = [
  { value: '156', label: 'Designs' },
  { value: '28', label: 'Projects' },
  { value: '94', label: 'Clients' }
];

const StatsSection = () => (
  <Row className="text-center">
    {stats.map((stat, index) => (
      <Col key={`${stat.label}-${index}`}>
        <h5 className="f-w-500">{stat.value}</h5>
        <span>{stat.label}</span>
      </Col>
    ))}
  </Row>
);

// ==============================|| SOCIAL - USER PROFILE 2 ||============================== //

export default function UserProfile2() {
  return (
    <>
      <h6 className="text-center mb-3">User profile 2</h6>
      <Card className="text-center">
        <div
          className="widget-profile-card-3"
          style={{
            backgroundImage: `url(${background})`
          }}
        >
          <Image className=" img-thumbnail" src={imgRound1} alt="Profile-user" fluid />
        </div>
        <Card.Body>
          <Card.Title as="h4" className="f-20 text-dark f-w-500 mb-2">
            John Doe
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Web Designer</Card.Subtitle>
          <Card.Text>
            Creative web designer with expertise in modern UI/UX principles, responsive design, and user-centered design solutions.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-inverse pt-0">
          <StatsSection />
        </Card.Footer>
      </Card>
    </>
  );
}
