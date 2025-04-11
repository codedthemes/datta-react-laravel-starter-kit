// react-bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

// ===============================|| DASHBOARD - VISITOR CHART ||============================== //

export default function VisitorChart() {
  const chartOptions: ChartProps = {
    chart: {
      toolbar: {
        show: false
      }
    },
    colors: ['#1de9b6'],
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: 4
    },
    yaxis: {
      tickAmount: 3
    },
    states: {
      normal: {
        filter: {
          type: 'lighten',
          value: 0.5
        }
      },
      hover: {
        filter: {
          type: 'lighten',
          value: 0
        }
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: '50%'
      }
    },
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    series: [
      {
        data: [20, 15, 22, 25, 32, 50]
      }
    ]
  };

  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
        <h5 className="mb-1">Visitors</h5>
        <Dropdown>
          <Dropdown.Toggle bsPrefix="false" as="a" className="avatar avatar-s dropdown-toggle btn-link-secondary p-0 border-0 arrow-none">
            <i className="ti ti-dots-vertical f-18" />
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item href="#">Today</Dropdown.Item>
            <Dropdown.Item href="#">Weekly</Dropdown.Item>
            <Dropdown.Item href="#">Monthly</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" height={220} />
    </MainCard>
  );
}
