// react-bootstrap
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Image1 from 'assets/images/user/avatar-1.jpg';
import Image2 from 'assets/images/user/avatar-2.jpg';
import Image3 from 'assets/images/user/avatar-3.jpg';

// ==============================|| WIDGETS DATA - PROJECT DESIGN SPRINT ||============================== //

export default function WidgetsDataProjectDesign() {
  return (
    <MainCard
      title={<span className="text-white">"Project Design Sprint"</span>}
      subheader={<span className="text-white fs-6">"11 MAY 10:35"</span>}
      className="Design-sprint bg-brand-color-2"
    >
      <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <ul className="design-image">
        <li>
          <Button className="btn-icon" variant="light">
            <i className="fas fa-plus f-14 me-0" />
          </Button>
        </li>
        <li>
          <Image className="rounded-circle" src={Image1} width={40} />
        </li>
        <li>
          <Image className="rounded-circle" src={Image2} width={40} />
        </li>
        <li>
          <Image className="rounded-circle" src={Image3} width={40} />
        </li>
        <li className="text-white">+63</li>
      </ul>
    </MainCard>
  );
}
