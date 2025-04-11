// react-bootstrap
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// ===============================|| DEFAULT - SALES ||============================== //

export default function Sales() {
  return (
    <Row>
      <Col md={6} xl={4}>
        <MainCard>
          <h6 className="mb-4">Daily Sales</h6>
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
          <ProgressBar className="m-t-30" children={<ProgressBar now={50} className="bg-brand-color-1" />} />
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard>
          <h6 className="mb-4">Monthly Sales</h6>
          <Row as={Stack} direction="horizontal" className="align-items-center">
            <Col xs={9}>
              <Stack as="h3" direction="horizontal" className="mb-0">
                <i className={`ti ti-arrow-down text-danger f-30 m-r-10`} />
                <h3 className="f-w-300 mb-0">$2.942.32</h3>
              </Stack>
            </Col>
            <Col xs={3} className="text-end">
              36%
            </Col>
          </Row>
          <ProgressBar className="m-t-30" children={<ProgressBar now={36} className="bg-brand-color-2" />} />
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard>
          <h6 className="mb-4">Yearly Sales</h6>
          <Row as={Stack} direction="horizontal" className="align-items-center">
            <Col xs={9}>
              <Stack as="h3" direction="horizontal" className="mb-0">
                <i className={`ti ti-arrow-up text-success f-30 m-r-10`} />
                <h3 className="f-w-300 mb-0">$8.638.32</h3>
              </Stack>
            </Col>
            <Col xs={3} className="text-end">
              80%
            </Col>
          </Row>
          <ProgressBar className="m-t-30" children={<ProgressBar now={70} className="bg-brand-color-1" />} />
        </MainCard>
      </Col>
    </Row>
  );
}
