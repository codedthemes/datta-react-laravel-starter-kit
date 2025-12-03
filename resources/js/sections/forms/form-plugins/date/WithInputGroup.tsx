import { RefObject, useRef, useState } from 'react';

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

// Format date as dd/mm/yyyy
function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB'); // 04/09/2025
}

// ==============================|| DATE - WITH INPUT GROUP  ||============================== //

export default function WithInputGroup({ useClickOutside }: DatePickerDisabledProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const calendarRef = useRef<HTMLDivElement | null>(null);

  // close calendar when clicking outside
  useClickOutside(calendarRef as RefObject<HTMLElement>, () => setIsOpen(false));

  const toggleCalendar = () => setIsOpen((prev) => !prev);

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      setIsOpen(false);
    }
  };

  return (
    <Row className="mb-3">
      <Col lg={3} sm={12} className="col-form-label text-lg-end">
        <Form.Label className="mb-0">With Input Group</Form.Label>
      </Col>
      <Col lg={4} md={9} sm={12} className="position-relative">
        <InputGroup>
          <Form.Control
            type="text"
            className="datepicker-input"
            placeholder="Select date"
            id="d_with_input"
            value={selectedDate ? formatDate(selectedDate) : ''}
            onClick={toggleCalendar}
            readOnly
          />
          <InputGroup.Text role="button" onClick={toggleCalendar}>
            <i className="ph ph-calendar-blank f-18" />
          </InputGroup.Text>
        </InputGroup>

        {isOpen && (
          <div ref={calendarRef} className="position-absolute start-0 top-100 z-3">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2)}
              prev2Label={null}
              next2Label={null}
              prevLabel="«"
              nextLabel="»"
            />
          </div>
        )}
      </Col>
    </Row>
  );
}
