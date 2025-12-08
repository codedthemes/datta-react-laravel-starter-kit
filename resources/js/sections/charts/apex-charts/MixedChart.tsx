import { useEffect, useState } from 'react';

// project import
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// chart-options
const mixedChartOptions = {
  chart: {
    height: 350,
    type: 'line',
    background: 'transparent'
  },
  stroke: {
    width: [0, 4]
  },
  colors: ['#04a9f5', '#f44236'],
  labels: [
    '01 Jan 2001',
    '02 Jan 2001',
    '03 Jan 2001',
    '04 Jan 2001',
    '05 Jan 2001',
    '06 Jan 2001',
    '07 Jan 2001',
    '08 Jan 2001',
    '09 Jan 2001',
    '10 Jan 2001',
    '11 Jan 2001',
    '12 Jan 2001'
  ],
  xaxis: {
    type: 'datetime'
  }
};

// ==============================|| APEX CHART - MIXED CHART ||============================== //

export default function MixedChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Website Blog',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    },
    {
      name: 'Social Media',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(mixedChartOptions);

  useEffect(() => {
    setOptions({
      ...mixedChartOptions,
      chart: { ...mixedChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-primary)', 'var(--bs-danger)'],
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="line" height={350} />;
}
