import { useEffect, useState } from 'react';

// project import
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

function generateDatasehratheatbubble3d(baseval: number, count: number, yrange: { min: number; max: number }) {
  const series: [number, number, number][] = [];
  for (let i = 0; i < count; i++) {
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
    series.push([baseval, y, z]);
    baseval += 86400000;
  }
  return series;
}

// chart-options
const bubble3DChartOptions: ChartProps = {
  chart: {
    height: 350,
    type: 'bubble'
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient'
  },
  xaxis: {
    tickAmount: 12,
    type: 'datetime',
    labels: {
      rotate: 0
    }
  },
  yaxis: {
    max: 70
  },
  theme: {
    palette: 'palette2'
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

// ==============================|| APEX CHART - BUBBLE 3D CHART ||============================== //

export default function Bubble3DChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Product1',
      data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'Product2',
      data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'Product3',
      data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'Product4',
      data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(bubble3DChartOptions);

  useEffect(() => {
    setOptions({
      ...bubble3DChartOptions,
      chart: { ...bubble3DChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-primary)', 'var(--bs-success)', 'var(--bs-warning)', 'var(--bs-danger)'],
      grid: { borderColor: 'var(--bs-border-color)' },
      legend: { ...bubble3DChartOptions.legend },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="bubble" height={350} />;
}
