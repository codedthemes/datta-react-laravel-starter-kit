import { Link } from 'react-router-dom';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// assets
import avtarImage5 from 'assets/images/user/avatar-5.jpg';
import cover from 'assets/images/profile/cover.jpg';

interface SocialProfileOverviewProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabIcons: { [key: string]: JSX.Element } = {
  home: <i className="ti ti-home" />,
  profile: <i className="ti ti-user" />,
  mycontacts: <i className="ti ti-phone" />,
  gallery: <i className="ti ti-photo" />
};

// ==============================|| SOCIAL PROFILE - SOCIAL PROFILE OVERVIEW ||============================== //

export default function SocialProfileOverview({ activeTab, setActiveTab }: SocialProfileOverviewProps) {
  return (
    <MainCard
      className="user-profile card user-card mb-4"
      headerClassName="border-0 p-0 pb-0"
      bodyClassName="py-0"
      title={
        <div className="cover-img-block">
          <Image src={cover} alt="" fluid />
          <div className="overlay"></div>
          <div className="change-cover">
            <Dropdown>
              <Dropdown.Toggle variant="span" id="dropdown-cover">
                <i className="ti ti-camera" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">
                  <i className="ti ti-cloud-upload me-2" /> Upload new
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <i className="ti ti-photo me-2" /> From photos
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <i className="ti ti-movie me-2" /> Upload video
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <i className="ti ti-trash me-2" /> Remove
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      }
    >
      <div className="user-about-block m-0">
        <Row>
          <Col md={4} className="text-center mt-n5">
            <div className="change-profile text-center">
              <Dropdown className="w-auto d-inline-block">
                <Dropdown.Toggle variant="link" id="dropdown-profile">
                  <div className="profile-dp">
                    <div className="position-relative d-inline-block">
                      <Image fluid className="img-radius wid-100" src={avtarImage5} alt="User" />
                      <div className="certificated-badge">
                        <i className="fas fa-certificate text-primary bg-icon" />
                        <i className="fas fa-check front-icon text-white" />
                      </div>
                    </div>
                    <div className="overlay">
                      <span>Change</span>
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <i className="ti ti-cloud-upload me-2" /> Upload new
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i className="ti ti-photo me-2" /> From photos
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i className="ti ti-shield me-2" /> Protect
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i className="ti ti-trash me-2" /> Remove
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <h5 className="mb-1">Lary Doe</h5>
            <p className="mb-2 text-muted">UI/UX Designer</p>
          </Col>
          <Col md={8} className="mt-md-4">
            <Row>
              <Col md={6}>
                <Stack as={Link} direction="horizontal" to="#!" className="mb-1 text-muted align-items-end text-h-primary">
                  <i className="ti ti-world me-2 f-20" /> www.phoenixcoded.net
                </Stack>
                <Stack
                  as={Link}
                  direction="horizontal"
                  to="mailto:demo@domain.com"
                  className="mb-1 text-muted align-items-end text-h-primary"
                >
                  <i className="ti ti-mail me-2 f-20" /> demo@domain.com
                </Stack>
                <Stack as={Link} direction="horizontal" to="#!" className="mb-1 text-muted align-items-end text-h-primary">
                  <i className="ti ti-phone me-2 f-20" /> +1 9999-999-999
                </Stack>
              </Col>
              <Col md={6}>
                <Stack direction="horizontal" gap={3} className="align-items-start">
                  <i className="ti ti-map-pin f-20" />{' '}
                  <div>
                    <p className="mb-0 text-muted">4289 Calvin Street</p>
                    <p className="mb-0 text-muted">Baltimore, near MD Tower Maryland,</p>
                    <p className="mb-0 text-muted">Maryland (21201)</p>
                  </div>
                </Stack>
              </Col>
            </Row>
            <Nav variant="tabs" className="profile-tabs nav-fill" id="myTab">
              {['home', 'profile', 'mycontacts', 'gallery'].map((tab) => (
                <Nav.Item key={tab}>
                  <Nav.Link eventKey={tab} className="text-reset" active={activeTab === tab} onClick={() => setActiveTab(tab)}>
                    <span className="me-2">{tabIcons[tab]}</span>{' '}
                    {tab === 'mycontacts' ? 'My Contacts' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>
      </div>
    </MainCard>
  );
}
