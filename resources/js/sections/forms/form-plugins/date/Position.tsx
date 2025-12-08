import { Dispatch, RefObject, SetStateAction, useRef, useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

// third-party
import Calendar from 'react-calendar';

// types
import { DatePickerDisabledProps, SelectedValue } from 'types/date-picker';

type PositionType = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB');
}

const positions: { key: PositionType; placeholder: string; className: string }[] = [
  { key: 'bottomLeft', placeholder: 'Bottom left', className: 'bottom-left' },
  { key: 'bottomRight', placeholder: 'Bottom right', className: 'bottom-right' },
  { key: 'topLeft', placeholder: 'Top left', className: 'top-left' },
  { key: 'topRight', placeholder: 'Top right', className: 'top-right' }
];

// Helper hook to attach useClickOutside safely
function usePositionClickOutside(
  ref: RefObject<HTMLElement>,
  key: PositionType,
  setVisible: Dispatch<SetStateAction<Record<PositionType, boolean>>>,
  useClickOutside: DatePickerDisabledProps['useClickOutside']
) {
  useClickOutside(ref, () => setVisible((prev) => ({ ...prev, [key]: false })));
}

// =============================|| DATE - POSITION ||============================== //

export default function Position({ useClickOutside }: DatePickerDisabledProps) {
  const [selectedDates, setSelectedDates] = useState<Record<PositionType, Date | null>>({
    topLeft: null,
    topRight: null,
    bottomLeft: null,
    bottomRight: null
  });

  const [visible, setVisible] = useState<Record<PositionType, boolean>>({
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false
  });

  const refs: Record<PositionType, RefObject<HTMLDivElement>> = {
    topLeft: useRef<HTMLDivElement>(null!) as RefObject<HTMLDivElement>,
    topRight: useRef<HTMLDivElement>(null!) as RefObject<HTMLDivElement>,
    bottomLeft: useRef<HTMLDivElement>(null!) as RefObject<HTMLDivElement>,
    bottomRight: useRef<HTMLDivElement>(null!) as RefObject<HTMLDivElement>
  };

  usePositionClickOutside(refs.topLeft, 'topLeft', setVisible, useClickOutside);
  usePositionClickOutside(refs.topRight, 'topRight', setVisible, useClickOutside);
  usePositionClickOutside(refs.bottomLeft, 'bottomLeft', setVisible, useClickOutside);
  usePositionClickOutside(refs.bottomRight, 'bottomRight', setVisible, useClickOutside);

  const toggleCalendar = (key: PositionType) => {
    setVisible((prev) => ({
      topLeft: false,
      topRight: false,
      bottomLeft: false,
      bottomRight: false,
      [key]: !prev[key]
    }));
  };

  const handleDateChange = (key: PositionType, date: SelectedValue) => {
    if (date instanceof Date) {
      setSelectedDates((prev) => ({ ...prev, [key]: date }));
      setVisible((prev) => ({ ...prev, [key]: false }));
    }
  };

  const handleInputKeyDown = (key: PositionType) => (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCalendar(key);
    }
    if (event.key === 'Escape') {
      event.stopPropagation();
      setVisible((prev) => ({ ...prev, [key]: false }));
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setVisible({ topLeft: false, topRight: false, bottomLeft: false, bottomRight: false, [key]: true });
    }
  };

  const getWrapperPlacementClass = (key: PositionType) => {
    switch (key) {
      case 'bottomLeft':
        return 'start-0 top-100';
      case 'bottomRight':
        return 'end-0 top-100';
      case 'topLeft':
        return 'start-0 bottom-100';
      case 'topRight':
        return 'end-0 bottom-100';
      default:
        return 'start-0 top-100';
    }
  };

  return (
    <Row className="mb-3">
      <Col lg={3} sm={12} className="col-form-label text-lg-end">
        <Form.Label className="mb-0">Position</Form.Label>
      </Col>
      <Col lg={4} md={9} sm={12}>
        {positions.map(({ key, placeholder, className }, idx) => (
          <div ref={refs[key]} key={key} className={idx !== 0 ? 'mt-3 position-relative' : 'position-relative'}>
            <InputGroup>
              <Form.Control
                type="text"
                className="datepicker-input"
                placeholder={placeholder}
                value={selectedDates[key] ? formatDate(selectedDates[key]!) : ''}
                onClick={() => toggleCalendar(key)}
                onKeyDown={handleInputKeyDown(key)}
                aria-haspopup="dialog"
                aria-expanded={visible[key]}
                aria-controls={`calendar-${key}`}
                readOnly
              />
              <InputGroup.Text
                as="button"
                type="button"
                aria-label={`Toggle calendar ${placeholder}`}
                aria-expanded={visible[key]}
                aria-controls={`calendar-${key}`}
                onClick={() => toggleCalendar(key)}
                style={{ cursor: 'pointer' }}
              >
                <i className="ph ph-calendar-blank" />
              </InputGroup.Text>
            </InputGroup>
            {visible[key] && (
              <div
                id={`calendar-${key}`}
                role="dialog"
                aria-modal="false"
                className={`position-absolute position-calender ${getWrapperPlacementClass(key)}`}
              >
                <Calendar
                  formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2)}
                  value={selectedDates[key]}
                  prev2Label={null}
                  next2Label={null}
                  prevLabel="«"
                  nextLabel="»"
                  className={className}
                  onChange={(date) => handleDateChange(key, date)}
                />
              </div>
            )}
          </div>
        ))}
      </Col>
    </Row>
  );
}
