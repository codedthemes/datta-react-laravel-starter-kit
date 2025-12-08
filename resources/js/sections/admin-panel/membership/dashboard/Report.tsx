// react-bootstrap
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

interface Props {
  title: string;
  value: string;
  content: string;
  iconPrimary: string;
  bgColor: string;
}

// =============================|| REPORT CARD ||============================== //

export default function ReportCard({ title, value, content, iconPrimary, bgColor }: Props) {
  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center">
        <div className="flex-grow-1 me-3">
          <p className="mb-1 fw-medium text-muted">{title}</p>
          <h4 className="mb-1">{value}</h4>
          <p className="mb-0 text-sm">{content}</p>
        </div>

        <div className="flex-shrink-0">
          <div className={`avatar avatar-l ${bgColor} rounded-circle`}>
            <i className={`${iconPrimary} f-28`} />
          </div>
        </div>
      </Stack>
    </MainCard>
  );
}
