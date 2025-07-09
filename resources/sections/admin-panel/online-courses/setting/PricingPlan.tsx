// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// project-imports
import PricingCards from 'sections/admin-panel/online-courses/setting/PricingCard';
import MainCard from 'components/MainCard';

// ==============================|| SETTING - PRICING ||============================== //

export default function PricingPage() {
  return (
    <Row>
      <Col xs={12}>
        <Tab.Container defaultActiveKey="monthly">
          <MainCard className="border-0 shadow-none bg-transparent mb-1" bodyClassName="p-2">
            <Row className="align-items-center mb-3">
              <Col>
                <h5>Plans & Pricing</h5>
                <p>
                  Every paid plan comes with educational resources and training to support you on your journey, along with a 30-day
                  money-back guarantee.
                </p>
              </Col>
              <Col xs="auto">
                <Nav className="nav-pills justify-content-center nav-price">
                  <Nav.Item>
                    <Nav.Link eventKey="monthly">Monthly</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="yearly">
                      Yearly <Badge className="ms-2">Save 30%</Badge>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </MainCard>
          <PricingCards />
        </Tab.Container>
      </Col>
    </Row>
  );
}
