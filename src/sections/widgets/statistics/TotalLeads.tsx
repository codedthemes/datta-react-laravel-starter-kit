// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| STATISTICS - TOTAL LEADS ||============================== //

export default function TotalLeads() {
  return (
    <>
      <Col md={12} xl={4}>
        <MainCard>
          <h5 className="text-center">Total Leads</h5>
          <Row className="align-items-center justify-content-center">
            <Col xs="auto">
              <h3 className="f-w-300 m-t-20">
                $59,48
                <i className="fas fa-caret-up text-success f-26 m-l-10" />
              </h3>
              <span>EARNINGS</span>
            </Col>

            <Col className="text-end">
              <i className="fas fa-chart-pie f-30 text-c-purple" />
            </Col>
          </Row>

          <div className="leads-progress mt-3">
            <h6 className="mb-3 text-center">
              Organic <span className="ms-4">Purchesed</span>
            </h6>
            <ProgressBar>
              <ProgressBar className="bg-brand-color-2" now={30} key={1} />
              <ProgressBar className="bg-brand-color-1" now={35} key={2} />
            </ProgressBar>

            <h6 className="text-muted f-w-300 mt-4">
              Organic Leads
              <span className="float-end">340</span>
            </h6>
            <h6 className="text-muted f-w-300 mt-4">
              Purchesed Leads <span className="float-end">150</span>
            </h6>
            <h6 className="text-muted f-w-300 mt-4">
              Blocked Leads <span className="float-end">120</span>
            </h6>
            <h6 className="text-muted f-w-300 mt-4 mb-0">
              Buy Leads <span className="float-end">245</span>
            </h6>
          </div>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="Active-visitor" bodyClassName="text-center">
          <h5 className="mb-4">Active Visitor</h5>
          <i className="fas fa-user-friends f-30 text-success" />
          <h2 className="f-w-300 mt-3">1,285</h2>
          <span className="text-muted">Active Visit On Sites</span>
          <ProgressBar className="mt-4 m-b-40" children={<ProgressBar now={75} className="bg-brand-color-1" />} />
          <Row className="card-active">
            <Col md={4} xs={6}>
              <h4>52%</h4>
              <span className="text-muted">Desktop</span>
            </Col>

            <Col md={4} xs={6}>
              <h4>80%</h4>
              <span className="text-muted">Mobile</span>
            </Col>

            <Col md={4} xs={6}>
              <h4>68%</h4>
              <span className="text-muted">Tablet</span>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard>
          <h5 className="text-center">Total Leads</h5>
          <Row className="align-items-center justify-content-center">
            <Col xs="auto">
              <h3 className="f-w-300 m-t-20">
                $73,48
                <i className="fas fa-caret-up text-success f-26 m-l-10" />
              </h3>
              <span>EARNINGS</span>
            </Col>

            <Col className="text-end">
              <i className="fas fa-chart-line f-30 text-c-purple" />
            </Col>
          </Row>

          <div className="leads-progress mt-3">
            <h6 className="mb-3 text-center">
              Quality <span className="ms-4">Delivery</span>
            </h6>

            <ProgressBar>
              <ProgressBar className="bg-brand-color-1" now={30} key={1} />
              <ProgressBar className="bg-brand-color-2" now={35} key={2} />
            </ProgressBar>

            <h6 className="text-muted f-w-300 mt-4">
              Total Cost
              <span className="float-end">340</span>
            </h6>
            <h6 className="text-muted f-w-300 mt-4">
              Quality Of Product <span className="float-end">65%</span>
            </h6>
            <h6 className="text-muted f-w-300 mt-4">
              Delivery Period <span className="float-end">4 Days</span>
            </h6>
            <h6 className="text-muted f-w-300 mt-4 mb-0">
              Buy Product<span className="float-end">245</span>
            </h6>
          </div>
        </MainCard>
      </Col>
    </>
  );
}
