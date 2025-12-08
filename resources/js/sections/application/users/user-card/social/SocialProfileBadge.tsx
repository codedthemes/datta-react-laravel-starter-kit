// react-bootstrap
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// project-imports
import CustomCardFooter from './CustomCardFooter';
import MainCard from '@/components/MainCard';

// assets
import avatar3 from '@assets/images/user/avatar-3.png';

// ==============================|| SOCIAL - SOCIAL PROFILE BADGE ||============================== //

export default function SocialProfileBadge() {
  return (
    <>
      <h6 className="text-center mb-3">Badge</h6>
      <MainCard className="user-card user-card-3 support-bar1" footerClassName="p-0" footer={<CustomCardFooter />}>
        <div className="text-center">
          <div className="position-relative d-inline-block">
            <Image className="wid-120" fluid roundedCircle src={avatar3} alt="User image" />
            <div className="certificated-badge">
              <OverlayTrigger placement="top" overlay={<Tooltip id="certificate-tooltip">Certificated</Tooltip>}>
                <i className="ti ti-rosette-discount-check-filled text-primary bg-icon" />
              </OverlayTrigger>
            </div>
          </div>
          <h4 className="mb-1 mt-3 f-w-500">Joseph William</h4>
          <p className="mb-0 text-muted">UI/UX Designer</p>
        </div>
      </MainCard>
    </>
  );
}
