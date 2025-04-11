// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

const chartOptions: ChartProps = {
  chart: {
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#1de9b6'],
  fill: {
    opacity: 1,
    type: 'gradient',
    gradient: {
      shade: 'light',
      gradientToColors: ['#1dc4e9'],
      shadeIntensity: 0.5,
      type: 'vertical',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  markers: {
    size: 0,
    opacity: 0.9,
    color: '#1de9b6',
    strokeColor: '#fff',
    strokeWidth: 2,
    hover: {
      size: 7
    }
  },
  stroke: {
    width: 0
  },
  series: [
    {
      name: 'series1',
      data: [20, 25, 33, 28, 25, 35, 28]
    }
  ],
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return 'Visite :';
        }
      }
    },
    marker: {
      show: false
    }
  }
};

// =============================|| WIDGET - PHONE CALLS ||============================== //

export default function PhoneCalls() {
  return (
    <MainCard title="Phone Calls" bodyClassName="p-0">
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="area" height={320} />
    </MainCard>
  );
}
