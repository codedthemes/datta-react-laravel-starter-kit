import { ChangeEvent, useState } from 'react';

// react-bootstrap
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

type FormState = {
  text: string;
  number: number;
  tel: string;
  email: string;
  password: string;
  dateTime: string;
  date: string;
  time: string;
  month: string;
  week: string;
  color: string;
  range: number;
  search: string;
  url: string;
};

// =============================|| FORM OPTIONS - HTML INPUT TYPES ||============================== //

export default function HTMLInputTypes() {
  const [formData, setFormData] = useState<FormState>({
    text: 'John Doe',
    number: 100,
    tel: '+918888888888',
    email: 'demo@example.com',
    password: 'Password',
    dateTime: '2021-12-31T04:03:20',
    date: '2021-12-31',
    time: '04:03:20',
    month: '2021-12',
    week: '2021-W41',
    color: '#5052FC',
    range: 25,
    search: 'Best Admin Template',
    url: 'https://validator.w3.org/'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' || type === 'range' ? parseInt(value) || 0 : value
    }));
  };

  return (
    <MainCard title="HTML Input Types">
      <Alert>
        <Stack direction="horizontal">
          <i className="ti ti-info-circle h2 f-w-400 mb-0" />
          <div className="flex-grow-1 ms-3">
            Here are the different input types you can use in HTML. Check more at{' '}
            <a href="https://www.w3schools.com/html/html_form_input_types.asp" target="_blank" rel="noopener noreferrer">
              W3Schools
            </a>
          </div>
        </Stack>
      </Alert>

      {/* Text Inputs */}
      <Form.Group className="mb-3">
        <Form.Label>Simple Input Text</Form.Label>
        <Form.Control type="text" name="text" value={formData.text} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Number</Form.Label>
        <Form.Control type="number" name="number" value={formData.number} onChange={handleChange} min={0} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Telephone</Form.Label>
        <Form.Control type="tel" name="tel" value={formData.tel} onChange={handleChange} placeholder="+91 8888888888" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
      </Form.Group>

      {/* Files */}
      <Form.Group className="mb-3">
        <Form.Label>File</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Multi Files</Form.Label>
        <Form.Control type="file" multiple />
        <Form.Text>Try selecting more than one file when browsing.</Form.Text>
      </Form.Group>

      {/* Other Inputs */}
      <Form.Group className="mb-3">
        <Form.Label>URL</Form.Label>
        <Form.Control type="url" name="url" value={formData.url} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Search</Form.Label>
        <Form.Control type="search" name="search" value={formData.search} onChange={handleChange} />
        <Form.Text>A search field behaves like a regular text field</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date Time Local</Form.Label>
        <Form.Control type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date only</Form.Label>
        <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Time only</Form.Label>
        <Form.Control type="time" name="time" value={formData.time} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Month only</Form.Label>
        <Form.Control type="month" name="month" value={formData.month} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Week only</Form.Label>
        <Form.Control type="week" name="week" value={formData.week} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Color</Form.Label>
        <Form.Control type="color" name="color" value={formData.color} onChange={handleChange} className="w-100" />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Range</Form.Label>
        <Form.Range name="range" value={formData.range} min={0} max={50} onChange={handleChange} />
      </Form.Group>

      {/* Buttons */}
      <Stack direction="horizontal" gap={2} className="pt-4">
        <Button type="submit">Submit</Button>
        <Button variant="danger" type="reset">
          Cancel
        </Button>
      </Stack>
    </MainCard>
  );
}
