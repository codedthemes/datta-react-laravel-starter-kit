// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// ===============================|| FOOTER - ACTION BUTTON WITH LINK ||============================== //

function CardFooter() {
  return (
    <Stack gap={2} direction="horizontal" className="justify-content-end">
      <Button type="submit" variant="primary">
        Submit
      </Button>
      <span className="text-muted">
        or{' '}
        <a href="#" className="ms-1 text-decoration-none">
          Clear
        </a>
      </span>
    </Stack>
  );
}

// ===============================|| PAGE - ACTION BUTTON WITH LINK ||============================== //

export default function ActionButtonWithLinkPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <MainCard title="Action Button with Link" footer={<CardFooter />}>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-0" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
          <Form.Text muted>Please enter your full name</Form.Text>
        </Form.Group>
      </Form>
    </MainCard>
  );
}
