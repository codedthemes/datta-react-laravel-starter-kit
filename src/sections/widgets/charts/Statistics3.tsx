// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| WIDGET - STATISTICS 3 ||============================== //

export default function Statistics3() {
  const chartOptions: ChartProps = {
    chart: {
      toolbar: {
        show: false
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: 26,
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },

    markers: {
      size: 6,
      hover: {
        size: 5
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },

    series: [
      {
        name: 'Market Days',
        data: [65, 105, 145, 105, 145, 185]
      },
      {
        name: 'Market Days2',
        data: [125, 80, 30, 70, 110, 150]
      },
      {
        name: 'Market Days ALL',
        data: [175, 190, 160, 190, 140, 100]
      }
    ],

    colors: ['#1DE9B6', '#10ADF5', '#FDDA08']
  };
  return (
    <MainCard title="Statistics">
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="line" height={350} />
    </MainCard>
  );
}
