// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import avatar4 from '@assets/images/user/avatar-4.png';
import slider6 from '@assets/images/widget/slider6.jpg';
import slider5 from '@assets/images/widget/slider5.jpg';
import slider7 from '@assets/images/widget/slider7.jpg';

const slides = [
  { src: slider5, alt: 'Slide 1' },
  { src: slider6, alt: 'Slide 2' },
  { src: slider7, alt: 'Slide 3' }
];

const stats = [
  { value: '42', label: 'Projects' },
  { value: '3.1K', label: 'Followers' },
  { value: '892', label: 'Following' }
];

// ==============================|| SIMPLE CARD - CARD SLIDER ||============================== //

export default function CardSlider({ title }: { title?: string }) {
  return (
    <>
      {title && <h6 className="text-center mb-3">{title}</h6>}
      <MainCard
        className="user-card user-card-1"
        headerClassName="border-0 p-2 pb-0"
        bodyClassName="text-center pt-0"
        title={
          <div className="cover-img-block">
            <Carousel indicators={false} interval={3000} className="rounded-4">
              {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                  <Image src={slide.src} alt={slide.alt} fluid className="w-100" />
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
                <i className="ph ph-star align-middle text-muted f-20" />
              </Button>
            </Col>
            <Col xs="auto">
              <Image src={avatar4} className="wid-80" roundedCircle fluid />
            </Col>
            <Col xs="auto" className="text-end pb-3">
              <Dropdown>
                <Dropdown.Toggle as="div" variant="link" className="arrow-none p-0">
                  <i className="ph ph-dots-three-outline align-middle" />
                </Dropdown.Toggle>
                <Dropdown.Menu align="end">
                  <Dropdown.Item href="#">View Portfolio</Dropdown.Item>
                  <Dropdown.Item href="#">Send Message</Dropdown.Item>
                  <Dropdown.Item href="#">Connect</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <h6 className="f-w-500 mb-1 mt-3">Michael Chen</h6>
        <p className="text-muted mb-3">Product Designer</p>
        <p className="mb-0">Creating user-centered digital solutions with focus on accessibility and innovation</p>
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
