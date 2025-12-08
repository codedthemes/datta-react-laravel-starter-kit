// react-bootstrap
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// =============================|| FORM OPTIONS - INPUT ATTRIBUTES ||============================== //

export default function InputAttributes() {
  return (
    <MainCard title="Input Attributes">
      <Form>
        <Alert>
          <Stack direction="horizontal">
            <i className="ti ti-info-circle h2 f-w-400 mb-0" />
            <div className="flex-grow-1 ms-3">
              Examples of <code>autofocus, value, readonly, disabled, required</code> attributes in Input.
            </div>
          </Stack>
        </Alert>

        {/* Autofocus */}
        <Form.Group className="mb-3" controlId="autoFocusInput">
          <Form.Label>Auto focus</Form.Label>
          <Form.Control type="email" placeholder="Enter email" autoFocus />
          <Form.Text muted>autofocus on page load</Form.Text>
        </Form.Group>

        {/* Value */}
        <Form.Group className="mb-3" controlId="valueInput">
          <Form.Label>Value</Form.Label>
          <Form.Control type="text" value="John Doe" readOnly />
          <Form.Text muted>
            Demonstrates an input with a fixed <code>value</code>
          </Form.Text>
        </Form.Group>

        {/* Required */}
        <Form.Group className="mb-3" controlId="requiredInput">
          <Form.Label>Required</Form.Label>
          <Form.Control type="text" required />
          <Form.Text muted>Submit the form to see it in action</Form.Text>
        </Form.Group>

        {/* Readonly */}
        <Form.Group className="mb-3" controlId="readonlyInput">
          <Form.Label>Readonly</Form.Label>
          <Form.Control type="text" value="demo@email.com" readOnly />
          <Form.Text muted>
            The input <code>readonly</code> attribute specifies that an input field is read-only
          </Form.Text>
        </Form.Group>

        {/* Disabled */}
        <Form.Group className="mb-3" controlId="disabledInput">
          <Form.Label>Disabled</Form.Label>
          <Form.Control type="text" value="26" disabled />
          <Form.Text muted>
            The value of a <code>disabled</code> input field will not be sent when submitting the form
          </Form.Text>
        </Form.Group>

        {/* Disabled Select */}
        <Form.Group className="mb-4" controlId="disabledSelect">
          <Form.Label>Disabled select</Form.Label>
          <Form.Select disabled>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Form.Select>
        </Form.Group>

        {/* Buttons */}
        <Stack direction="horizontal" gap={2} className="pt-4">
          <Button type="submit">Submit</Button>
          <Button type="reset" className="btn-link-danger">
            Reset
          </Button>
        </Stack>
      </Form>
    </MainCard>
  );
}
