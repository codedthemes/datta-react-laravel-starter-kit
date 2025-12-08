import { useState, useEffect } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
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
    }
  },
  dataLabels: {
    enabled: false
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
    position: 'bottom',
    offsetX: 10,
    offsetY: 10,
    labels: { useSeriesColors: false },
    markers: { size: 6, shape: 'circle', strokeWidth: 0 },
    itemMargin: { horizontal: 10, vertical: 8 }
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
      borderRadius: 4
    }
  }
};

// ==============================|| MEMBERSHIP - DASHBOARD - ACTIVITY CHART ||============================== //

export default function ActivityChart({ data }: { data: ChartData[] }) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [chartSeries, setChartSeries] = useState(data);
  const [options, setOptions] = useState<ChartProps>(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      chart: { ...prevState.chart, fontFamily: fontFamily },
      colors: ['#1de9b6', '#a5f6e2'],
      stroke: {
        curve: 'monotoneCubic',
        width: 2
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          style: {
            colors: ['#8996a4']
          }
        },
        axisBorder: {
          show: false,
          color: 'var(--bs-border-color)'
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
          }
        },
        max: 600,
        stepSize: 200
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

  return <ReactApexChart options={options} series={chartSeries} type="area" height={225} />;
}
