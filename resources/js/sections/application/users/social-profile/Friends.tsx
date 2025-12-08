// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Stack from 'react-bootstrap/Stack';
import Tooltip from 'react-bootstrap/Tooltip';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import avatar1 from '@assets/images/user/avatar-1.png';
import avatar2 from '@assets/images/user/avatar-2.png';
import avatar3 from '@assets/images/user/avatar-3.png';
import avatar4 from '@assets/images/user/avatar-4.png';
import avatar5 from '@assets/images/user/avatar-5.png';

interface Friend {
  src: string;
  alt: string;
  title: string;
}

// user data
const friends: Friend[] = [
  { src: avatar1, alt: 'user image', title: 'Joseph William' },
  { src: avatar2, alt: 'user image', title: 'Sara Soudein' },
  { src: avatar3, alt: 'user image', title: 'John Doe' },
  { src: avatar4, alt: 'user image', title: 'Joseph William' },
  { src: avatar5, alt: 'user image', title: 'Sara Soudein' },
  { src: avatar1, alt: 'user image', title: 'Joseph William' },
  { src: avatar2, alt: 'user image', title: 'Sara Soudein' },
  { src: avatar3, alt: 'user image', title: 'John Doe' }
];

// =============================|| SOCIAL PROFILE - FRIENDS ||============================== //

export default function Friends() {
  return (
    <MainCard
      title={
        <Stack direction="horizontal" className="align-items-center justify-content-between">
          <h5 className="mb-0">Friends</h5>
          <Badge bg="light-primary">100+</Badge>
        </Stack>
      }
    >
      <ul className="list-inline mb-0">
        {friends.map((friend, index) => (
          <li key={index} className="list-inline-item">
            <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-${index}`}>{friend.title}</Tooltip>}>
              <a href="#!">
                <Image src={friend.src} alt={friend.alt} roundedCircle className="wid-50 hei-50" />
              </a>
            </OverlayTrigger>
          </li>
        ))}
      </ul>
    </MainCard>
  );
}
