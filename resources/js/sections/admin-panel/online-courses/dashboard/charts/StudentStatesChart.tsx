import { useEffect, useState } from 'react';

// project-imports
import { ThemeMode } from '@/config';
import useConfig from '@/hooks/useConfig';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

const pieChartOptions = {
  chart: {
    type: 'donut',
    height: 299
  },
  labels: ['Total Signups', 'Active Student'],
  legend: {
    show: true,
    position: 'bottom'
  },
  dataLabels: {
    enabled: false
  }
};

// ==============================|| DASHBOARD - STUDENT STATES CHART ||============================== //s

export function ApexDonutChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState<ChartProps>(pieChartOptions);

  const series = [70, 30];

  useEffect(() => {
    const primaryDark = '#0387c4';
    const primaryLight = '#68cbf9';

    setOptions((prevState) => ({
      ...prevState,
      chart: { ...prevState.chart, fontFamily: fontFamily },
      colors: [primaryDark, primaryLight],
      grid: { borderColor: 'var(--bs-border-color)' },
      stroke: { colors: ['background.paper'] },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    }));
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="donut" height={240} />;
}
