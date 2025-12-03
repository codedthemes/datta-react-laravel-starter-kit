// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

interface Props {
  title: string;
  count: string;
  percentage?: number;
  isLoss?: boolean;
  bgColor?: string;
  children: any;
  invoice: number;
}

// ==============================|| INVOICE CARD ||============================== //

export default function InvoiceCard({ title, count, percentage, isLoss, children, bgColor, invoice }: Props) {
  return (
    <MainCard className="p-4 rounded border" bodyClassName="p-0">
      <Stack direction="horizontal" gap={2} className="align-items-center justify-content-between">
        <h6 className="mb-0 f-w-600">{title}</h6>
        <Stack direction="horizontal" gap={1} className="align-items-center">
          <i className={`${isLoss ? 'ti ti-caret-down-filled' : 'ti ti-caret-up-filled'} ${bgColor} `} />
          <p className="mb-0">{percentage}%</p>
        </Stack>
      </Stack>
      <Row className="g-2 align-items-center">
        <Col xs={6}>
          <h5 className="mb-2 mt-3">{count}</h5>
          <Stack direction="horizontal" className="align-items-center" gap={1}>
            <h5 className="mb-0">{invoice}</h5>
            <Stack direction="horizontal" className="align-items-center" gap={2}>
              <p className="mb-0 text-muted">invoices</p>
            </Stack>
          </Stack>
        </Col>
        <Col xs={6}>{children}</Col>
      </Row>
    </MainCard>
  );
}
