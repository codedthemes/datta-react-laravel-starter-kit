// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import avatar5 from '@assets/images/user/avatar-5.png';
import slider6 from '@assets/images/widget/slider6.jpg';
import slider5 from '@assets/images/widget/slider5.jpg';
import slider7 from '@assets/images/widget/slider7.jpg';

const slides = [
  { src: slider5, alt: 'Portfolio showcase' },
  { src: slider6, alt: 'Design process' },
  { src: slider7, alt: 'Client projects' }
];

const stats = [
  { value: '156', label: 'Projects' },
  { value: '5.8K', label: 'Followers' },
  { value: '2.3K', label: 'Following' }
];

// ==============================|| CLIP IMAGE - CLIP SLIDER CENTER ||============================== //

export default function ClipSliderCenter({ title }: { title?: string }) {
  return (
    <>
      {title && <h6 className="text-center mb-3">{title}</h6>}
      <MainCard
        className="user-card user-card-2 shape-center"
        headerClassName="border-0 p-2 pb-0"
        bodyClassName="pt-0"
        title={
          <div className="cover-img-block">
            <Carousel indicators={false} id="carouselExampleControls-1" controls={true}>
              {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                  <Image src={slide.src} alt={slide.alt} fluid />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        }
      >
        <div className="user-about-block text-center">
          <Row className="align-items-end justify-content-between">
            <Col xs="auto" className="pb-3">
              <Button variant="link" className="p-0 text-decoration-none">
                <i className="ph ph-star align-middle text-warning f-20" />
              </Button>
            </Col>
            <Col xs="auto">
              <div className="position-relative d-inline-block">
                <Image fluid roundedCircle className="wid-80" src={avatar5} alt="User" />
                <div className="certificated-badge">
                  <i className="ti ti-rosette-discount-check-filled text-primary bg-icon" />
                </div>
              </div>
            </Col>
            <Col xs="auto" className="text-end pb-3">
              <Dropdown align="end">
                <Dropdown.Toggle as="div" variant="link" className="arrow-none p-0">
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
          <h6 className="f-w-500 mb-1 mt-3">Alex Thompson</h6>
          <p className="mb-3 text-muted">Brand Strategist</p>
          <p className="mb-0">Award-winning designer with 8+ years experience in digital branding and visual identity</p>
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
