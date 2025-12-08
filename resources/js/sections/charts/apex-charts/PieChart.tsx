import { useEffect, useState } from 'react';

// project import
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// chart-options
const pieChartOptions = {
  chart: {
    type: 'pie',
    height: 320,
    background: 'transparent'
  },
  labels: ['Extremely Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
  legend: {
    show: true,
    position: 'bottom'
  },
  dataLabels: {
    enabled: true,
    dropShadow: {
      enabled: false
    }
  },
  responsive: [
    {
      breakpoint: 450,
      chart: { width: 280, height: 280 },
      options: { legend: { show: false, position: 'bottom' } }
    }
  ]
};

// ==============================|| APEX CHART - PIE CHART ||============================== //

export default function PieChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([35.5, 29, 19.5, 16]);
  const [options, setOptions] = useState<ChartProps>(pieChartOptions);

  const primaryMain = 'var(--bs-primary)';
  const successMain = 'var(--bs-success)';
  const errorMain = 'var(--bs-danger)';
  const warningMain = 'var(--bs-warning)';

  useEffect(() => {
    setOptions({
      ...pieChartOptions,
      chart: { ...pieChartOptions.chart, fontFamily: fontFamily },
      colors: [primaryMain, warningMain, successMain, errorMain],
      stroke: { colors: ['#fff'] },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily, primaryMain, warningMain, errorMain, successMain]);

  return <ReactApexChart options={options} series={series} type="pie" height={320} />;
}
