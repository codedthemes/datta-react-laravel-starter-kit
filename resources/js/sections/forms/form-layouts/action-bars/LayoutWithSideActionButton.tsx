// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// ===============================|| PAGE - LAYOUT WITH SIDE ACTION BUTTON ||============================== //

export default function LayoutWithSideActionButtonPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    // Add save logic here
  };

  const handleClear = () => {
    // Add clear/reset logic here
    console.log('Form cleared');
  };

  const handleDelete = () => {
    // Add delete logic here
    console.log('Item deleted');
  };

  return (
    <MainCard title="Layout with Side Action Button">
      <Form noValidate onSubmit={handleSubmit}>
        {/* Name Field */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
          <Form.Text muted>Please enter your full name</Form.Text>
        </Form.Group>

        <hr />

        {/* Action Buttons */}
        <Row className="align-items-center">
          {/* Left-aligned actions */}
          <Col lg={6}>
            <Stack direction="horizontal" gap={2}>
              <Button type="submit" variant="primary">
                Save
              </Button>
              <Button type="reset" variant="secondary" onClick={handleClear}>
                Clear
              </Button>
            </Stack>
          </Col>

          {/* Right-aligned action */}
          <Col lg={6} className="text-lg-end mt-2 mt-lg-0">
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      </Form>
    </MainCard>
  );
}
