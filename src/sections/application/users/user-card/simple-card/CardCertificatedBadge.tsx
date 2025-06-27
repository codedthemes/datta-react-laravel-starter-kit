// react-bootstrap
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

// assets
import avatar5 from 'assets/images/user/avatar-5.png';
import slider6 from 'assets/images/widget/slider6.jpg';

// ==============================|| SIMPLE CARD - CARD CERTIFICATED BADGE ||============================== //

export default function CardCertificatedBadge({ title }: { title: string }) {
  return (
    <>
      <h6 className="text-center mb-3">{title}</h6>
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
          <Row className="align-items-end">
            <Col className="pb-3">
              <a>
                <i className="ph ph-star align-middle text-warning f-20" />
              </a>
            </Col>
            <Col>
              <div className="position-relative d-inline-block">
                <Image className="img-radius img-fluid wid-80" src={avatar5} alt="User image" roundedCircle />
                <div className="certificated-badge">
                  <i className="ti ti-rosette-discount-check-filled text-primary bg-icon" />
                </div>
              </div>
            </Col>
            <Col className="text-end pb-3">
              <Dropdown align="end">
                <Dropdown.Toggle as="a" className="arrow-none">
                  <i className="ph ph-dots-three-outline align-middle" />
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
          <h6 className="mb-1 mt-3">Suzen</h6>
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
