// react-bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// third-party
import { motion } from 'framer-motion';

// project-imports
import MainCard from '@/components/MainCard';
import branding from '../../../branding.json';

interface ProductCardProps {
  href: string;
  Icon: string;
  title: string;
  delay: number;
}

const productCards = [
  { href: '#', Icon: 'ph ph-align-center-horizontal-simple', title: 'Button', delay: 0.5 },
  { href: '#', Icon: 'ph ph-textbox', title: 'Forms', delay: 0.6 },
  { href: '#', Icon: 'ph ph-slideshow', title: 'Slider', delay: 0.7 },
  { href: '#', Icon: 'ph ph-align-top-simple', title: 'Dropdowns', delay: 0.8 },
  { href: '#', Icon: 'ph ph-table', title: 'Tables', delay: 0.9 },
  { href: '#', Icon: 'ph ph-feather', title: 'Icons', delay: 1.0 }
];

// ==============================|| PRODUCT CARD ||============================== //

function ProductCard({ href, Icon, title, delay }: ProductCardProps) {
  return (
    <Col xl={2} md={3} xs={6}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8 }}
      >
        <a href={href} className="card" aria-label={`Open ${title} components`}>
          <MainCard>
            <i className={`${Icon} text-primary`} aria-hidden="true" />
            <h5 className="mt-3 mb-0">{title}</h5>
          </MainCard>
        </a>
      </motion.div>
    </Col>
  );
}

// ==============================|| LANDING - HELP FULL BLOCK ||============================== //

export default function HelpFullComponent() {
  const fadeInUp = (delay = 0.2) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.8 }
  });
  return (
    <section className="bg-dark product-section pb-0">
      <Container>
        <Row className="justify-content-center text-center title">
          <Col xl={10}>
            <motion.h2 className="text-white section-title mb-0" {...fadeInUp(0.2)}>
              Helpful <strong className="landing-background-image">Components</strong>
            </motion.h2>
          </Col>
          <Col md={8} xl={6}>
            <motion.p className="text-white text-opacity-75 mt-lg-4 mt-2 mb-4 mb-md-5" {...fadeInUp(0.3)}>
              Below are unique Components of {branding.brandName} Bootstrap admin template which are included in the theme package you
              purchased.
            </motion.p>
          </Col>
        </Row>
        <Row className="justify-content-center product-cards-block">
          <Col xl={10}>
            <Row className="justify-content-center text-center gy-sm-4 gy-3">
              {productCards.map((card) => (
                <ProductCard key={card.title} href={card.href} Icon={card.Icon} title={card.title} delay={card.delay} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
