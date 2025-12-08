import { RefObject, useRef, useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// third-party
import Calendar from 'react-calendar';
import { Value } from 'react-calendar/dist/shared/types.js';

// project-imports
import HelperButton from './HelperButton';
import InlineMode from './InlineMode';
import MainCard from '@/components/MainCard';
import Position from './Position';
import RangePicker from './RangePicker';
import WithInputGroup from './WithInputGroup';

// types
import { DatePickerDisabledProps } from 'types/date-picker';

// Format date as dd/mm/yyyy
function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB'); // UK format = dd/mm/yyyy
}

// ==============================|| DATE - DATE PICKER ||============================== //

export default function DatePickerPreview({ useClickOutside }: DatePickerDisabledProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const datePickerRef = useRef<HTMLDivElement | null>(null);

  // close on outside click
  useClickOutside(datePickerRef as RefObject<HTMLElement>, () => setIsDatePickerOpen(false));

  const toggleDatePicker = () => {
    setIsDatePickerOpen((prev) => !prev);
  };

  const handleDatePickerChange = (value: Value) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      setIsDatePickerOpen(false); // close after selecting
    }
  };

  return (
    <MainCard title="Preview">
      <Row className="mb-3">
        <Col lg={3} sm={12} className="col-form-label text-lg-end">
          <Form.Label className="mb-0">Simple Input</Form.Label>
        </Col>
        <Col lg={4} md={9} sm={12} className="position-relative">
          <Form.Control
            type="text"
            className="datepicker-input"
            placeholder="Select date"
            id="d_week_1"
            value={selectedDate ? formatDate(selectedDate) : ''}
            onClick={toggleDatePicker}
            readOnly
          />
          {isDatePickerOpen && (
            <div ref={datePickerRef} className="position-absolute top-100 start-0 z-3">
              <Calendar
                onChange={handleDatePickerChange}
                formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2)}
                value={selectedDate}
                prev2Label={null}
                next2Label={null}
                prevLabel="«"
                nextLabel="»"
              />
            </div>
          )}
        </Col>
      </Row>

      {/* Other components */}
      <WithInputGroup useClickOutside={useClickOutside} />
      <HelperButton useClickOutside={useClickOutside} />
      <RangePicker useClickOutside={useClickOutside} />
      <InlineMode />
      <Position useClickOutside={useClickOutside} />
    </MainCard>
  );
}
