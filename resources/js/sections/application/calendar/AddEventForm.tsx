import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';

// third-party
import Calendar from 'react-calendar';
import * as Yup from 'yup';
import { EventInput } from '@fullcalendar/common';
import { useFormik, Form as FormikForm, FormikProvider } from 'formik';
import { Value } from 'react-calendar/dist/shared/types.js';
import { addDays } from 'date-fns';

import { createEvent, updateEvent } from '@/api/calender';

// project-imports
import { COLOR_CLASS_MAP } from '@/utils/colorClassMap';

interface AddEventFormProps {
  open: boolean;
  handleEventModal: () => void;
  selectedEvent: EventInput | null;
  selectedRange?: { start: Date; end: Date } | null;
}

// formik validation
const EventSchema = Yup.object().shape({
  title: Yup.string().max(255).required('Title is required'),
  description: Yup.string().max(5000),
  venue: Yup.string().max(255).required('Venue is required'),
  color: Yup.string().max(255)
});

// ==============================|| CALENDAR - ADD EVENT FORM ||============================== //

export default function AddEventForm({ open, handleEventModal, selectedEvent, selectedRange }: AddEventFormProps) {
  const [startDate, setStartDate] = useState<Date | null>(
    selectedEvent?.start ? new Date(selectedEvent.start as string) : (selectedRange?.start ?? null)
  );
  const [endDate, setEndDate] = useState<Date | null>(
    selectedEvent?.end ? new Date(selectedEvent.end as string) : (selectedRange?.end ?? null)
  );
  const [activeInput, setActiveInput] = useState<'start' | 'end' | null>(null);
  const handleInputClick = (input: 'start' | 'end') => {
    setActiveInput(input);
  };
  const handleDateChange = (value: Value) => {
    if (Array.isArray(value)) {
      const [start, end] = value;
      setStartDate(start);
      setEndDate(end);

      // update formik values
      formik.setFieldValue('start', start);
      formik.setFieldValue('end', end);

      setActiveInput(null);
    } else if (value instanceof Date) {
      setStartDate(value);
      formik.setFieldValue('start', value);
      setEndDate(null);
      formik.setFieldValue('end', null);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: selectedEvent?.title || '',
      venue: 'City Town',
      description: selectedEvent?.description || '',
      start: selectedEvent?.start ? new Date(selectedEvent.start as string) : (selectedRange?.start ?? null),
      end: selectedEvent?.end ? new Date(selectedEvent.end as string) : (selectedRange?.end ?? null),
      color: selectedEvent?.color || ''
    },
    validationSchema: EventSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const transformedValues = {
          ...values,
          sstart: values.start instanceof Date ? values.start : null,
          end: values.end instanceof Date ? addDays(values.end, 1) : null,
          color: values.color,
          textColor: values.color,
          allDay: true
        };

        if (selectedEvent && selectedEvent.id) {
          await updateEvent(selectedEvent.id, transformedValues);
        } else {
          await createEvent(transformedValues);
        }

        handleEventModal();
        setSubmitting(false);
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitting(false);
      }
    }
  });
  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <Offcanvas show={open} onHide={handleEventModal} placement="end">
      <Offcanvas.Header closeButton>
        <h4 className="f-w-600 text-truncate mb-0">{selectedEvent ? 'Update Event' : 'Add Event'}</h4>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <FormikProvider value={formik}>
          <FormikForm autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event title"
                {...getFieldProps('title')}
                isInvalid={touched.title && !!errors.title}
              />
              <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Venue</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event venue"
                {...getFieldProps('venue')}
                isInvalid={touched.venue && !!errors.venue}
              />
              <Form.Control.Feedback type="invalid">{errors.venue}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter event description"
                {...getFieldProps('description')}
                isInvalid={touched.description && !!errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {typeof errors.description === 'string' ? errors.description : ''}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select
                id="pc-e-type"
                {...formik.getFieldProps('color')}
                value={formik.values.color} // Ensure the value is the selected hex color
                onChange={(e) => formik.setFieldValue('color', e.target.value)} // Store hex color
              >
                <option value="">Select Type</option>
                {Object.entries(COLOR_CLASS_MAP).map(([hex, className]) => (
                  <option key={hex} value={hex}>
                    {className.replace('event-', '')}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date Range</Form.Label>
              <InputGroup>
                {/* Start Date */}
                <Form.Control
                  type="text"
                  className="rounded-start rounded-end-0"
                  placeholder="Start date"
                  value={formik.values.start ? new Date(formik.values.start).toLocaleDateString() : ''}
                  onClick={() => handleInputClick('start')}
                  readOnly
                />
                {/* End Date */}
                <Form.Control
                  type="text"
                  className="text-end rounded-start-0 rounded-end"
                  placeholder="End date"
                  value={formik.values.end ? new Date(formik.values.end).toLocaleDateString() : ''}
                  onClick={() => handleInputClick('end')}
                  readOnly
                />
              </InputGroup>
              {activeInput && (
                <Calendar
                  {...getFieldProps('dateRange')}
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
              )}
            </Form.Group>

            <Stack direction="horizontal" className="justify-content-between">
              <Button variant="outline-danger" className="btn-link-danger btn-pc-default" onClick={handleEventModal}>
                <i className="align-text-bottom me-1 ti ti-circle-x" /> Close
              </Button>
              <Button id="pc_event_add" variant="secondary" type="submit">
                <i className="align-text-bottom me-1 ti ti-calendar-plus" /> {selectedEvent ? 'Update' : 'Add'}
              </Button>
            </Stack>
          </FormikForm>
        </FormikProvider>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
