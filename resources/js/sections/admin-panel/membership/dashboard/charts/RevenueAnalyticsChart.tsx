import { useState, useEffect } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import { ThemeMode } from '@/config';
import useConfig from '@/hooks/useConfig';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

type ChartData = {
  name: string;
  data: number[];
};

// chart options
const areaChartOptions: ChartProps = {
  chart: {
    type: 'area',
    toolbar: {
      show: false
    },
    offsetY: 16
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      type: 'vertical',
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0
    }
  },
  legend: {
    show: true,
    fontFamily: 'Inter var',
    position: 'bottom',
    offsetY: 20,
    fontWeight: 500,
    labels: {
      useSeriesColors: false
    },
    markers: {
      size: 4
    },
    itemMargin: {
      horizontal: 10,
      vertical: 4
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
      borderRadius: 4
    }
  },
  grid: {
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  }
};

// ==============================|| MEMBERSHIP - DASHBOARD - REVENUE ANALYTICS CHART ||============================== //

export default function RevenueAnalyticsChart({ data }: { data: ChartData[] }) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [chartSeries, setChartSeries] = useState(data);
  const [options, setOptions] = useState<ChartProps>(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      chart: { ...prevState.chart, fontFamily: fontFamily },
      colors: ['#04a9f5', '#f4c22b'],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          style: {
            colors: ['#8996a4']
          }
        },
        axisBorder: {
          show: false,
          color: 'var(--bs-border-color'
        },
        axisTicks: {
          show: false
        },
        tickAmount: 11
      },
      yaxis: {
        labels: {
          style: {
            colors: ['#8996a4']
          },
          formatter: function (value: number) {
            return `$${value}K`;
          }
        }
      },
      grid: {
        borderColor: 'var(--bs-border-color)'
      },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    }));
  }, [resolvedTheme, fontFamily]);

  useEffect(() => {
    setChartSeries(data);
  }, [data]);

  return <ReactApexChart options={options} series={chartSeries} type="area" height={370} />;
}
