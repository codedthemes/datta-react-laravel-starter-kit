// react-bootstrap
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

// ===============================|| DASHBOARD - ACTIVITY CHART ||============================== //

export default function ActivityChart() {
  const chartOptions: ChartProps = {
    chart: {
      type: 'line',
      height: 300,
      toolbar: {
        show: false
      }
    },
    colors: ['#1de9b6', '#4680ff'],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: true,
      position: 'top'
    },
    markers: {
      size: 1,
      colors: ['#fff', '#fff', '#fff'],
      strokeColors: ['#1de9b6', '#4680ff'],
      strokeWidth: 1,
      shape: 'circle',
      hover: {
        size: 4
      }
    },
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    grid: {
      strokeDashArray: 4
    },
    series: [
      {
        name: 'Free Course',
        data: [20, 90, 65, 85, 20, 80, 30]
      },
      {
        name: 'Subscription',
        data: [70, 30, 40, 15, 60, 40, 95]
      }
    ],
    xaxis: {
      labels: {
        hideOverlappingLabels: true
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    }
  };

  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between">
        <h5 className="mb-1">Activity</h5>
        <Form.Select aria-label="Default select example" className="w-auto form-select-sm rounded-3">
          <option value="1">Today</option>
          <option value="2" defaultChecked>
            Weekly
          </option>
          <option value="3">Monthly</option>
        </Form.Select>
      </Stack>
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="line" height={300} />
    </MainCard>
  );
}
