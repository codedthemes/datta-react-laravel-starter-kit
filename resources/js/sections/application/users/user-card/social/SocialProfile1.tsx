// react-bootstrap
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

//assets
import avatar1 from '@assets/images/user/avatar-1.png';
import coverImage from '@assets/images/profile/cover.jpg';

const dropdownItems = [
  { icon: 'ph ph-cloud-arrow-up', text: 'Upload new' },
  { icon: 'ph ph-image', text: 'From photos' },
  { icon: 'ph ph-film-strip', text: 'Upload video' },
  { icon: 'ph ph-trash', text: 'Remove' }
];

const DropdownMenu = ({ items }: { items: typeof dropdownItems }) => (
  <Dropdown.Menu>
    {items.map((item, index) => (
      <Dropdown.Item key={`${item.text}-${index}`} href="#">
        <i className={`${item.icon} me-2`} style={{ verticalAlign: '-2px' }} /> {item.text}
      </Dropdown.Item>
    ))}
  </Dropdown.Menu>
);

// ==============================|| SOCIAL - SOCIAL PROFILE 1 ||============================== //

export default function SocialProfile1() {
  return (
    <>
      <h6 className="text-center mb-3">Social profile</h6>
      <MainCard
        className="user-card user-card-2 shape-right"
        headerClassName="border-0 p-2 pb-0"
        bodyClassName="pt-0"
        title={
          <div className="cover-img-block">
            <Image src={coverImage} alt="Cover" fluid />
            <div className="overlay" />
            <div className="change-cover">
              <Dropdown>
                <Dropdown.Toggle as="a" className="arrow-none">
                  <i className="ph ph-camera" />
                </Dropdown.Toggle>
                <DropdownMenu items={dropdownItems} />
              </Dropdown>
            </div>
          </div>
        }
      >
        <div className="user-about-block">
          <Row className="align-items-center">
            <Col>
              <Row className="align-items-center">
                <Col xs="auto" className="pr-0">
                  <div className="change-profile">
                    <Dropdown drop="up-centered">
                      <Dropdown.Toggle as="a" className="dropdown-toggle">
                        <div className="profile-dp position-relative">
                          <Image className="wid-100" src={avatar1} alt="User image" roundedCircle fluid />
                          <div className="overlay position-absolute top-0 left-0 right-0 bottom-0">
                            <span>Change</span>
                          </div>
                        </div>
                      </Dropdown.Toggle>
                      <DropdownMenu items={dropdownItems} />
                    </Dropdown>
                  </div>
                </Col>
                <Col>
                  <h6 className="mb-1">Lary Doe</h6>
                  <p className="mb-0">UI/UX Designer</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </MainCard>
    </>
  );
}
