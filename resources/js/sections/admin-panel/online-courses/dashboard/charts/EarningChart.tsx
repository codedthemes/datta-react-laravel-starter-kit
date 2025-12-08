import { useEffect, useState } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

interface ChartProp {
  name: string;
  data: number[];
}
interface Props {
  data: ChartProp[];
}

// chart options
const lineChartOptions = {
  chart: {
    type: 'line',
    zoom: { enabled: false },
    toolbar: { show: false }
  },
  xaxis: { axisTicks: { show: false }, axisBorder: { show: false } },
  yaxis: { stepSize: 200 },
  plotOptions: { bar: { borderRadius: 0 } },
  dataLabels: { enabled: false },
  tooltip: { x: { show: false } },
  grid: { show: false }
};

// ==============================|| DASHBOARD - EARNING CHART ||============================== //

export default function EarningChart({ data }: Props) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState<ChartProps>(lineChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      chart: { ...prevState.chart, fontFamily: fontFamily },
      xaxis: {
        ...prevState.xaxis,
        categories: [2018, 2019, 2020, 2021, 2022, 2023]
      },

      colors: ['var(--bs-warning)'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    }));
  }, [resolvedTheme, fontFamily]);

  const [series, setSeries] = useState(data);

  useEffect(() => {
    setSeries(data);
  }, [data]);

  return <ReactApexChart options={options} series={series} type="line" height={225} />;
}
