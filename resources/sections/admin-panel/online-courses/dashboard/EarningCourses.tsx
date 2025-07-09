// react-bootstrap
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

// chart-options
const chartOptions: ChartProps = {
  chart: {
    toolbar: {
      show: false
    }
  },
  colors: ['#f4c22b', '#4680ff'],
  dataLabels: {
    enabled: false
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
    width: 3
  },
  grid: {
    strokeDashArray: 4
  },
  series: [
    {
      name: 'Last Month',
      data: [200, 320, 275, 400, 300, 440]
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

// ===============================|| DASHBOARD - EARNING COURSES ||============================== //

export default function EarningCourses() {
  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
        <h5 className="mb-1">Earning Courses</h5>
        <Form.Select aria-label="Default select example" className="w-auto form-select-sm rounded-3">
          <option value="1">Day</option>
          <option value="2">Month</option>
          <option value="3" defaultChecked>
            Year
          </option>
        </Form.Select>
      </Stack>
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="line" height={230} />
    </MainCard>
  );
}
