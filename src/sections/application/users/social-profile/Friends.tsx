// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Stack from 'react-bootstrap/Stack';
import Tooltip from 'react-bootstrap/Tooltip';

// project-imports
import MainCard from 'components/MainCard';

// assets
import avtar1 from 'assets/images/user/avatar-1.jpg';
import avtar2 from 'assets/images/user/avatar-2.jpg';
import avtar3 from 'assets/images/user/avatar-3.jpg';
import avtar4 from 'assets/images/user/avatar-4.jpg';
import avtar5 from 'assets/images/user/avatar-5.jpg';

interface Friend {
  src: string;
  alt: string;
  title: string;
}

const friends: Friend[] = [
  { src: avtar1, alt: 'user image', title: 'Joseph William' },
  { src: avtar2, alt: 'user image', title: 'Sara Soudein' },
  { src: avtar3, alt: 'user image', title: 'John Doe' },
  { src: avtar4, alt: 'user image', title: 'Joseph William' },
  { src: avtar5, alt: 'user image', title: 'Sara Soudein' },
  { src: avtar1, alt: 'user image', title: 'Joseph William' },
  { src: avtar2, alt: 'user image', title: 'Sara Soudein' },
  { src: avtar3, alt: 'user image', title: 'John Doe' }
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
      <ul className="list-inline">
        {friends.map((friend, index) => (
          <li key={index} className="list-inline-item">
            <OverlayTrigger placement="top" overlay={<Tooltip>{friend.title}</Tooltip>}>
              <a href="#!">
                <Image src={friend.src} alt={friend.alt} roundedCircle className="mb-2" style={{ width: '50px', height: '50px' }} />
              </a>
            </OverlayTrigger>
          </li>
        ))}
      </ul>
    </MainCard>
  );
}
