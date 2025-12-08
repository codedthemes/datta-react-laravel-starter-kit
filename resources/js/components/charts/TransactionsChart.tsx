import { useEffect, useState } from 'react';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import DropDown from 'sections/dashboard/finance/DropDown';
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

interface UserStatsCardProps {
  title: string;
  dateRange: string;
  amount: string;
  description: string;
  chartColor?: string;
  series: { name: string; data: number[] }[];
}

// ==============================|| TRANSACTIONS CHART ||============================== //

export default function TransactionsChart({ title, dateRange, amount, description, chartColor = '', series = [] }: UserStatsCardProps) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const transactionsChartOptions = {
    chart: {
      type: 'line',
      height: 60,
      background: 'transparent',
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      lineCap: 'round',
      width: 3
    },
    series,
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return '';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };

  const [options, setOptions] = useState<ChartProps>(transactionsChartOptions);

  useEffect(() => {
    setOptions({
      ...transactionsChartOptions,
      chart: { ...transactionsChartOptions.chart, fontFamily: fontFamily },
      colors: [chartColor],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
        <div>
          <h6 className="mb-0">{title}</h6>
          <p className="mb-0 text-muted">{dateRange}</p>
        </div>
        <DropDown className="avatar-xs" />
      </Stack>

      <ReactApexChart options={options} series={series} type="line" height={60} />

      <Stack direction="horizontal" gap={2} className=" align-items-center justify-content-between mt-3">
        <h4 className="mb-0">
          <small className="text-muted">$</small>
          {amount}
        </h4>
        <p className="mb-0 text-muted text-sm">{description}</p>
      </Stack>
    </MainCard>
  );
}
