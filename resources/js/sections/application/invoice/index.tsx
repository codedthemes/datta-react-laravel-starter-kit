import { Ref, useRef } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';

// third party
import { useReactToPrint } from 'react-to-print';

// project-imports
import { ThemeMode, APP_DEFAULT_PATH } from '@/config';
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// assets
import DarkLogo from '@assets/images/logo-dark.svg';
import LightLogo from '@assets/images/logo-white.svg';

// table data
const tableData = [
  {
    title: 'Logo Design',
    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    quantity: 6,
    amount: '$200.00',
    total: '$1200.00'
  },
  {
    title: 'Logo Design',
    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    quantity: 7,
    amount: '$100.00',
    total: '$700.00'
  },
  {
    title: 'Logo Design',
    description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    quantity: 5,
    amount: '$150.00',
    total: '$750.00'
  }
];
// ==============================|| INVOICE - INVOICE ||============================== //

export default function InvoiceSection() {
  const { mode } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);
  const logo = resolvedTheme === ThemeMode.DARK ? LightLogo : DarkLogo;

  const contentRef: Ref<HTMLDivElement> = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <Row>
      <Col md={12}>
        <Stack direction="horizontal" className="justify-content-center">
          <MainCard className="w-100" bodyClassName="px-4" ref={contentRef}>
            <Row>
              <Col md={8} className="invoice-contact pt-0">
                <div className="invoice-box">
                  <Table borderless responsive className="invoice-table">
                    <tbody>
                      <tr>
                        <td>
                          <a href={APP_DEFAULT_PATH}>
                            <Image className="img-fluid" src={logo} alt="Datta able Logo" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Company name</td>
                      </tr>
                      <tr>
                        <td>
                          1065 Mandan Road, Columbia MO,
                          <br /> Missouri. (123)-65202
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a className="text-secondary" href="mailto:demo@gmail.com">
                            demo@gmail.com
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>+91 919-91-91-919</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>

            <Row className="invoice-info gy-4">
              <Col sm={4} className="invoice-client-info">
                <h6 className="mb-sm-3 mb-2">Client Information :</h6>
                <h6 className="m-0">Josephin Villa</h6>
                <p className="m-0">1065 Mandan Road, Columbia MO, Missouri. (123)-65202</p>
                <p className="m-0">(1234) - 567891</p>
                <p className="mb-0">
                  <a className="text-secondary" href="mailto:demo@gmail.com">
                    demo@gmail.com
                  </a>
                </p>
              </Col>
              <Col sm={4}>
                <h6 className="mb-sm-3 mb-2">Order Information :</h6>
                <Table borderless responsive className="invoice-table invoice-order mb-0">
                  <tbody>
                    <tr>
                      <th>Date :</th>
                      <td>November 14</td>
                    </tr>
                    <tr>
                      <th>Status :</th>
                      <td>
                        <span className="label label-warning">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Id :</th>
                      <td>#146859</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm={4}>
                <h6 className="mb-sm-3 mb-2">
                  Invoice Number <span>#125863478945</span>
                </h6>
                <h6 className="text-uppercase text-primary mb-0">
                  Total Due : <span>$950.00</span>
                </h6>
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <Table hover responsive className="invoice-detail-table border-bottom">
                  <thead>
                    <tr className="thead-default">
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Amount</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index}>
                        <td>
                          <h6>{row.title}</h6>
                          <p className="m-0">{row.description}</p>
                        </td>
                        <td>{row.quantity}</td>
                        <td>{row.amount}</td>
                        <td>{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Stack className="align-items-end">
              <div className="invoice-total">
                <Table responsive className="invoice-table">
                  <tbody>
                    <tr>
                      <th>Sub Total :</th>
                      <td>$4725.00</td>
                    </tr>
                    <tr>
                      <th>Taxes (10%) :</th>
                      <td>$57.00</td>
                    </tr>
                    <tr>
                      <th>Discount (5%) :</th>
                      <td>$45.00</td>
                    </tr>
                    <tr>
                      <td>
                        <hr />
                        <h5 className="text-primary  m-r-10">Total :</h5>
                      </td>
                      <td>
                        <hr />
                        <h5 className="text-primary">$4827.00</h5>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Stack>

            <Row>
              <Col sm={12}>
                <h6>Terms and Condition :</h6>
                <p className="mb-0">
                  lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor
                </p>
              </Col>
            </Row>
          </MainCard>
        </Stack>

        <Row className="text-center d-print-none">
          <Col sm={12} className="invoice-btn-group text-center mb-3">
            <Button variant="primary" className="m-2" onClick={() => reactToPrintFn()}>
              Print
            </Button>
            <Button variant="secondary" className="m-2">
              Cancel
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
