import { useEffect, useState } from 'react';

// project imports
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// chart-options
const LineChartOptions = {
  chart: {
    type: 'line',
    height: 350,
    background: 'transparent',
    toolbar: { show: false },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false,
    width: 2
  },
  stroke: {
    curve: 'straight'
  },
  grid: {
    row: {
      colors: ['#f3f6ff', 'transparent'],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
  }
};

// ==============================|| APEX CHART - BASIC LINE CHART ||============================== //

export default function BasicLineChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(LineChartOptions);

  useEffect(() => {
    setOptions({
      ...LineChartOptions,
      chart: { ...LineChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-primary)'],
      xaxis: { ...LineChartOptions.xaxis },
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="line" height={300} />;
}
