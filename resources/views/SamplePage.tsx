// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| OTHER - SAMPLE PAGE ||============================== //

export default function SamplePage() {
  return (
    <Row>
      <Col xl={12}>
        <MainCard title="Hello Card" />
      </Col>
    </Row>
  );
}
