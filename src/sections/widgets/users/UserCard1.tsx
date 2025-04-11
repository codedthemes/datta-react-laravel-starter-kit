// react-bootstrap
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Avatar4 from 'assets/images/widget/dashborad-4.jpg';
import Avatar5 from 'assets/images/widget/dashborad-5.jpg';

// =============================|| USERS - CARD 1 ||============================== //

export default function UserCard1() {
  return (
    <>
      <Col md={6} xl={4}>
        <MainCard>
          <Row className="align-items-center justify-content-center">
            <Col sm="auto">
              <Image src={Avatar5} className="rounded" />
            </Col>

            <Col>
              <h5 className="m-t-35">Dashboard UI Kit</h5>
              <h6 className="m-b-0">
                $2356.23 <span className="float-end">$32</span>
              </h6>
              <ProgressBar className="m-t-10" children={<ProgressBar now={45} className="bg-brand-color-1 rounded-0" />} />
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="widget-focus" bodyClassName="p-sm-0">
          <Row className="align-items-center justify-content-center">
            <Col sm="auto">
              <Image src={Avatar4} className="rounded" />
            </Col>
            <Col className="pt-3 pt-sm-0 pl-3 pl-sm-0 ">
              <h4>
                $59,48 <i className="fa fa-caret-up text-success f-22 m-l-5" />
              </h4>
              <span>EARNINGS</span>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard>
          <Row className="align-items-center justify-content-center">
            <Col sm="auto">
              <Image src={Avatar5} className="rounded" />
            </Col>

            <Col>
              <h5 className="m-t-35">Dashboard UI Kit</h5>
              <h6 className="m-b-0">
                $2463.23 <span className="float-end">$64</span>
              </h6>
              <ProgressBar className="m-t-10" children={<ProgressBar now={45} className="bg-brand-color-2 rounded-0" />} />
            </Col>
          </Row>
        </MainCard>
      </Col>
    </>
  );
}
