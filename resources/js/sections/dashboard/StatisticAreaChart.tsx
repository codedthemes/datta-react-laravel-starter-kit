import { useEffect, useState } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// chart-options
const statisticsAreaChartOptions = {
  chart: {
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#1dc4e9'],
  fill: {
    colors: ['#1dc4e9'],
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'vertical',
      gradientToColors: ['#A389D4'],
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 70, 100],
      colorStops: []
    }
  },
  stroke: {
    width: 3,
    curve: 'smooth'
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return 'Statistics :';
        }
      }
    },
    marker: {
      show: false
    }
  }
};

// =============================|| CRYPTO - STATISTICS AREA CHART ||============================== //

export default function StatisticsAreaChart({ height = 315 }: { height?: number }) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'series1',
      data: [30, 55, 80, 60, 70, 70, 110, 90, 130]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(statisticsAreaChartOptions);

  useEffect(() => {
    setOptions({
      ...statisticsAreaChartOptions,
      chart: { ...statisticsAreaChartOptions.chart, fontFamily: fontFamily },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [fontFamily, resolvedTheme]);

  return (
    <>
      <MainCard className="gradient-background" title="Statistics" bodyClassName="p-0">
        <h3 className="f-w-300 p-4">$894.39</h3>
        <ReactApexChart options={options} series={series} type="area" height={height} />
      </MainCard>
    </>
  );
}
