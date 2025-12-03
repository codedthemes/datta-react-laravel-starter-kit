import { useEffect, useState } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// chart-options
const ageChartOptions = {
  chart: {
    type: 'bar',
    height: 260,
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
  fill: {
    type: 'gradient',
    opacity: 1,
    gradient: {
      shade: 'dark',
      type: 'vertical',
      gradientToColors: ['#1dc4e9', '#899ed4', '#1de9b6', '#a389d4', '#1de9b6', '#a389d4'],
      stops: [0, 100]
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      distributed: true
    }
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ['<20', '30', '40', '50', '60', '>70'],
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

// =============================|| ANALYTICS - AGE CHART ||============================== //

export default function AgeChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      data: [30, 35, 40, 30, 32, 38]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(ageChartOptions);

  useEffect(() => {
    setOptions({
      ...ageChartOptions,
      chart: { ...ageChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-success)', 'var(--bs-purple)', 'var(--bs-success)', 'var(--bs-purple)', 'var(--bs-success)', 'var(--bs-purple)'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [fontFamily, resolvedTheme]);

  return (
    <MainCard title="Age" subheader={<p className="mb-0"> Average 40+</p>} bodyClassName="p-0">
      <ReactApexChart options={options} series={series} type="bar" height={225} />
    </MainCard>
  );
}
