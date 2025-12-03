// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import avatar2 from '@assets/images/user/avatar-2.png';
import slider6 from '@assets/images/widget/slider6.jpg';

const stats = [
  { value: '30', label: 'Projects' },
  { value: '1.5K', label: 'Followers' },
  { value: '352', label: 'Following' }
];

// ==============================|| CLIP IMAGE - CLIP IMAGE CENTER ||============================== //

export default function ClipImageCenter() {
  return (
    <>
      <h6 className="text-center mb-3">Center</h6>
      <MainCard
        className="user-card user-card-2 shape-center"
        headerClassName="border-0 p-2 pb-0"
        bodyClassName="pt-0"
        title={
          <div className="cover-img-block">
            <Image src={slider6} alt="profile cover background" fluid />
          </div>
        }
      >
        <div className="user-about-block text-center">
          <Row className="align-items-end justify-content-between">
            <Col xs="auto" className="pb-3">
              <Button variant="link" className="p-0 text-decoration-none" aria-label="add to favorites">
                <i className="ph ph-star align-middle text-warning f-20" />
              </Button>
            </Col>
            <Col xs="auto">
              <div className="position-relative d-inline-block">
                <Image fluid roundedCircle className="wid-80" src={avatar2} alt="User" />
                <div className="certificated-badge">
                  <i className="ti ti-rosette-discount-check-filled text-primary bg-icon" />
                </div>
              </div>
            </Col>
            <Col xs="auto" className="text-end pb-3">
              <Dropdown align="end">
                <Dropdown.Toggle as="div" className="arrow-none">
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
          <h6 className="f-w-500 mb-1 mt-3">Josephin Doe</h6>
          <p className="mb-3 text-muted">UI/UX Designer</p>
          <p className="mb-0">Passionate about crafting beautiful digital experiences with focus on user-centered design</p>
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
