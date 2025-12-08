// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import BackGroundCover from './BackGroundCover';
import BackGroundProfile from './BackGroundProfile';
import SocialLink1 from './SocialLink1';
import SocialLink2 from './SocialLink2';
import SocialProfileBadge from './SocialProfileBadge';
import UserProfile from './UserProfile';
import UserProfile2 from './UserProfile2';
import UserSettings from './UserSettings';
import UserCard4 from '@/sections/application/users/user-card/social/UserCard4';
import MainCard from '@/components/MainCard';

// assets
import avatar1 from '@assets/images/user/avatar-1.png';
import avatar2 from '@assets/images/user/avatar-2.png';
import Image from 'react-bootstrap/Image';

const stats = [
  { value: '37', label: 'Projects' },
  { value: '1.5K', label: 'Followers' },
  { value: '678', label: 'Following' }
];

// ==============================|| SOCIAL -  OTHER CARD ||============================== //

export default function OtherCard() {
  return (
    <Row className="mb-4">
      <Col xl={4} md={6}>
        <h6 className="text-center mb-3">User card 3</h6>
        <MainCard
          className="user-card user-card-3 support-bar1"
          footerClassName="bg-light"
          footer={
            <Row className="text-center">
              {stats.map((stat, index) => (
                <Col key={index}>
                  <h6 className="mb-1 f-w-500">{stat.value}</h6>
                  <p className="mb-0 text-muted">{stat.label}</p>
                </Col>
              ))}
            </Row>
          }
        >
          <div className="text-center">
            <Image fluid className="wid-120" src={avatar1} roundedCircle alt="User image" />
            <h4 className="mb-1 mt-3 f-w-500">Sara Soudein</h4>
            <p className="mb-0 text-muted">UI/UX Designer</p>
          </div>
        </MainCard>
      </Col>
      <Col xl={4} md={6}>
        <>
          <h6 className="text-center mb-3">Hover data</h6>
          <MainCard
            className="user-card user-card-3 support-bar1"
            bodyClassName="p-0"
            footerClassName="bg-light"
            footer={
              <Row className="text-center">
                {stats.map((stat, index) => (
                  <Col key={index}>
                    <h6 className="mb-1 f-w-500">{stat.value}</h6>
                    <p className="mb-0 text-muted">{stat.label}</p>
                  </Col>
                ))}
              </Row>
            }
          >
            <Card.Body>
              <div className="text-center">
                <Image fluid className="wid-120" src={avatar2} roundedCircle alt="User image" />
                <h4 className="mb-1 mt-3 f-w-500">Jully Doe</h4>
                <p className="mb-0 text-muted">UI/UX Designer</p>
              </div>
            </Card.Body>
            <Card.Body className="hover-data text-white">
              <div>
                <h4 className="text-white">Let's Collaborate!</h4>
                <p>Available for freelance projects and full-time opportunities</p>
                <Button variant="warning" className="me-1">
                  <i className="ph ph-link align-text-top" /> Meeting
                </Button>
                <Button variant="danger">
                  <i className="ph ph-read-cv-logo align-text-top" /> Resume
                </Button>
              </div>
            </Card.Body>
          </MainCard>
        </>
      </Col>
      <Col xl={4} md={6}>
        <SocialProfileBadge />
      </Col>
      <Col xl={4} md={6}>
        <SocialLink1 userName="Josephin Doe" />
      </Col>
      <Col xl={4} md={6}>
        <SocialLink2 userName="Joseph William" />
      </Col>
      <Col xl={4} md={6}>
        <UserCard4 />
      </Col>
      <Col xl={4} md={6}>
        <UserProfile />
      </Col>
      <Col xl={4} md={6}>
        <UserProfile2 />
      </Col>
      <Col xl={4} md={6}>
        <BackGroundProfile />
      </Col>
      <Col xl={4} md={6}>
        <BackGroundCover />
      </Col>
      <Col xl={5} md={6}>
        <UserSettings />
      </Col>
    </Row>
  );
}
