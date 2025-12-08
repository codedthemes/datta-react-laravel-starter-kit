// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import profilePerson1 from '@assets/images/widget/profile-person1.jpg';

const stats = [
  { value: '247', label: 'Projects' },
  { value: '18,543', label: 'Followers' },
  { value: '892', label: 'Following' }
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

// ==============================|| SOCIAL - BACKGROUND PROFILE ||============================== //

export default function BackGroundProfile() {
  return (
    <>
      <h6 className="text-center mb-3">Background profile image</h6>
      <MainCard className="text-center" bodyClassName="pb-0" footerClassName="bg-inverse" footer={<StatsSection />}>
        <div className="profile-card">
          <Image src={profilePerson1} alt="Profile Background" fluid />
          <Card.Body>
            <Card.Title as="h4" className="text-white f-w-500">
              John Steve
            </Card.Title>
            <p className="mb-3 text-white">UI/UX Designer at CreativesCastle Studio</p>
            <Button variant="info">+ Follow</Button>
          </Card.Body>
        </div>
      </MainCard>
    </>
  );
}
