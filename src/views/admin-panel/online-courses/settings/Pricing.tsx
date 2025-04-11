// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// project-imports
import MainCard from 'components/MainCard';
import PricngCards from 'sections/online-courses/setting/PricingSection';

// ==============================|| SETTING - PRICING ||============================== //

export default function PricingPage() {
  return (
    <Row class="row">
      <Col xs={12}>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="monthly">
          <MainCard className="border-0 shadow-none bg-transparent mb-1" bodyClassName="p-2">
            <Row className="align-items-center mb-3">
              <Col class="col">
                <h5>Plans & Pricing</h5>
                <p>
                  Every paid plan comes with educational resources and training to support you on your journey, along with a 30-day
                  money-back guarantee.
                </p>
              </Col>
              <Col xs="auto">
                <Nav className="nav-pills justify-content-center nav-price">
                  <Nav.Item className="nav-item">
                    <Nav.Link eventKey="monthly">Monthly</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link eventKey="yearly">
                      Yearly <Badge className="ms-2">Save 30%</Badge>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </MainCard>
          <PricngCards />
        </Tab.Container>
      </Col>
    </Row>
  );
}
