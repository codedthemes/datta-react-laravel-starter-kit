import { useState, useEffect } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

const userStatisticsChartOptions = {
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
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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

// =============================|| WIDGET - USER STATISTICS CHART ||============================== //

export default function UserStatisticsChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Car',
      data: [160, 140, 150, 95, 130, 55, 75, 65, 140, 120, 110, 180]
    },
    {
      name: 'Bike',
      data: [85, 95, 90, 125, 105, 120, 110, 140, 100, 95, 130, 80]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(userStatisticsChartOptions);

  useEffect(() => {
    setOptions({
      ...userStatisticsChartOptions,
      chart: { ...userStatisticsChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-purple)', 'var(--bs-success)'],
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [fontFamily, resolvedTheme]);

  return (
    <MainCard title="Statistics">
      <ReactApexChart options={options} series={series} type="line" height={225} />
    </MainCard>
  );
}
