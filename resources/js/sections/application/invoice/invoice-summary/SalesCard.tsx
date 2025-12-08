import { useEffect, useState } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import useConfig from '@/hooks/useConfig';
import MainCard from '@/components/MainCard';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// chart-options
const invoiceSummaryChartOptions = {
  chart: {
    toolbar: { show: false }
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
      horizontal: false,
      columnWidth: '55%'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val: number) {
        return '$ ' + val + ' thousands';
      }
    }
  }
};

// ==============================|| SALES CARD - INVOICE SUMMARY ||============================== //

export default function SalesCard({ title }: { title: string }) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63]
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91]
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(invoiceSummaryChartOptions);

  useEffect(() => {
    setOptions({
      ...invoiceSummaryChartOptions,
      chart: { ...invoiceSummaryChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-success)', 'var(--bs-purple)', 'var(--bs-primary)'],
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return (
    <MainCard title={title}>
      <ReactApexChart options={options} series={series} type="bar" height={205} />
    </MainCard>
  );
}
