// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import avatar1 from '@assets/images/user/avatar-1.png';
import slider7 from '@assets/images/widget/slider7.jpg';

const stats = [
  { value: '124', label: 'Projects' },
  { value: '1.2K', label: 'Followers' },
  { value: '890', label: 'Following' }
];

// ==============================|| SIMPLE CARD - CARD HOVER ||============================== //

export default function CardHover({ title }: { title?: string }) {
  return (
    <>
      {title && <h6 className="text-center mb-3">{title}</h6>}
      <MainCard className="user-card user-card-1" bodyClassName="p-0">
        <Card.Header className="border-0 p-2 pb-0">
          <div className="cover-img-block">
            <Image src={slider7} alt="image" fluid />
          </div>
        </Card.Header>
        <Card.Body className="pt-0">
          <div className="user-about-block text-center">
            <Row className="align-items-end">
              <Col></Col>
              <Col>
                <div className="position-relative d-inline-block">
                  <Image className="wid-80" roundedCircle fluid src={avatar1} alt="User image" />
                </div>
              </Col>
              <Col></Col>
            </Row>
          </div>
          <div className="text-center">
            <h6 className="f-w-500 mb-1 mt-3">Sarah Johnson</h6>
            <p className="mb-3 text-muted">Senior UI/UX Designer</p>
            <p className="mb-0">Passionate about creating intuitive digital experiences with 5+ years in product design</p>
          </div>
          <hr className="wid-80 pt-1 mx-auto my-4" />
          <Row className="text-center">
            {stats.map((stat, index) => (
              <Col key={index}>
                <h6 className="mb-1 f-w-500">{stat.value}</h6>
                <p className="mb-0 text-muted">{stat.label}</p>
              </Col>
            ))}
          </Row>
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
  );
}
