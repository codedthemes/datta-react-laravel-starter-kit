import { useEffect, useState } from 'react';

// project import
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// chart-options
const raderChartOptions = {
  chart: {
    type: 'radar',
    toolbar: {
      show: false
    },
    background: 'transparent'
  },
  labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  plotOptions: {
    radar: {
      size: 140
    }
  },
  markers: {
    size: 4,
    colors: ['#fff'],
    strokeColor: '#f44236',
    strokeWidth: 2
  },
  tooltip: {
    y: {
      formatter: function (val: number | string) {
        return val;
      }
    }
  },
  yaxis: {
    tickAmount: 7,
    labels: {
      formatter: function (val: number | string, i: number) {
        if (i % 2 === 0) {
          return val;
        } else {
          return '';
        }
      }
    }
  }
};

// ==============================|| APEX CHART - RADAR CHART ||============================== //

export default function RadarChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Series 1',
      data: [20, 100, 40, 30, 50, 80, 33]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(raderChartOptions);

  useEffect(() => {
    setOptions({
      ...raderChartOptions,
      chart: { ...raderChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-danger)'],
      plotOptions: {
        radar: {
          polygons: {
            strokeColor: resolvedTheme === ThemeMode.DARK ? '#3e4853' : '#f3f6ff',
            fill: {
              colors: resolvedTheme === ThemeMode.DARK ? ['#3e4853', '#1e293b'] : ['#f8fafc', '#fff']
            }
          }
        }
      },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="radar" height={350} />;
}
