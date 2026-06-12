import { Link, usePage } from '@inertiajs/react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// project-imports
import branding from '@/../branding.json';

// third-party
import { motion } from 'framer-motion';

// ==============================|| LANDING - HEADER BLOCK ||============================== //

export default function HeaderBlock() {
  const { auth } = usePage().props;

  const fadeInUp = (delay = 0.2) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.8 }
  });

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <motion.h1 className="text-white mb-4" {...fadeInUp(0.2)}>
              Explore One of the <strong className="hero-text-gradient">Featured Dashboard</strong> Template in CodedThemes
            </motion.h1>

            <motion.div {...fadeInUp(0.3)}>
              <Row className="justify-content-center">
                <Col md={8}>
                  <p className="text-white text-opacity-75 f-16 mb-0">
                    {branding.brandName} is one of the featured admin dashboard templates on Envato Marketplace, used by over 2.5K+
                    customers worldwide.
                  </p>
                </Col>
              </Row>
            </motion.div>

            <motion.div className="my-4 my-sm-5" {...fadeInUp(0.4)}>
              {auth?.user ? (
                <>
                  <a href="/basic/alert" target="_blank" className="btn btn-outline-light me-2" rel="noreferrer">
                    Explore Components
                  </a>
                  <a href={route('dashboard')} target="_blank" className="btn btn-light" rel="noreferrer">
                    Live Preview
                  </a>
                </>
              ) : (
                <>
                  <a href={route('login')} target="_blank" className="btn btn-light me-2" rel="noreferrer">
                    Log in
                  </a>
                  <a href={route('register')} target="_blank" className="btn btn-outline-light" rel="noreferrer">
                    Register
                  </a>
                </>
              )}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
