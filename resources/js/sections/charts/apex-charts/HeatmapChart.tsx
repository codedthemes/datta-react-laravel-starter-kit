import { useEffect, useState } from 'react';

// project imports
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

function generateDatasehratheat(count: number, yrange: { min: number; max: number }): { x: string; y: number }[] {
  const series: { x: string; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    const x = `w${i + 1}`;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({ x, y });
  }
  return series;
}

const heatmapChartOptions = {
  chart: {
    height: 350,
    type: 'heatmap',
    background: 'transparent'
  },
  dataLabels: {
    enabled: false
  }
};

// ==============================|| APEX CHART - HEATMAP CHART ||============================== //

export default function HeatMapChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Metric1',
      data: generateDatasehratheat(12, { min: 0, max: 90 })
    },
    {
      name: 'Metric2',
      data: generateDatasehratheat(12, { min: 0, max: 90 })
    },
    {
      name: 'Metric3',
      data: generateDatasehratheat(12, { min: 0, max: 90 })
    },
    {
      name: 'Metric4',
      data: generateDatasehratheat(12, { min: 0, max: 90 })
    },
    {
      name: 'Metric5',
      data: generateDatasehratheat(12, { min: 0, max: 90 })
    },
    {
      name: 'Metric6',
      data: generateDatasehratheat(12, { min: 0, max: 90 })
    },
    {
      name: 'Metric7',
      data: generateDatasehratheat(12, { min: 0, max: 90 })
    },
    {
      name: 'Metric8',
      data: generateDatasehratheat(12, { min: 0, max: 90 })
    },
    {
      name: 'Metric9',
      data: generateDatasehratheat(12, { min: 0, max: 90 })
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(heatmapChartOptions);

  useEffect(() => {
    setOptions({
      ...heatmapChartOptions,
      chart: { ...heatmapChartOptions.chart, fontFamily: fontFamily },
      colors: ['#04a9f5'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="heatmap" height={350} />;
}
