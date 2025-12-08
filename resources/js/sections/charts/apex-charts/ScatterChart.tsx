import { useEffect, useState } from 'react';

// project imports
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { scatterChartData } from '@/data/scatterChartData';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// chart-options
const scatterChartOptions = {
  chart: {
    height: 350,
    type: 'scatter',
    background: 'transparent',
    zoom: {
      enabled: true,
      type: 'xy'
    }
  },
  xaxis: {
    tickAmount: 10,
    labels: {
      formatter: function (val: string) {
        return parseFloat(val).toFixed(1);
      }
    }
  },
  yaxis: {
    tickAmount: 7
  },
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

// ==============================|| APEX CHART - SCATTER CHART ||============================== //

export default function ScatterChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState(scatterChartData);

  const [options, setOptions] = useState<ChartProps>(scatterChartOptions);

  useEffect(() => {
    setOptions({
      ...scatterChartOptions,
      chart: { ...scatterChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-primary)', 'var(--bs-success)', 'var(--bs-danger)', 'var(--bs-warning)', 'var(--bs-info)'],
      xaxis: { ...scatterChartOptions.xaxis },
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="scatter" height={350} />;
}
