// react-bootstrap
import Dropdown from 'react-bootstrap/Dropdown';

// dropdown item data
const dateFilters = [
  { label: 'Show all' },
  { divider: true },
  { label: 'Today' },
  { label: 'Yesterday' },
  { label: 'This week' },
  { label: 'This month' },
  { label: 'This year' }
];

const statusFilters = [
  { label: 'Show all' },
  { divider: true },
  { label: 'Pending' },
  { label: 'Paid' },
  { label: 'On Hold' },
  { label: 'Canceled' }
];

// =============================|| INVOICE LIST - FILTER DROPDOWN ||============================== //

export default function FilterDropdown() {
  return (
    <ul className="list-inline m-0">
      <li className="list-inline-item py-1">
        <Dropdown>
          <Dropdown.Toggle as="a" href="#" className="link-secondary p-0">
            <i className="ph ph-calendar-blank align-middle f-20 text-primary" /> By Date{' '}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {dateFilters.map((item, index) =>
              item.divider ? (
                <hr className="m-0 my-2" key={index} />
              ) : (
                <Dropdown.Item key={index} href="#!">
                  {item.label}
                </Dropdown.Item>
              )
            )}
          </Dropdown.Menu>
        </Dropdown>
      </li>{' '}
      <li className="list-inline-item py-1">
        <Dropdown>
          <Dropdown.Toggle as="a" href="#" className="link-secondary p-0">
            <i className="ph ph-flag-checkered align-middle f-20 text-primary me-1" />
            By Status{' '}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {statusFilters.map((item, index) =>
              item.divider ? (
                <hr className="m-0 my-2" key={index} />
              ) : (
                <Dropdown.Item key={index} href="#!">
                  {item.label}
                </Dropdown.Item>
              )
            )}
          </Dropdown.Menu>
        </Dropdown>
      </li>
    </ul>
  );
}
