// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// react-bootstrap
import ThreeColumnsFormLayout from 'sections/forms/form-layouts/multi-layouts/ThreeColumnsFormLayout';
import ThreeColumnsHorizontalLayout from 'sections/forms/form-layouts/multi-layouts/ThreeColumnsHorizontalLayout';
import TwoColumnsFormLayout from 'sections/forms/form-layouts/multi-layouts/TwoColumnsFormLayout';
import TwoColumnsHorizontalForm from 'sections/forms/form-layouts/multi-layouts/TwoColumnsHorizontalForm';

// =============================|| FORM LAYOUTS - MULTI LAYOUTS ||============================== //

export default function MultiLayoutsPage() {
  return (
    <Row>
      <Col xs={12}>
        <TwoColumnsFormLayout />
        <TwoColumnsHorizontalForm />
        <ThreeColumnsFormLayout />
        <ThreeColumnsHorizontalLayout />
      </Col>
    </Row>
  );
}
