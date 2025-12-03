import { useEffect, useState } from 'react';

// project import
import useConfig from '@/hooks/useConfig';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';
import { ThemeMode } from '@/config';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

function generateBubbleData(baseval: number, count: number, yrange: { min: number; max: number }) {
  const series: [number, number, number][] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
    series.push([x, y, z]);
    baseval += 86400000;
  }
  return series;
}

// chart-options
const bubbleChartOptions = {
  chart: {
    height: 350,
    type: 'bubble'
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 0.8
  },
  xaxis: {
    tickAmount: 12,
    type: 'category'
  },
  yaxis: {
    max: 70
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

// ==============================|| APEX CHART - BUBBLE CHART ||============================== //

export default function BubbleChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Bubble1',
      data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 })
    },
    {
      name: 'Bubble2',
      data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 })
    },
    {
      name: 'Bubble3',
      data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 })
    },
    {
      name: 'Bubble4',
      data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 })
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(bubbleChartOptions);

  useEffect(() => {
    setOptions({
      ...bubbleChartOptions,
      chart: { ...bubbleChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-primary)', 'var(--bs-success)', 'var(--bs-warning)', 'var(--bs-danger)'],
      grid: { borderColor: 'var(--bs-border-color)' },
      legend: { ...bubbleChartOptions.legend },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="bubble" height={350} />;
}
