// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Avatar1 from 'assets/images/user/avatar-1.jpg';
import Avatar2 from 'assets/images/user/avatar-2.jpg';
import Avatar3 from 'assets/images/user/avatar-3.jpg';

// =============================|| STATISTICS - OFFER ||============================== //

export default function Offer() {
  return (
    <>
      <Col md={6} xl={4}>
        <MainCard className="affilate-offers">
          <h5>
            Affiliate
            <span className="float-end">
              <i className="card-icon fas fa-donate f-24" />
              <i className="card-icon fas fa-donate f-24" />
            </span>
          </h5>
          <Stack direction="horizontal" as="h2" className="mt-4 mb-0  align-items-center justify-content-between f-w-300">
            3,789 <label className="badge bg-brand-color-1 text-white f-12 f-w-400 float-end">4+</label>
          </Stack>
          <Stack as="h6" direction="horizontal" className=" align-items-center justify-content-center mt-3">
            From First week 13.5% <i className="fas fa-caret-up text-success f-26 m-l-10" />
            From First week 13.5% <i className="fas fa-caret-up text-success f-26 m-l-10" />
          </Stack>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="team-leader">
          <Carousel prevIcon={false}>
            <Carousel.Item>
              <Row>
                <Col xs="auto">
                  <Image className="rounded-circle" src={Avatar1} width={85} alt="activity-user" />
                </Col>
                <Col>
                  <h5 className="mb-3">Jarvis Pepperspray</h5>
                  <span className="f-w-300 text-muted mb-3 d-block">Separated they live in Bookmarksgrove..</span>
                  <span>Team leader</span>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col xs="auto">
                  <Image className="rounded-circle" src={Avatar2} width={85} alt="activity-user" />
                </Col>
                <Col>
                  <h5 className="mb-3">Jarvis Pepperspray</h5>
                  <span className="f-w-300 text-muted mb-3 d-block">Separated they live in Bookmarksgrove..</span>
                  <span>Team leader</span>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col xs="auto">
                  <Image className="rounded-circle" src={Avatar3} width={85} alt="activity-user" />
                </Col>
                <Col>
                  <h5 className="mb-3">Jarvis Pepperspray</h5>
                  <span className="f-w-300 text-muted mb-3 d-block">Separated they live in Bookmarksgrove..</span>
                  <span>Team leader</span>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="affilate-offers">
          <h5>
            Offers
            <span className="float-end">
              <i className="card-icon fas fa-hand-holding-usd f-24" />
            </span>
          </h5>
          <Stack direction="horizontal" as="h2" className="mt-4 mb-0 align-items-center justify-content-between f-w-300">
            2,586 <Badge className="badge bg-brand-color-1 text-white f-12 f-w-400 float-end">10+</Badge>
          </Stack>
          <Stack as="h6" direction="horizontal" className=" align-items-center justify-content-center mt-3">
            From Last week 15.5% <i className="fas fa-caret-up text-success f-26 m-l-10" />
          </Stack>
        </MainCard>
      </Col>
    </>
  );
}
