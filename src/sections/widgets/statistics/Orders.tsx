// react-bootstrap
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| STATISTICS - ORDERS ||============================== //

export default function Orders() {
  return (
    <>
      <Col md={6} xl={4}>
        <MainCard>
          <h5>Online Orders</h5>
          <Stack direction="horizontal" as="h6" className="text-muted align-items-center justify-content-between m-t-30">
            Delivery Orders<span className="float-end f-18 text-success">237 / 400</span>
          </Stack>
          <ProgressBar className="m-t-10" children={<ProgressBar now={65} className="bg-brand-color-1" />} />
          <span className="text-muted mt-2 d-block">37% Done</span>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard>
          <h5>Pending Orders</h5>
          <Stack direction="horizontal" as="h6" className="text-muted align-items-center justify-content-between m-t-30">
            pending Orders<span className="float-end f-18">100 / 500</span>
          </Stack>
          <ProgressBar className="m-t-10" children={<ProgressBar now={50} className="bg-brand-color-2" />} />
          <span className="text-muted mt-2 d-block">20% pending</span>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard>
          <h5>Return Orders</h5>
          <Stack direction="horizontal" as="h6" className="text-muted align-items-center justify-content-between m-t-30">
            Return Orders
            <span className="float-end f-18 text-primary">50 / 400</span>
          </Stack>
          <ProgressBar className="m-t-10" now={40} />
          <span className="text-muted mt-2 d-block">10% Return</span>
        </MainCard>
      </Col>
    </>
  );
}
