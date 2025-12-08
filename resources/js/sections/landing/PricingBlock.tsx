// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import branding from '../../../branding.json';

// third-party
import { motion } from 'framer-motion';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  link: string;
  buttonClass?: string;
  label?: string;
  delay?: number;
}

const pricingOptions = [
  {
    title: 'Single Use',
    price: '$35',
    features: ['One Project', 'Only JavaScript', '1 Year Technical Support', '1 Year Free Updates', "End-users can't be charged"],
    link: branding.buyNow
  },
  {
    title: 'Multi Use',
    price: '$49',
    features: [
      'Unlimited Projects',
      'JavaScript + TypeScript',
      '1 Year Technical Support',
      '1 Year Free Updates',
      "End-users can't be charged"
    ],
    link: branding.buyNow,
    buttonClass: 'btn-primary',
    label: 'Popular'
  },
  {
    title: 'Extended Use',
    price: '$299',
    features: ['One SaaS Project', 'JavaScript', '1 Year Technical Support', '1 Year Free Updates', 'End-users can be charged'],
    link: branding.buyNow
  },
  {
    title: 'Multi Extended Use',
    price: '$399',
    features: [
      'Unlimited SaaS Projects',
      'JavaScript + TypeScript',
      '1 Year Technical Support',
      '1 Year Free Updates',
      'End-users can be charged'
    ],
    link: branding.buyNow
  }
];

// ==============================|| ANIMATION VARIANT ||============================== //

const fadeInUp = (delay = 0.2) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.8 }
});

// ==============================|| PRICING CARD ||============================== //

function PricingCard({ title, price, features, link, buttonClass = 'btn-outline-light', label, delay = 0 }: PricingCardProps) {
  return (
    <Col md={6} xl={3} className="mb-4">
      <motion.div className="price-card" {...fadeInUp(delay)}>
        {label && <div className="price-label text-white bg-primary">{label}</div>}
        <h3 className="h4 f-w-400 mb-0 text-white text-opacity-75">{title}</h3>
        <span className="price text-white">{price}</span>
        <ul className="list-unstyled text-start text-white text-opacity-50">
          {features.map((feature) => (
            <ListGroup.Item as="li" key={feature} className="my-2">
              <i className="me-1 ti ti-check text-success" aria-hidden="true" /> {feature}
            </ListGroup.Item>
          ))}
        </ul>
        <div className="d-grid">
          <Button
            variant={buttonClass.includes('outline') ? 'outline-light' : 'primary'}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
            aria-label={`Buy ${title} license`}
          >
            Buy Now
          </Button>
        </div>
      </motion.div>
    </Col>
  );
}

// ==============================|| LANDING - PRICING SECTION ||============================== //

export default function PricingBlock() {
  return (
    <section className="bg-dark">
      <Container>
        <Row className="align-items-center">
          <Col lg={12} className="my-3">
            <Stack direction="vertical" className="align-items-center justify-content-center">
              <div className="title mb-4">
                <motion.h2 className="text-white mb-3" {...fadeInUp(0.2)}>
                  License <strong className="landing-background-image">Pricing</strong>
                </motion.h2>
              </div>
              <motion.p className="mb-4 text-white text-opacity-50" {...fadeInUp(0.3)}>
                Pricing table helps you understand which type of license you require for your project. If you still have any questions,
                please contact us on our support desk.
              </motion.p>
            </Stack>
          </Col>
          <Col lg={12} className="my-3">
            <Row className="justify-content-center">
              {pricingOptions.map((option, index) => (
                <PricingCard key={option.title} {...option} delay={0.2 + index * 0.2} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
