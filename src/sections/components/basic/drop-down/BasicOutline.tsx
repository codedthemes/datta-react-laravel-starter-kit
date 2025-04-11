import { Link } from 'react-router-dom';

// react-bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| DROP DOWN - BASIC OUTLINE ||============================== //

export default function BasicOutlineDropdown() {
  return (
    <MainCard title="Basic Outline Dropdown Button">
      <Dropdown>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <DropdownButton variant="outline-primary" title="Primary">
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
          <DropdownButton variant="outline-secondary" title="secondary">
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
          <DropdownButton variant="outline-success" title="success">
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
          <DropdownButton variant="outline-danger" title="danger">
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
          <DropdownButton variant="outline-warning" title="warning">
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
          <DropdownButton variant="outline-info" title="info">
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
