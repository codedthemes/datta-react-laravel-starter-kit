// react-bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// third-party
import { motion } from 'framer-motion';

// assets
import CrystalImg from '@assets/images/landing/client-crystal-1.svg';
import EagamesImg from '@assets/images/landing/client-eagames.svg';
import HaswentImg from '@assets/images/landing/client-haswent-2.svg';
import VodafoneImg from '@assets/images/landing/client-vodafone.svg';

// ===========================|| LANDING - TRUSTED BY BLOCK ||=========================== //

export default function TrustedBySection() {
  const fadeInUp = (delay = 0.2) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.8 }
  });

  const fadeInRight = (delay = 0.2) => ({
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.8 }
  });

  const clients = [
    { src: EagamesImg, alt: 'EA Games', delay: 0.3 },
    { src: HaswentImg, alt: 'Haswent', delay: 0.4 },
    { src: CrystalImg, alt: 'Crystal', delay: 0.5 },
    { src: VodafoneImg, alt: 'Vodafone', delay: 0.6 }
  ] as const;

  return (
    <section>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} xl={6} className="title">
            <motion.h2 {...fadeInUp(0.1)}>
              <strong className="landing-background-image">Trusted </strong> By
            </motion.h2>
            <motion.p className="mt-lg-4 mt-2" {...fadeInUp(0.2)}>
              From budding startups to industry-leading entrepreneurs, our template is shaping the future of great products.
            </motion.p>
          </Col>
        </Row>
        <Row className="justify-content-center client-block g-lg-4 g-3">
          {clients.map((client) => (
            <Col key={`${client.alt}-${client.delay}`} className="col-auto">
              <motion.div {...fadeInRight(client.delay)}>
                <Image src={client.src} alt={`${client.alt} logo`} className="img-fluid" />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
