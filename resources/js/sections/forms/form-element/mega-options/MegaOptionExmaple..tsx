import { ReactNode } from 'react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

// project-imports
import MainCard from '@/components/MainCard';

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
        <Form.Check type="radio" value={value} className="me-2 mt-1" name={name} />
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
          {subtitle && <span className="f-12 text-muted d-block">{subtitle}</span>}
        </Form.Check.Label>
      </Form.Check>
    </Card>
  );
}

// =============================|| MEGA OPTIONS - MEGA OPTION EXAMPLE ||============================== //

export default function MegaOptionExamplePage() {
  return (
    <MainCard title="Example">
      <Form>
        {/* Delivery Type */}
        <Form.Label>Choose Delivery Type</Form.Label>
        <Row className="mb-2">
          <Col lg={6}>
            <OptionCard
              id="trial-plan"
              name="deliveryType"
              value="trial"
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
              id="premium-plan"
              name="deliveryType"
              value="premium"
              title="Premium plan"
              subtitle={
                <>
                  Free server unlimited approx 255k+ Premium collection
                  <br />
                  (Download unlimited premium items)
                </>
              }
              price="$ 12.46"
            />
          </Col>
        </Row>

        <hr />

        {/* Membership */}
        <Form.Label className="mb-2 pt-2">Membership Plan</Form.Label>
        <Row>
          <Col lg={6}>
            <OptionCard
              id="supersetM-50"
              name="membership"
              value="superset-50"
              title="SUPERSET 50"
              subtitle="360 days Speed upto 50 Mbps Unlimited (Rs. 5094)"
            />
          </Col>

          <Col lg={6}>
            <OptionCard
              id="supersonicM-75"
              name="membership"
              value="supersonicM-75"
              title="SUPERSONIC 75"
              subtitle="360 days Speed upto 75 Mbps 6000 GB (Rs. 6042)"
            />
          </Col>
        </Row>
      </Form>
    </MainCard>
  );
}
