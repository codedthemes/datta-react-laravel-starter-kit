// react-bootstrap
import Image from 'react-bootstrap/Image';

// project-imports
import CustomCardFooter from './CustomCardFooter';
import SocialLinksList from './SocialLinksList';
import MainCard from '@/components/MainCard';

// assets
import avatar3 from '@assets/images/user/avatar-3.png';

// ==============================|| SOCIAL - SOCIAL LINK 2 ||============================== //

export default function SocialLink2({ userName }: { userName: string }) {
  return (
    <>
      <h6 className="text-center mb-3">Social link 2 on hover</h6>
      <MainCard className="user-card user-card-3 social-hover support-bar1" footerClassName="pt-0" footer={<CustomCardFooter />}>
        <div className="text-center">
          <Image className="wid-120" fluid roundedCircle src={avatar3} alt="User image" />
          <h4 className="mb-1 mt-3 f-w-500">{userName}</h4>
          <p className="mb-0 text-muted">UI/UX Designer</p>
          <SocialLinksList isInline={true} />
        </div>
      </MainCard>
    </>
  );
}
