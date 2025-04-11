import { Link } from 'react-router-dom';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

// assets
import avatar2 from 'assets/images/user/avatar-2.jpg';
import slider6 from 'assets/images/widget/slider6.jpg';
import slider5 from 'assets/images/widget/slider5.jpg';
import slider7 from 'assets/images/widget/slider7.jpg';
import { Star } from 'phosphor-react';

// ==============================|| CLIP IMAGE - CLIP SLIDER RIGHT ||============================== //

export default function ClipSliderRight() {
  return (
    <>
      <h6 className="text-center mb-3">Right slider</h6>
      <MainCard
        className="user-card user-card-2 shape-right"
        headerClassName="border-0 p-2 pb-0"
        bodyClassName="pt-0"
        title={
          <div className="cover-img-block">
            <Carousel indicators={false} id="carouselExampleControls-1" controls={true}>
              <Carousel.Item className="carousel-item active">
                <Image src={slider5} alt="" className="img-fluid" />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={slider6} alt="" className="img-fluid" />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={slider7} alt="" className="img-fluid" />
              </Carousel.Item>
            </Carousel>
          </div>
        }
      >
        <div className="user-about-block text-center">
          <Row className="align-items-end">
            <Col className="pb-3">
              <Link to="#!">
                <Star size={22} weight="fill" className="fill-warning" />
              </Link>
            </Col>
            <Col>
              <div className="position-relative d-inline-block">
                <Image className="img-radius img-fluid wid-80" src={avatar2} alt="User" />
                <div className="certificated-badge">
                  <i className="fas fa-certificate text-primary bg-icon" />
                  <i className="fas fa-check front-icon text-white" />
                </div>
              </div>
            </Col>
            <Col className="text-end pb-3">
              <Dropdown align="end">
                <Dropdown.Toggle as="div" bsPrefix="false" variant="link" id="dropdown-custom-components">
                  <i className="ti ti-dots" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <div className="text-center">
          <h6 className="mb-1 mt-3">Joseph William</h6>
          <p className="mb-3 text-muted">UI/UX Designer</p>
          <p className="mb-1">Lorem Ipsum is simply dummy text</p>
          <p className="mb-0">been the industry's standard</p>
        </div>
        <hr className="wid-80 pt-1 mx-auto my-4" />
        <Row className="text-center">
          <Col>
            <h6 className="mb-1">37</h6>
            <p className="mb-0">Mails</p>
          </Col>
          <Col>
            <h6 className="mb-1">2749</h6>
            <p className="mb-0">Followers</p>
          </Col>
          <Col>
            <h6 className="mb-1">678</h6>
            <p className="mb-0">Following</p>
          </Col>
        </Row>
      </MainCard>
    </>
  );
}
