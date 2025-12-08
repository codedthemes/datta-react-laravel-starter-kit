// react-bootstrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// assets
import blurBackground from '@assets/images/widget/user-blur-bg.png';
import slider7 from '@assets/images/widget/slider7.jpg';

const stats = [
  { value: '400', label: 'Designs' },
  { value: '90', label: 'Projects' },
  { value: '70', label: 'Development' }
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

// ==============================|| SOCIAL - USER CARD 4 ||============================== //

export default function UserCard4() {
  return (
    <>
      <h6 className="text-center mb-3">User card 4</h6>
      <Card className="text-center">
        <div className="widget-profile-card-1">
          <Image src={slider7} alt="card-style-1" fluid />
          <div className="middle-user">
            <Image src={blurBackground} thumbnail fluid alt="Profile-user" />
          </div>
        </div>
        <Card.Body>
          <Card.Title as="h4" className="f-20 text-dark f-w-500 mb-2">
            Lary Doe
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Senior Web Designer</Card.Subtitle>
          <Card.Text>Passionate designer with 5+ years of experience creating intuitive digital experiences.</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-inverse pt-0">
          <StatsSection />
        </Card.Footer>
      </Card>
    </>
  );
}
