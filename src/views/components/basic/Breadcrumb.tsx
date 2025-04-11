// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import BreadcrumbBasic from 'sections/components/basic/breadcrumb/BreadcrumbBasic';
import BreadcrumbCharacter from 'sections/components/basic/breadcrumb/BreadcrumbCharacter';
import BreadcrumEmbedded from 'sections/components/basic/breadcrumb/BreadcrumEmbedded ';
import BreadcrumbIcon from 'sections/components/basic/breadcrumb/BreadcrumbIcon';
import ComponentHeader from 'components/cards/ComponentHeader';

// ==============================|| BASIC - BREADCRUMB ||============================== //

export default function BreadcrumbPage() {
  return (
    <>
      <ComponentHeader
        caption="Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS."
        link="https://react-bootstrap.netlify.app/docs/components/breadcrumb"
      />
      <Row>
        <Col sm={6}>
          <BreadcrumbBasic />
        </Col>
        <Col sm={6}>
          <BreadcrumbIcon />
        </Col>
        <Col sm={6}>
          <BreadcrumbCharacter />
        </Col>
        <Col sm={6}>
          <BreadcrumEmbedded />
        </Col>
      </Row>
    </>
  );
}
