import { Link } from 'react-router-dom';

// react-bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| DROP DOWN - BASIC ||============================== //

export default function BasicDropdown() {
  return (
    <MainCard title="Basic Dropdown Button">
      <Dropdown>
        <Stack direction="horizontal" gap={1} className="flex-wrap">
          <DropdownButton title="Primary">
            <Dropdown.Item as={Link} to="#!">
              Action
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#!">
              Another action
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#!">
              Something else
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton variant="secondary" title="secondary">
            <Dropdown.Item as={Link} to="#!">
              Action
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#!">
              Another action
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#!">
              Something else
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton variant="success" title="success">
            <Dropdown.Item as={Link} to="#!">
              Action
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#!">
              Another action
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#!">
              Something else
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton variant="danger" title="danger">
            <Dropdown.Item as={Link} to="#!">
              Action
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#!">
              Another action
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#!">
              Something else
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton variant="warning" title="warning">
            <Dropdown.Item as={Link} to="#!">
              Action
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#!">
              Another action
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#!">
              Something else
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton variant="info" title="info">
            <Dropdown.Item as={Link} to="#!">
              Action
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#!">
              Another action
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#!">
              Something else
            </Dropdown.Item>
          </DropdownButton>
        </Stack>
      </Dropdown>
    </MainCard>
  );
}
