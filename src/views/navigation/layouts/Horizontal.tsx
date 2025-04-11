// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import LayoutCard from 'components/layout/LayoutCard';

// ==============================|| NAVIGATION - HORIZONTAL ||============================== //

export default function HorizontalPage() {
  const data = Array(4).fill(null);
  return (
    <Row>
      <Col xs={12}>
        {data.map((_, index) => (
          <LayoutCard key={index} />
        ))}
      </Col>
    </Row>
  );
}
