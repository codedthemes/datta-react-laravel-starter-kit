// react-bootstrap
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| STATISTICS - SALES ||============================== //

export default function Sales() {
  return (
    <>
      <Col md={6} xl={4}>
        <MainCard title="Daily Sales">
          <Row as={Stack} direction="horizontal" className="align-items-center">
            <Col xs={9}>
              <Stack as="h3" direction="horizontal" className="mb-0">
                <i className={`ti ti-arrow-up text-success f-30 m-r-10`} />
                <h3 className="f-w-300 mb-0">$ 249.95</h3>
              </Stack>
            </Col>
            <Col xs={3} className="text-end">
              67%
            </Col>
          </Row>
          <ProgressBar className="m-t-30" children={<ProgressBar now={75} className="bg-brand-color-1" />} />
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard title="Monthly Sales">
          <Row as={Stack} direction="horizontal" className="align-items-center">
            <Col xs={9}>
              <Stack as="h3" direction="horizontal" className="mb-0">
                <i className={`ti ti-arrow-down text-danger f-30 m-r-10`} />
                <h3 className="f-w-300 mb-0">$ 2.942.32</h3>
              </Stack>
            </Col>
            <Col xs={3} className="text-end">
              36%
            </Col>
          </Row>
          <ProgressBar className="m-t-30" children={<ProgressBar now={35} className="bg-brand-color-2" />} />
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard title="Monthly Sales">
          <h3 className="f-w-300">$17,400</h3>
          <span className="d-block text-muted text-uppercase">Total Revenue</span>

          <Row>
            <Col xs={6} className="m-t-20">
              <h6 className="text-muted">472</h6>
              <h6 className="text-muted f-w-300 m-b-0">
                Deals Added<span className="float-end f-w-400">69%</span>
              </h6>
              <ProgressBar className="m-t-10" children={<ProgressBar now={69} className="bg-brand-color-1" />} />
            </Col>

            <Col xs={6} className="m-t-20">
              <h6 className="text-muted">89</h6>
              <h6 className="text-muted f-w-300 m-b-0">
                Deals Won<span className="float-end f-w-400">58%</span>
              </h6>
              <ProgressBar className="m-t-10" children={<ProgressBar now={58} className="bg-brand-color-2" />} />
            </Col>
          </Row>
        </MainCard>
      </Col>
    </>
  );
}
