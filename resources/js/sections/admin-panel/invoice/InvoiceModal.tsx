// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import { format } from 'date-fns';

// project-imports
import Loader from '@/components/Loader';
import useConfig from '@/hooks/useConfig';
import { useGetInvoiceMaster } from '@/api/invoice';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';
import { ThemeMode } from '@/config';

// assets
import DarkLogo from '@assets/images/logo-dark.svg';
import LightLogo from '@assets/images/logo-white.svg';

// ==============================|| INVOICE - PREVIEW ||============================== //

export default function InvoiceModal({ isOpen, setIsOpen, invoiceInfo, items }: any) {
  const { invoiceMasterLoading, invoiceMaster } = useGetInvoiceMaster();

  const { mode } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const logo = resolvedTheme === ThemeMode.DARK ? LightLogo : DarkLogo;

  function closeModal() {
    setIsOpen(false);
  }

  let date;
  let dueDate;
  try {
    date = format(new Date(invoiceInfo.date), 'dd/MM/yyyy');
    dueDate = format(new Date(invoiceInfo.due_date), 'dd/MM/yyyy');
  } catch (error) {
    console.log('error - ', error);
  }

  const subtotal = invoiceInfo?.invoice_detail?.reduce((prev: any, curr: any) => {
    if (curr.name.trim().length > 0) return prev + Number(curr.price * Math.floor(curr.qty));
    else return prev;
  }, 0);
  const taxRate = (invoiceInfo.tax * subtotal) / 100;
  const discountRate = (invoiceInfo.discount * subtotal) / 100;
  const total = subtotal - discountRate + taxRate;

  if (invoiceMasterLoading) {
    return <Loader />;
  }

  const badgeColor =
    invoiceInfo.status === 'Paid'
      ? 'light-success'
      : invoiceInfo.status === 'Cancelled'
        ? 'light-danger'
        : invoiceInfo.status === 'Unpaid'
          ? 'light-warning'
          : 'light-secondary';

  return (
    <Modal show={isOpen} onHide={closeModal} size="xl" centered scrollable>
      <Modal.Body className="p-4">
        <Stack direction="horizontal" className="align-items-center justify-content-between">
          <div>
            <Stack direction="horizontal" className="align-items-center mb-2">
              <Image src={logo} className="img-fluid brand-logo" />
              <Badge pill bg={badgeColor} className="ms-2">
                {invoiceInfo.status}
              </Badge>
            </Stack>
            <p className="mb-0">#{invoiceInfo.invoice_id}</p>
          </div>
          <div className="text-sm-end">
            <h6 className="f-w-600">
              Date : <span className="text-muted f-w-400">{date}</span>
            </h6>
            <h6>
              Due Date : <span className="text-muted f-w-400">{dueDate}</span>
            </h6>
          </div>
        </Stack>
        <Row className="py-4">
          <Col xl={6}>
            <div className="border rounded p-3 h-100">
              <Stack direction="horizontal" className="align-items-center justify-content-between mb-2">
                <h5 className="mb-0 f-w-600">From:</h5>
              </Stack>
              <h6 className="f-w-600">{invoiceInfo.cashierInfo.name}</h6>
              <p className="mb-0">{invoiceInfo?.cashierInfo?.address}</p>
              <p className="mb-0">{invoiceInfo?.cashierInfo?.phone}</p>
              <p className="mb-0">{invoiceInfo?.cashierInfo?.email}</p>
            </div>
          </Col>
          <Col xl={6}>
            <div className="border rounded p-3 h-100">
              <Stack direction="horizontal" className="align-items-center justify-content-between mb-2">
                <h5 className="mb-0 f-w-600">To:</h5>
              </Stack>
              <h6 className="f-w-600">{invoiceInfo?.customerInfo?.name}</h6>
              <p className="mb-0">{invoiceInfo?.customerInfo?.address}</p>
              <p className="mb-0">{invoiceInfo?.customerInfo?.phone}</p>
              <p className="mb-0">{invoiceInfo?.customerInfo?.email}</p>
            </div>
          </Col>
        </Row>
        <Row className="g-3">
          <Table responsive hover className="mb-0 border-bottom">
            <thead>
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>DESCRIPTION</th>
                <th className="text-end">QTY</th>
                <th className="text-end">PRICE</th>
                <th className="text-end">TOTAL AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{items.indexOf(item) + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td className="text-end">{item.qty}</td>
                  <td className="text-end">{`${invoiceMaster?.country?.prefix} ${Number(item.price).toFixed(2)}`}</td>
                  <td className="text-end">{`${invoiceMaster?.country?.prefix} ${Number(item.price * item.qty).toFixed(2)}`}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
        <Row className="p-20">
          <div className="d-flex justify-content-end">
            <Col md={4}>
              <Stack direction="vertical" gap={2}>
                <Stack direction="horizontal" className="justify-content-between align-items-center">
                  <p className="text-secondary mb-0 f-w-600">Subtotal:</p>
                  <h6 className="mb-0">{`${invoiceMaster?.country?.prefix} ${subtotal.toFixed(2)}`}</h6>
                </Stack>
                <Stack direction="horizontal" className="justify-content-between align-items-center">
                  <p className="text-secondary mb-0 f-w-600">Discount :</p>
                  <h6 className="mb-0 text-success"> {`${invoiceMaster?.country?.prefix} ${discountRate.toFixed(2)}`}</h6>
                </Stack>
                <Stack direction="horizontal" className="justify-content-between align-items-center">
                  <p className="text-secondary mb-0 f-w-600">Tax :</p>
                  <h6 className="mb-0"> {`${invoiceMaster?.country?.prefix} ${taxRate.toFixed(2)}`}</h6>
                </Stack>
                <Stack direction="horizontal" className="justify-content-between align-items-center">
                  <p className="text-secondary mb-0 f-w-600">Grand Total :</p>
                  <h6 className="mb-0"> {`${invoiceMaster?.country?.prefix} ${total % 1 === 0 ? total : total.toFixed(2)}`}</h6>
                </Stack>
              </Stack>
            </Col>
          </div>
        </Row>
        <Stack direction="horizontal" className="mt-4 justify-content-end">
          <Button color="secondary" onClick={closeModal}>
            Close
          </Button>
        </Stack>
      </Modal.Body>
    </Modal>
  );
}
