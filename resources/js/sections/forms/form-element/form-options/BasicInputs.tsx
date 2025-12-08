// react-bootstrap
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// ==============================|| FORM OPTIONS - BASIC INPUTS ||============================== //

export default function BasicInputs() {
  return (
    <MainCard title="Basic Inputs">
      <Alert>
        <Stack direction="horizontal">
          <i className="ti ti-info-circle h2 f-w-400 mb-0" />
          <div className="flex-grow-1 ms-3">Basic HTML form components with custom style.</div>
        </Stack>
      </Alert>

      <Form>
        {/* Email */}
        <Form.Group className="mb-3" controlId="basicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="email@company.com" />
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3" controlId="basicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text muted>Your password must be between 8 and 30 characters.</Form.Text>
        </Form.Group>

        {/* Select */}
        <Form.Group className="mb-3" controlId="basicSelect">
          <Form.Label>Select</Form.Label>
          <Form.Select>
            <option>Option 1</option>
            <option value="1">Option 2</option>
            <option value="2">Option 3</option>
          </Form.Select>
        </Form.Group>

        {/* Multi Select */}
        <Form.Group className="mb-3" controlId="basicMultiSelect">
          <Form.Label>Multi Select</Form.Label>
          <Form.Select multiple>
            <option>Option 1</option>
            <option value="1">Option 2</option>
            <option value="2">Option 3</option>
          </Form.Select>
          <Form.Text muted>Hold shift or press Ctrl (Cmd on Mac) to select multiple options.</Form.Text>
        </Form.Group>

        {/* Textarea */}
        <Form.Group className="mb-4" controlId="basicTextarea">
          <Form.Label>Textarea</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message..." />
        </Form.Group>

        {/* Buttons */}
        <Stack direction="horizontal" className="pt-4" gap={2}>
          <Button type="submit">Submit</Button>
          <Button type="reset" className="btn-link-danger">
            Reset
          </Button>
        </Stack>
      </Form>
    </MainCard>
  );
}
