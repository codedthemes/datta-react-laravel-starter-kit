import { useState, useEffect } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import { ThemeMode } from '@/config';
import useConfig from '@/hooks/useConfig';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// chart options
const areaChartOptions = {
  chart: {
    height: 350,
    type: 'line',
    stacked: false,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  legend: {
    show: false
  },
  stroke: {
    width: [0, 2],
    curve: 'smooth'
  },
  dataLabels: {
    enabled: false
  }
};

// ==============================|| INVOICE - INCOME AREA CHART ||============================== //

export default function InvoiceIncomeAreaChart({ series }: { series: any }) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState<ChartProps>(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      chart: { ...prevState.chart, fontFamily: fontFamily },
      colors: ['#f4c22b', '#f4c22b'],
      xaxis: {
        type: 'datetime',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          style: {
            colors: ['var(--bs-secondary)']
          }
        },
        axisBorder: {
          show: false,
          color: 'var(--bs-border-color)'
        },
        tickAmount: 11
      },
      yaxis: {
        labels: {
          style: {
            colors: ['var(--bs-secondary)']
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: [0, 1],
          opacityTo: [0.5, 1],
          stops: [0, 100],
          hover: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.15,
            opacityTo: 0.65,
            stops: [0, 96, 100]
          }
        }
      },
      markers: {
        size: [0, 3],
        colors: '#FFF',
        strokeWidth: [0, 2],
        strokeColors: '#f4c22b',
        hover: {
          size: 5,
          colors: '#f4c22b',
          strokeColors: '#FFF'
        }
      },
      grid: {
        borderColor: 'var(--bs-border-color)'
      },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    }));
  }, [resolvedTheme]);

  return <ReactApexChart options={options} series={series} type="line" height={262} />;
}
