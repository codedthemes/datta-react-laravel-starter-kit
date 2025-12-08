import { useEffect, useState } from 'react';

// project imports
import useConfig from '@/hooks/useConfig';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';
import { ThemeMode } from '@/config';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// chart-options
const areaChartOptions: ChartProps = {
  chart: {
    height: 350,
    type: 'area',
    background: 'transparent',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2018-09-19T00:00:00',
      '2018-09-19T01:30:00',
      '2018-09-19T02:30:00',
      '2018-09-19T03:30:00',
      '2018-09-19T04:30:00',
      '2018-09-19T05:30:00',
      '2018-09-19T06:30:00'
    ]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    }
  }
};

// ==============================|| APEX CHART - AREA CHART ||============================== //

export default function AreaChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'Series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(areaChartOptions);

  useEffect(() => {
    setOptions({
      ...areaChartOptions,
      chart: { ...areaChartOptions.chart, fontFamily: fontFamily },
      colors: ['#f4c22b', '#f44236'],
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="area" height={350} />;
}
