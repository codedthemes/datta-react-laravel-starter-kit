// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

import { ReactNode } from 'react';

interface FormState {
  id: string;
  name: string;
  value?: string;
  title: string;
  subtitle?: string | ReactNode;
  badge?: string;
  price?: string;
}

// =============================|| MEGA OPTIONS - OPTION CARD ||============================== //

function OptionCard({ id, name, value, title, subtitle, badge, price }: FormState) {
  return (
    <Card className="border p-3">
      <Form.Check id={id} className="d-flex align-items-start">
        <Form.Check type="radio" value={value} name={name} className="me-2 mt-1" />
        <Form.Check.Label className="w-100" htmlFor={id}>
          <span className="h5 d-block">
            {price ? (
              <strong className="float-end text-primary">{price}</strong>
            ) : (
              badge && (
                <strong className="float-end">
                  <Badge bg="light-primary">{badge}</Badge>
                </strong>
              )
            )}
            {title}
          </span>
          <span className="f-12 text-muted d-block">{subtitle}</span>
        </Form.Check.Label>
      </Form.Check>
    </Card>
  );
}

// =============================|| MEGA OPTIONS - HORIZONTAL FORM EXAMPLE ||============================== //

export default function HorizontalFormExample() {
  return (
    <MainCard title="Horizontal Form Example">
      <Form>
        {/* Delivery Type */}
        <Row>
          <Col sm={3} className="col-form-label">
            <Form.Label>Choose Delivery Type</Form.Label>
          </Col>
          <Col sm={9}>
            <Row>
              <Col lg={6}>
                <OptionCard
                  id="customCheckdef5"
                  name="deliveryType"
                  title="Trial plan"
                  subtitle={
                    <>
                      Free server basic collection
                      <br />
                      (5 Items are allowed to download)
                    </>
                  }
                  badge="Free"
                />
              </Col>
              <Col lg={6}>
                <OptionCard
                  id="customCheckdef6"
                  name="deliveryType"
                  title="Premium plan"
                  subtitle="Free server unlimited approx 255k+ Premium collection (Download unlimited premium items)"
                  price="$ 8.00"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <hr />

        {/* Membership */}
        <Row className="mb-0 pt-3">
          <Col sm={3} className="col-form-label">
            <Form.Label>Membership :</Form.Label>
          </Col>
          <Col sm={9}>
            <Row>
              <Col lg={6}>
                <OptionCard
                  id="supersetH-50"
                  name="membership"
                  title="SUPERSET 50"
                  subtitle="360 days Speed upto 50 Mbps Unlimited (Rs. 5094)"
                />
              </Col>
              <Col lg={6}>
                <OptionCard
                  id="SUPERSONICh-75"
                  name="membership"
                  title="SUPERSONIC 75"
                  subtitle="360 days Speed upto 75 Mbps 6000 GB (Rs. 6042)"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </MainCard>
  );
}
