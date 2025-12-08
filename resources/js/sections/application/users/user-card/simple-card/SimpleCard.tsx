// react-bootstrap
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import avatar2 from '@assets/images/user/avatar-2.png';
import slider5 from '@assets/images/widget/slider5.jpg';

const stats = [
  { value: '89', label: 'Projects' },
  { value: '3.5K', label: 'Followers' },
  { value: '1.2K', label: 'Following' }
];

// =============================|| SIMPLE CARD - SIMPLE CARD ||==============================

export default function SimpleCard() {
  return (
    <>
      <h6 className="text-center mb-3">Simple</h6>
      <MainCard
        className="user-card user-card-1 shadow-sm"
        headerClassName="border-0 p-2 pb-0"
        bodyClassName="text-center pt-0"
        title={
          <div className="cover-img-block">
            <Image src={slider5} alt="Cover" fluid />
          </div>
        }
      >
        <div className="user-about-block">
          <Row>
            <Col>
              <Image src={avatar2} fluid roundedCircle className="wid-80" />
            </Col>
          </Row>
        </div>
        <h6 className="f-w-500 mb-1 mt-3">Jessica Martinez</h6>
        <p className="text-muted mb-3">Frontend Developer</p>
        <p className="mb-0">Passionate about creating responsive web applications with modern JavaScript framework</p>
        <hr className="wid-80 pt-1 mx-auto my-4" />
        <Row className="text-center">
          {stats.map((stat, index) => (
            <Col key={index}>
              <h6 className="mb-1 f-w-500">{stat.value}</h6>
              <p className="mb-0 text-muted">{stat.label}</p>
            </Col>
          ))}
        </Row>
      </MainCard>
    </>
  );
}
