// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import avatar2 from '@assets/images/user/avatar-2.png';

interface settingDataProp {
  value: number;
  label: string;
}

const defaultSettingData: settingDataProp[] = [
  { value: 69, label: 'Posts' },
  { value: 2749, label: 'Followers' },
  { value: 678, label: 'Following' },
  { value: 78, label: 'Like' }
];

// ==============================|| SOCIAL - USER SETTINGS ||============================== //

export default function UserSettings() {
  return (
    <>
      <h6 className="text-center mb-3">User settings</h6>
      <MainCard
        title={
          <Row className="align-items-center">
            <Col>
              <Row className="align-items-center">
                <Col xs="auto" className="pe-0">
                  <Image className="wid-60" src={avatar2} alt="Josephin Doe avatar" fluid roundedCircle />
                </Col>
                <Col>
                  <h6 className="mb-1 f-w-500">Josephin Doe</h6>
                  <p className="mb-0">UI/UX Designer</p>
                </Col>
              </Row>
            </Col>
            <Col xs="auto">
              <Button variant="primary">Edit</Button>
            </Col>
          </Row>
        }
        footer={
          <Row className="align-items-center">
            <Col>
              <Button variant="link" className="text-decoration-none p-0">
                <i className="ti ti-mail align-text-bottom" aria-label="Send message" /> Message
              </Button>
            </Col>
            <Col xs="auto">
              <Button variant="secondary" size="sm" className="m-0">
                Follow
              </Button>
            </Col>
          </Row>
        }
        footerClassName="pt-0"
      >
        <Row className="text-center">
          {defaultSettingData.map((value, index) => (
            <Col key={index}>
              <h6 className="f-w-500 mb-1">{value.value}</h6>
              <p className="mb-0">{value.label}</p>
            </Col>
          ))}
        </Row>
      </MainCard>
    </>
  );
}
