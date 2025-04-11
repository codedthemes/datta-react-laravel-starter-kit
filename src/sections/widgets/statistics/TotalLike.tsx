// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| STATISTICS - TOTAL LIKE ||============================== //

export default function TotalLike() {
  return (
    <>
      <Col md={12} xl={4}>
        <MainCard className="card-social mb-0" bodyClassName=" border-bottom">
          <Row className="align-items-center justify-between-center">
            <Col xs="auto">
              <i className="fab fa-facebook-f text-primary f-36" />
            </Col>
            <Col className="text-end">
              <h3>12,281</h3>
              <h5 className="text-success mb-0">
                +7.2% <span className="text-muted">Total Likes</span>
              </h5>
            </Col>
          </Row>
        </MainCard>
        <MainCard>
          <Row className="align-items-center justify-content-center card-active">
            <Col xs={6}>
              <h6 className="text-center m-b-10">
                <span className="text-muted m-r-5">Target:</span>35,098
              </h6>
              <ProgressBar className="m-t-10" children={<ProgressBar now={60} className="bg-brand-color-1" />} />
            </Col>

            <Col xs={6}>
              <h6 className="text-center m-b-10">
                <span className="text-muted m-r-5">Duration:</span>350
              </h6>

              <ProgressBar className="m-t-10" children={<ProgressBar now={45} className="bg-brand-color-2" />} />
            </Col>
          </Row>
        </MainCard>
      </Col>
      <Col md={6} xl={4}>
        <MainCard className="card-social mb-0" bodyClassName=" border-bottom">
          <Row className="align-items-center justify-between-center">
            <Col xs="auto">
              <i className="fab fa-twitter text-primary f-36" />
            </Col>
            <Col className="text-end">
              <h3>11,200</h3>
              <h5 className="text-secondary mb-0">
                +6.2%<span className="text-muted">Total Likes</span>
              </h5>
            </Col>
          </Row>
        </MainCard>
        <MainCard>
          <Row className="align-items-center justify-content-center card-active">
            <Col xs={6}>
              <h6 className="text-center m-b-10">
                <span className="text-muted m-r-5">Target:</span>34,185
              </h6>
              <ProgressBar className="m-t-10" now={40} />
            </Col>

            <Col xs={6}>
              <h6 className="text-center m-b-10">
                <span className="text-muted m-r-5">Duration:</span>800
              </h6>
              <ProgressBar className="m-t-10" now={70} />
            </Col>
          </Row>
        </MainCard>
      </Col>
      <Col md={6} xl={4}>
        <MainCard className="card-social mb-0" bodyClassName=" border-bottom">
          <Row className="align-items-center justify-between-center">
            <Col xs="auto">
              <i className="fab fa-google-plus-g text-danger f-36" />
            </Col>
            <Col className="text-end">
              <h3>10,500</h3>
              <h5 className="text-primary mb-0">
                +5.9%<span className="text-muted">Total Likes</span>
              </h5>
            </Col>
          </Row>
        </MainCard>
        <MainCard>
          <Row className="align-items-center justify-content-center card-active">
            <Col xs={6}>
              <h6 className="text-center m-b-10">
                <span className="text-muted m-r-5">Target:</span>25,998
              </h6>
              <ProgressBar className="m-t-10" children={<ProgressBar now={80} className="bg-brand-color-1" />} />
            </Col>

            <Col xs={6}>
              <h6 className="text-center m-b-10">
                <span className="text-muted m-r-5">Duration:</span>900
              </h6>
              <ProgressBar className="m-t-10" children={<ProgressBar now={50} className="bg-brand-color-2" />} />
            </Col>
          </Row>
        </MainCard>
      </Col>
    </>
  );
}
