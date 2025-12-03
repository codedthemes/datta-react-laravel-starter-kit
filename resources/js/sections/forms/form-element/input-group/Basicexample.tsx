// react-bootstrap
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import CardFooter from 'react-bootstrap/CardFooter';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// =============================|| FORM INPUT GROUP - BASIC EXAMPLE ||============================== //

export default function BasicExample() {
  const multipleAddons = [
    {
      id: 'multi-addon-1',
      items: [<InputGroup.Text key="1">$</InputGroup.Text>, <InputGroup.Text key="2">0.00</InputGroup.Text>],
      hasControl: false
    },
    {
      id: 'multi-addon-2',
      items: [<InputGroup.Text key="1">$</InputGroup.Text>, <InputGroup.Text key="2">0.00</InputGroup.Text>],
      hasControl: true
    }
  ];

  return (
    <MainCard title="Basic Example">
      <Alert variant="info">
        <Stack direction="horizontal">
          <i className="ti ti-info-circle h2 f-w-400 mb-0" />
          <div className="flex-grow-1 ms-3">
            Place one add-on or button on either side of an input. You may also place one on both sides of an input.
          </div>
        </Stack>
      </Alert>

      {/* Username */}
      <InputGroup className="mb-3">
        <InputGroup.Text id="username-addon">@</InputGroup.Text>
        <Form.Control placeholder="Username" aria-label="Username" aria-describedby="username-addon" />
      </InputGroup>

      {/* Recipient */}
      <InputGroup className="mb-3">
        <Form.Control placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="recipient-addon" />
        <InputGroup.Text id="recipient-addon">@example.com</InputGroup.Text>
      </InputGroup>

      {/* Vanity URL */}
      <Form.Label htmlFor="vanity-url">Your vanity URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="url-addon">https://example.com/users/</InputGroup.Text>
        <Form.Control id="vanity-url" aria-describedby="url-addon" />
      </InputGroup>

      {/* Amount */}
      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount" placeholder="Rate" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

      {/* Textarea */}
      <Form.Label htmlFor="with-textarea">With textarea</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" id="with-textarea" aria-label="With textarea" />
      </InputGroup>

      <hr />

      {/* Multiple Addons */}
      <Form.Label>Multiple Addons</Form.Label>
      {multipleAddons.map(({ id, items, hasControl }) => (
        <InputGroup className="mb-3" key={id}>
          {hasControl && <Form.Control aria-label="Dollar amount" />}
          {items}
          {!hasControl && <Form.Control aria-label="Dollar amount" />}
        </InputGroup>
      ))}

      {/* Multiple Inputs */}
      <Form.Label>Multiple Inputs</Form.Label>
      <InputGroup className="mb-4">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <Form.Control aria-label="First name" />
        <Form.Control aria-label="Last name" />
      </InputGroup>

      {/* Footer */}
      <CardFooter className="px-0 pb-0">
        <Stack direction="horizontal" gap={2}>
          <Button variant="primary">Submit</Button>
          <Button variant="outline-danger">Reset</Button>
        </Stack>
      </CardFooter>
    </MainCard>
  );
}
