import { useMemo } from 'react';

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// third-party
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import UserAvatar1 from '@assets/images/user/avatar-1.png';

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

// ==============================|| ANIMATION ||============================== //

const fadeInUp = (delay = 0.2) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.8 }
});

// ==============================|| LANDING - TESTIMONIAL BLOCK ||============================== //

export default function ClientTestimonials() {
  const settings: Settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      swipeToSlide: true,
      adaptiveHeight: true,
      arrows: false,
      centerMode: true,
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            centerMode: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }
      ]
    }),
    []
  );

  return (
    <section className="comminuties-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} xl={6}>
            <div className="title mb-4">
              <motion.h2 className="section-title" {...fadeInUp(0.2)}>
                What Our <strong className="landing-background-image">Client Says</strong>!
              </motion.h2>
              <motion.p className="mt-lg-4 mt-2" {...fadeInUp(0.3)}>
                We’re proud of the quality products and great service we offer. But don’t just take our word for it—here’s what our happy
                clients said.
              </motion.p>
            </div>
          </Col>
        </Row>
      </Container>
      <motion.div className="slider-container position-relative z-3" {...fadeInUp(0.4)}>
        <Slider {...settings} className="comminuties-slides" aria-roledescription="carousel">
          {testimonials.map((testimonial) => (
            <div key={`${testimonial.name}-${testimonial.role}`}>
              <MainCard className="mx-2">
                <div className="quote-icon">
                  <i className="ti ti-quote-filled" aria-hidden="true" />
                </div>
                <h3 className="h5">{testimonial.quote}</h3>
                <div className="text-end">
                  <p className="my-3 text-primary">- {testimonial.role}</p>
                  <div className="d-inline-flex align-items-center">
                    <div className="flex-shrink-0">
                      <Image src={testimonial.avatar} alt={`${testimonial.name} avatar`} className="img-radius wid-40" />
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
