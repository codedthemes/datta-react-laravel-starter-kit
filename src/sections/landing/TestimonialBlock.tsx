// react-bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// third-party
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// project-imports
import MainCard from 'components/MainCard';

// assets
import UserAvatar1 from 'assets/images/user/avatar-1.jpg';

const testimonials = [
  {
    quote:
      'Glad to see the designs and the components cleanliness. Quality product with great documentation. Congratulations for the good work.',
    name: 'Karanveer S.',
    role: 'Administrator',
    avatar: UserAvatar1
  },
  {
    quote:
      'Glad to see the designs and the components cleanliness. Quality product with great documentation. Congratulations for the good work.',
    name: 'Karanveer S.',
    role: 'Administrator',
    avatar: UserAvatar1
  },
  {
    quote:
      'Glad to see the designs and the components cleanliness. Quality product with great documentation. Congratulations for the good work.',
    name: 'Karanveer S.',
    role: 'Administrator',
    avatar: UserAvatar1
  },
  {
    quote:
      'Glad to see the designs and the components cleanliness. Quality product with great documentation. Congratulations for the good work.',
    name: 'Karanveer S.',
    role: 'Administrator',
    avatar: UserAvatar1
  }
];

// ==============================|| LANDING - TESTIMONIAL BLOCK ||============================== //

export default function ClientTestimonials() {
  const settings = {
    dots: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  return (
    <section className="comminuties-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} xl={6}>
            <div className="title mb-4">
              <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 50 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              >
                What Our <strong className="landing-background-image">Client Says</strong>!
              </motion.h2>
              <motion.p
                className="mt-lg-4 mt-2"
                initial={{ opacity: 0, y: 50 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                We’re proud of the quality products and great service we offer. But don’t just take our word for it—here’s what our happy
                clients said.
              </motion.p>
            </div>
          </Col>
        </Row>
      </Container>
      <motion.div
        className="slider-container testimonial-slider"
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
      >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <MainCard className="testimonial-card">
                <div className="quote-icon">
                  <i className="fas fa-quote-left" />
                </div>
                <h3 className="h5">{testimonial.quote}</h3>
                <div className="text-end">
                  <p className="my-3 text-primary">- {testimonial.role}</p>
                  <div className="d-inline-flex align-items-center">
                    <div className="flex-shrink-0">
                      <Image src={testimonial.avatar} alt="user image" className="img-radius wid-40" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-0">{testimonial.name}</h6>
                      <p className="mb-0 text-muted text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </MainCard>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
