// react-bootstrap
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// third-party
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// project-imports
import MainCard from 'components/MainCard';

// assets
import avatar1 from 'assets/images/user/avatar-1.jpg';
import avatar2 from 'assets/images/user/avatar-2.jpg';
import avatar3 from 'assets/images/user/avatar-3.jpg';
import slider6 from 'assets/images/widget/slider6.jpg';
import slider5 from 'assets/images/widget/slider5.jpg';
import slider7 from 'assets/images/widget/slider7.jpg';

interface SocialLink {
  platform: string;
  icon: string | IconDefinition;
}

const socialLinks: SocialLink[] = [
  { platform: 'facebook', icon: 'fa-facebook-f' },
  { platform: 'twitter', icon: 'fa-twitter' },
  { platform: 'dribbble', icon: 'fa-dribbble' },
  { platform: 'pinterest', icon: 'fa-pinterest' },
  { platform: 'youtube', icon: 'fa-youtube' },
  { platform: 'googleplus', icon: 'fa-google-plus-g' },
  { platform: 'linkedin', icon: 'fa-linkedin-in' }
];

// ==============================|| USER CARD - FOOTER ||============================== //

export default function Footer() {
  return (
    <Row className="mb-4">
      <Col xl={4} md={6}>
        <h6 className="text-center mb-3">Footer gray</h6>
        <MainCard
          className="user-card user-card-1 support-bar"
          headerClassName="border-0 p-2 pb-0"
          bodyClassName="pt-0"
          footerClassName="bg-secondary text-white text-center"
          title={
            <div className="cover-img-block">
              <Image src={slider7} alt="" className="img-fluid" />
            </div>
          }
          footer={
            <Row>
              <Col>
                <h6 className="mb-1 text-white">37</h6>
                <p className="mb-0">Mails</p>
              </Col>
              <Col>
                <h6 className="mb-1 text-white">2749</h6>
                <p className="mb-0">Followers</p>
              </Col>
              <Col>
                <h6 className="mb-1 text-white">678</h6>
                <p className="mb-0">Following</p>
              </Col>
            </Row>
          }
        >
          <div className="user-about-block text-center">
            <Row className="align-items-end justify-content-center">
              <Col>
                <div className="position-relative d-inline-block">
                  <Image className="img-radius img-fluid wid-80" src={avatar1} alt="User" />
                  <div className="certificated-badge">
                    <i className="fas fa-certificate text-primary bg-icon" />
                    <i className="fas fa-check front-icon text-white" />
                  </div>
                </div>
              </Col>
              <Col xs="auto" className="pb-3">
                <Dropdown align="end">
                  <Dropdown.Toggle as="div" bsPrefix="false" className="arrow-none dropdown-toggle" id="dropdown-custom-components">
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
          <h6 className="mb-1 mt-3">Lary Doe</h6>
          <p className="mb-3 text-muted">UI/UX Designer</p>
          <p className="mb-1">Lorem Ipsum is simply dummy text</p>
          <p className="mb-0">been the industry's standard</p>
        </MainCard>
      </Col>

      <Col xl={4} md={6}>
        <h6 className="text-center mb-3">Footer white</h6>
        <MainCard
          className="user-card user-card-1 support-bar1"
          headerClassName="border-0 p-2 pb-0"
          bodyClassName="text-center pt-0"
          footerClassName="text-center"
          title={
            <div className="cover-img-block">
              <Image src={slider6} alt="Cover" fluid />
            </div>
          }
          footer={
            <Row>
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
          }
        >
          <div className="user-about-block ">
            <Row>
              <Col>
                <Image src={avatar2} fluid className="wid-80 img-radius" />
              </Col>
            </Row>
          </div>
          <h6 className="mb-1 mt-3">Josephin Doe</h6>
          <p className="text-muted mb-3">UI/UX Designer</p>
          <p className="mb-1">Lorem Ipsum is simply dummy text</p>
          <p className="mb-0">been the industry's standard</p>
        </MainCard>
      </Col>

      <Col xl={4} md={6}>
        <h6 className="text-center mb-3">Social link</h6>
        <MainCard
          className="user-card user-card-2 support-bar1 shape-right"
          headerClassName="border-0 p-2 pb-0"
          bodyClassName="pt-0"
          title={
            <div className="cover-img-block">
              <Image src={slider5} alt="" className="img-fluid" />
            </div>
          }
          footer={
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
          }
        >
          <div className="user-about-block text-center">
            <Row className="align-items-center">
              <Col>
                <Row className="align-items-center">
                  <Col xs="auto" className="pr-0">
                    <Image className="img-radius img-fluid wid-80" src={avatar3} alt="User image" />
                  </Col>
                  <Col>
                    <h6 className="mb-1">Sara Soudein</h6>
                    <p className="mb-0">UI/UX Designer</p>
                  </Col>
                </Row>
              </Col>
              <Col xs="auto">
                <Dropdown>
                  <Dropdown.Toggle as="div" className="arrow-none dropdown-toggle" data-bs-toggle="dropdown">
                    <i className="ti ti-dots"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="end">
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </div>
          <div className="mt-3">
            <p className="mb-1">Lorem Ipsum is simply dummy text</p>
            <p className="mb-0">been the industry's standard</p>
          </div>
          <ul className="list-inline f-20 mt-3 mb-0">
            {socialLinks.map((icon) => (
              <li className="list-inline-item">
                <a href="#!" className={`text-${icon.platform}`}>
                  <i className={`fab ${icon.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </MainCard>
      </Col>
    </Row>
  );
}
