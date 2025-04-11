// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// third-party
import { motion } from 'framer-motion';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| LANDING - CONTACT US BLOCK ||============================== //

export default function ContactUSSection() {
  return (
    <section className="call-to-action">
      <i className="ti ti-mail-opened sec-gift-icon" />
      <Container>
        <MainCard className="rounded cta-block mb-0">
          <i className="ti ti-mail-opened gift-icon" />
          <div className="my-2 my-md-4 text-center text-md-start">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            >
              <Row className="justify-content-center align-items-center">
                <Col md={6} className="title mb-0">
                  <h3 className="mb-3 ">
                    Stay <strong className="landing-background-image">Connected </strong> with us
                  </h3>
                  <p className="mb-4 mb-md-0">
                    Simply submit your email, we share you the top news related to Datta Able feature updates, roadmap, and news.
                  </p>
                </Col>
                <Col md={4}>
                  <Row>
                    <Col>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Col>
                    <Col xs="auto">
                      <Button>Subscribe</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </motion.div>
          </div>
        </MainCard>
      </Container>
    </section>
  );
}
