import { ChangeEvent, useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// third-party
import Slider from 'rc-slider';

const CustomerSlider = Slider as any;

// ==============================|| SLIDER WITH TOOLTIPS ||============================== //

export default function SliderWithTooltips() {
  const [sliderValues, setSliderValues] = useState<[number, number]>([20, 80]);
  const [sliderValues1, setSliderValues1] = useState<[number, number]>([-10, 10]);
  const [dropdownValue, setDropdownValue] = useState<number>(1);

  const handleSliderChange1 = (value: [number, number]) => {
    if (Array.isArray(value)) {
      setSliderValues1(value);
      setDropdownValue(value[0]);
    }
  };

  const handleDropdownChange1 = (event: ChangeEvent<HTMLSelectElement>) => {
    const newMin = parseFloat(event.target.value);
    setSliderValues1(([_, max]) => [newMin, max]);
    setDropdownValue(newMin);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMax = parseFloat(e.target.value);
    setSliderValues1(([min]) => [min, newMax]);
  };

  return (
    <>
      <Row className="mb-5">
        <Form.Label column lg={3} sm={12} className="col-form-label text-lg-end">
          Slider With Tooltip
        </Form.Label>
        <Col lg={6} md={12}>
          <Row className="align-items-center g-3">
            <Col xs={6} sm={3} className="pb-sm-0">
              <Form.Control type="text" value={sliderValues[0]} readOnly />
            </Col>
            <Col xs={6} sm={3} className="pb-sm-0">
              <Form.Control type="text" value={sliderValues[1]} readOnly />
            </Col>

            <Col sm={6}>
              <CustomerSlider
                range
                min={0}
                max={200}
                allowCross={false}
                defaultValue={sliderValues}
                onChange={(values: number[]) => setSliderValues(values as [number, number])}
                className="custom-slider"
                trackStyle={[{ height: 4, borderRadius: 2 }]}
                railStyle={{ height: 4, borderRadius: 2 }}
                handleStyle={[{ top: -7 }, { top: -7 }]}
                handleRender={(node: React.ReactNode, handleProps: any) => {
                  const min = 0;
                  const max = 200;
                  const percent = ((handleProps.value - min) / (max - min)) * 100;

                  return (
                    <div style={{ position: 'relative' }}>
                      <div className="custom-tooltip" style={{ top: -45, marginLeft: 15, left: `${percent}%` }}>
                        {handleProps.value}
                      </div>
                      {node}
                    </div>
                  );
                }}
              />
            </Col>
          </Row>
          <Form.Text>Always show slider values.</Form.Text>
        </Col>
      </Row>

      <Row className="mb-5">
        <Form.Label column lg={3} sm={12} className="col-form-label text-lg-end">
          Using HTML5 input elements
        </Form.Label>
        <Col lg={6} md={12}>
          <Row className="align-items-center g-3">
            <Col xs={6} sm={3} className="pb-sm-0">
              <Form.Select value={dropdownValue} onChange={handleDropdownChange1}>
                {Array.from({ length: 41 }, (_, i) => -20 + i).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col xs={6} sm={3} className="pb-sm-0">
              <Form.Control type="number" value={sliderValues1[1]} onChange={handleInputChange} />
            </Col>

            <Col sm={6}>
              <Slider
                range
                min={-20}
                max={40}
                className="custom-slider"
                trackStyle={[{ height: 4, borderRadius: 2 }]}
                railStyle={{ height: 4, borderRadius: 2 }}
                defaultValue={sliderValues1}
                onChange={handleSliderChange1}
              />
            </Col>
          </Row>
          <Form.Text>
            noUiSlider's <code>'update'</code> method is useful for synchronizing with other elements
          </Form.Text>
        </Col>
      </Row>
    </>
  );
}
