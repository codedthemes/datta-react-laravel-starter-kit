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
    id: 'new-stack-chart',
    height: 100,
    type: 'area',
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
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
  plotOptions: {
    bar: {
      borderRadius: 0
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  stroke: {
    width: 1,
    curve: 'smooth'
  },
  grid: {
    show: false
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    }
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      formatter(val: number) {
        return `$ ${val}`;
      }
    }
  }
};

interface InvoiceChartProps {
  color: string;
  data: number[];
}

// ==============================|| INVOICE - CHART ||============================== //

export default function InvoiceChart({ color, data }: InvoiceChartProps) {
  const { mode } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState<ChartProps>(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      chart: {
        ...prevState.chart,
        offsetX: 8
      },
      colors: [color],
      theme: {
        mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light'
      }
    }));
  }, [resolvedTheme]);

  const [series] = useState([
    {
      name: 'Sales',
      data: data
    }
  ]);

  return <ReactApexChart options={options} series={series} type="area" height={72} />;
}
