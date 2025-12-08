import { useEffect, useState } from 'react';

// project import
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// chart-options
const differentLineChartOptions = {
  chart: {
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [5, 7, 5],
    curve: 'straight',
    dashArray: [0, 8, 5]
  },
  markers: {
    size: 0,

    hover: {
      sizeOffset: 6
    }
  },
  xaxis: {
    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan']
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val: number | string) {
            return val + ' (mins)';
          }
        }
      },
      {
        title: {
          formatter: function (val: number | string) {
            return val + ' per session';
          }
        }
      },
      {
        title: {
          formatter: function (val: number | string) {
            return val;
          }
        }
      }
    ]
  },
  grid: {
    borderColor: '#f1f1f1'
  }
};

// ==============================|| APEX CHART - DIFFERENT LINE CHART ||============================== //

export default function DifferentLineChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const dangerMain = 'var(--bs-danger)';
  const primaryMain = 'var(--bs-primary)';
  const successMain = 'var(--bs-success)';

  const [series] = useState([
    {
      name: 'Session Duration',
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: 'Page Views',
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(differentLineChartOptions);

  useEffect(() => {
    setOptions({
      ...differentLineChartOptions,
      chart: { ...differentLineChartOptions.chart, fontFamily: fontFamily },
      colors: [primaryMain, dangerMain, successMain],
      xaxis: { ...differentLineChartOptions.xaxis },
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily, primaryMain, successMain]);

  return <ReactApexChart options={options} series={series} type="line" height={300} />;
}
