import { Link } from 'react-router-dom';

// react-bootstrap
import Dropdown from 'react-bootstrap/Dropdown';

// props
interface ChatRightHeaderProps {
  handleShowUserInfo: () => void;
  handleShowInfo: () => void;
}

const sortOptions = [
  { label: 'Name', to: '#' },
  { label: 'Date', to: '#' },
  { label: 'Rating', to: '#' },
  { label: 'Unread', to: '#' }
];

// =============================|| MESSAGE - CHAT RIGHT HEADER ||============================== //

export default function ChatRightHeader({ handleShowUserInfo, handleShowInfo }: ChatRightHeaderProps) {
  return (
    <ul className="list-inline ms-auto mb-0">
      <li className="list-inline-item">
        <a href="#" className="avatar avatar-s btn-link-secondary">
          <i className="ti ti-phone-call f-18" />
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#" className="avatar avatar-s btn-link-secondary">
          <i className="ti ti-video f-18" />
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#" className="d-xxl-none avatar avatar-s btn-link-secondary" onClick={handleShowUserInfo}>
          <i className="ti ti-info-circle f-18" />
        </a>
        <a href="#" className="d-none d-xxl-inline-flex avatar avatar-s btn-link-secondary" onClick={handleShowInfo}>
          <i className="ti ti-info-circle f-18" />
        </a>
      </li>
      <li className="list-inline-item">
        <Dropdown>
          <Dropdown.Toggle className="avatar avatar-s btn-link-secondary arrow-none">
            <i className="ti ti-dots f-18" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {sortOptions.map((item, index) => (
              <Dropdown.Item as={Link} to={item.to} key={index}>
                {item.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </li>
    </ul>
  );
}
