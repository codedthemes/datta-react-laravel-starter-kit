// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import PopoverPage from 'sections/components/basic/tooltip/Popover';
import TooltipPage from 'sections/components/basic/tooltip/Tooltip';
import ComponentHeader from 'components/cards/ComponentHeader';

// ==============================|| BASIC - TOOLTIP ||============================== //

export default function TooltipMainPage() {
  return (
    <>
      <ComponentHeader
        caption="Documentation and examples for adding custom React-Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-bs-attributes for local title storage."
        link="https://react-bootstrap.netlify.app/docs/components/overlays/#overlaytrigger"
      />
      <Row>
        <Col xs={12} md={6}>
          <TooltipPage />
        </Col>
        <Col xs={12} md={6}>
          <PopoverPage />
        </Col>
      </Row>
    </>
  );
}
