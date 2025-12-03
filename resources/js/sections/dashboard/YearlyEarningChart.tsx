import { useEffect, useState } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// chart-options
const yearlyEarningChartOptions = {
  chart: {
    type: 'line',
    background: 'transparent',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },

  stroke: {
    curve: 'straight',
    width: 5
  },
  markers: {
    size: 0,
    hover: {
      size: 5
    }
  },
  grid: {
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
    x: {
      show: false
    },

    marker: {
      show: false
    }
  },

  yaxis: {
    labels: {
      show: false
    }
  },

  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    }
  }
};

// =============================|| E-COMMERCE - YEARLY EARNING CHART ||============================== //

export default function YearlyEarningChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([{ name: 'Market Days ', data: [10, 60, 45, 72, 45, 86] }]);

  const [options, setOptions] = useState<ChartProps>(yearlyEarningChartOptions);

  useEffect(() => {
    setOptions({
      ...yearlyEarningChartOptions,
      chart: { ...yearlyEarningChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-primary)'],
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: {
        mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light'
      }
    });
  }, [resolvedTheme, fontFamily]);

  return (
    <MainCard title="Earnings" subheader={<p className="mb-0">Mon 15 - Sun 21</p>}>
      <div className="earning-price">
        <h3 className="m-0 f-w-300">$894.39</h3>
        <ReactApexChart options={options} series={series} type="line" height={260} />
      </div>
    </MainCard>
  );
}
