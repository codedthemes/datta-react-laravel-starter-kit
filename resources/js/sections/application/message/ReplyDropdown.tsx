import { Link } from 'react-router-dom';

// react-bootstrap
import Dropdown from 'react-bootstrap/Dropdown';

// =============================|| DATA ||============================== //

const replyDropdownItems = [
  { label: 'Reply', icon: 'ti ti-arrow-back-up', to: '#' },
  { label: 'Forward', icon: 'ti ti-arrow-forward-up', to: '#' },
  { label: 'Copy', icon: 'ti ti-copy', to: '#' },
  { label: 'Delete', icon: 'ti ti-trash', to: '#' }
];

// =============================|| MESSAGE - REPLY DROPDOWN ||============================== //

export default function ReplyDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="avatar avatar-xs btn-link-secondary dropdown-toggle arrow-none">
        <i className="ti ti-dots-vertical f-18" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {replyDropdownItems.map((item, index) => (
          <Dropdown.Item as={Link} to={item.to} key={index}>
            <i className={item.icon} /> {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
