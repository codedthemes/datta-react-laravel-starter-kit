import { useState, useEffect } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// chart-options
const monthlyPerformanceChartOptions = {
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
  colors: ['#1de9b6'],
  fill: {
    type: 'gradient',
    opacity: 1,
    gradient: {
      shade: 'dark',
      type: 'vertical',
      gradientToColors: ['#1dc4e9'],
      stops: [0, 100]
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '30%'
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      width: 0
    },
    labels: {
      show: false
    }
  },
  grid: {
    padding: {
      bottom: 0,
      left: 10
    },
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
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

// =============================|| WIDGET - MONTHLY PERFORMANCE CHART ||============================== //

export default function MonthlyPerformanceChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      data: [10, 13, 20, 28, 25, 4]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(monthlyPerformanceChartOptions);

  useEffect(() => {
    setOptions({
      ...monthlyPerformanceChartOptions,
      chart: { ...monthlyPerformanceChartOptions.chart, fontFamily: fontFamily },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [fontFamily, resolvedTheme]);

  return (
    <MainCard title="Statistics">
      <ReactApexChart options={options} series={series} type="bar" height={260} />
    </MainCard>
  );
}
