// react-bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

// chart-options
const chartOptions: ChartProps = {
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%'
      }
    }
  },
  labels: ['Total Signups', 'Active Student'],
  series: [76.7, 30],
  legend: {
    show: true,
    position: 'bottom'
  },
  fill: {
    opacity: [1, 0.5]
  },
  colors: ['#04a9f5', '#04a9f5']
};

// ===============================|| DASHBOARD - STUDENT STATES CHART ||============================== //

export default function StudentStatesChart() {
  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
        <h5 className="mb-1">Student States</h5>
        <Dropdown>
          <Dropdown.Toggle bsPrefix="false" className="avatar avatar-s btn-link-secondary p-0 border-0">
            <i className="ti ti-dots-vertical f-18" />
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item>Today</Dropdown.Item>
            <Dropdown.Item>Weekly</Dropdown.Item>
            <Dropdown.Item>Monthly</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="donut" height={250} />
    </MainCard>
  );
}
