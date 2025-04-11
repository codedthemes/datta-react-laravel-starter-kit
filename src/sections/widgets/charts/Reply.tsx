import { useMemo } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

const chartOptions: ChartProps = {
  series: [
    {
      name: 'News',
      data: [53, 13, 30, 4]
    }
  ],
  chart: {
    toolbar: {
      show: false
    }
  },
  colors: ['#1de9b6', '#a389d4', '#04a9f5', '#f44236'],
  fill: {
    type: 'gradient',
    opacity: 1,
    gradient: {
      shade: 'dark',
      type: 'vertical',
      gradientToColors: ['#1dc4e9', '#899ed4', '#049df5', '#f48f36'],
      stops: [0, 100]
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '65%',
      distributed: true
    }
  },
  dataLabels: {
    enabled: true
  },
  legend: {
    show: false
  },
  grid: {
    show: false
  },
  yaxis: {
    show: false
  },
  xaxis: {
    axisBorder: {
      show: false
    },
    categories: ['Sport', 'Music', 'Travel', 'News']
  }
};

// =============================|| WIDGET - REPLY ||============================== //

export default function Reply() {
  const series = useMemo(
    () => [
      {
        name: 'Sport',
        data: [53, 13, 30, 4]
      }
    ],
    []
  );
  return (
    <MainCard title="Reply" subheader={<p className="mb-0">Time for first reply</p>}>
      <h3 className="f-w-300">2.43 h</h3>
      <span className="text-uppercase">average time for first reply</span>

      <ReactApexChart options={chartOptions} series={series} type="bar" height={250} />
    </MainCard>
  );
}
