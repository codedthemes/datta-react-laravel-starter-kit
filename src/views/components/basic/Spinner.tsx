// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import BorderSpinner from 'sections/components/basic/spinner/BorderSpinner';
import ColorBorderSpinner from 'sections/components/basic/spinner/ColorBorderSpinner';
import ColorGrowingSpinner from 'sections/components/basic/spinner/ColorGrowingSpinner';
import GrowingSpinner from 'sections/components/basic/spinner/GrowingSpinner';
import Placement from 'sections/components/basic/spinner/Placement';
import SizeSpinner from 'sections/components/basic/spinner/SizeSpinner';
import ComponentHeader from 'components/cards/ComponentHeader';

// ==============================|| BASIC - SPINNER ||============================== //

export default function SpinnerPage() {
  return (
    <>
      <ComponentHeader
        caption="Indicate the loading state of a component or page with React-Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript."
        link="https://react-bootstrap.netlify.app/docs/components/spinners/"
      />
      <Row>
        <Col md={6}>
          <BorderSpinner />
        </Col>
        <Col md={6}>
          <ColorBorderSpinner />
        </Col>
        <Col md={6}>
          <GrowingSpinner />
        </Col>
        <Col md={6}>
          <ColorGrowingSpinner />
        </Col>
        <Col md={6}>
          <Placement />
        </Col>
        <Col md={6}>
          <SizeSpinner />
        </Col>
      </Row>
    </>
  );
}
