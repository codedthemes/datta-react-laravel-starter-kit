// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

const chartOptions: ChartProps = {
  series: [{ name: 'Market Days ', data: [10, 60, 45, 72, 45, 86] }],

  options: {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },

    stroke: {
      curve: 'straight',
      width: 6
    },
    markers: {
      size: 4,
      hover: {
        size: 5
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },

    tooltip: {
      x: {
        show: false
      },

      marker: {
        show: false
      }
    },

    yaxis: {
      labels: {
        show: false
      }
    },

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    colors: ['#44DADD']
  }
};

// =============================|| WIDGET - EARNINGS 1 ||============================== //

export default function Earnings1() {
  return (
    <MainCard title="Earnings" subheader={<p className="d-block">Mon 15 - Sun 21</p>}>
      <div className="earning-price mb-4">
        <h3 className="m-0 f-w-300">$ 894.39</h3>
        <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="line" height={210} />
      </div>
    </MainCard>
  );
}
