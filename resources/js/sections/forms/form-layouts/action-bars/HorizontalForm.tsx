// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// ===============================|| PAGE - HORIZONTAL FORM ||============================== //

export default function HorizontalFormPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <MainCard
      title="Horizontal Form"
      footerClassName="bg-light"
      footer={
        <Stack gap={2} direction="horizontal" className="justify-content-center">
          <Button type="submit" variant="primary">
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Clear
          </Button>
        </Stack>
      }
    >
      <Form noValidate onSubmit={handleSubmit}>
        {/* Name */}
        <Form.Group as={Row} className="mb-0" controlId="formName">
          <Form.Label column lg={4} className="col-form-label">
            Name
          </Form.Label>
          <Col lg={6}>
            <Form.Control type="text" placeholder="Enter your name" required />
            <Form.Text muted>Please enter your full name</Form.Text>
          </Col>
        </Form.Group>
      </Form>
    </MainCard>
  );
}
