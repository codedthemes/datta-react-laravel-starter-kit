import { Link } from 'react-router-dom';

// react-bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| DROP DOWN - DARK ||============================== //

export default function DarkDropdown() {
  return (
    <MainCard title="Dark dropdowns">
      <Dropdown>
        <Stack direction="horizontal" gap={1} className="flex-wrap">
          <DropdownButton menuVariant="dark" className="dropdown-menu-dark" title="Primary">
            <Dropdown.Item as={Link} to="#/#!">
              #!
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#/#!">
              Another #!
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#/#!">
              Something else
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton menuVariant="dark" variant="secondary" title="secondary">
            <Dropdown.Item as={Link} to="#/#!">
              #!
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#/#!">
              Another #!
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#/#!">
              Something else
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton menuVariant="dark" variant="success" title="success">
            <Dropdown.Item as={Link} to="#/#!">
              #!
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#/#!">
              Another #!
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#/#!">
              Something else
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton menuVariant="dark" variant="danger" title="danger">
            <Dropdown.Item as={Link} to="#/#!">
              #!
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#/#!">
              Another #!
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#/#!">
              Something else
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton menuVariant="dark" variant="warning" title="warning">
            <Dropdown.Item as={Link} to="#/#!">
              #!
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#/#!">
              Another #!
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#/#!">
              Something else
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton menuVariant="dark" variant="info" title="info">
            <Dropdown.Item as={Link} to="#/#!">
              #!
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#/#!">
              Another #!
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#/#!">
              Something else
            </Dropdown.Item>
          </DropdownButton>
        </Stack>
      </Dropdown>
    </MainCard>
  );
}
