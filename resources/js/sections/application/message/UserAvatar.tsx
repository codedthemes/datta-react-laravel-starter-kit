// react-bootstrap
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

interface UserAvatarProps {
  userName: string;
  userRole: string;
  userAvatar: string;
  status?: 'active' | 'away' | 'dnd'; // online status
  className?: string; // optional extra styling
  userDetailsclass?: string; // optional extra styling
}

const statusColorMap: Record<string, string> = {
  active: 'bg-success', // green
  away: 'bg-warning', // yellow/orange
  dnd: 'bg-danger' // red
};

// ==============================|| USER AVATAR ||============================== //

export default function UserAvatar({
  userName,
  userRole,
  userAvatar,
  status = 'active',
  className = '',
  userDetailsclass = ''
}: UserAvatarProps) {
  return (
    <Stack direction="horizontal" className={`align-items-center ${className}`}>
      <div className="chat-avatar position-relative">
        <Image className="rounded-circle img-fluid wid-40" src={userAvatar} alt="user image" />
        {status && <i className={`chat-badge ${statusColorMap[status]}`} />}
      </div>
      <div className={`flex-grow-1 mx-2 ${userDetailsclass}`}>
        <h6 className="mb-0">{userName}</h6>
        <span className="text-sm text-muted">{userRole}</span>
      </div>
    </Stack>
  );
}
