import { useEffect, useRef } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// ==============================|| FORM CHECKBOX - CUSTOM CHECKBOX ||============================== //

export default function CustomCheckbox() {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = true;
    }
  }, []);

  const inlineOptions = [
    { id: 'inline-1', label: '1' },
    { id: 'inline-2', label: '2' },
    { id: 'inline-3', label: '3', defaultChecked: true },
    { id: 'inline-4', label: '4 (disabled)', disabled: true }
  ];

  return (
    <MainCard title="Custom Checkbox">
      {/* Default checkboxes */}
      <Row className="mb-3">
        <Col sm={3} className="text-sm-end col-form-label pt-0">
          Checkboxes
        </Col>
        <Col sm={9}>
          <Form.Check id="checkbox-default" label="Default checkbox" className="mb-2" />
          <Form.Check id="checkbox-checked" label="Checked checkbox" defaultChecked className="mb-2" />
          <Form.Check id="checkbox-disabled" label="Disabled checkbox" disabled className="mb-2" />
          <Form.Check id="checkbox-disabled-checked" label="Disabled checked checkbox" defaultChecked disabled />
        </Col>
      </Row>

      {/* Inline checkboxes */}
      <Row className="mb-3">
        <Col sm={3} className="text-sm-end col-form-label pt-0">
          Inline
        </Col>
        <Col sm={9}>
          {inlineOptions.map((opt) => (
            <Form.Check key={opt.id} id={opt.id} label={opt.label} defaultChecked={opt.defaultChecked} disabled={opt.disabled} inline />
          ))}
          <small className="form-text text-muted d-block mt-2">
            Add <code>.form-check-inline</code> for inline checkboxes
          </small>
        </Col>
      </Row>

      {/* Indeterminate checkbox */}
      <Row>
        <Col sm={3} className="text-sm-end col-form-label pt-0">
          Indeterminate
        </Col>
        <Col sm={9}>
          <Form.Check type="checkbox" id="checkbox-indeterminate" label="Indeterminate" ref={checkboxRef} />
          <small className="form-text text-muted d-block mt-2">
            Example: <code>document.querySelector('#checkbox-indeterminate').indeterminate = true;</code>
          </small>
        </Col>
      </Row>
    </MainCard>
  );
}
