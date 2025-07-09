// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// project-imports
import MainCard from 'components/MainCard';

interface PricingPlanBase {
  name: string;
  services: number;
  lifetime: boolean;
  popular: boolean;
  enabledFeatures: boolean[];
}

interface PricingPlanProps extends PricingPlanBase {
  price: number;
}

interface PricingSectionProps {
  tab: string;
  plans: PricingPlanProps[];
}

const featureList = [
  'One End Product',
  'No attribution required',
  'TypeScript',
  'Figma Design Resources',
  'Create Multiple Products',
  'Create a SaaS Project',
  'Resale Product',
  'Separate sale of our UI Elements?'
];

// base plans data
const basePlans: PricingPlanBase[] = [
  {
    name: 'Basic',
    services: 3,
    lifetime: true,
    popular: false,
    enabledFeatures: [true, true, true, false, false, false, false, false]
  },
  {
    name: 'Standard',
    services: 5,
    lifetime: true,
    popular: true,
    enabledFeatures: [true, true, true, true, true, false, false, false]
  },
  {
    name: 'Premium',
    services: 8,
    lifetime: true,
    popular: false,
    enabledFeatures: [true, true, true, true, true, true, true, true]
  }
];

const prices: Record<'monthly' | 'yearly', number[]> = {
  monthly: [69, 129, 599],
  yearly: [269, 529, 1299]
};

const createPricingPlans = (tab: keyof typeof prices): PricingSectionProps => {
  return {
    tab,
    plans: basePlans.map((plan, index) => ({
      ...plan,
      price: prices[tab][index]
    }))
  };
};

const pricingPlans: PricingSectionProps[] = Object.keys(prices).map((tab) => createPricingPlans(tab as keyof typeof prices));

// ===============================|| PRICING CARD ||============================== //

const PricingCard = ({ name, services, price, lifetime, popular, enabledFeatures }: PricingPlanProps) => {
  return (
    <Col md={6} lg={4}>
      <MainCard className={`price-card ${popular ? 'price-popular' : ''}`}>
        <div className="price-head v2">
          {popular && (
            <Badge bg="success" className="badge mb-3">
              Popular
            </Badge>
          )}
          <h5 className="mb-0">{name}</h5>
          <p className="text-muted">{services} Services</p>

          <div className="price-price mt-4">
            ${price}
            {lifetime && <span className="text-muted"> Lifetime</span>}
          </div>

          <div className="d-grid">
            <Button variant={popular ? 'primary' : 'outline-secondary'} className="mt-4" href="#">
              Buy Now
            </Button>
          </div>
        </div>

        <ListGroup variant="flush" className="product-list">
          {featureList.map((feature, index) => (
            <ListGroupItem key={feature} className={enabledFeatures[index] ? 'enable' : ''}>
              {feature}
            </ListGroupItem>
          ))}
        </ListGroup>
      </MainCard>
    </Col>
  );
};

// ===============================|| SETTING - PRICING ||============================== //

export default function PricingSection() {
  return (
    <Tab.Content>
      {pricingPlans.map(({ tab, plans }) => (
        <Tab.Pane key={tab} eventKey={tab} className="fade" id={tab} role="tabpanel">
          <Row className="justify-content-center align-items-center">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </Row>
        </Tab.Pane>
      ))}
    </Tab.Content>
  );
}
