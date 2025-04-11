// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| STATISTICS - TASKS ||============================== //

export default function Tasks() {
  return (
    <>
      <Col md={12} xl={4}>
        <MainCard title="Overdue Tasks">
          <Row className="align-items-center">
            <Col xs="8">
              <h2 className="f-w-300 m-0">34</h2>
              <span className="text-muted">Last Week 60%</span>
            </Col>
            <Col xs={4} className=" text-end">
              <h5 className="text-danger f-w-400">10%</h5>
            </Col>
          </Row>
        </MainCard>
      </Col>
      <Col md={6} xl={4}>
        <MainCard title="Tasks to Do">
          <Row className="align-items-center">
            <Col xs="8">
              <h2 className="f-w-300 m-0">25</h2>
              <span className="text-muted">Last Week 40%</span>
            </Col>
            <Col xs={4} className=" text-end">
              <h5 className="text-success f-w-400">30%</h5>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard title="Completed Task">
          <Row className="align-items-center">
            <Col xs="8">
              <h2 className="f-w-300 m-0">19</h2>
              <span className="text-muted">Last Week 60%</span>
            </Col>
            <Col xs={4} className=" text-end">
              <h5 className="text-danger f-w-400">25%</h5>
            </Col>
          </Row>
        </MainCard>
      </Col>
    </>
  );
}
