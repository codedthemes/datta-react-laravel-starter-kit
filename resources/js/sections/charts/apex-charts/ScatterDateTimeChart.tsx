import { useEffect, useState } from 'react';

// project imports
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// Function to generate day-wise time series data
const generateDayWiseTimeSeries = (baseval: number, count: number, yrange: { min: number; max: number }): [number, number][] => {
  const series: [number, number][] = [];
  for (let i = 0; i < count; i++) {
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push([baseval, y]);
    baseval += 86400000;
  }
  return series;
};

// chart-options
const scatterDateTimeChartOptions = {
  chart: {
    height: 350,
    type: 'scatter',
    background: 'transparent',
    zoom: {
      type: 'xy'
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    xaxis: {
      showLines: true
    },
    yaxis: {
      showLines: true
    }
  },
  xaxis: {
    type: 'datetime'
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

// ==============================|| APEX CHART - SCATTER DATETIME CHART ||============================== //

export default function ScatterDateTimeChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'TEAM 1',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'TEAM 2',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'TEAM 3',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'TEAM 4',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'TEAM 5',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
        min: 10,
        max: 60
      })
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(scatterDateTimeChartOptions);

  useEffect(() => {
    setOptions({
      ...scatterDateTimeChartOptions,
      chart: { ...scatterDateTimeChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-primary)', 'var(--bs-success)', 'var(--bs-danger)', 'var(--bs-warning)', 'var(--bs-info)'],
      grid: { borderColor: 'var(--bs-border-color)' },
      legend: { ...scatterDateTimeChartOptions.legend },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="scatter" height={350} />;
}
