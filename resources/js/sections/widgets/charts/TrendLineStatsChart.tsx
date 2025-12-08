import { useState, useEffect } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// chart-options
const trandLineStatsChartOptions = {
  chart: {
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#23d3d7'],
  fill: {
    type: 'solid'
  },
  plotOptions: {
    bar: {
      columnWidth: '30%'
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr'],
    tickPlacement: 'between'
  },
  grid: {
    padding: {
      bottom: 0,
      left: 10
    }
  },

  stroke: {
    curve: 'straight',
    width: 5
  },
  markers: {
    size: 2,
    colors: '#23d3d7',
    strokeColors: '#23d3d7',
    strokeWidth: 2,
    hover: {
      size: 5
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return 'Statistics :';
        }
      }
    },
    marker: {
      show: false
    }
  }
};

// =============================|| WIDGET - TREND LINE STATS CHART ||============================== //

export default function TrendLineStatsChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      data: [10, 60, 45, 72]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(trandLineStatsChartOptions);

  useEffect(() => {
    setOptions({
      ...trandLineStatsChartOptions,
      chart: { ...trandLineStatsChartOptions.chart, fontFamily: fontFamily },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [fontFamily, resolvedTheme]);

  return (
    <MainCard title="Statistics">
      <ReactApexChart options={options} series={series} type="line" height={290} />
    </MainCard>
  );
}
