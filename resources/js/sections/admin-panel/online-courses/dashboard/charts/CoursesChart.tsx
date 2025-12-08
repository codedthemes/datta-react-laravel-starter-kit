import { useState, useEffect } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

type ChartData = {
  name: string;
  data: number[];
};

// Initial chart options
const baseChartOptions = {
  chart: { type: 'bar', toolbar: { show: false }, offsetX: -5 },
  plotOptions: { bar: { horizontal: false, columnWidth: '55%' } },
  yaxis: { labels: { show: false } },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'right',
    offsetX: 10,
    offsetY: 10,
    labels: { useSeriesColors: false },
    markers: { size: 6, shape: 'circle', strokeWidth: 0 },
    itemMargin: { horizontal: 10, vertical: 8 }
  },
  dataLabels: { enabled: false },
  stroke: { show: true, width: 3, colors: ['transparent'] },
  grid: { strokeDashArray: 4 },
  tooltip: { y: { formatter: (val: number) => `$${val} thousands` } },
  xaxis: {
    categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    axisTicks: { show: false }
  }
};

// ==============================|| DASHBOARD - COURSES CHART ||============================== //

export default function CoursesChart({ data }: { data: ChartData[] }) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [chartSeries, setChartSeries] = useState(data);
  const [chartOptions, setChartOptions] = useState<ChartProps>(baseChartOptions);

  useEffect(() => {
    setChartOptions((prev) => ({
      ...prev,
      chart: { ...prev.chart, fontFamily: fontFamily },
      colors: ['var(--bs-primary)', 'var(--bs-warning)'],
      grid: { ...prev.grid, borderColor: 'var(--bs-border-color)' },
      xaxis: {
        ...prev.xaxis,
        axisBorder: { color: 'var(--bs-border-color)' }
      },
      theme: {
        mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light'
      }
    }));
  }, [resolvedTheme, fontFamily]);

  useEffect(() => {
    setChartSeries(data);
  }, [data]);

  return <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={190} />;
}
