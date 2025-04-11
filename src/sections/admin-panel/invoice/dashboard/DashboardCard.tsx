// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

// assets
import { DocumentText, ArchiveBook, DollarCircle, DocumentFilter, CloseCircle, ShoppingBag } from 'iconsax-react';

type IconVariant = 'Bold' | 'Bulk' | 'Linear' | 'Outline' | 'Broken' | 'TwoTone';

const cardData: { icon: React.ElementType; label: string; bg: string; variant: IconVariant }[] = [
  { icon: DocumentText, label: 'All Invoices', bg: 'bg-primary', variant: 'Bold' },
  { icon: ArchiveBook, label: 'Reports', bg: 'bg-info', variant: 'Bulk' },
  { icon: DollarCircle, label: 'Paid', bg: 'bg-success', variant: 'Bulk' },
  { icon: DocumentFilter, label: 'Pending', bg: 'bg-warning', variant: 'Bulk' },
  { icon: CloseCircle, label: 'Cancelled', bg: 'bg-danger', variant: 'Bulk' },
  { icon: ShoppingBag, label: 'Draft', bg: 'bg-primary', variant: 'Bulk' }
];

// ==============================|| ADMIN PANEL - DASHBOARD CARD ||============================== //

export default function DashboardCard() {
  return (
    <MainCard>
      <Row className="g-3 text-center">
        {cardData.map(({ icon: Icon, label, bg, variant }, index) => (
          <Col xs={6} key={index}>
            <MainCard className="mb-0" bodyClassName="py-4 px-2">
              <div className={`avatar ${bg} rounded-circle`}>
                <Icon className="text-white" variant={variant} />
              </div>
              <h6 className="mb-0 mt-3 text-muted">{label}</h6>
            </MainCard>
          </Col>
        ))}
      </Row>
    </MainCard>
  );
}
