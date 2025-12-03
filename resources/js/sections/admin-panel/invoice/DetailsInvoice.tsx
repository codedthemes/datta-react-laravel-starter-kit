import { useEffect, useState, useRef, Ref } from 'react';
import { router, usePage } from '@inertiajs/react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import { useReactToPrint } from 'react-to-print';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';
import { useGetInvoice, useGetInvoiceMaster } from '@/api/invoice';
import { ThemeMode } from '@/config';

// assets
import DarkLogo from '@assets/images/logo-dark.svg';
import LightLogo from '@assets/images/logo-white.svg';

// types
import { InvoiceList } from '@/types/invoice';

// ==============================|| INVOICE - DETAILS ||============================== //

export default function Details() {
 const { id } = usePage().props;

  const { mode } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const logo = resolvedTheme === ThemeMode.DARK ? LightLogo : DarkLogo;

  const { invoiceLoading, invoice } = useGetInvoice();
  const { invoiceMaster } = useGetInvoiceMaster();
  const [list, seList] = useState<InvoiceList | null>(null);

  useEffect(() => {
    if (id && !invoiceLoading) {
      seList(invoice.filter((item: InvoiceList) => item.id.toString() === id)[0] || invoice[0]);
    }
  }, [id, invoiceLoading]);

  const today = new Date(`${list?.date}`).toLocaleDateString('en-GB', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric'
  });

  const due_dates = new Date(`${list?.due_date}`).toLocaleDateString('en-GB', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric'
  });

  const subtotal = list?.invoice_detail?.reduce((prev: any, curr: any) => {
    if (curr.name.trim().length > 0) return prev + Number(curr.price * Math.floor(curr.qty));
    else return prev;
  }, 0);

  const taxRate = (Number(list?.tax) * subtotal) / 100;
  const discountRate = (Number(list?.discount) * subtotal) / 100;
  const total = subtotal - discountRate + taxRate;

  const contentRef: Ref<HTMLDivElement> = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const badgeColor =
    list?.status === 'Paid'
      ? 'light-success'
      : list?.status === 'Cancelled'
        ? 'light-danger'
        : list?.status === 'Unpaid'
          ? 'light-warning'
          : 'light-secondary';

  return (
    <>
      <MainCard bodyClassName="p-0">
        <Stack direction="vertical" gap={2}>
          <div className="p-20 pb-0">
            <MainCard bodyClassName="p-2 bg-light-secondary">
              <ul className="list-inline ms-auto mb-0 d-flex justify-content-end flex-wrap">
                <li className="list-inline-item align-bottom me-2">
                  <a
                    href="#!"
                    className="avatar avatar-s btn-link-secondary"
                    onClick={() => router.visit(`/admin-panel/invoice/edit/${list?.id}`)}
                  >
                    <i className="ph ph-pencil-simple-line  f-22"></i>
                  </a>
                </li>
                <li className="list-inline-item align-bottom me-2">
                  <a href="#!" className="avatar avatar-s btn-link-secondary">
                    <i className="ph ph-eye f-22"></i>
                  </a>
                </li>
                <li className="list-inline-item align-bottom me-2">
                  <a href="#!" className="avatar avatar-s btn-link-secondary">
                    <i className="ph ph-download-simple f-22"></i>
                  </a>
                </li>
                <li className="list-inline-item align-bottom me-2">
                  <a href="#!" className="avatar avatar-s btn-link-secondary" onClick={() => reactToPrintFn()}>
                    <i className="ph ph-printer f-22"></i>
                  </a>
                </li>
                <li className="list-inline-item align-bottom me-2">
                  <a href="#" className="avatar avatar-s btn-link-secondary">
                    <i className="ph ph-paper-plane-tilt f-22"></i>
                  </a>
                </li>
                <li className="list-inline-item align-bottom me-2">
                  <a href="#!" className="avatar avatar-s btn-link-secondary">
                    <i className="ph ph-share-network f-22"></i>
                  </a>
                </li>
              </ul>
            </MainCard>
          </div>
          <div className="p-20" ref={contentRef} id="print">
            <Row className="g-3 p-4">
              <Col xs={12}>
                <Row className="align-items-center g-3">
                  <Col sm={6}>
                    <Stack direction="horizontal" className="align-items-center mb-2">
                      <Image src={logo} className="img-fluid brand-logo" />
                      <Badge pill bg={badgeColor} className="ms-2">
                        {list?.status}
                      </Badge>
                    </Stack>
                    <p className="mb-0">{`#${list?.invoice_id}`}</p>
                  </Col>
                  <Col sm={6} className="text-sm-end">
                    <h6>
                      Date <span className="text-muted f-w-400">{today}</span>
                    </h6>
                    <h6>
                      Due Date <span className="text-muted f-w-400">{due_dates}</span>
                    </h6>
                  </Col>
                </Row>
              </Col>
              <Col sm={6}>
                <div className="border rounded p-3 h-100">
                  <h5 className=" f-w-600">From:</h5>

                  <p className="mb-0">{list?.cashierInfo.name}</p>
                  <p className="mb-0">{list?.cashierInfo.address}</p>
                  <p className="mb-0">{list?.cashierInfo.phone}</p>
                  <p className="mb-0">{list?.cashierInfo.email}</p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="border rounded p-3 h-100">
                  <h5 className=" f-w-600">To:</h5>

                  <p className="mb-0">{list?.customerInfo.name}</p>
                  <p className="mb-0">{list?.customerInfo.address}</p>
                  <p className="mb-0">{list?.customerInfo.phone}</p>
                  <p className="mb-0">{list?.customerInfo.email}</p>
                </div>
              </Col>
            </Row>
            <Row className="g-3">
              <Col xs={12}>
                <Table responsive hover className="mb-0 border-bottom border-top">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>NAME</th>
                      <th>DESCRIPTION</th>
                      <th className="text-end">QTY</th>
                      <th className="text-end">PRICE</th>
                      <th className="text-end">AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list?.invoice_detail?.map((row: any, index: number) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{row.name}</td>
                        <td>{row.description}</td>
                        <td className="text-end">{row.qty}</td>
                        <td className="text-end">{invoiceMaster?.country?.prefix + '' + Number(row.price).toFixed(2)}</td>
                        <td className="text-end"> {invoiceMaster?.country?.prefix + '' + Number(row.price * row.qty).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row className="p-20">
              <div className="d-flex justify-content-end">
                <Col md={4}>
                  <Stack direction="vertical" gap={2}>
                    <Stack direction="horizontal" className="justify-content-between align-items-center">
                      <p className="text-secondary mb-0 f-w-600">Subtotal:</p>
                      <h6 className="mb-0"> {invoiceMaster?.country?.prefix + '' + subtotal?.toFixed(2)}</h6>
                    </Stack>
                    <Stack direction="horizontal" className="justify-content-between align-items-center">
                      <p className="text-secondary mb-0 f-w-600">Discount :</p>
                      <h6 className="mb-0 text-success"> {invoiceMaster?.country?.prefix + '' + discountRate?.toFixed(2)}</h6>
                    </Stack>
                    <Stack direction="horizontal" className="justify-content-between align-items-center">
                      <p className="text-secondary mb-0 f-w-600">Tax :</p>
                      <h6 className="mb-0"> {invoiceMaster?.country?.prefix + '' + taxRate?.toFixed(2)}</h6>
                    </Stack>
                    <Stack direction="horizontal" className="justify-content-between align-items-center">
                      <p className="text-secondary mb-0 f-w-600">Grand Total :</p>
                      <h6 className="mb-0">
                        {' '}
                        {total % 1 === 0
                          ? invoiceMaster?.country?.prefix + '' + total
                          : invoiceMaster?.country?.prefix + '' + total?.toFixed(2)}
                      </h6>
                    </Stack>
                  </Stack>
                </Col>
              </div>
            </Row>
            <Row>
              <Col xs={12}>
                <Form.Label htmlFor="basic-url">Note</Form.Label>
                <p className="mb-0">
                  It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank
                  You!
                </p>
              </Col>
              <Col xs={12} className="text-end d-print-none">
                <Button className="btn-print-invoice" variant="secondary">
                  Download
                </Button>
              </Col>
            </Row>
          </div>
        </Stack>
      </MainCard>
    </>
  );
}
