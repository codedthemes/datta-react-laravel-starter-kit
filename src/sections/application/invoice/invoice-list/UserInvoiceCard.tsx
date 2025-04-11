import React from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// project-imports
import MainCard from 'components/MainCard';

// assets
import avatar1 from 'assets/images/user/avatar-1.jpg';
import avatar2 from 'assets/images/user/avatar-2.jpg';
import avatar5 from 'assets/images/user/avatar-5.jpg';
import AccountBalanceWalletTwoTone from '@mui/icons-material/AccountBalanceWalletTwoTone';
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';
import CancelTwoTone from '@mui/icons-material/CancelTwoTone';
import CloudDownloadTwoTone from '@mui/icons-material/CloudDownloadTwoTone';
import CreditCardTwoTone from '@mui/icons-material/CreditCardTwoTone';
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';
import EditTwoTone from '@mui/icons-material/EditTwoTone';
import HourglassFullTwoTone from '@mui/icons-material/HourglassFullTwoTone';
import MoreVertTwoTone from '@mui/icons-material/MoreVertTwoTone';
import PrintTwoTone from '@mui/icons-material/PrintTwoTone';
import ReceiptTwoTone from '@mui/icons-material/ReceiptTwoTone';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';
import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone';

interface InvoiceData {
  id: number;
  name: string;
  avatar: string;
  due: string;
  amount: string;
  invoiceNo: string;
  issuedOn: string;
  method: string;
  description: string;
}

const invoices: InvoiceData[] = [
  {
    id: 1,
    name: 'John Doe',
    avatar: avatar2,
    due: '23 hours',
    amount: '$8,750',
    invoiceNo: '#0028',
    issuedOn: '2020/01/25',
    method: 'Phonepe',
    description: 'A collection of textile samples lay spread out on the table One morning...'
  },
  {
    id: 2,
    name: 'Joseph William',
    avatar: avatar5,
    due: '12 hours',
    amount: '$12,960',
    invoiceNo: '#0031',
    issuedOn: '2020/01/12',
    method: 'PayU',
    description: 'A collection textile of samples lay spread out One morning on the table...'
  },
  {
    id: 3,
    name: 'Ashoka T.',
    avatar: avatar1,
    due: '9 hours',
    amount: '$9,060',
    invoiceNo: '#0005',
    issuedOn: '2020/01/29',
    method: 'Paypal',
    description: 'A collection textile of samples lay spread out One morning on the table...'
  }
];

const invoice: InvoiceData[] = [
  ...invoices,
  ...invoices.map((invoice) => ({
    ...invoice,
    id: invoice.id + invoices.length
  }))
];

const InvoiceCard: React.FC<{ data: InvoiceData }> = ({ data }) => {
  return (
    <Col md={6} sm={12} className="mb-3">
      <MainCard
        headerClassName="py-3"
        bodyClassName="p-0"
        title={
          <Stack direction="horizontal" className="align-items-center justify-content-between">
            <Stack direction="horizontal" as="h5" className="align-items-center">
              <Image fluid className="img-radius wid-25 me-2" src={data.avatar} alt={data.name} />
              {data.name}
            </Stack>
            <Dropdown>
              <Dropdown.Toggle as="div" bsPrefix="false" variant="link" className="text-secondary p-0 border-0">
                <MoreVertTwoTone className="wid-20" />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item href="#">
                  <WarningTwoToneIcon className="wid-20" /> Pending
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <DoneAllTwoToneIcon className="wid-20" /> Paid
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item active href="#">
                  <HourglassFullTwoTone className="wid-20" /> On Hold
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <CancelTwoTone className="wid-20" /> Canceled
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Stack>
        }
      >
        <Card.Body className="py-3 border-bottom d-flex align-items-center justify-content-between">
          <p className="mb-0">
            <TimerTwoToneIcon className="text-danger wid-18" /> Due: {data.due}
          </p>
          <p className="mb-0 h4">
            <AccountBalanceWalletTwoTone className="text-info " /> {data.amount}
          </p>
        </Card.Body>
        <Card.Body>
          <Table borderless size="xs" className="w-auto">
            <tbody>
              <tr>
                <td className="pl-0 pb-0">
                  <ReceiptTwoTone className="text-info wid-18" /> Invoice no:
                </td>
                <td className="pb-0">{data.invoiceNo}</td>
              </tr>
              <tr>
                <td className="pl-0 pb-0">
                  <CalendarTodayTwoTone className="text-info wid-18" /> Issued on:
                </td>
                <td className="pb-0">{data.issuedOn}</td>
              </tr>
              <tr>
                <td className="pl-0 pb-0">
                  <CreditCardTwoTone className="text-info wid-18" /> Method:
                </td>
                <td className="pb-0">{data.method}</td>
              </tr>
            </tbody>
          </Table>
          <p className="m-0">{data.description}</p>
        </Card.Body>
        <Card.Footer className="bg-light py-3 border-bottom d-flex align-items-center justify-content-between">
          <Button className=" btn-light-success" size="sm">
            <i className="fas fa-eye me-1" />
            View
          </Button>
          <Dropdown>
            <Dropdown.Toggle className="btn-light-secondary" size="sm">
              Action
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item href="#">
                <PrintTwoTone className="wid-20" /> Print Invoice
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <CloudDownloadTwoTone className="wid-20" /> Download Invoice
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">
                <EditTwoTone className="wid-20" /> Edit Invoice
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <DeleteTwoTone className="wid-20" /> Remove Invoice
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Footer>
      </MainCard>
    </Col>
  );
};

// ==============================|| USER INVOICE CARD - INVOICE LIST ||============================== //

export default function UserInvoiceCard() {
  return (
    <Row>
      {invoice.map((invoice) => (
        <InvoiceCard key={invoice.id} data={invoice} />
      ))}
    </Row>
  );
}
