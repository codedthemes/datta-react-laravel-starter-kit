import { useEffect, useState } from 'react';

// project import
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// Generate bubble data function
function generateDatasehrat(count: number, yrange: { min: number; max: number }): { x: string; y: number }[] {
  const series: { x: string; y: number }[] = [];
  let i = 0;
  while (i < count) {
    const x = (i + 1).toString(); // Use (i + 1) as a string for 'x'
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({ x, y });
    i++;
  }
  return series;
}

const roundedHeatMapChartOptions = {
  chart: {
    type: 'heatmap',
    height: 350,
    background: 'transparent'
  },
  stroke: {
    width: 0
  },
  plotOptions: {
    heatmap: {
      radius: 30,
      enableShades: false,
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 50,
            color: '#f4c22b'
          },
          {
            from: 51,
            to: 100,
            color: '#f44236'
          }
        ]
      }
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff']
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
    type: 'category'
  }
};

// ==============================|| APEX CHART - ROUNDED HEATMAP CHART ||============================== //

export default function RoundedHeatMapChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Metric1',
      data: generateDatasehrat(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric2',
      data: generateDatasehrat(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric3',
      data: generateDatasehrat(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric4',
      data: generateDatasehrat(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric5',
      data: generateDatasehrat(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric6',
      data: generateDatasehrat(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric7',
      data: generateDatasehrat(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric8',
      data: generateDatasehrat(15, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric8',
      data: generateDatasehrat(15, {
        min: 0,
        max: 90
      })
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(roundedHeatMapChartOptions);

  useEffect(() => {
    setOptions({
      ...roundedHeatMapChartOptions,
      chart: { ...roundedHeatMapChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-primary)', 'var(--bs-success)', 'var(--bs-info)', 'var(--bs-warning)', 'var(--bs-danger)'],
      grid: { borderColor: 'var(--bs-border-color)' },
      legend: { ...roundedHeatMapChartOptions.legend },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="heatmap" height={350} />;
}
