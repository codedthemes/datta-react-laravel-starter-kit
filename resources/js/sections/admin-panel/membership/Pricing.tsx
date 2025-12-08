// react-bootstrap
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

interface PricingPlan {
  name: string;
  price: number;
  color: string;
  features: string[];
}

interface PricingProps {
  data: PricingPlan[];
}

// =============================|| MEMBERSHIP - PRICING ||============================== //

export default function Pricing({ data }: PricingProps) {
  return (
    <Row>
      <Col xs={12}>
        <MainCard bodyClassName="p-5">
          <Row className="g-4">
            {data.map((plan, index) => (
              <Col key={index} md={6} lg={4}>
                <MainCard
                  className={`price-card p-4 border border-${plan.color} border-2 rounded-4 h-100`}
                  bodyClassName={`bg-${plan.color} bg-opacity-10 rounded-4 v3`}
                >
                  <div className="price-head v3">
                    <h4 className={`mb-0 f-24 f-w-600 text-${plan.color}`}>{plan.name}</h4>
                    <div className="price-price text-dark mt-3">
                      ${plan.price}/ <span className="text-muted f-20">Month</span>
                    </div>
                  </div>
                  <ListGroup className="product-list v3">
                    {plan.features.map((feature) => (
                      <ListGroup.Item key={feature} className="enable">
                        <i className={`ti ti-check text-${plan.color}`} /> {feature}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  <div className="d-grid">
                    <a href="#!" className="btn btn-dark mt-4">
                      Buy Now
                    </a>
                  </div>
                </MainCard>
              </Col>
            ))}
          </Row>
        </MainCard>
      </Col>
    </Row>
  );
}
