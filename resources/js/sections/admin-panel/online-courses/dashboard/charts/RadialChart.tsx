import { useEffect, useState } from 'react';

// project-imports
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

const baseChartOptions = {
  chart: {
    type: 'radialBar',
    offsetY: -40
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: '70%',
        background: 'transparent'
      },
      track: {
        background: '#f3f5f7',
        strokeWidth: '50%'
      },
      dataLabels: {
        name: { show: false },
        value: {
          offsetY: -30,
          fontSize: '24px',
          color: 'var(--bs-primary)'
        }
      }
    }
  },
  stroke: { lineCap: 'round', width: 20 }
};

// ==============================|| INVITE GOAL - CHART ||============================== //

export default function RadialBarChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState<ChartProps>(baseChartOptions);

  const [series] = useState([75.55]);

  useEffect(() => {
    setOptions({
      ...baseChartOptions,
      chart: { ...baseChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-primary)'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="radialBar" height={350} />;
}
