// react-bootstrap
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// =============================|| FORM OPTIONS - ADVANCE INPUT ATTRIBUTES ||============================== //

export default function AdvanceInputAttributes() {
  return (
    <MainCard title="Advance Input Attributes">
      <Form>
        <Alert>
          <Stack direction="horizontal">
            <i className="ti ti-info-circle h2 f-w-400 mb-0" />
            <div className="flex-grow-1 ms-3">
              Examples of <code>maxlength, min, max, step, pattern, list</code> attributes of Input. <br />
              Submit form for checkout attribute functionality.
            </div>
          </Stack>
        </Alert>

        <div className="mb-3">
          <Form.Label>Max Length</Form.Label>
          <Form.Control type="text" placeholder="Enter PIN" maxLength={4} />
          <small>maxlength set to 4 characters</small>
        </div>

        <div className="mb-3">
          <Form.Label>Date (Before 1980)</Form.Label>
          <Form.Control type="date" max="1979-12-31" />
          <small>Enter a date before 1980-01-01</small>
        </div>

        <div className="mb-3">
          <Form.Label>Date (After 2000)</Form.Label>
          <Form.Control type="date" min="2000-01-02" />
          <small>Enter a date after 2000-01-01</small>
        </div>

        <div className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" min={1} max={5} />
          <small>Allowed values between 1 and 5</small>
        </div>

        <div className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" step={3} defaultValue={1} />
          <small>step set to 3</small>
        </div>

        <div className="mb-3">
          <Form.Label>Country code</Form.Label>
          <Form.Control type="text" pattern="[A-Za-z]{3}" placeholder="e.g. IND" />
          <small>
            <code>pattern</code> attribute - three letter country code (e.g., IND, USA)
          </small>
        </div>

        <div className="mb-3">
          <Form.Label>List (Browsers)</Form.Label>
          <Form.Control type="text" list="browsers" placeholder="Choose a browser" />
          <datalist id="browsers">
            <option value="Chrome" />
            <option value="Firefox" />
            <option value="Safari" />
            <option value="Edge" />
            <option value="Opera" />
          </datalist>
          <small>The datalist tag is not supported in Safari 12.0 (or earlier).</small>
        </div>

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
