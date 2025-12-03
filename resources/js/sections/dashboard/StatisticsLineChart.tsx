import { useEffect, useState } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// chart-options
const statisticsLineChartOptions = {
  chart: {
    type: 'line',
    height: 350,
    background: 'transparent',

    toolbar: {
      show: false
    },
    zoom: {
      enabled: true,
      type: 'x'
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 5,
    hover: {
      size: 7
    }
  },
  stroke: {
    curve: 'straight',
    width: 2
  },

  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  legend: {
    show: true,
    position: 'bottom',
    offsetX: 10,
    offsetY: 10,
    labels: { useSeriesColors: false },
    markers: { size: 6, shape: 'circle', strokeWidth: 0 },
    itemMargin: { horizontal: 10, vertical: 8 }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }
};

// =============================|| CRYPTO - STATISTICS LINE CHART ||============================== //

export default function StatisticsLineChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    { name: 'Market Days ', data: [5, 30, 25, 55, 45, 65, 60, 105, 80, 110, 120, 150], color: '#00E396' },
    { name: 'Market Days ALL ', data: [80, 95, 87, 155, 140, 147, 130, 180, 160, 175, 165, 200], color: '#008FFB' }
  ]);

  const [options, setOptions] = useState<ChartProps>(statisticsLineChartOptions);

  useEffect(() => {
    setOptions({
      ...statisticsLineChartOptions,
      chart: { ...statisticsLineChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-success)', 'var(--bs-primary)'],
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [fontFamily, resolvedTheme]);

  return (
    <>
      <MainCard title="Statistics">
        <ReactApexChart options={options} series={series} type="line" height={320} />
      </MainCard>
    </>
  );
}
