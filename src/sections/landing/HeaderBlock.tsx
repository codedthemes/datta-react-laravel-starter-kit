// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// third-party
import { motion } from 'framer-motion';

// assets
import MainHeaderImg from 'assets/images/landing/img-header-main.jpg';
import ImgWave from 'assets/images/landing/img-wave.svg';

// ==============================|| LANDING - HEADER BLOCK ||============================== //

export default function HeaderBlock() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <motion.h1
              className="text-white mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            >
              Explore One of the <strong className="hero-text-gradient">Featured Dashboard</strong> Template in Codedthemes
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Row className="justify-content-center">
                <Col md={8}>
                  <p className="text-white text-opacity-75 f-16 mb-0">
                    Datta able is the one of the Featured admin dashboard template in Envato Marketplace and used by over 2.5K+ Customers
                    wordwide.
                  </p>
                </Col>
              </Row>
            </motion.div>
            <motion.div
              className="my-4 my-sm-5"
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Button href="/basic/alert" variant="outline-light" className=" me-2">
                Explore Components
              </Button>
              <Button href="/dashboard/default" variant="light">
                Live Preview
              </Button>
            </motion.div>
            <motion.div
              className="mt-4 mt-sm-5"
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Image src={MainHeaderImg} alt="images" className="img-fluid img-header" />
            </motion.div>
          </Col>
        </Row>
      </Container>
      <Image src={ImgWave} alt="images" className="img-wave" />
    </>
  );
}
