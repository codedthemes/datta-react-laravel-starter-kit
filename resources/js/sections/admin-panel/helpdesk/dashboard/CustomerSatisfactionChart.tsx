import { useEffect, useState } from 'react';

// project-imports
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

const customerSatisfactionChartOptions = {
  chart: {
    type: 'pie',
    background: 'transparent'
  },
  tooltip: {
    enabled: true,
    fillSeriesColor: true
  },
  labels: ['Very Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
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

// ==============================|| DASHBOARD - CUSTOMER SATISFACTION CHART ||============================== //

export default function CustomerSatisfactionChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([66, 50, 40, 30]);
  const [options, setOptions] = useState<ChartProps>(customerSatisfactionChartOptions);

  useEffect(() => {
    setOptions({
      ...customerSatisfactionChartOptions,
      chart: { ...customerSatisfactionChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-blue-800)', 'var(--bs-blue-600)', 'var(--bs-blue-200)', 'var(--bs-blue-400)'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' },
      legend: {
        ...customerSatisfactionChartOptions.legend,
        labels: { ...customerSatisfactionChartOptions.legend.labels, colors: 'var(--bs-gray-500)' }
      }
    });
  }, [resolvedTheme, fontFamily]);

  return (
    <div className="text-white">
      <ReactApexChart options={options} series={series} type="pie" height={250} />
    </div>
  );
}
