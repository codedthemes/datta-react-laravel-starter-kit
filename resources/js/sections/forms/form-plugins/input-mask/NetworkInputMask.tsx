import { useRef } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// third-party
import { IMaskInput } from 'react-imask';

// project-imports
import MainCard from '@/components/MainCard';

const inputFields = [
  { label: 'IP Address', mask: '000.000.000.000', Placeholder: '000.000.000.000' },
  { label: 'IPV4', mask: '000.000.000.0000', Placeholder: '000.000.000.0000' },
  { label: 'IPV6', mask: '0000:0000:0000:0:000:0000:0000:0000', Placeholder: '0000:0000:0000:0:000:0000:0000:0000' }
];

// ==============================|| INPUT MASK - NETWORK ||============================== //

export default function NetworkInputMask() {
  const ref = useRef(null);
  const inputRef = useRef(null);

  return (
    <MainCard
      title="Network"
      subheader={
        <p className="mb-0 mt-1">
          Add class of <code>.ip</code> with <code>data-mask</code> attribute
        </p>
      }
    >
      {inputFields.map((item, index) => (
        <Row className="mb-3" key={index}>
          <Col lg={3} sm={12} className="text-lg-end col-form-label">
            <Form.Label className="mb-0">{item.label}</Form.Label>
          </Col>
          <Col lg={6} sm={12}>
            <IMaskInput
              className="form-control"
              mask={item.mask}
              radix=""
              value=""
              unmask={true}
              ref={ref}
              inputRef={inputRef}
              placeholder={item.Placeholder}
            />
          </Col>
        </Row>
      ))}
    </MainCard>
  );
}
