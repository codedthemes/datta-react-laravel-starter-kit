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
  { mask: '00/00/0000', label: 'Insert Date 1', Placeholder: 'DD/MM/YYYY' },
  { mask: '00-00-0000', label: 'Insert Date 2', Placeholder: 'DD-MM-YYYY' }
];
// ==============================|| INPUT MASK - DATE ||============================== //

export default function DateInputMask() {
  const ref = useRef(null);
  const inputRef = useRef(null);

  return (
    <MainCard
      title="Date"
      subheader={
        <p className="mb-0 mt-1">
          Add class of <code>.date</code> with <code>data-mask</code> attribute
        </p>
      }
    >
      <Form>
        {maskConfigs.map((config, index) => (
          <Row className="mb-3" key={index}>
            <Col lg={3} sm={12} className="text-lg-end col-form-label">
              {config.label}
            </Col>
            <Col lg={6} md={12}>
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
      </Form>
    </MainCard>
  );
}
