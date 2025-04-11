// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| STATISTICS - TODAY MONTHLY YEAR SALES ||============================== //

const chartOptions: ChartProps = {
  chart: {
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  yaxis: {
    show: false
  },
  xaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  }
};

const salesData = [
  {
    title: 'Miami, Florida',
    amount: '14,678',
    salesType: 'Today’s Sales',
    icon: 'fas fa-coins',
    chartData: [10, 20, 10, 27, 10, 20, 15, 24, 16, 20, 10, 18, 20, 10, 5],
    chartColor: '#29B6F6'
  },
  {
    title: 'Silje Larsen',
    amount: '15,678',
    salesType: 'Weekly Sales',
    icon: 'fab fa-bitcoin',
    chartData: [12, 22, 15, 29, 12, 24, 18, 26, 17, 22, 11, 21, 22, 12, 8],
    chartColor: '#3FECC1'
  },
  {
    title: 'Ida Jorgensen',
    amount: '50,853',
    salesType: 'Monthly Sales',
    icon: 'fas fa-database',
    chartData: [30, 50, 40, 60, 30, 50, 45, 60, 48, 52, 34, 50, 60, 45, 25],
    chartColor: '#F65E54'
  }
];

export default function TodayMonthlyYearSales() {
  return (
    <>
      {salesData.map((data, index) => (
        <Col md={index === 2 ? 12 : 6} xl={index === 2 ? 4 : 4} key={index}>
          <MainCard title={data.title} bodyClassName="sale-view">
            <h3>{data.amount}</h3>
            <h6 className="text-muted">USD</h6>
            <span className="text-muted">{data.salesType}</span>

            <Row className="align-items-center justify-between-center">
              <Col>
                <ReactApexChart
                  options={{
                    ...chartOptions,
                    colors: [data.chartColor]
                  }}
                  series={[{ name: 'Sales', data: data.chartData }]}
                  type="bar"
                  height={80}
                  width={100}
                />
              </Col>

              <Col xs="auto" className="text-end">
                <i className={`${data.icon} f-30 text-white bg-brand-color-1`} />
              </Col>
            </Row>
          </MainCard>
        </Col>
      ))}
    </>
  );
}
