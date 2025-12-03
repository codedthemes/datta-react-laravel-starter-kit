import { useState, useRef, RefObject } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

// third-party
import Calendar from 'react-calendar';
import { Value } from 'react-calendar/dist/shared/types.js';

// types
import { DatePickerDisabledProps } from 'types/date-picker';

// =============================|| DATE - RANGE PICKER ||============================== //

export default function RangePicker({ useClickOutside }: DatePickerDisabledProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [activeInput, setActiveInput] = useState<'start' | 'end' | null>(null);

  const calendarRef = useRef<HTMLDivElement>(null);

  // close calendar on outside click
  useClickOutside(calendarRef as RefObject<HTMLElement>, () => setActiveInput(null));

  const handleInputClick = (input: 'start' | 'end') => {
    setActiveInput(input);
  };

  const handleDateChange = (value: Value) => {
    if (Array.isArray(value)) {
      const [start, end] = value;
      setStartDate(start);
      setEndDate(end);
      setActiveInput(null);
    } else if (value instanceof Date) {
      setStartDate(value);
      setEndDate(null);
    }
  };

  return (
    <Row className="mb-3">
      <Col lg={3} sm={12} className="col-form-label text-lg-end">
        <Form.Label className="mb-0">Date Range</Form.Label>
      </Col>

      <Col lg={4} md={9} sm={12} className="position-relative">
        <InputGroup>
          {/* Start Date */}
          <Form.Control
            type="text"
            className="rounded-start rounded-end-0"
            placeholder="Start date"
            value={startDate ? startDate.toLocaleDateString() : ''}
            onClick={() => handleInputClick('start')}
            readOnly
          />

          <InputGroup.Text>to</InputGroup.Text>

          {/* End Date */}
          <Form.Control
            type="text"
            className="text-end rounded-start-0 rounded-end"
            placeholder="End date"
            value={endDate ? endDate.toLocaleDateString() : ''}
            onClick={() => handleInputClick('end')}
            readOnly
          />
        </InputGroup>

        {/* Calendar */}
        {activeInput && (
          <div ref={calendarRef} className="position-absolute start-0 top-100 z-3">
            <Calendar
              selectRange
              onChange={handleDateChange}
              value={[startDate, endDate]}
              formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2)}
              prev2Label={null}
              next2Label={null}
              prevLabel="«"
              nextLabel="»"
              className={`react-calendar react-calendar-${activeInput}`}
            />
          </div>
        )}
      </Col>
    </Row>
  );
}
