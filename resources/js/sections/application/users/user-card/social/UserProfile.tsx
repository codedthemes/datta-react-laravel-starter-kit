// react-bootstrap
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

// assets
import slider5 from '@assets/images/widget/slider5.jpg';
import imgRound1 from '@assets/images/widget/img-round1.jpg';

// ==============================|| SOCIAL - USER PROFILE ||==============================

export default function UserProfile() {
  return (
    <>
      <h6 className="text-center mb-3">User profile</h6>
      <Card className="widget-profile-card-2 text-center">
        <Image src={slider5} alt="card-style-1" />
        <Card.Body>
          <Image className="user-img mb-3 mt-2" src={imgRound1} roundedCircle thumbnail fluid alt="Profile-user" />
          <Card.Title as="h4" className="f-20 text-dark f-w-500 mb-2">
            Jenny Joe
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Senior Web Designer</Card.Subtitle>
          <Card.Text>
            Passionate designer with 5+ years of experience creating intuitive digital experiences. Specialized in user research,
            prototyping, and design systems.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
