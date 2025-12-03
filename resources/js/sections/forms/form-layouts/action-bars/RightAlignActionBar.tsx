// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// ===============================|| FOOTER - ACTION BAR ||============================== //

function FooterMain() {
  return (
    <Stack gap={2} direction="horizontal" className="justify-content-end">
      <Button type="submit" variant="primary">
        Submit
      </Button>
      <Button type="reset" variant="secondary">
        Clear
      </Button>
    </Stack>
  );
}

// ===============================|| PAGE - RIGHT ALIGN  ACTION BAR ||============================== //

export default function RightAlignActionBar() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <MainCard title="Right Align Action Bar" footer={<FooterMain />}>
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
