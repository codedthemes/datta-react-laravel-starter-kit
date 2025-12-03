// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import CardSlider from '../user-card/simple-card/CardSlider';
import CardCertificatedBadge from '../user-card/simple-card/CardCertificatedBadge';
import CardHover from '../user-card/simple-card/CardHover';
import ClipSliderCenter from '../user-card/clip-image/ClipSliderCenter';

// ==============================|| SOCIAL PROFILE - MY CONTACTS ||============================== //

export default function MyContacts() {
  return (
    <Row>
      <Col lg={6}>
        <CardSlider />
      </Col>
      <Col lg={6}>
        <CardCertificatedBadge />
      </Col>
      <Col lg={6}>
        <CardHover />
      </Col>
      <Col lg={6}>
        <ClipSliderCenter />
      </Col>
    </Row>
  );
}
