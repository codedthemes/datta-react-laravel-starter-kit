// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| TICKET - CREATE ||============================== //

export default function Create() {
  const initialValues = `<p>Hello...</p>`;
  return (
    <MainCard>
      <Row>
        <Col sm={6}>
          <div className="mb-3">
            <Form.Label>Customer</Form.Label>
            <Form.Select className="mb-3 ">
              <option>Default select</option>
            </Form.Select>
          </div>
        </Col>
        <Col sm={6}>
          <div className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select className="mb-3 ">
              <option>Default select</option>
            </Form.Select>
          </div>
        </Col>

        <div className="mb-3">
          <Form.Label>Subject</Form.Label> <Form.Control type="text" placeholder="Enter Subject" />
        </div>

        <div className="mb-3">
          <Form.Label>Description</Form.Label>
          <ReactQuill
            className="hei-150"
            value={initialValues}
            theme="snow"
            modules={{
              toolbar: {
                container: [[{ size: ['small', false, 'large', 'huge'] }], ['bold', 'italic', 'underline'], ['image', 'code']]
              }
            }}
          />
        </div>

        <div className="mt-5">
          <Form action="/file-upload" className="dropzone" id="my-awesome-dropzone">
            <p className="mb-0 p-t-30 p-b-30">Drop files here to upload</p>
          </Form>
          <Stack direction="horizontal" gap={2} className="justify-content-end mt-4 ">
            <Button type="submit" variant="outline-secondary">
              Clear
            </Button>
            <Button type="submit">Submit</Button>
          </Stack>
        </div>
      </Row>
    </MainCard>
  );
}
