// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| STATISTICS - RATINGS ||============================== //

export default function Rating() {
  return (
    <>
      <Col md={12} xl={4}>
        <MainCard title="Project Rating">
          <Row className="align-items-center justify-content-center">
            <Col xs={6}>
              <Stack as="h2" direction="horizontal" className="f-w-300 align-items-center float-left">
                4.3 <i className="fas fa-star f-12 m-l-10 text-warning" />
              </Stack>
            </Col>
            <Col xs={6} className="text-end">
              <Stack as="h6" direction="horizontal" className="f-w-300 align-items-center float-end">
                0.4 <i className="fas fa-caret-up text-success f-24 m-l-10" />
              </Stack>
            </Col>
          </Row>
        </MainCard>
      </Col>
      <Col md={6} xl={4}>
        <MainCard>
          <h5>Your Total Charges</h5>
          <Row className="align-items-center justify-content-center">
            <Col xs={6}>
              <h3 className="f-w-300 m-t-20">$894.39</h3>
              <span>August 31,2017</span>
            </Col>
            <Col xs={6}>
              <div className="d-grid">
                <Button className="text-uppercase shadow-2">Pay Now</Button>
              </div>
            </Col>
          </Row>
        </MainCard>
      </Col>
      <Col md={6} xl={4}>
        <MainCard>
          <h5>Growth Rate</h5>
          <Row className="align-items-center justify-content-center">
            <Col xs={6}>
              <h2 className="f-w-300 m-t-20">48%</h2>
            </Col>
            <Col xs={6} className="text-end">
              <i className="fas fa-chart-pie f-30 text-success" />
            </Col>
          </Row>
          <span className="text-muted text-center d-block">From Last Month</span>
        </MainCard>
      </Col>
    </>
  );
}
