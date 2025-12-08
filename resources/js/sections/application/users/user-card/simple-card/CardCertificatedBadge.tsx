// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import avatar5 from '@assets/images/user/avatar-5.png';
import slider6 from '@assets/images/widget/slider6.jpg';

const stats = [
  { value: '37', label: 'Mails' },
  { value: '2749', label: 'Followers' },
  { value: '678', label: 'Following' }
];

// ==============================|| SIMPLE CARD - CARD CERTIFICATED BADGE ||============================== //

export default function CardCertificatedBadge({ title }: { title?: string }) {
  return (
    <>
      {title && <h6 className="text-center mb-3">{title}</h6>}
      <MainCard
        className="user-card user-card-1"
        headerClassName="border-0 p-2 pb-0"
        bodyClassName="pt-0"
        title={
          <div className="cover-img-block">
            <Image src={slider6} alt="Cover" fluid />
          </div>
        }
      >
        <div className="user-about-block text-center">
          <Row className="align-items-end justify-content-between">
            <Col xs="auto" className="pb-3">
              <Button variant="link" className="text-decoration-none p-0">
                <i className="ph ph-star align-middle text-warning f-20" />
              </Button>
            </Col>
            <Col xs="auto">
              <div className="position-relative d-inline-block">
                <Image className="img-radius img-fluid wid-80" src={avatar5} alt="User image" roundedCircle />
                <div className="certificated-badge">
                  <i className="ti ti-rosette-discount-check-filled text-primary bg-icon" />
                </div>
              </div>
            </Col>
            <Col xs="auto" className="text-end pb-3">
              <Dropdown align="end">
                <Dropdown.Toggle as="a" className="arrow-none">
                  <i className="ph ph-dots-three-outline align-middle" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">View Certificates</Dropdown.Item>
                  <Dropdown.Item href="#">Send Message</Dropdown.Item>
                  <Dropdown.Item href="#">Connect</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <div className="text-center">
          <h6 className="f-w-500 mb-1 mt-3">Emma Rodriguez</h6>
          <p className="mb-3 text-muted">Certified UX Specialist</p>
          <p className="mb-0">Google UX Design & Adobe Certified Expert, Specializing in mobile-first design solutions</p>
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
