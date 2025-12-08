// react-bootstrap
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// ==============================|| FORM OPTIONS - SIZING ||============================== //

export default function Sizing() {
  return (
    <MainCard title="Sizing">
      <Alert>
        <Stack direction="horizontal">
          <i className="ti ti-info-circle h2 f-w-400 mb-0" />
          <div className="flex-grow-1 ms-3">
            Input sizing using <code>.form-control-lg</code> and <code>.form-control-sm</code> class.
          </div>
        </Stack>
      </Alert>

      {/* Small Input */}
      <Form.Group className="mb-3" controlId="smallInput">
        <Form.Control size="sm" type="text" placeholder=".form-control-sm" />
        <Form.Text muted>
          <code>.form-control-sm</code>
        </Form.Text>
      </Form.Group>

      {/* Default Input */}
      <Form.Group className="mb-3" controlId="defaultInput">
        <Form.Control type="text" placeholder="Default Input" />
        <Form.Text muted>
          <code>.form-control</code>
        </Form.Text>
      </Form.Group>

      {/* Large Input */}
      <Form.Group className="mb-3" controlId="largeInput">
        <Form.Control size="lg" type="text" placeholder=".form-control-lg" />
        <Form.Text muted>
          <code>.form-control-lg</code>
        </Form.Text>
      </Form.Group>

      <hr />

      {/* Large Select */}
      <Form.Group className="mb-3" controlId="largeSelect">
        <Form.Label>Large select</Form.Label>
        <Form.Select size="lg">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Form.Select>
      </Form.Group>

      {/* Default Select */}
      <Form.Group className="mb-3" controlId="defaultSelect">
        <Form.Label>Default select</Form.Label>
        <Form.Select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Form.Select>
      </Form.Group>

      {/* Small Select */}
      <Form.Group className="mb-4" controlId="smallSelect">
        <Form.Label>Small select</Form.Label>
        <Form.Select size="sm">
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
    </MainCard>
  );
}
