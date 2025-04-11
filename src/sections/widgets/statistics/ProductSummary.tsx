// react-bootstrap
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| STATISTICS - PRODUCT SUMMARY ||============================== //

export default function ProductSummary() {
  const profit = 1935.26;
  const invoiced = 2356.42;
  const expenses = 4683.96;

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

  return (
    <>
      <Col md={6} xl={4}>
        <MainCard>
          <h5 className="m-b-30">Product Summary</h5>
          <Stack direction="horizontal" className="align-items-start summary-box mb-4">
            <div className="flex-shrink-0">
              <div className="photo-table">
                <h3 className="m-0 f-w-300">
                  ${profit} <i className="fas fa-caret-up text-success f-26 m-l-8" />
                </h3>
                <span>Profit</span>
              </div>
            </div>
            <div className="flex-grow-1 ms-3">
              <i className="card-icon ti ti-download float-end f-34" />
            </div>
          </Stack>

          <Stack direction="horizontal" className="align-items-start summary-box mb-4">
            <div className="flex-shrink-0">
              <div className="photo-table">
                <h3 className="m-0 f-w-300">
                  ${invoiced} <i className="fas fa-caret-up text-success f-26 m-l-8" />
                </h3>
                <span>Invoiced</span>
              </div>
            </div>
            <div className="flex-grow-1 ms-3">
              <i className="card-icon ti ti-download float-end f-34" />
            </div>
          </Stack>

          <Stack direction="horizontal" className="align-items-start summary-box mb-4">
            <div className="flex-shrink-0">
              <div className="photo-table">
                <h3 className="m-0 f-w-300">
                  ${expenses} <i className="fas fa-caret-down text-danger f-26 m-l-8" />
                </h3>
                <span>Expenses</span>
              </div>
            </div>
            <div className="flex-grow-1 ms-3">
              <i className="card-icon ti ti-download float-end f-34" />
            </div>
          </Stack>

          <div className="text-center">
            <Button className="text-uppercase">add friend</Button>
          </div>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard title="Statistical" className="statistial-visit" subheader="Status : live">
          <h3 className="f-w-300">4,445,701</h3>
          <span className="d-block">
            <i className="fas fa-map-marker-alt m-r-10" />
            256 Countries, 5667 Cites
          </span>

          <Stack direction="horizontal" className=" align-items-start mt-4">
            <div className="photo-table">
              <h6>Our Overseas visits</h6>
              <ProgressBar children={<ProgressBar now={60} className="bg-brand-color-1" />} />
            </div>
            <div className="flex-grow-1 ms-3">
              <Badge className=" bg-brand-color-1 text-white f-14 f-w-400 float-end">14%</Badge>
            </div>
          </Stack>

          <Stack direction="horizontal" className="align-items-start mt-4">
            <div className="photo-table">
              <h6>Our Overseas visits</h6>
              <ProgressBar children={<ProgressBar now={60} className="bg-brand-color-2" />} />
            </div>
            <div className="flex-grow-1 ms-3">
              <Badge className=" bg-brand-color-2 text-white f-14 f-w-400 float-end">14%</Badge>
            </div>
          </Stack>

          <Stack direction="horizontal" className=" align-items-start mt-4">
            <div className="flex-shrink-0">
              <div className="photo-table">
                <h6>Our Overseas visits</h6>
                <ProgressBar children={<ProgressBar now={60} />} />
              </div>
            </div>
            <div className="flex-grow-1 ms-3">
              <Badge className=" text-white f-14 f-w-400 float-end">14%</Badge>
            </div>
          </Stack>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard>
          <h5 className="m-b-30">Markets</h5>
          {markets.map((market, index) => (
            <Stack direction="horizontal" className="align-items-start justify-content-between mt-4" key={index}>
              <div className="flex-shrink-0">
                <div className="photo-table">
                  <h6 className="text-muted">
                    {market.name}/{market.currency}
                    <span className={market.percentageChange > 0 ? 'text-success' : 'text-danger'}>
                      {market.percentageChange > 0 ? `+${market.percentageChange}%` : `${market.percentageChange}%`}
                    </span>
                  </h6>
                  <h6>
                    {market.value} <span className="ms-2">{market.currency}</span>
                  </h6>
                </div>
              </div>

              <ReactApexChart
                options={generateChartOptions(index % 2 === 0 ? '#29B6F6' : '#F7746B')}
                series={[{ name: market.name, data: market.chartData }]}
                type="line"
                height={40}
                width={194}
              />
            </Stack>
          ))}
        </MainCard>
      </Col>
    </>
  );
}
