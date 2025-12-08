// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// =============================|| FORM CHECKBOX - COLOR OPTIONS ||============================== //

export default function ColorOptionsPage() {
  const solidColors = [
    { label: 'primary', className: 'input-primary' },
    { label: 'secondary', className: 'input-secondary' },
    { label: 'success', className: 'input-success' },
    { label: 'danger', className: 'input-danger' },
    { label: 'warning', className: 'input-warning' },
    { label: 'info', className: 'input-info' },
    { label: 'dark', className: 'input-dark' }
  ];

  const lightColors = [
    { label: 'primary light', className: 'input-light-primary' },
    { label: 'secondary light', className: 'input-light-secondary' },
    { label: 'success light', className: 'input-light-success' },
    { label: 'danger light', className: 'input-light-danger' },
    { label: 'warning light', className: 'input-light-warning' },
    { label: 'info light', className: 'input-light-info' },
    { label: 'dark light', className: 'input-light-dark' }
  ];

  const renderCheckboxes = (items: { label: string; className: string }[]) =>
    items.map((item, idx) => (
      <FormCheck key={idx} className="mb-2">
        <FormCheck.Input className={item.className} type="checkbox" defaultChecked />
        <FormCheck.Label>{item.label}</FormCheck.Label>
      </FormCheck>
    ));

  return (
    <MainCard title="Color Options">
      <Form>
        <Row className="g-4">
          <Col md={6}>{renderCheckboxes(solidColors)}</Col>
          <Col md={6}>{renderCheckboxes(lightColors)}</Col>
        </Row>
      </Form>
    </MainCard>
  );
}
