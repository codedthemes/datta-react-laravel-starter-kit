import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import { widgetData } from '@/data/invoice';
import MainCard from '@/components/MainCard';
import DashboardCard from '@/sections/admin-panel/invoice/dashboard/DashboardCard';
import Notification from '@/sections/admin-panel/invoice/dashboard/Notification';
import RecentInvoice from '@/sections/admin-panel/invoice/dashboard/RecentInvoice';
import TotalExpenses from '@/sections/admin-panel/invoice/dashboard/TotalExpenses';
import InvoiceCard from '@/sections/admin-panel/invoice/dashboard/InvoiceCard';
import { useState } from 'react';
import InvoiceIncomeAreaChart from '@/sections/admin-panel/invoice/dashboard/InvoiceIncomeAreaChart';

// ==============================|| ADMIN PANEL - INVOICE DASHBOARD ||============================== //

export default function InvoiceDashboardPage() {
  const [activeChart, setActiveChart] = useState<number>(0);
  const [series, setSeries] = useState([
    {
      name: 'TEAM A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 25]
    },
    {
      name: 'TEAM B',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 35]
    }
  ]);

  const handleSeries = (index: number) => {
    setActiveChart(index);
    switch (index) {
      case 1:
        setSeries([
          {
            name: 'TEAM A',
            type: 'column',
            data: [10, 15, 8, 12, 11, 7, 10, 13, 22, 10, 18, 4]
          },
          {
            name: 'TEAM B',
            type: 'line',
            data: [12, 18, 15, 17, 12, 10, 14, 16, 25, 17, 20, 8]
          }
        ]);
        break;
      case 2:
        setSeries([
          {
            name: 'TEAM A',
            type: 'column',
            data: [12, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 25]
          },
          {
            name: 'TEAM B',
            type: 'line',
            data: [17, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 35]
          }
        ]);
        break;
      case 3:
        setSeries([
          {
            name: 'TEAM A',
            type: 'column',
            data: [1, 2, 3, 5, 1, 0, 2, 0, 6, 1, 5, 3]
          },
          {
            name: 'TEAM B',
            type: 'line',
            data: [5, 3, 5, 6, 7, 0, 3, 1, 7, 3, 5, 4]
          }
        ]);
        break;
      case 0:
      default:
        setSeries([
          {
            name: 'TEAM A',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 25]
          },
          {
            name: 'TEAM B',
            type: 'line',
            data: [34, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 35]
          }
        ]);
    }
  };

  return (
    <AppLayout>
      <Head title="Dashboard" />
    <Row>
      <Col lg={9}>
        <MainCard bodyClassName="pb-0">
          <Row className="mb-0 g-3">
            {widgetData.map((data, index) => (
              <Col md={6} xxl={3} key={index}>
                <div className="cursor-pointer" onClick={() => handleSeries(index)}>
                  <InvoiceCard
                    name={data.title}
                    total={data.percentage}
                    isLoss={data.isLoss}
                    price={data.count}
                    invoice={data.invoice}
                    color={data.color}
                    active={index === activeChart}
                  />
                </div>
              </Col>
            ))}
            <Col sm={12}>
              <InvoiceIncomeAreaChart series={series} />
            </Col>
          </Row>
        </MainCard>
      </Col>
      <Col lg={3}>
        <DashboardCard />
      </Col>
      <Col xl={4} md={6}>
        <RecentInvoice />
      </Col>
      <Col xl={4} md={6}>
        <TotalExpenses />
      </Col>
      <Col xl={4} md={6}>
        <Notification />
      </Col>
    </Row>
    </AppLayout>
  );
}
