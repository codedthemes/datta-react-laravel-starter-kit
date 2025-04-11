import { useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// third-party
import Nouislider from 'nouislider-react';

// ==============================|| SOFT LIMITS ||============================== //

export default function SoftLimits() {
  const [sliderValue, setSliderValue] = useState(50);
  const [sliderValue1, setSliderValue1] = useState(50);

  const handleSliderUpdate = (value: string[]) => {
    let newValue = parseFloat(value[0]);
    if (newValue < 20) newValue = 20;
    if (newValue > 80) newValue = 80;
    setSliderValue(newValue);
  };

  const sliderColor = sliderValue1 === 0 ? '' : 'red';

  const handleSliderUpdate1 = (value: string[]) => {
    let newValue = parseFloat(value[0]);
    if (newValue < 0) newValue = 0;
    if (newValue > 1) newValue = 1;
    setSliderValue1(newValue);
  };

  var range = {
    min: [20],
    '20%': [20],
    '80%': [80],
    max: [100]
  };

  return (
    <>
      <Row className="mb-5">
        <Form.Label column lg={3} sm={12} className="col-form-label text-lg-end">
          Soft Limits
        </Form.Label>
        <Col lg={6} md={12}>
          <Row className="align-items-center g-3 mb-5">
            <Col sm={4}>
              <Form.Control type="text" value={sliderValue || ''} readOnly />
            </Col>

            <Col sm={8}>
              <Nouislider
                range={range}
                start={sliderValue}
                connect
                onUpdate={handleSliderUpdate}
                pips={{
                  mode: 'steps',
                  stepped: true
                }}
              />
            </Col>
          </Row>
          <Form.Text>
            If you want to disable the edges of a slider, the set event can be used to reset the value if a limit is passed.
          </Form.Text>
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label column lg={3} sm={12} className="col-form-label text-lg-end">
          Vertical Slider
        </Form.Label>
        <Col lg={6} md={12}>
          <Row className="align-items-center g-3">
            <Col sm={4}>
              <Form.Control type="text" className="mb-3" value={sliderValue1 || '0'} readOnly />
            </Col>

            <Col sm={8}>
              <Nouislider
                range={{ min: 0, max: 1 }}
                start={sliderValue1 || 0}
                connect={[true, false]}
                step={1}
                orientation="vertical"
                onUpdate={handleSliderUpdate1}
                style={{
                  height: '50px',
                  background: sliderColor
                }}
              />
            </Col>
          </Row>
          <Form.Text>Input control is attached to slider</Form.Text>
        </Col>
      </Row>
    </>
  );
}
