// react-bootstrap
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import avatar1 from '@assets/images/user/avatar-1.png';
import avatar2 from '@assets/images/user/avatar-2.png';
import avatar3 from '@assets/images/user/avatar-3.png';
import slider6 from '@assets/images/widget/slider6.jpg';
import slider5 from '@assets/images/widget/slider5.jpg';
import slider7 from '@assets/images/widget/slider7.jpg';

interface SocialLink {
  platform: string;
  icon: string;
}

// social links
const socialLinks: SocialLink[] = [
  { platform: 'facebook', icon: 'ti ti-brand-facebook-filled' },
  { platform: 'twitter', icon: 'ti ti-brand-twitter-filled' },
  { platform: 'dribbble', icon: 'ti ti-brand-dribbble-filled' },
  { platform: 'pinterest', icon: 'ti ti-brand-pinterest-filled' },
  { platform: 'youtube', icon: 'ti ti-brand-youtube-filled' },
  { platform: 'googleplus', icon: 'ti ti-brand-google-filled' },
  { platform: 'linkedin', icon: 'ti ti-brand-linkedin-filled' }
];

const stats = [
  { value: '30', label: 'Projects' },
  { value: '1.5K', label: 'Followers' },
  { value: '352', label: 'Following' }
];

const StatsRow = ({ isWhiteText = false }: { isWhiteText?: boolean }) => (
  <Row>
    {stats.map((stat, index) => (
      <Col key={`${stat.label}-${index}`}>
        <h6 className={`mb-1 f-w-500 ${isWhiteText ? 'text-white' : ''}`}>{stat.value}</h6>
        <p className="mb-0">{stat.label}</p>
      </Col>
    ))}
  </Row>
);

const DropdownMenu = () => (
  <Dropdown.Menu align="end">
    <Dropdown.Item href="#">View Portfolio</Dropdown.Item>
    <Dropdown.Item href="#">Send Message</Dropdown.Item>
    <Dropdown.Item href="#">Connect</Dropdown.Item>
  </Dropdown.Menu>
);

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
              <Image src={slider7} alt="" fluid />
            </div>
          }
          footer={<StatsRow isWhiteText />}
        >
          <div className="user-about-block text-center">
            <Row className="align-items-end justify-content-center">
              <Col>
                <div className="position-relative d-inline-block">
                  <Image className="wid-80" src={avatar1} alt="User" roundedCircle fluid />
                  <div className="certificated-badge">
                    <i className="ti ti-rosette-discount-check-filled text-primary bg-icon" />
                  </div>
                </div>
              </Col>
              <Col xs="auto" className="pb-3">
                <Dropdown align="end">
                  <Dropdown.Toggle as="div" bsPrefix="false" className="arrow-none dropdown-toggle" id="dropdown-custom-components">
                    <i className="ph ph-dots-three-outline align-middle" />
                  </Dropdown.Toggle>
                  <DropdownMenu />
                </Dropdown>
              </Col>
            </Row>
          </div>
          <h6 className="f-w-500 mb-1 mt-3">Lary Doe</h6>
          <p className="mb-3 text-muted">UI/UX Designer</p>
          <p className="mb-0">Specializing in modern web interfaces and mobile apps</p>
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
            <Row className="text-center">
              <StatsRow />
            </Row>
          }
        >
          <div className="user-about-block">
            <Row>
              <Col>
                <Image src={avatar2} fluid roundedCircle className="wid-80" />
              </Col>
            </Row>
          </div>
          <h6 className="f-w-500 mb-1 mt-3">Josephin Doe</h6>
          <p className="text-muted mb-3">UI/UX Designer</p>
          <p className="mb-0">Creative designer specializing in modern interfaces and user-centered design solutions</p>
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
              <Image src={slider5} alt="" fluid />
            </div>
          }
          footer={
            <Row className="text-center">
              <StatsRow />
            </Row>
          }
        >
          <div className="user-about-block text-center">
            <Row className="align-items-center">
              <Col>
                <Row className="align-items-center">
                  <Col xs="auto" className="pr-0">
                    <Image className="wid-80" src={avatar3} alt="User image" roundedCircle fluid />
                  </Col>
                  <Col>
                    <h6 className="f-w-500 mb-1">Sara Soudein</h6>
                    <p className="mb-0">UI/UX Designer</p>
                  </Col>
                </Row>
              </Col>
              <Col xs="auto">
                <Dropdown align="end">
                  <Dropdown.Toggle as="div" className="arrow-none dropdown-toggle" data-bs-toggle="dropdown">
                    <i className="ph ph-dots-three-outline align-middle"></i>
                  </Dropdown.Toggle>
                  <DropdownMenu />
                </Dropdown>
              </Col>
            </Row>
          </div>
          <div className="mt-3">
            <p className="mb-0">Creative designer specializing in modern interfaces and user-centered design solutions</p>
          </div>
          <ul className="list-inline f-20 mt-3 mb-0">
            {socialLinks.map((icon, index) => (
              <li className="list-inline-item" key={index}>
                <a href="#!">
                  <i className={`${icon.icon} text-${icon.platform}`} />
                </a>
              </li>
            ))}
          </ul>
        </MainCard>
      </Col>
    </Row>
  );
}
