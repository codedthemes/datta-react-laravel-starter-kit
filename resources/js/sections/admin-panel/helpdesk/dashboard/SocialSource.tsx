// react-bootstrap
import ProgressBar from 'react-bootstrap/ProgressBar';

// project-imports
import MainCard from '@/components/MainCard';

// types
import { SocialSourceCardProps } from 'types/helpdesk';

// ==============================|| SOCIAL SOURCE CARD ||============================== //

export default function SocialSourceCard({ title, progressData, color }: SocialSourceCardProps) {
  return (
    <MainCard title={title} className="social-res-card">
      {progressData.map((item, index) => (
        <div key={index}>
          <p className="m-b-10">{item.label}</p>
          <ProgressBar now={item.value} className="mb-4" variant={color} />
        </div>
      ))}
    </MainCard>
  );
}
