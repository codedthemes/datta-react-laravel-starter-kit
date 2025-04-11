import { useRef, useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

// third-party
import Calendar from 'react-calendar';

// types
import { DatePickerDisabledProps, SelectedValue } from 'types/date-picker';

function formatDate(date: Date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

// =============================|| DATE - POSITION ||============================== //

export default function Position({ useClickOutside }: DatePickerDisabledProps) {
  const [topleft, setTopLeft] = useState<Date | null>(null);
  const [topright, setTopRight] = useState<Date | null>(null);
  const [bottomleft, setBottomLeft] = useState<Date | null>(null);
  const [bottomright, setBottomRight] = useState<Date | null>(null);
  const [isTopLeft, setIsTopLeft] = useState(false);
  const [isTopRight, setIsTopRight] = useState(false);
  const [isBottomLeft, setIsBottomLeft] = useState(false);
  const [isBottomRight, setIsBottomRight] = useState(false);

  const topLeftRef = useRef<HTMLDivElement | null>(null);
  const topRightRef = useRef<HTMLDivElement | null>(null);
  const bottomLeftRef = useRef<HTMLDivElement | null>(null);
  const bottomRightRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(topLeftRef, () => setIsTopLeft(false));
  useClickOutside(topRightRef, () => setIsTopRight(false));
  useClickOutside(bottomLeftRef, () => setIsBottomLeft(false));
  useClickOutside(bottomRightRef, () => setIsBottomRight(false));

  const handleTopLeftClick = () => {
    setIsTopLeft((prev) => !prev);
  };

  const handleTopRightClick = () => {
    setIsTopRight((prev) => !prev);
  };

  const handleBottomLeftClick = () => {
    setIsBottomLeft((prev) => !prev);
  };

  const handleBottomRightClick = () => {
    setIsBottomRight((prev) => !prev);
  };

  const handleTopLeft = (selectedDate: SelectedValue) => {
    if (selectedDate instanceof Date) {
      setTopLeft(selectedDate);
    }
  };

  const handleTopRight = (selectedDate: SelectedValue) => {
    if (selectedDate instanceof Date) {
      setTopRight(selectedDate);
    }
  };

  const handleBottomLeft = (selectedDate: SelectedValue) => {
    if (selectedDate instanceof Date) {
      setBottomLeft(selectedDate);
    }
  };

  const handleBottomRight = (selectedDate: SelectedValue) => {
    if (selectedDate instanceof Date) {
      setBottomRight(selectedDate);
    }
  };

  return (
    <Row className="mb-3">
      <Col lg={3} sm={12} className="col-form-label text-lg-end">
        <Form.Label className="mb-0">Position</Form.Label>
      </Col>
      <Col lg={4} md={9} sm={12}>
        <InputGroup>
          <Form.Control
            type="text"
            className=" datepicker-input"
            placeholder="Top left"
            id="d_week_1"
            value={topleft ? formatDate(topleft) : ''}
            onClick={handleTopLeftClick}
            readOnly
          />
          {isTopLeft && (
            <div ref={topLeftRef}>
              <Calendar
                formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2)}
                value={topleft}
                prev2Label={null}
                next2Label={null}
                prevLabel="«"
                nextLabel="»"
                className="react-calendar-1"
                onChange={handleTopLeft}
              />
            </div>
          )}
          <InputGroup.Text>
            <i className="far fa-calendar-alt" />
          </InputGroup.Text>
        </InputGroup>

        <InputGroup className="mt-3">
          <Form.Control
            type="text"
            className=" datepicker-input"
            placeholder="Top right"
            id="d_week_1"
            value={topright ? formatDate(topright) : ''}
            onClick={handleTopRightClick}
            readOnly
          />
          {isTopRight && (
            <div ref={topRightRef}>
              <Calendar
                formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2)}
                value={topright}
                prev2Label={null}
                next2Label={null}
                prevLabel="«"
                nextLabel="»"
                className="react-calendar-1"
                onChange={handleTopRight}
              />
            </div>
          )}
          <InputGroup.Text>
            <i className="far fa-calendar-alt" />
          </InputGroup.Text>
        </InputGroup>

        <InputGroup className="mt-3">
          <Form.Control
            type="text"
            className=" datepicker-input"
            placeholder="Bottom left"
            id="d_week_1"
            value={bottomleft ? formatDate(bottomleft) : ''}
            onClick={handleBottomLeftClick}
            readOnly
          />
          {isBottomLeft && (
            <div ref={bottomLeftRef}>
              <Calendar
                formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2)}
                value={bottomleft}
                prev2Label={null}
                next2Label={null}
                prevLabel="«"
                nextLabel="»"
                className="react-calendar-1"
                onChange={handleBottomLeft}
              />
            </div>
          )}
          <InputGroup.Text>
            <i className="far fa-calendar-alt" />
          </InputGroup.Text>
        </InputGroup>

        <InputGroup className="mt-3">
          <Form.Control
            type="text"
            className=" datepicker-input"
            placeholder="Bottom right"
            id="d_week_1"
            value={bottomright ? formatDate(bottomright) : ''}
            onClick={handleBottomRightClick}
            readOnly
          />
          {isBottomRight && (
            <div ref={bottomRightRef}>
              <Calendar
                formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2)}
                value={bottomright}
                prev2Label={null}
                next2Label={null}
                prevLabel="«"
                nextLabel="»"
                className="react-calendar-1"
                onChange={handleBottomRight}
              />
            </div>
          )}
          <InputGroup.Text>
            <i className="far fa-calendar-alt" />
          </InputGroup.Text>
        </InputGroup>
      </Col>
    </Row>
  );
}
