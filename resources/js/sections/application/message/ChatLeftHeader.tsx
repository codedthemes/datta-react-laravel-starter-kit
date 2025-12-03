// react-bootstrap
import Button from 'react-bootstrap/Button';

// project-imports
import UserAvatar from './UserAvatar';

// assets
import Avatar5 from '@assets/images/user/avatar-5.png';

// props
interface ChatLeftHeaderProps {
  open: boolean;
  setOpen: (val: boolean) => void;
  handleShowUserList: () => void;
}

// =============================|| MESSAGE - CHAT LEFT HEADER ||============================== //

export default function ChatLeftHeader({ open, setOpen, handleShowUserList }: ChatLeftHeaderProps) {
  return (
    <ul className="list-inline me-auto mb-0">
      <li className="list-inline-item">
        <Button className="d-xxl-none avatar avatar-s btn-link-secondary" onClick={handleShowUserList}>
          <i className="ti ti-menu-2 f-18" />
        </Button>
        <Button className="d-none d-xxl-inline-flex avatar avatar-s btn-link-secondary" onClick={() => setOpen(!open)}>
          <i className="ti ti-menu-2 f-18" />
        </Button>
      </li>
      <li className="list-inline-item">
        <UserAvatar
          userName="Alene"
          userRole="UI/UX Designer"
          userAvatar={Avatar5}
          status="active"
          userDetailsclass="d-none d-sm-inline-block"
        />
      </li>
    </ul>
  );
}
