// react-bootstrap
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

// ===============================|| DASHBOARD - COURSES CHART ||============================== //

export default function CoursesChart() {
  const chartOptions: ChartProps = {
    chart: {
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
        borderRadius: 3
      }
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['transparent']
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      show: true,
      fontFamily: `'Public Sans', sans-serif`,
      offsetX: 10,
      offsetY: 10,
      labels: {
        useSeriesColors: false
      },
      markers: {
        width: 10,
        height: 10,
        radius: '50%',
        offsexX: 2,
        offsexY: 2
      },
      itemMargin: {
        horizontal: 15,
        vertical: 5
      }
    },
    colors: ['#04a9f5', '#ffa21d'],
    series: [
      {
        name: 'Net Profit',
        data: [180, 90, 135, 114, 120, 145, 180, 90, 135, 114, 120, 145]
      },
      {
        name: 'Revenue',
        data: [120, 45, 78, 150, 168, 99, 120, 45, 78, 150, 168, 99]
      }
    ],
    grid: {
      borderColor: '#00000010'
    },
    yaxis: {
      show: false
    }
  };

  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between">
        <h5 className="mb-0">Courses</h5>
        <Button size="sm" variant="link-primary">
          View Report
        </Button>
      </Stack>
      <h4 className="mb-1">$7,860</h4>
      <p className="d-inline-flex align-items-center text-success gap-1 mb-0">
        <i className="ti ti-arrow-narrow-up" /> 2.1%
      </p>
      <p className="text-muted mb-1">Sales from 1-12 Dec, 2023</p>
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" height={210} />
    </MainCard>
  );
}
