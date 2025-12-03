import { useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// third-party
import Slider from 'rc-slider';

const CustomerSlider = Slider as any;

// ==============================|| SOFT LIMITS ||============================== //

export default function SoftLimits() {
  const [sliderValue, setSliderValue] = useState(50);
  const [sliderValue1, setSliderValue1] = useState(0);

  const handleSliderChange = (val: number | number[]) => {
    if (typeof val === 'number') {
      if (val <= 20) {
        setSliderValue(20);
      } else if (val >= 80) {
        setSliderValue(80);
      } else {
        setSliderValue(val);
      }
    }
  };

  const min = 0;
  const max = 100;
  const step = 4;

  const marks = Array.from({ length: (max - min) / step + 1 }, (_, i) => min + i * step);

  return (
    <>
      <Row className="mb-5">
        <Form.Label column lg={3} sm={12} className="col-form-label text-lg-end">
          Soft Limits
        </Form.Label>
        <Col lg={6} md={12}>
          <Row className="align-items-center g-3 mb-3">
            <Col sm={4}>
              <Form.Control type="text" value={sliderValue || ''} readOnly />
            </Col>

            <Col sm={8}>
              <div className="slider-wrapper">
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  defaultValue={sliderValue}
                  onChange={handleSliderChange}
                  className="custom-slider"
                  trackStyle={[{ height: 4, borderRadius: 2 }]}
                  railStyle={{ height: 4, borderRadius: 2 }}
                />
                <div className="tick-container">
                  {marks.map((mark, index) => (
                    <div
                      key={index}
                      className={`tick ${mark <= sliderValue ? 'tick-active' : ''}`}
                      style={{ left: `${(mark / 100) * 100}%` }}
                    />
                  ))}
                </div>
                <div className="tick-labels">
                  {[20, 80].map((label) => (
                    <div key={label} className="tick-label" style={{ left: `${(label / 100) * 100}%` }}>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
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
              <div className={!sliderValue1 ? 'slider-wrapper blue' : 'slider-wrapper'}>
                <CustomerSlider
                  vertical
                  min={0}
                  max={1}
                  step={1}
                  defaultValue={sliderValue1}
                  onChange={setSliderValue1}
                  className="vertical-slider"
                  trackStyle={[{ width: 4, borderRadius: 2 }]}
                  railStyle={{ width: 4, borderRadius: 2 }}
                  handleRender={(handleProps: any) => (
                    <div
                      className="vertical-thumb"
                      style={{ ...handleProps.style, top: sliderValue1 ? '0%' : '50%' }}
                      onMouseDown={handleProps.onMouseDown}
                      onTouchStart={handleProps.onTouchStart}
                    >
                      <div className="thumb-lines" />
                    </div>
                  )}
                />
              </div>
            </Col>
          </Row>
          <Form.Text>Input control is attached to slider</Form.Text>
        </Col>
      </Row>
    </>
  );
}
