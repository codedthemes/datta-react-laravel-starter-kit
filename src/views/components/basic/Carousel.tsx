// react-bootstrap
import ComponentHeader from 'components/cards/ComponentHeader';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import BasicCarousel from 'sections/components/basic/carousel/BasicCarousel';
import CaptionCarousel from 'sections/components/basic/carousel/CaptionCarousel';
import ControlCarousel from 'sections/components/basic/carousel/ControlCarousel';
import CrossfadeCarousel from 'sections/components/basic/carousel/CrossfadeCarousel';
import DarkCarousel from 'sections/components/basic/carousel/DarkCarousel';
import DisabledCarousel from 'sections/components/basic/carousel/DisabledCarousel';
import IndicatorsCarousel from 'sections/components/basic/carousel/IndicatorsCarousel';

// ==============================|| BASIC - CAROUSEL ||============================== //

export default function CarouselPage() {
  return (
    <>
      <ComponentHeader
        caption="A slideshow component for cycling through elements—images or slides of text—like a carousel."
        link="https://react-bootstrap.netlify.app/docs/components/carousel"
      />
      <Row>
        <Col xxl={4}>
          <BasicCarousel />
        </Col>
        <Col xxl={4}>
          <ControlCarousel />
        </Col>
        <Col xxl={4}>
          <IndicatorsCarousel />
        </Col>
        <Col xxl={6}>
          <CrossfadeCarousel />
        </Col>
        <Col xxl={6}>
          <CaptionCarousel />
        </Col>
        <Col xxl={6}>
          <DarkCarousel />
        </Col>
        <Col xxl={6}>
          <DisabledCarousel />
        </Col>
      </Row>
    </>
  );
}
