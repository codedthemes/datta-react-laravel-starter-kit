import { useEffect, useState } from 'react';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import DropDown from './DropDown';
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// chart-options
const categoryChartOptions = {
  chart: {
    type: 'donut',
    height: 295,
    background: 'transparent',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    position: 'bottom'
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%'
      }
    }
  },
  labels: ['Saving', 'Spend', 'Income']
};

// ==============================|| FINANCE - CATEGORY CHART ||============================== //

export default function CategoryChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([25, 50, 25]);

  const [options, setOptions] = useState<ChartProps>(categoryChartOptions);

  useEffect(() => {
    setOptions({
      ...categoryChartOptions,
      chart: { ...categoryChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-warning)', 'var(--bs-primary)', 'var(--bs-success)'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return (
    <MainCard className="text-white">
      <Stack direction="horizontal" className=" align-items-center justify-content-between mb-3">
        <h5 className="mb-0">Category</h5>
        <DropDown className="avatar-s" />
      </Stack>

      <ReactApexChart options={options} series={series} type="donut" height={295} />
    </MainCard>
  );
}
