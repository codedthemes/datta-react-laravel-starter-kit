import React from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// assets
import avatar1 from 'assets/images/user/avatar-1.jpg';
import avatar2 from 'assets/images/user/avatar-2.jpg';
import avatar5 from 'assets/images/user/avatar-5.jpg';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import CancelTwoTone from '@mui/icons-material/CancelTwoTone';
import CloudDownloadTwoTone from '@mui/icons-material/CloudDownloadTwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';
import EditTwoTone from '@mui/icons-material/EditTwoTone';
import HourglassFullTwoTone from '@mui/icons-material/HourglassFullTwoTone';
import MoreVertTwoTone from '@mui/icons-material/MoreVertTwoTone';
import PrintTwoTone from '@mui/icons-material/PrintTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import WarningTwoTone from '@mui/icons-material/WarningTwoTone';

interface InvoiceData {
  id: number;
  name: string;
  avatar: string;
  amount: string;
  invoiceNo: string;
  issuedOn: string;
  method: string;
}

const baseInvoices: InvoiceData[] = [
  { id: 1, name: 'John Doe', avatar: avatar2, amount: '$8,750', invoiceNo: '#0028', issuedOn: '2020/01/25', method: 'PhonePe' },
  { id: 2, name: 'Joseph William', avatar: avatar5, amount: '$12,960', invoiceNo: '#0031', issuedOn: '2020/01/12', method: 'PayU' },
  { id: 3, name: 'Ashoka T.', avatar: avatar1, amount: '$9,060', invoiceNo: '#0005', issuedOn: '2020/01/29', method: 'PayPal' }
];

const invoices: InvoiceData[] = Array(4).fill(baseInvoices).flat();

const dropdownItems = [
  { icon: <PrintTwoTone className="wid-20" />, label: 'Print Invoice' },
  { icon: <CloudDownloadTwoTone className="wid-20" />, label: 'Download Invoice' },
  { icon: <EditTwoTone className="wid-20" />, label: 'Edit Invoice' },
  { icon: <DeleteTwoTone className="wid-20" />, label: 'Remove Invoice' },
  { divider: true },
  { icon: <WarningTwoTone className="wid-20" />, label: 'Pending' },
  { icon: <DoneAllTwoToneIcon className="wid-20" />, label: 'Paid' },
  { icon: <HourglassFullTwoTone className="wid-20" />, label: 'On Hold' },
  { icon: <CancelTwoTone className="wid-20" />, label: 'Canceled' }
];

const InvoiceListItem: React.FC<{ data: InvoiceData }> = ({ data }) => {
  return (
    <Card.Body className="py-3 border-bottom">
      <Row className="justify-content-sm-between align-items-center">
        <Col sm={3}>
          <Stack direction="horizontal" gap={2} className="align-items-center">
            <Image src={data.avatar} className="img-radius wid-25" fluid />
            <h6 className="m-0">{data.name}</h6>
          </Stack>
        </Col>
        <Col sm={3}>
          <p className="h5 mb-0">
            <AccountBalanceWalletTwoToneIcon className="text-info me-2 wid-20" />
            {data.amount}
          </p>
        </Col>
        <Col sm={6} className="d-sm-flex justify-content-between align-items-center">
          <p className="mb-0">
            <ReceiptTwoToneIcon className="text-info wid-20" /> {data.invoiceNo}
          </p>
          <div>
            <p className="mb-0 d-inline-block">
              <CalendarTodayTwoToneIcon className="text-info wid-20" /> {data.issuedOn}
            </p>
            <p className="mb-0 d-inline-block ms-2">
              <CreditCardTwoToneIcon className="text-success wid-20" /> {data.method}
            </p>
            <Dropdown className="d-inline-block ms-2">
              <Dropdown.Toggle as="div" bsPrefix="false" variant="link" className="text-secondary p-0 border-0">
                <MoreVertTwoTone />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                {dropdownItems.map((item, index) =>
                  item.divider ? (
                    <Dropdown.Divider key={index} />
                  ) : (
                    <Dropdown.Item key={index} href="#">
                      {item.icon} {item.label}
                    </Dropdown.Item>
                  )
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </Card.Body>
  );
};

// =================||  INVOICE LIST - USER INVOICE LIST ||============================== //

export default function UserInvoiceList() {
  return (
    <Row>
      <Col xs={12}>
        <MainCard bodyClassName="p-0">
          {invoices.map((invoice) => (
            <InvoiceListItem key={invoice.id} data={invoice} />
          ))}
        </MainCard>
      </Col>
    </Row>
  );
}
