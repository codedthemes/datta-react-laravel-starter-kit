// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';

interface InvoiceMainCardProps {
  name: string;
  total: number;
  price: string;
  invoice: number;
  active?: boolean;
  isLoss?: boolean;
  color?: string;
}

// ==============================|| INVOICE CARD ||============================== //

export default function InvoiceCard({ name, total, price, invoice, active, isLoss, color }: InvoiceMainCardProps) {
  const { mode } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const bgColor = resolvedTheme === ThemeMode.DARK ? 'bg-gray-800' : 'bg-gray-300';

  return (
    <MainCard className={`${active ? bgColor : ''} p-3 rounded border`} bodyClassName="p-0">
      <Stack direction="horizontal" gap={2} className="align-items-center justify-content-between">
        <h6 className="mb-0 f-w-600">{name}</h6>
        <Stack direction="horizontal" gap={1} className="align-items-center">
          <i className={`${isLoss ? 'ti ti-caret-down-filled' : 'ti ti-caret-up-filled'} ${color} `} />
          <p className="mb-0">{total}%</p>
        </Stack>
      </Stack>
      <Row className="g-2 align-items-center">
        <Col xs={6}>
          <h5 className="mb-2 mt-3">{price}</h5>
          <Stack direction="horizontal" className="align-items-center" gap={1}>
            <h5 className="mb-0">{invoice}</h5>
            <Stack direction="horizontal" className="align-items-center" gap={2}>
              <p className="mb-0 text-muted">invoices</p>
            </Stack>
          </Stack>
        </Col>
      </Row>
    </MainCard>
  );
}
