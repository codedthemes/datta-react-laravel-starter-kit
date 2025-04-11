import { Link } from 'react-router-dom';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| DROP DOWN - FORMS ||============================== //

export default function FormsDropdown() {
  return (
    <MainCard title="Forms">
      <Dropdown>
        <DropdownButton title="Forms" variant="light-success">
          <Form className="px-4 py-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control id="exampleDropdownFormEmail1" type="email" placeholder="email@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" id="exampleDropdownFormPassword1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" id="exampleDropdownFormPassword1" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" id="dropdownCheck" />
            </Form.Group>
            <Stack direction="horizontal" gap={1} className="flex-wrap">
              <Button href="#" size="sm" type="submit">
                Sign in
              </Button>
              <Button href="#" variant="light" size="sm" type="submit">
                Reset
              </Button>
            </Stack>
          </Form>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="#">
            New around here? Sign up
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="#">
            Forgot password?
          </Dropdown.Item>
        </DropdownButton>
      </Dropdown>
    </MainCard>
  );
}
