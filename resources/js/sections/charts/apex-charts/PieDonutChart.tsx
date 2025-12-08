import { useEffect, useState } from 'react';

// project import
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// chart-options
const pieDonutChartOptions = {
  chart: {
    type: 'donut',
    height: 320,
    background: 'transparent'
  },
  legend: {
    show: true,
    position: 'bottom'
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true
          },
          value: {
            show: true
          }
        }
      }
    }
  },
  dataLabels: {
    enabled: true,
    dropShadow: {
      enabled: false
    }
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
};

// ==============================|| APEX CHART - PIE DONUT CHART ||============================== //

export default function PieDonutChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([44, 55, 41, 17, 15]);
  const [options, setOptions] = useState<ChartProps>(pieDonutChartOptions);

  const primaryMain = 'var(--bs-primary)';
  const successMain = 'var(--bs-success)';
  const errorMain = 'var(--bs-danger)';
  const warningMain = 'var(--bs-warning)';

  useEffect(() => {
    setOptions({
      ...pieDonutChartOptions,
      chart: { ...pieDonutChartOptions.chart, fontFamily: fontFamily },
      colors: [primaryMain, warningMain, successMain, errorMain],
      stroke: { colors: ['#fff'] },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily, primaryMain, warningMain, errorMain, successMain]);

  return <ReactApexChart options={options} series={series} type="donut" height={320} />;
}
