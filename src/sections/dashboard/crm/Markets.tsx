// react-bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

const generateChartOptions = (color: string): ChartProps => ({
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
  },
  colors: [color]
});

// ==============================|| CRM - MARKETS ||============================== //

export default function ProductSummary() {
  const markets = [
    {
      name: 'Dash',
      percentageChange: 2.56,
      value: '1,0452',
      currency: 'USD',
      chartData: [85, 65, 140, 110, 180]
    },
    {
      name: 'ETH',
      percentageChange: -0.87,
      value: '0,0157',
      currency: 'USD',
      chartData: [180, 110, 140, 65, 85]
    },
    {
      name: 'ZEC',
      percentageChange: 1.56,
      value: '2,0764',
      currency: 'USD',
      chartData: [85, 65, 140, 110, 180]
    },
    {
      name: 'BTC',
      percentageChange: 2.56,
      value: '1,0452 ',
      currency: 'USD',
      chartData: [180, 110, 140, 65, 85]
    }
  ];

  return (
    <>
      <MainCard>
        <h5 className="m-b-30">Markets</h5>
        {markets.map((market, index) => (
          <Stack direction="horizontal" className="align-items-start justify-content-between mt-4" key={index}>
            <div className="flex-shrink-0 ">
              <h6 className="text-muted ">
                {market.name}/{market.currency}
                <span className={market.percentageChange > 0 ? 'text-success' : 'text-danger'}>
                  {market.percentageChange > 0 ? `+${market.percentageChange}%` : `${market.percentageChange}%`}
                </span>
              </h6>
              <h6>
                {market.value} <span className="ms-2">{market.currency}</span>
              </h6>
            </div>

            <ReactApexChart
              options={generateChartOptions(index % 2 === 0 ? '#29B6F6' : '#F7746B')}
              series={[{ name: market.name, data: market.chartData }]}
              type="line"
              height={40}
              width={100}
            />
          </Stack>
        ))}
      </MainCard>

      <MainCard>
        <h5 className="text-center">Total Leads</h5>
        <Row className="align-items-center justify-content-center">
          <Col xs="auto">
            <h3 className="f-w-300 m-t-20">
              $59,48
              <i className="fas fa-caret-up text-success f-26 m-l-10" />
            </h3>
            <span>EARNINGS</span>
          </Col>

          <Col className="text-end">
            <i className="fas fa-chart-pie f-30 text-info" />
          </Col>
        </Row>

        <div className="leads-progress mt-3">
          <h6 className="mb-3 text-center">
            Organic <span className="ms-4">Purchesed</span>
          </h6>
          <ProgressBar>
            <ProgressBar className="bg-brand-color-2" now={30} />
            <ProgressBar className="bg-brand-color-1" now={35} />
          </ProgressBar>

          <h6 className="text-muted f-w-300 mt-4">
            Organic Leads
            <span className="float-end">340</span>
          </h6>
          <h6 className="text-muted f-w-300 mt-4">
            Purchesed Leads <span className="float-end">150</span>
          </h6>
          <h6 className="text-muted f-w-300 mt-4">
            Blocked Leads <span className="float-end">120</span>
          </h6>
          <h6 className="text-muted f-w-300 mt-4 mb-0">
            Buy Leads <span className="float-end">245</span>
          </h6>
        </div>
      </MainCard>
    </>
  );
}
