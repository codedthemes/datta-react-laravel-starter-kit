// material-ui

// project-imports
import MainCard from '@/components/MainCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CustomerSatisfactionChart from './CustomerSatisfactionChart';

// ==============================|| DASHBOARD - CUSTOMER SATISFACTION ||============================== //

export default function CustomerSatisfaction() {
  return (
    <MainCard>
      <h6>Customer Satisfaction</h6>
      <span>
        It takes continuous effort to maintain high customer satisfaction levels.Internal and external quality measures are often tied
        together, as the opinion...
      </span>
      <a href="#" className="text-primary d-block">
        Learn more..
      </a>

      <Row>
        <Col>
          <CustomerSatisfactionChart />
        </Col>
      </Row>
    </MainCard>
  );
}
