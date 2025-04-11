// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import Backdrop from 'sections/components/basic/off-canvas/Backdrop';
import LiveDemo from 'sections/components/basic/off-canvas/LiveDemo';
import Placement from 'sections/components/basic/off-canvas/Placement';
import ComponentHeader from 'components/cards/ComponentHeader';

// =============================|| BASIC - OFFCANVAS ||============================== //

export default function OffCanvasPage() {
  return (
    <>
      <ComponentHeader
        caption="Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin."
        link="https://react-bootstrap.netlify.app/docs/components/offcanvas/"
      />
      <Row>
        <Col sm={12}>
          <LiveDemo />
        </Col>
        <Col sm={12}>
          <Placement />
        </Col>
        <Col sm={12}>
          <Backdrop />
        </Col>
      </Row>
    </>
  );
}
