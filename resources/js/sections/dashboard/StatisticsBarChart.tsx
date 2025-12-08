import { useEffect, useState } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// chart-options
const statisticsBarChartOptions = {
  chart: {
    type: 'bar',
    height: 300,
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
  },
  legend: {
    show: true,
    position: 'bottom',
    offsetX: 10,
    offsetY: 10,
    labels: { useSeriesColors: false },
    markers: { size: 6, shape: 'circle', strokeWidth: 0 },
    itemMargin: { horizontal: 10, vertical: 8 }
  }
};

// =============================|| ANALYTICS - STATISTICS BAR CHART ||============================== //

export default function StatisticsBarChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
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
  ]);

  const [options, setOptions] = useState<ChartProps>(statisticsBarChartOptions);

  useEffect(() => {
    setOptions({
      ...statisticsBarChartOptions,
      chart: { ...statisticsBarChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-success)', 'var(--bs-purple)', 'var(--bs-primary)'],
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return (
    <MainCard title="Statistics">
      <ReactApexChart options={options} series={series} type="bar" height={300} />
    </MainCard>
  );
}
