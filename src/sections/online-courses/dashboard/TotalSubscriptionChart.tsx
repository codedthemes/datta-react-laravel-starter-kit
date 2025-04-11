// react-bootstrap
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

// ===============================|| DASHBOARD - TOTAL SUBSCRIPTION CHART ||============================== //

export default function TotalSubscriptionChart() {
  const chartOptions: ChartProps = {
    chart: {
      type: 'line',
      height: 60,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#f44236'],
    stroke: {
      curve: 'straight',
      lineCap: 'round',
      width: 3
    },
    series: [
      {
        name: 'series1',
        data: [20, 10, 25, 18, 18, 10, 12]
      }
    ],
    yaxis: {
      min: 0,
      max: 30
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return '';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };
  return (
    <MainCard>
      <p className="text-muted mb-1">Total Subscription</p>
      <Stack direction="horizontal" className="align-items-center justify-content-between">
        <h4 className="mb-0">5,326</h4>
        <p className="d-inline-flex align-items-center gap-1 mb-0">
          -12.02% <i className="ti ti-arrow-down-right text-danger" />
        </p>
      </Stack>
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="line" height={60} />
    </MainCard>
  );
}
