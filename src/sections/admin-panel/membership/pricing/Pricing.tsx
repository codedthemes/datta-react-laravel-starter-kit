import { Link } from 'react-router-dom';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| MEMBERSHIP - PRICING ||============================== //

export default function Pricing() {
  return (
    <Row>
      <Col xs={12}>
        <Row className="g-4">
          <Col md={6} lg={4}>
            <MainCard className=" price-card p-4 border border-success border-2 h-100" bodyClassName=" bg-success bg-opacity-10 rounded v3">
              <div className="price-head v3">
                <h4 className="mb-0 text-success">Casual</h4>
                <div className="price-price mt-3">
                  $50 <span className="text-muted">month</span>
                </div>
              </div>
              <ListGroup className="product-list v3">
                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-success" /> Full Facility Access
                </ListGroup.Item>
                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-success" /> Meals plans
                </ListGroup.Item>
                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-success" /> 10% Discounts
                </ListGroup.Item>
                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-success" /> Cancel anytime
                </ListGroup.Item>
              </ListGroup>

              <div className="d-grid">
                <Link className="btn btn-dark mt-4" to="#">
                  Buy Now
                </Link>
              </div>
            </MainCard>
          </Col>

          <Col md={6} lg={4}>
            <MainCard className=" price-card p-4 border border-primary border-2 h-100" bodyClassName=" bg-primary bg-opacity-10 rounded v3">
              <div className="price-head v3">
                <h4 className="mb-0 text-primary">Addicted</h4>
                <div className="price-price mt-3">
                  $150 <span className="text-muted">month</span>
                </div>
              </div>
              <ListGroup className="product-list v3">
                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-primary" /> Full Facility Access
                </ListGroup.Item>
                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-primary" /> Meals plans
                </ListGroup.Item>
                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-primary" /> 50% Discounts
                </ListGroup.Item>
                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-primary" /> Cancel anytime
                </ListGroup.Item>
                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-primary" /> Basic feature
                </ListGroup.Item>
              </ListGroup>

              <div className="d-grid">
                <Link className="btn btn-dark mt-4" to="#">
                  Buy Now
                </Link>
              </div>
            </MainCard>
          </Col>

          <Col md={6} lg={4}>
            <MainCard className=" price-card p-4 border border-warning border-2 h-100" bodyClassName=" bg-warning bg-opacity-10 rounded v3">
              <div className="price-head v3">
                <h4 className="mb-0 text-warning">Diehard</h4>
                <div className="price-price mt-3">
                  $250 <span className="text-muted">month</span>
                </div>
              </div>
              <ListGroup className="product-list v3">
                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-warning" /> Full Facility Access
                </ListGroup.Item>
                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-warning" /> Meals plans
                </ListGroup.Item>
                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-warning" /> 75% Discounts
                </ListGroup.Item>
                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-warning" /> Primmum feature
                </ListGroup.Item>
                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-warning" /> Cancel anytime
                </ListGroup.Item>

                <ListGroup.Item className="enable">
                  <i className="ti ti-check text-warning" /> Online booking
                </ListGroup.Item>
              </ListGroup>

              <div className="d-grid">
                <a className="btn btn-dark mt-4" href="#">
                  Buy Now
                </a>
              </div>
            </MainCard>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
