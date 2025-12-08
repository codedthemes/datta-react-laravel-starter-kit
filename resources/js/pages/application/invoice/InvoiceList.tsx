import { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import FilterDropdown from '@/sections/application/invoice/invoice-list/FilterDropdown';
import UserInvoiceCard from '@/sections/application/invoice/invoice-list/UserInvoiceCard';
import UserInvoiceList from '@/sections/application/invoice/invoice-list/UserInvoiceList';
import UserStatus from '@/sections/application/invoice/invoice-list/UserStatus';
import MainCard from '@/components/MainCard';

// ==============================|| INVOICE LIST - INVOICE ||============================== //

export default function InvoiceListPage() {
  const [activeTab, setActiveTab] = useState('grid');
  return (
    <AppLayout>
      <Head title="Invoice list" />
      <Row>
        <Col xl={3} lg={4}>
          <UserStatus />
        </Col>
        <Col xl={9} lg={8}>
          <MainCard bodyClassName="py-3">
            <Row className=" align-items-center">
              <Col md={8}>
                <FilterDropdown />
              </Col>
              <Col md={4} className="text-md-end">
                <span className="m-r-15">View Mode:</span>{' '}
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
                    <i className="ti ti-layout-grid-filled align-baseline" />
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
                    <i className="ti ti-layout-list-filled align-baseline" />
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </MainCard>
          <Col xl={12}>{activeTab === 'grid' ? <UserInvoiceCard /> : <UserInvoiceList />}</Col>
        </Col>
      </Row>
    </AppLayout>
  )
}
