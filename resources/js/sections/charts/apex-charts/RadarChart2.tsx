import { useEffect, useState } from 'react';

// project import
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// chart-options
const radarChart2Options = {
  chart: {
    type: 'radar',
    toolbar: {
      show: false
    },
    background: 'transparent',
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1
    }
  },
  stroke: {
    width: 0
  },
  fill: {
    opacity: 0.7
  },
  markers: {
    size: 0
  },
  labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
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

// ==============================|| APEX CHART - MULTIPAL SERIES RADAR CHART ||============================== //

export default function RadarChart2() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20]
    },
    {
      name: 'Series 2',
      data: [20, 30, 40, 80, 20, 80]
    },
    {
      name: 'Series 3',
      data: [44, 76, 78, 13, 43, 10]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(radarChart2Options);

  useEffect(() => {
    setOptions({
      ...radarChart2Options,
      chart: { ...radarChart2Options.chart, fontFamily: fontFamily },
      colors: ['var(--bs-primary)', 'var(--bs-success)', 'var(--bs-danger)'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="radar" height={350} />;
}
