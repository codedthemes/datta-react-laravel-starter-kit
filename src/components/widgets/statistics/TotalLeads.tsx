// react-bootstrap
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

type TotalLeadsProps = {
  icon: string;
  earnings: string;
  purchesed: string;
  purchesedValue: string;
  blocked: string;
  blockedValue: string;
  buy: string;
  buyValue: string;
};

// ==============================|| STATISTICS - TOTAL LEADS ||============================== //

export default function TotalLeads({ earnings, purchesed, purchesedValue, blocked, blockedValue, buy, buyValue }: TotalLeadsProps) {
  return (
    <MainCard>
      <h5 className="text-center">Total Leads</h5>
      <Row className="align-items-center justify-content-center">
        <Col xs="auto">
          <h3 className="f-w-300 m-t-20">
            ${earnings}
            <i className="fas fa-caret-up text-success f-26 m-l-10" />
          </h3>
          <span>EARNINGS</span>
        </Col>

        <Col className="text-end">
          <i className="fas fa-{icon} f-30 text-c-purple" />
        </Col>
      </Row>

      <div className="leads-progress mt-3">
        <h6 className="mb-3 text-center">
          Organic <span className="ms-4">Purchesed</span>
        </h6>
        <ProgressBar className="m-t-30" children={<ProgressBar now={30} className="bg-brand-color-1" />} />
        <ProgressBar className="m-t-30" children={<ProgressBar now={60} className="bg-brand-color-2" />} />

        <h6 className="text-muted f-w-300 mt-4">
          Organic Leads
          <span className="float-end">340</span>
        </h6>
        <h6 className="text-muted f-w-300 mt-4">
          {purchesed} <span className="float-end">{purchesedValue}</span>
        </h6>
        <h6 className="text-muted f-w-300 mt-4">
          {blocked} <span className="float-end">{blockedValue}</span>
        </h6>
        <h6 className="text-muted f-w-300 mt-4 mb-0">
          {buy} <span className="float-end">{buyValue}</span>
        </h6>
      </div>
    </MainCard>
  );
}
