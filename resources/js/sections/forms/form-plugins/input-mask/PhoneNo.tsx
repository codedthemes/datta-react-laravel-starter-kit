import { useRef } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// third-party
import { IMaskInput } from 'react-imask';

// project-imports
import MainCard from '@/components/MainCard';

const maskConfigs = [
  { mask: '0000-000-000', label: 'Mobile No.', Placeholder: '0000-000-000' },
  { mask: '0000-0000', label: 'Telephone', Placeholder: '0000-0000' },
  { mask: '(00) 0000-0000', label: 'Tel. with Code Area', Placeholder: '(00) 0000-0000' },
  { mask: '(000) 000-0000', label: 'US Telephone', Placeholder: '(000) 000-0000' }
];

// ==============================|| INPUT MASK - PHONE NO ||============================== //

export default function PhoneNo() {
  const ref = useRef(null);
  const inputRef = useRef(null);

  return (
    <MainCard
      title="Phone No."
      subheader={
        <p className="mb-0 mt-1">
          Add class of <code>.mob_no</code> with <code>data-mask</code> attribute
        </p>
      }
    >
      {maskConfigs.map((config, index) => (
        <Row className="mb-3" key={index}>
          <Col lg={3} sm={12} className="text-lg-end col-form-label">
            <Form.Label className="mb-0">{config.label}</Form.Label>
          </Col>
          <Col lg={6} sm={12}>
            <IMaskInput
              className="form-control"
              mask={config.mask}
              radix=""
              value=""
              unmask={true}
              ref={ref}
              inputRef={inputRef}
              placeholder={config.Placeholder}
            />
          </Col>
        </Row>
      ))}
    </MainCard>
  );
}
