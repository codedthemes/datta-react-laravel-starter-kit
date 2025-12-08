// react-bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// project-imports
import branding from '../../../branding.json';

// third-party
import { motion } from 'framer-motion';

// assets
import WMainImg from '@assets/images/landing/img-w-main.png';
import W1Img from '@assets/images/landing/img-w-1.png';
import W2Img from '@assets/images/landing/img-w-2.png';
import W3Img from '@assets/images/landing/img-w-3.png';
import W4Img from '@assets/images/landing/img-w-4.png';

interface ImageProps {
  src: string;
  alt: string;
  delay: number;
  className?: string;
  decorative?: boolean;
}

const images = [
  { src: WMainImg, alt: 'Product UI preview collage', delay: 0.2 },
  { src: W1Img, alt: '', delay: 0.6, className: 'position-absolute top-0 start-0 w-100', decorative: true },
  { src: W2Img, alt: '', delay: 0.8, className: 'position-absolute top-0 start-0 w-100', decorative: true },
  { src: W3Img, alt: '', delay: 1.0, className: 'position-absolute top-0 start-0 w-100', decorative: true },
  { src: W4Img, alt: '', delay: 1.2, className: 'position-absolute top-0 start-0 w-100', decorative: true }
];

const list1 = ['Best customer experience in the industry.', 'Gets better and give updates.', 'Time and cost'];
const list2 = ['RTL Support', 'Light/Dark, Semi Dark Support', 'Google Fonts'];

function AnimatedImage({ src, alt, delay, className = '', decorative }: ImageProps) {
  return (
    <motion.img
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      src={src}
      alt={decorative ? '' : alt}
      role={decorative ? 'presentation' : undefined}
      aria-hidden={decorative ? true : undefined}
      className={`img-fluid ${className}`}
    />
  );
}

function renderList(items: string[], delay: number) {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="list-unstyled"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: delay + index * 0.2,
            duration: 0.6
          }}
          className="border-0 bg-transparent p-0"
        >
          <p className="mb-0">
            <i className="me-1 ti ti-circle-check text-primary" /> {item}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
}

// ==============================|| LANDING - FEATURE BLOCK 2 ||============================== //

export default function FeatureBlock2() {
  const fadeInUp = (delay = 0.2) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.8 }
  });
  return (
    <section className="bg-body why-section pb-0">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} xl={6} className="title mb-3">
            <motion.h2 {...fadeInUp(0.2)}>
              Why Choose <strong className="landing-background-image">{branding.brandName}</strong>
            </motion.h2>

            <motion.p className="mt-lg-4 mt-2 mb-0" {...fadeInUp(0.3)}>
              {branding.brandName} is a versatile and reliable choice for your admin panel, which empowers you to efficiently control and
              manage your backend with ease.
            </motion.p>
          </Col>
        </Row>
      </Container>
      <div className="bg-why-block">
        <Container>
          <div className="position-relative">
            {images.map((img) => (
              <AnimatedImage key={`${img.src}-${img.delay}`} {...img} />
            ))}
          </div>
        </Container>
      </div>
      <div className="bg-dark pb-4 p-md-5">
        <Container>
          <Row className="justify-content-center g-4 text-white text-opacity-75 why-list">
            <Col md="auto">{renderList(list1, 0.3)}</Col>
            <Col md="auto">{renderList(list2, 0.6)}</Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
