import { useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// third-party
import Nouislider from 'nouislider-react';
import SliderWithTooltips from './SliderWithTooltips';
import SoftLimits from './SoftLimits';
import 'nouislider/distribute/nouislider.css';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| NOUI SLIDER ||============================== //

export default function NouiSlider() {
  const [sliderValue, setSliderValue] = useState(2);
  const [sliderValue2, setSliderValue2] = useState([2, 9]);
  const [sliderValue3, setSliderValue3] = useState(2);

  const getOrdinalSuffix = (day: number) => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  var movingslider = {
    min: [0],
    '25%': [25],
    '50%': [50],
    '75%': [75],
    max: [100]
  };

  const convertToDate = (sliderValue: number) => {
    const baseDate = new Date();
    const yearsToAdd = sliderValue;
    baseDate.setFullYear(baseDate.getFullYear() + yearsToAdd);

    const day = baseDate.getDate();
    const month = baseDate.toLocaleString('default', { month: 'long' });
    const year = baseDate.getFullYear();
    const ordinal = getOrdinalSuffix(day);

    return `${baseDate.toLocaleString('default', { weekday: 'long' })}, ${day}${ordinal} ${month} ${year}`;
  };

  const handleSliderUpdate = (values: number[]) => {
    setSliderValue(Math.round(values[0]));
  };

  const handleSlider2Update = (values: any[]) => {
    setSliderValue2(values.map((val) => Math.round(val)));
  };

  const handleSlider3Update = (values: number[]) => {
    setSliderValue3(Math.round(values[0]));
  };

  return (
    <MainCard>
      <Form>
        <Row className="mb-5">
          <Form.Label column lg={3} sm={12} className="col-form-label text-lg-end">
            Basic Setup
          </Form.Label>
          <Col lg={6} md={12}>
            <Row className="align-items-center g-3">
              <Col sm={4}>
                <Form.Control type="text" value={sliderValue || ''} readOnly />
              </Col>

              <Col sm={8}>
                <Nouislider range={{ min: 1, max: 10 }} start={sliderValue} step={1} connect onUpdate={handleSliderUpdate} />
              </Col>
            </Row>
            <Form.Text>Input control is attached to slider</Form.Text>
          </Col>
        </Row>

        {/* Working with dates */}
        <Row className="mb-5">
          <Form.Label column lg={3} sm={12} className=" text-lg-end">
            Working with dates
          </Form.Label>
          <Col lg={6} md={12}>
            <Row className="align-items-center g-3">
              <Col sm={6}>
                <Form.Control type="text" className="mb-2" value={convertToDate(sliderValue2[0])} placeholder="Date from" readOnly />
                <Form.Control type="text" value={convertToDate(sliderValue2[1])} placeholder="Date to" readOnly />
              </Col>

              <Col sm={6}>
                <Nouislider range={{ min: 1, max: 10 }} start={sliderValue2} step={1} onUpdate={handleSlider2Update} className="" />
              </Col>
            </Row>
            <Form.Text>dates to numerical ranges, and then use the update event to display them in a pretty format.</Form.Text>
          </Col>
        </Row>
        <Row className="mb-5">
          <Form.Label column lg={3} sm={12} className="col-form-label text-lg-end">
            Moving the slider by clicking pips
          </Form.Label>
          <Col lg={6} md={12}>
            <Row className=" g-3">
              <Col sm={4}>
                <Form.Control type="text" value={sliderValue3 || ''} readOnly />
              </Col>

              <Col sm={8}>
                <Nouislider
                  range={movingslider}
                  start={[sliderValue3]}
                  connect
                  onUpdate={handleSlider3Update}
                  pips={{
                    mode: 'steps',
                    stepped: true,
                    values: [0, 25, 50, 75, 100]
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <SliderWithTooltips />
        <SoftLimits />
      </Form>
    </MainCard>
  );
}
