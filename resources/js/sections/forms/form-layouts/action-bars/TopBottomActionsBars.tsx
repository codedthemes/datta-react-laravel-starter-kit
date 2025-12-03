// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// ===============================|| PAGE - TOP & BOTTOM ACTIONS BARS ||============================== //

export default function TopBottomActionsBarsPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <MainCard
      bodyClassName="p-0"
      title="Top & Bottom Actions Bars"
      footerClassName="bg-light"
      footer={
        <Stack gap={2} direction="horizontal" className="justify-content-center">
          <Button type="submit" variant="success">
            Submit
          </Button>
          <Button variant="secondary" type="reset">
            Clear
          </Button>
        </Stack>
      }
    >
      {/* Top Action Bar */}
      <Card.Body className="border-bottom">
        <Row className="align-items-center">
          <Col sm={6}>
            <strong>Top Actions:</strong>
          </Col>
          <Col sm={6} className="mt-0 mt-sm-0">
            <Stack gap={2} direction="horizontal" className="justify-content-sm-end">
              <Button type="submit" variant="success">
                Submit
              </Button>
              <Button variant="secondary" type="reset">
                Clear
              </Button>
            </Stack>
          </Col>
        </Row>
      </Card.Body>

      {/* Form Section */}
      <Card.Body>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-0" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
            <Form.Text muted>Please enter your full name</Form.Text>
          </Form.Group>
        </Form>
      </Card.Body>
    </MainCard>
  );
}
