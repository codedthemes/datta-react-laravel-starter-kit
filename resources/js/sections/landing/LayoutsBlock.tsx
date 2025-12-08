import { Link } from '@inertiajs/react';

// react-bootstrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// third-party
import { motion } from 'framer-motion';

// project-imports
import useConfig from '@/hooks/useConfig';
import { MenuOrientation } from '@/config';

// assets
import VerticalImg from '@assets/images/landing/vertical.jpg';
import HorizontalImg from '@assets/images/landing/horizontal.jpg';
import TabImg from '@assets/images/landing/tab.jpg';
import Layout2Img from '@assets/images/landing/layout-2.jpg';
import Layout3Img from '@assets/images/landing/layout-3.jpg';

interface LayoutCardProps {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
  delay: number;
  url?: string;
}

const layouts = [
  {
    id: 'vertical',
    imgSrc: VerticalImg,
    title: 'Vertical',
    description: 'Default theme layout',
    delay: 0.2,
    url: 'layouts/vertical'
  },
  {
    id: 'horizontal',
    imgSrc: HorizontalImg,
    title: 'Horizontal',
    description: 'Layout display in different visual',
    delay: 0.4,
    url: 'layouts/horizontal'
  },
  {
    id: 'tab',
    imgSrc: TabImg,
    title: 'Tab',
    description: 'Menu display in tab format',
    delay: 0.6,
    url: 'layouts/tab'
  },
  {
    id: 'layout-2',
    imgSrc: Layout2Img,
    title: 'Layout 2',
    description: 'Layout display in different visual',
    delay: 0.8,
    url: 'layouts/layout-2'
  },
  {
    id: 'layout-3',
    imgSrc: Layout3Img,
    title: 'Layout 3',
    description: 'Layout display in different visual',
    delay: 1.0,
    url: 'layouts/layout-3'
  }
];

// ==============================|| LAYOUT CARD ||============================== //

function LayoutCard({ id, url, imgSrc, title, description, delay }: LayoutCardProps) {
  const { onChangeMenuOrientation } = useConfig();
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  } as const;

  return (
    <Col lg={4} md={6}>
      <motion.div {...fadeInUp} transition={{ delay, duration: 0.8 }}>
        <Card className="mb-0">
          <Link href={`/${url}`} target="_blank">
            <Card.Img src={imgSrc} alt={title} className="img-fluid card-img-top p-2" />
          </Link>
          <Card.Body>
            <h5 className="f-w-600">{title}</h5>
            <p>{description}</p>
            <a
              target="_blank"
              href={url}
              className="link-primary h6 align-items-center mb-0 d-inline-flex"
              onClick={() => {
                if (id) {
                  onChangeMenuOrientation(id as MenuOrientation);
                }
              }}
              aria-label={`Preview ${title} layout`}
            >
              <Stack direction="horizontal" gap={2}>
                <strong>Preview</strong>
                <i className="ti ti-arrow-narrow-right f-18" aria-hidden="true" />
              </Stack>
            </a>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
}

// ==============================|| LANDING - LAYOUTS BLOCK ||============================== //

export default function LayoutsBlock() {
  return (
    <section className="bg-body">
      <Container>
        <Row className="title justify-content-center text-center">
          <Col lg={6} md={10}>
            <h2>
              Our Best <strong className="landing-background-image">Layouts</strong>
            </h2>
            <p className="mb-0">
              Made using Bootstrap framework with high-end flexible code and well-structured documentation helper file.
            </p>
          </Col>
        </Row>
        <Row className="g-3 justify-content-center">
          {layouts.map((layout) => (
            <LayoutCard key={layout.id} {...layout} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
