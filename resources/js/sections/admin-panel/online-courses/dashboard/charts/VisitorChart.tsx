import { useEffect, useState } from 'react';

// project-imports
import { ThemeMode } from '@/config';
import useConfig from '@/hooks/useConfig';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

interface Props {
  data: { data: number[] }[];
}

// chart options
const barChartOptions = {
  chart: { type: 'bar', toolbar: { show: false } },
  xaxis: { axisTicks: { show: false }, axisBorder: { show: false } },
  plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 4 } },
  dataLabels: { enabled: false },
  stroke: { show: true, width: 3, colors: ['transparent'] },
  fill: { opacity: [1, 0.5] },
  grid: { show: false }
};

// ==============================|| DASHBOARD - VISITOR CHART ||============================== //

export default function VisitorChart({ data }: Props) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState<ChartProps>(barChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      chart: { ...prevState.chart, fontFamily: fontFamily },
      xaxis: {
        ...prevState.xaxis,
        categories: [2018, 2019, 2020, 2021, 2022, 2023]
      },
      colors: ['#1de9b6'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    }));
  }, [resolvedTheme, fontFamily]);

  const [series, setSeries] = useState(data);

  useEffect(() => {
    setSeries(data);
  }, [data]);

  return <ReactApexChart options={options} series={series} type="bar" height={233} />;
}
