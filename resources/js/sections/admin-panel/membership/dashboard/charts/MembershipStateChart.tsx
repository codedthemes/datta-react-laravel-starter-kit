import { useState, useEffect } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import { ThemeMode } from '@/config';
import useConfig from '@/hooks/useConfig';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// chart options
const initialChartOptions: ChartProps = {
  chart: {
    type: 'radialBar',
    sparkline: {
      enabled: true
    },
    offsetX: 0,
    offsetY: 0
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      type: 'vertical',
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        strokeWidth: '80%',
        show: true,
        margin: 0
      },
      dataLabels: {
        name: { show: false },
        value: { offsetY: -2, fontSize: '20px' }
      }
    }
  },
  grid: {
    show: false
  },
  labels: ['Average Results']
};

// ==============================|| MEMBERSHIP - DASHBOARD - MEMBERSHIP STATE CHART ||============================== //

export default function MembershipStateChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState<ChartProps>(initialChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      chart: { ...prevState.chart, fontFamily: fontFamily },
      colors: ['var(--bs-primary)'],
      fill: { type: 'solid' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            strokeWidth: '80%',
            show: true,
            background: '#cdeefd',
            margin: 0
          },
          dataLabels: {
            name: { show: false },
            value: { offsetY: -2, fontSize: '20px' }
          }
        }
      }
    }));
  }, [resolvedTheme, fontFamily]);

  const [series] = useState([75]);

  return <ReactApexChart options={options} series={series} type="radialBar" height={500} />;
}
