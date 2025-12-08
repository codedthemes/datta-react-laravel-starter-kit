// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import avatar1 from '@assets/images/user/avatar-1.png';
import slider7 from '@assets/images/widget/slider7.jpg';

const stats = [
  { value: '64', label: 'Projects' },
  { value: '2.8K', label: 'Followers' },
  { value: '945', label: 'Following' }
];

// ==============================|| SIMPLE CARD - CARD WITH OPTION ||============================== //

export default function CardWithOption() {
  return (
    <>
      <h6 className="text-center mb-3">With option</h6>
      <MainCard
        className="user-card user-card-1"
        headerClassName="border-0 p-2 pb-0"
        bodyClassName="pt-0"
        title={
          <div className="cover-img-block">
            <Image src={slider7} alt="Cover" fluid />
          </div>
        }
      >
        <div className="user-about-block text-center">
          <Row className="align-items-end justify-content-between">
            <Col xs="auto" className="pb-3">
              <Button variant="link" className="p-0 text-decoration-none">
                <i className="icon ph ph-star align-middle text-muted f-20" />
              </Button>
            </Col>
            <Col xs="auto">
              <Image className="wid-80" src={avatar1} alt="User image" fluid roundedCircle />
            </Col>
            <Col xs="auto" className="text-end pb-3">
              <Dropdown align="end">
                <Dropdown.Toggle as="a" className="arrow-none">
                  <i className="ph ph-dots-three-outline align-middle" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">View Portfolio</Dropdown.Item>
                  <Dropdown.Item href="#">Send Message</Dropdown.Item>
                  <Dropdown.Item href="#">Connect</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <div className="text-center">
          <h6 className="f-w-500 mb-1 mt-3">David Kim</h6>
          <p className="mb-3 text-muted">Full Stack Developer</p>
          <p className="mb-0">Building scalable web applications with React and Node.js</p>
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
      </MainCard>
    </>
  );
}
