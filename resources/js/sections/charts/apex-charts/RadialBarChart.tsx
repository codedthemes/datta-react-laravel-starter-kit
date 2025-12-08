import { useEffect, useState } from 'react';

// project import
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// chart-options
const redialBarChartOptions = {
  chart: {
    type: 'radialBar',
    height: 320,
    background: 'transparent'
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%'
      }
    }
  },
  labels: ['Cricket']
};

// ==============================|| APEX CHART - RADIAL BAR CHART ||============================== //

export default function RedialBarChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([70]);
  const [options, setOptions] = useState<ChartProps>(redialBarChartOptions);

  useEffect(() => {
    setOptions({
      ...redialBarChartOptions,
      chart: { ...redialBarChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-primary)'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="radialBar" height={320} />;
}
