import { useState, useEffect } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// third-party
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

// ==============================|| SLIDER WITH TOOLTIPS ||============================== //

export default function SliderWithTooltips() {
  const [sliderValues, setSliderValues] = useState<number[]>([20.5, 80]);
  const [sliderValues1, setSliderValues1] = useState<number[]>([-10, 10]);
  const [dropdownValue, setDropdownValue] = useState<number>(1);

  const handleSliderChange = (values: string[]) => {
    setSliderValues(values.map((value) => parseFloat(value)));
  };

  const handleSliderChange1 = (values: string[]) => {
    setSliderValues1(values.map((value) => parseFloat(value)));
  };

  const handleDropdownChange1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(e.target.value);
    setDropdownValue(newValue);

    setSliderValues1([newValue, sliderValues1[1]]);
  };

  useEffect(() => {
    setSliderValues1([dropdownValue, sliderValues1[1]]);
  }, [dropdownValue, sliderValues1]);

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
              <Nouislider
                range={{ min: 1, max: 200 }}
                start={sliderValues}
                step={0.01}
                connect
                tooltips={true}
                onChange={handleSliderChange}
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
                <option value="-20">-20</option>
                <option value="-19">-19</option>
                <option value="-18">-18</option>
                <option value="-17">-17</option>
                <option value="-16">-16</option>
                <option value="-15">-15</option>
                <option value="-14">-14</option>
                <option value="-13">-13</option>
                <option value="-12">-12</option>
                <option value="-11">-11</option>
                <option value="-10">-10</option>
                <option value="-9">-9</option>
                <option value="-8">-8</option>
                <option value="-7">-7</option>
                <option value="-6">-6</option>
                <option value="-5">-5</option>
                <option value="-4">-4</option>
                <option value="-3">-3</option>
                <option value="-2">-2</option>
                <option value="-1">-1</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </Form.Select>
            </Col>
            <Col xs={6} sm={3} className="pb-sm-0">
              <Form.Control type="text" value={sliderValues1[1]} readOnly />
            </Col>

            <Col sm={6}>
              <Nouislider
                range={{ min: -20, max: 40 }}
                start={sliderValues1}
                step={0.01}
                connect
                tooltips={true}
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
