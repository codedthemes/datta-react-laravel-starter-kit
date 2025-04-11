import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// third-party
import { motion } from 'framer-motion';

// project-imports
import MainCard from 'components/MainCard';

// assets
import { Cube, IconProps, PenNib, Rocket, Scroll, Stack, Textbox } from 'phosphor-react';

interface ProductCardProps {
  href: string;
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  title: string;
  delay: string;
}

const productCards = [
  { href: '#', Icon: Cube, title: '1000+ UI Elements', delay: '0.5s' },
  { href: '#', Icon: Scroll, title: '130+ Pages', delay: '0.6s' },
  { href: '#', Icon: Stack, title: '150+ Widgets', delay: '0.7s' },
  { href: '#', Icon: Rocket, title: 'Landing Page', delay: '0.8s' },
  { href: '#', Icon: PenNib, title: '5+ Applications', delay: '0.9s' },
  { href: '#', Icon: Textbox, title: 'Form Elements', delay: '1.0s' }
];

// ==============================|| PRODUCT CARD ||============================== //

function ProductCard({ href, Icon, title, delay }: ProductCardProps) {
  return (
    <Col xl={2} md={3} xs={6}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: parseFloat(delay), duration: 0.8, ease: 'easeOut' }}
      >
        <Link to={href} className="card">
          <MainCard>
            <Icon size={40} weight="duotone" className="text-primary" />
            <h5 className="mt-3 mb-0">{title}</h5>
          </MainCard>
        </Link>
      </motion.div>
    </Col>
  );
}

// ==============================|| LANDING - HELP FULL BLOCK ||============================== //

export default function HelpFullComponent() {
  return (
    <section className="bg-dark product-section pb-0">
      <Container>
        <Row className="justify-content-center text-center title">
          <Col xl={10}>
            <motion.h2
              className="text-white section-title mb-0"
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            >
              Helpful <strong className="landing-background-image">Components</strong>
            </motion.h2>
          </Col>
          <Col md={8} xl={6}>
            <motion.p
              className="text-white text-opacity-75 mt-lg-4 mt-2 mb-4 mb-md-5 "
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            >
              Below are unique Components of Datta Able Bootstrap admin template which are included in the theme package you purchased.
            </motion.p>
          </Col>
        </Row>
        <Row className="justify-content-center product-cards-block">
          <Col xl={10}>
            <Row className="justify-content-center text-center gy-sm-4 gy-3">
              {productCards.map((card, index) => (
                <ProductCard key={index} href={card.href} Icon={card.Icon} title={card.title} delay={card.delay} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
