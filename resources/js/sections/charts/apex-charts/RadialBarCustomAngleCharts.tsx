import { useEffect, useState } from 'react';

// project import
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

type FormatterOptions = {
  seriesIndex: number;
  w: {
    globals: {
      series: number[][];
    };
  };
};

// chart-options
const radialBarCustomAngleChartOptions: ChartProps = {
  chart: {
    type: 'radialBar',
    height: 350,
    background: 'transparent'
  },
  plotOptions: {
    radialBar: {
      offsetY: -30,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: '30%',
        background: 'transparent',
        image: undefined
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          show: false
        }
      }
    }
  },
  labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
  legend: {
    show: true,
    floating: true,
    fontSize: '14px',
    position: 'left',
    offsetX: 0,
    offsetY: 0,
    labels: {
      useSeriesColors: true
    },
    markers: {
      size: 0
    },
    formatter: function (seriesName: string, opts: FormatterOptions) {
      const seriesValue = opts.w.globals.series[opts.seriesIndex] ?? 0;
      return `${seriesName}: ${seriesValue}`;
    },
    itemMargin: {
      horizontal: 1
    }
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }
  ]
};

// ==============================|| APEX CHART - RADIAL BAR CUSTOM ANGLE  CHART ||============================== //

export default function RadialBarCustomAngleChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const primaryMain = 'var(--bs-primary)';
  const successMain = 'var(--bs-success)';
  const errorMain = 'var(--bs-danger)';
  const warningMain = 'var(--bs-warning)';

  const [series] = useState([76, 67, 61, 90]);
  const [options, setOptions] = useState<ChartProps>(radialBarCustomAngleChartOptions);

  useEffect(() => {
    setOptions({
      ...radialBarCustomAngleChartOptions,
      chart: { ...radialBarCustomAngleChartOptions.chart, fontFamily: fontFamily },
      colors: [primaryMain, warningMain, successMain, errorMain],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily, primaryMain, warningMain, errorMain, successMain]);

  return <ReactApexChart options={options} series={series} type="radialBar" height={350} />;
}
