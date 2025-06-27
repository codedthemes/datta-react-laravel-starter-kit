// react-bootstrap
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

// chart-options
const chartOptions: ChartProps = {
  options: {
    chart: {
      type: 'area',
      height: 250,
      toolbar: {
        show: false
      }
    },
    colors: ['#f4c22b', '#4680ff'],
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
      strokeColors: ['#f4c22b', '#4680ff'],
      strokeWidth: 1,
      shape: 'circle',
      hover: {
        size: 4
      }
    },
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0
      }
    },
    grid: {
      show: false
    },
    xaxis: {
      tooltip: {
        enabled: false
      },
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
  },
  series: [
    {
      name: 'Revenue',
      data: [200, 320, 320, 275, 275, 400, 400, 300, 440, 320, 320, 275, 275, 400, 300, 440]
    },
    {
      name: 'Sales',
      data: [200, 250, 240, 300, 340, 320, 320, 400, 350, 250, 240, 300, 340, 320, 400, 350]
    }
  ]
};

// ===============================|| DASHBOARD - STATISTICS CHART ||============================== //

export default function StatisticsChart() {
  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between">
        <div>
          <h5 className="mb-1">Statistics</h5>
          <p className="text-muted mb-2">Revenue and Sales</p>
        </div>
        <Form.Select aria-label="Default select example" className="w-auto form-select-sm rounded-3">
          <option value="1">Today</option>
          <option value="2">Weekly</option>
          <option value="3">Monthly</option>
        </Form.Select>
      </Stack>
      <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="area" height={250} />
    </MainCard>
  );
}
