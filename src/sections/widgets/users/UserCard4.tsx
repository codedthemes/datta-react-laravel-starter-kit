// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Avatar1 from 'assets/images/user/avatar-2.jpg';
import Avatar2 from 'assets/images/user/avatar-3.jpg';

// =============================|| USERS - CARD 4 ||============================== //

export default function UserCard4() {
  return (
    <>
      <Col md={6} xl={4}>
        <MainCard
          className="loction-user widget-focus  "
          title={
            <Row className="align-items-center justify-content-center p-0">
              <Col xs="auto">
                <Image src={Avatar2} className="card-img" />
              </Col>
              <Col>
                <h5 className="mb-2">Villads Johansen</h5>
                <span>
                  <i className="fa fa-map-marker f-18 m-r-5 text-muted" />
                  <span className="text-muted">Berlin, Germany</span>
                </span>
              </Col>
            </Row>
          }
        >
          <h6 className="m-b-10">
            Twitter<span className="float-end">Google +</span>
          </h6>
          <ProgressBar>
            <ProgressBar className="bg-brand-color-2 " now={30} key={1} />
            <ProgressBar className="bg-brand-color-1" now={35} key={2} />
          </ProgressBar>

          <h5 className="f-w-300 m-t-20  text-muted">
            62%<span className="float-end">28%</span>
          </h5>

          <h6 className="m-b-10 m-t-20">
            Facebook <span className="float-end">Youtube</span>
          </h6>
          <ProgressBar>
            <ProgressBar className="bg-brand-color-2 " now={30} key={1} />
            <ProgressBar className="bg-brand-color-1" now={35} key={2} />
          </ProgressBar>

          <h5 className="f-w-300 m-t-20  text-muted">
            60%<span className="float-end">40%</span>
          </h5>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="widget-focus">
          <div className="text-center m-b-30">
            <Image className="img-fluid rounded-circle" src={Avatar1} alt="" />
            <h5 className="mt-3">Mille Jensen</h5>
            <span className="d-block">Ninja Level 14</span>
          </div>
          <h6 className=" m-b-0">
            754 Points <span className="float-end">1000</span>
          </h6>
          <ProgressBar className="m-t-10" children={<ProgressBar now={75} className="bg-brand-color-1  rounded-0" />} />

          <Row className="m-t-30">
            <Col xs={6} className="p-r-0">
              <div className="d-grid">
                <Button className="text-uppercase">Add friend</Button>
              </div>
            </Col>

            <Col xs={6} className="p-r-0">
              <div className="d-grid">
                <Button className="text-uppercase border" variant="outline-secondary">
                  Message
                </Button>
              </div>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard bodyClassName="text-center">
          <h5>Alma Christensen</h5>
          <span className="d-block mb-4">UX Designer</span>
          <Image className="img-fluid rounded-circle" src={Avatar1} width={70} />
          <Row className="m-t-30">
            <Col md={4} xs={6}>
              <h5>974</h5>
              <span className="text-muted">IMAGES</span>
            </Col>

            <Col md={4} xs={6}>
              <h5>35.7k</h5>
              <span className="text-muted">LIKES</span>
            </Col>

            <Col md={4} xs={12}>
              <h5>236</h5>
              <span className="text-muted">FOLLOW</span>
            </Col>
          </Row>

          <div className="designer m-t-30">
            <div className="d-grid">
              <Button className=" shadow-2 text-uppercase btn-block">add friend</Button>
            </div>
          </div>
        </MainCard>
      </Col>
    </>
  );
}
