import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';

// project-imports
import UserInvoiceCard from 'sections/application/invoice/invoice-list/UserInvoiceCard';
import UserInvoiceList from 'sections/application/invoice/invoice-list/UserInvoiceList';
import UserStatus from 'sections/application/invoice/invoice-list/UserStatus';
import MainCard from 'components/MainCard';

// assets
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import EmojiFlagsTwoToneIcon from '@mui/icons-material/EmojiFlagsTwoTone';

// ==============================|| INVOICE LIST - INVOICE ||============================== //

export default function InvoiceListPage() {
  const [activeTab, setActiveTab] = useState('grid');
  return (
    <Row>
      <Col xl={3} lg={4}>
        <UserStatus />
      </Col>
      <Col xl={9} lg={8}>
        <MainCard bodyClassName="py-3">
          <Row className=" align-items-center">
            <Col md={8}>
              <ul className="list-inline m-0">
                <li className="list-inline-item py-1">
                  <Dropdown>
                    <Dropdown.Toggle as="a" href="#" className="link-secondary p-0">
                      <CalendarTodayTwoToneIcon className="wid-20 text-primary" /> By Date
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#!">Show all</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#!">Today</Dropdown.Item>
                      <Dropdown.Item href="#!">Yesterday</Dropdown.Item>
                      <Dropdown.Item href="#!">This week</Dropdown.Item>
                      <Dropdown.Item href="#!">This month</Dropdown.Item>
                      <Dropdown.Item href="#!">This year</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="list-inline-item py-1">
                  <Dropdown>
                    <Dropdown.Toggle as="a" className="link-secondary p-0">
                      <EmojiFlagsTwoToneIcon className="text-primary wid-20" />
                      By Status
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#!">Show all</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#!">Pending</Dropdown.Item>
                      <Dropdown.Item href="#!">Paid</Dropdown.Item>
                      <Dropdown.Item href="#!">On Hold</Dropdown.Item>
                      <Dropdown.Item href="#!">Canceled</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </Col>
            <Col md={4} className="text-md-end">
              <span className="me-2">View Mode:</span>
              <ButtonGroup size="sm" className="d-inline-flex">
                <Button
                  className={`btn-light-primary ${activeTab === 'grid' ? 'active' : ''}`}
                  id="grid-tab"
                  data-bs-toggle="tab"
                  href="#grid"
                  role="tab"
                  aria-controls="grid"
                  aria-selected={activeTab === 'grid'}
                  onClick={() => setActiveTab('grid')}
                >
                  <i className="fas fa-grip-horizontal" />
                </Button>
                <Button
                  variant="light-primary"
                  className={`${activeTab === 'list' ? 'active' : ''}`}
                  id="list-tab"
                  data-bs-toggle="tab"
                  href="#list"
                  role="tab"
                  aria-controls="list"
                  aria-selected={activeTab === 'list'}
                  onClick={() => setActiveTab('list')}
                >
                  <i className="fas fa-list-ul" />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </MainCard>
        <Col xl={12}>{activeTab === 'grid' ? <UserInvoiceCard /> : <UserInvoiceList />}</Col>
      </Col>
    </Row>
  );
}
