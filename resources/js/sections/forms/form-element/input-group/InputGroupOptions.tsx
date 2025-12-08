import { useState } from 'react';

// react-bootstrap
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import CardFooter from 'react-bootstrap/CardFooter';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

// =============================|| INPUT GROUP - OPTIONS ||============================== //

export default function InputGroupOptions() {
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [radioChecked, setRadioChecked] = useState(true);

  const dropdownItems = [
    { label: 'Action' },
    { label: 'Another action' },
    { label: 'Something else here' },
    { divider: true },
    { label: 'Separated link' }
  ];

  const renderDropdown = (id: string) => (
    <DropdownButton variant="secondary" title="Dropdown" id={id}>
      {dropdownItems.map((item, idx) =>
        item.divider ? (
          <hr key={`divider-${idx}`} className="m-0 my-2" />
        ) : (
          <Dropdown.Item key={item.label} href="#">
            {item.label}
          </Dropdown.Item>
        )
      )}
    </DropdownButton>
  );

  return (
    <MainCard title="Input Group Options">
      <Alert variant="info">
        <Stack direction="horizontal">
          <i className="ti ti-info-circle h2 f-w-400 mb-0" />
          <div className="flex-grow-1 ms-3">Input Group with more options like Button, Button with Dropdown, Colors, Checkbox & Radio</div>
        </Stack>
      </Alert>

      {/* --- With Button --- */}
      <Form.Label>With Button</Form.Label>
      <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="btn-left-1">
          Button
        </Button>
        <Form.Control placeholder="Left Button" aria-describedby="btn-left-1" />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control placeholder="Right Button" aria-describedby="btn-right-1" />
        <Button variant="outline-secondary" id="btn-right-1">
          Button
        </Button>
      </InputGroup>

      <InputGroup className="mb-3">
        <Button variant="outline-secondary">Button</Button>
        <Form.Control placeholder="Left & Right Button" />
        <Button variant="outline-secondary">Button</Button>
      </InputGroup>

      <hr />

      {/* --- Button with Dropdown --- */}
      <Form.Label>Button with Dropdown</Form.Label>
      <InputGroup className="mb-3">
        {renderDropdown('dropdown-left')}
        <Form.Control placeholder="Left Dropdown" />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control placeholder="Right Dropdown" />
        {renderDropdown('dropdown-right')}
      </InputGroup>

      <hr />

      {/* --- Color Variants with Icons --- */}
      <Form.Label>Color variants with Icons</Form.Label>
      <InputGroup className="mb-3">
        <Button variant="outline-primary" id="btn-outline">
          <i className="ph ph-aperture me-1" />
          Outline color
        </Button>
        <Form.Control placeholder="Left Button" aria-describedby="btn-outline" />
      </InputGroup>

      <InputGroup className="mb-4">
        <Form.Control placeholder="Right Button" aria-describedby="btn-fill" />
        <Button variant="success" id="btn-fill">
          <i className="ph ph-cloud-arrow-down me-1" />
          Fill color
        </Button>
      </InputGroup>

      <hr />

      {/* --- Checkbox & Radio --- */}
      <Form.Label>Checkbox & Radio</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox checked={checkboxChecked} onChange={() => setCheckboxChecked((c) => !c)} aria-label="Checkbox for input" />
        <Form.Control placeholder="With checkbox" />
      </InputGroup>

      <InputGroup className="mb-4">
        <InputGroup.Radio checked={radioChecked} onChange={() => setRadioChecked((r) => !r)} aria-label="Radio for input" />
        <Form.Control placeholder="With radio" />
      </InputGroup>

      {/* --- Footer --- */}
      <CardFooter className="px-0 pb-0">
        <Stack direction="horizontal" gap={2}>
          <Button variant="primary">Submit</Button>
          <Button variant="outline-danger">Reset</Button>
        </Stack>
      </CardFooter>
    </MainCard>
  );
}
