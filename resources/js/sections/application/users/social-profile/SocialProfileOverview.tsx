// react-bootstrap
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import avatarImage5 from '@assets/images/user/avatar-5.png';
import cover from '@assets/images/profile/cover.jpg';

interface SocialProfileOverviewProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabIcons: { [key: string]: string } = {
  home: 'ph ph-house',
  profile: 'ph ph-user',
  mycontacts: 'ph ph-phone',
  gallery: 'ph ph-image'
};

const dropdownItems = [
  { icon: 'ph ph-cloud-arrow-up', text: 'Upload new' },
  { icon: 'ph ph-image', text: 'From photos' },
  { icon: 'ph ph-film-strip', text: 'Upload video' },
  { icon: 'ph ph-trash', text: 'Remove' }
];

const DropdownMenu = ({ items }: { items: typeof dropdownItems }) => (
  <Dropdown.Menu>
    {items.map((item, index) => (
      <Dropdown.Item key={index} href="#">
        <i className={`${item.icon} me-2`} /> {item.text}
      </Dropdown.Item>
    ))}
  </Dropdown.Menu>
);

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
                <i className="ph ph-camera" />
              </Dropdown.Toggle>
              <DropdownMenu items={dropdownItems} />
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
                      <Image fluid roundedCircle className="wid-100" src={avatarImage5} alt="User" />
                      <div className="certificated-badge">
                        <i className="ti ti-rosette-discount-check-filled text-primary bg-icon" />
                      </div>
                    </div>
                    <div className="overlay">
                      <span>Change</span>
                    </div>
                  </div>
                </Dropdown.Toggle>
                <DropdownMenu items={dropdownItems} />
              </Dropdown>
            </div>
            <h5 className="mb-1">Lary Doe</h5>
            <p className="mb-2 text-muted">UI/UX Designer</p>
          </Col>
          <Col md={8} className="mt-md-4 mt-2">
            <Row>
              <Col md={6}>
                <Stack as="a" direction="horizontal" className="mb-1 text-muted align-items-end text-h-primary">
                  <i className="ph ph-globe me-2 f-18" /> www.CodedTheme.com
                </Stack>
                <Stack
                  as="a"
                  direction="horizontal"
                  href="mailto:demo@domain.com"
                  className="mb-1 text-muted align-items-end text-h-primary"
                >
                  <i className="ph ph-envelope-simple me-2 f-18" /> demo@domain.com
                </Stack>
                <Stack as="a" direction="horizontal" className="mb-1 text-muted align-items-end text-h-primary">
                  <i className="ph ph-phone me-2 f-18" /> +1 9999-999-999
                </Stack>
              </Col>
              <Col md={6}>
                <Stack direction="horizontal" gap={2} className="align-items-start text-muted">
                  <i className="ph ph-map-pin f-18" style={{ marginTop: '3px' }} />{' '}
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
                    <i className={`${tabIcons[tab]} align-text-bottom me-2`} />{' '}
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
