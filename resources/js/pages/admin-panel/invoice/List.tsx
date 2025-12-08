import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InvoiceChart from '@/sections/admin-panel/invoice/list/InvoiceChart';

// project-imports
import ListTable from '@/sections/admin-panel/invoice/list/ListTable';
import InvoiceReceivableCard from '@/sections/admin-panel/invoice/list/ReceivablesCard';
import InvoiceCard from '@/sections/admin-panel/invoice/list/ListCard';

const widgetsData = [
  {
    title: 'Paid',
    price: '$7,825',
    percentage: 70.5,
    isLoss: false,
    invoice: 9,
    color: '#1de9b6',
    bgColor: 'text-success',
    chartData: [200, 600, 100, 400, 300, 400, 50]
  },
  {
    title: 'Unpaid',
    price: '$1,880',
    percentage: 27.4,
    isLoss: false,
    invoice: 6,
    color: '#f4c22b',
    bgColor: 'text-warning',
    chartData: [100, 550, 300, 350, 200, 100, 300]
  },
  {
    title: 'Overdue',
    price: '$3,507',
    percentage: 27.4,
    isLoss: true,
    invoice: 4,
    color: '#f44236',
    bgColor: 'text-danger',
    chartData: [100, 550, 200, 300, 100, 200, 300]
  }
];

// ==============================|| ADMIN PANEL - INVOICE LIST ||============================== //

export default function InvoiceListPage() {
  return (
    <AppLayout>
      <Head title="List" />
      <Row>
        <Col xxl={8}>
          <Row className="g-3 mb-3">
            {widgetsData.map((widget, index) => (
              <Col md={6} xxl={4} key={index}>
                <div className="cursor-pointer">
                  <InvoiceCard
                    title={widget.title}
                    count={widget.price}
                    bgColor={widget.bgColor}
                    percentage={widget.percentage}
                    isLoss={widget.isLoss}
                    invoice={widget.invoice}
                  >
                    <InvoiceChart color={widget.color} data={widget.chartData} />
                  </InvoiceCard>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xxl={4}>
          <InvoiceReceivableCard />
        </Col>
        <Col xs={12}>
          <ListTable />
        </Col>
      </Row>
    </AppLayout>
  );
}
