import { Link } from 'react-router-dom';

// react-bootstrap
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| DROP DOWN - OFFSET & REFERENCE ||============================== //

export default function OffsetReference() {
  return (
    <MainCard title="Offset & Reference">
      <Dropdown className="me-1">
        <Dropdown.Toggle variant="secondary" id="dropdownMenuOffset">
          Offset
        </Dropdown.Toggle>
        <Dropdown.Menu
          popperConfig={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [10, 20]
                }
              }
            ]
          }}
        >
          <Dropdown.Item as={Link} to="#">
            Action
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="#">
            Another action
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="#">
            Something else
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={ButtonGroup} drop="down-centered">
        <DropdownButton variant="secondary" title="Reference" id="dropdownMenuReference">
          <Dropdown.Item as={Link} to="#">
            Action
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="#">
            Another action
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="#">
            Something else
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="#">
            Separated link
          </Dropdown.Item>
        </DropdownButton>
      </Dropdown>
    </MainCard>
  );
}
