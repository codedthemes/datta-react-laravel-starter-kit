// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import blurBackground from '@assets/images/widget/user-blur-bg.png';
import bgBlur from '@assets/images/widget/blur-bg.png';

const stats = [
  { value: '247', label: 'Projects' },
  { value: '18,543', label: 'Followers' },
  { value: '892', label: 'Following' }
];

// ==============================|| SOCIAL - BACKGROUND COVER ||============================== //

export default function BackGroundCover() {
  return (
    <>
      <h6 className="text-center mb-3">Background cover image</h6>
      <MainCard className="text-center" bodyClassName="p-0">
        <div
          className="widget-main-card blur-user-card"
          style={{
            backgroundImage: `url(${bgBlur})`
          }}
        >
          <Image src={blurBackground} alt="Profile Background" fluid />
          <Card.Title as="h4" className="mt-4 text-white f-w-500">
            Linda Fox
          </Card.Title>
          <p className="text-white">UI Designer at CreativesCastle Studio</p>
          <Button variant="info">+ Follow</Button>
          <Card.Footer className="mt-4">
            <Row className="text-center">
              {stats.map((stat, index) => (
                <Col key={index}>
                  <h5 className="f-w-500 text-white">{stat.value}</h5>
                  <span>{stat.label}</span>
                </Col>
              ))}
            </Row>
          </Card.Footer>
        </div>
      </MainCard>
    </>
  );
}
