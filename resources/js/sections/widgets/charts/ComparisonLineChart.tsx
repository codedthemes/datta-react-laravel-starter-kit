import { useState, useEffect } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

const statisticsLineChartOptions = {
  chart: {
    toolbar: {
      show: false
    }
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: 26,
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },

  markers: {
    size: 6,
    hover: {
      size: 5
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
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

// =============================|| WIDGET - COMPARISON LINE CHART ||============================== //

export default function ComparisonLineChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Market Days',
      data: [65, 105, 145, 105, 145, 185]
    },
    {
      name: 'Market Days2',
      data: [125, 80, 30, 70, 110, 150]
    },
    {
      name: 'Market Days ALL',
      data: [175, 190, 160, 190, 140, 100]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(statisticsLineChartOptions);

  useEffect(() => {
    setOptions({
      ...statisticsLineChartOptions,
      chart: { ...statisticsLineChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-success)', 'var(--bs-primary)', 'var(--bs-warning)'],
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [fontFamily, resolvedTheme]);

  return (
    <MainCard title="Statistics">
      <ReactApexChart options={options} series={series} type="line" height={295} />
    </MainCard>
  );
}
