// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

const chartOptions: ChartProps = {
  chart: {
    toolbar: {
      show: false
    }
  },
  series: [
    {
      name: 'Net Profit',
      data: [20, 40, 20, 45]
    },
    {
      name: 'Revenue',
      data: [40, 70, 30, 60]
    },
    {
      name: 'Free Cash Flow',
      data: [30, 50, 40, 40]
    }
  ],
  colors: ['#1de9b6', '#a389d4', '#04a9f5'],
  fill: {
    type: 'gradient',
    opacity: 1,
    gradient: {
      shade: 'dark',
      type: 'vertical',
      gradientToColors: ['#1dc4e9', '#899ed4', '#049df5'],
      stops: [0, 100]
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '45%'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['2014', '2015', '2016', '2017']
  },
  tooltip: {
    y: {
      formatter: function (val: string) {
        return '$ ' + val + ' thousands';
      }
    }
  }
};

// =============================|| WIDGET - STATISTICS 6 ||============================== //

export default function Statistics6() {
  return (
    <MainCard title="Statistics">
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" height={350} />
    </MainCard>
  );
}
