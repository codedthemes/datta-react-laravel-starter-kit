import { useEffect, useState } from 'react';

// project import
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// chart-options
const barHorizontalChartOptions: ChartProps = {
  chart: {
    type: 'bar',
    height: 350,
    background: 'transparent',
    toolbar: { show: false }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: 'top'
      }
    }
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: '12px',
      colors: ['#fff']
    }
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
  },
  legend: {
    show: true,
    position: 'bottom',
    offsetX: 10,
    offsetY: 10,
    labels: { useSeriesColors: false },
    markers: { size: 6, shape: 'circle', strokeWidth: 0 },
    itemMargin: { horizontal: 15, vertical: 8 }
  }
};

// ==============================|| APEX CHART - BAR HORIZONTAL CHART ||============================== //

export default function BarHorizontalChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const primaryMain = 'var(--bs-primary)';
  const successMain = 'var(--bs-success)';
  const line = 'var(--bs-border-color)';

  const [series] = useState([
    {
      data: [44, 55, 41, 64, 22, 43, 21]
    },
    {
      data: [53, 32, 33, 52, 13, 44, 32]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(barHorizontalChartOptions);

  useEffect(() => {
    setOptions({
      ...barHorizontalChartOptions,
      chart: { ...barHorizontalChartOptions.chart, fontFamily: fontFamily },
      colors: [primaryMain, successMain],
      xaxis: { ...barHorizontalChartOptions.xaxis },
      grid: { borderColor: line },
      legend: { ...barHorizontalChartOptions.legend, labels: { ...barHorizontalChartOptions.legend.labels } },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily, line, primaryMain, successMain]);

  return <ReactApexChart options={options} series={series} type="bar" height={350} />;
}
