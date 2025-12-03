import { useEffect, useState } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

interface Props {
  color: string;
  data: number[];
}

// chart options
const areaChartOptions = {
  chart: {
    type: 'line',
    zoom: { enabled: false },
    sparkline: { enabled: true }
  },
  plotOptions: { bar: { borderRadius: 0 } },
  dataLabels: { enabled: false },
  markers: { hover: { size: 5 } },
  tooltip: { x: { show: false } },
  grid: { show: false },
  stroke: { width: 2 }
};

// ==============================|| DASHBOARD - TOTAL CARD CHART ||============================== //

export function TotalChart({ color, data }: Props) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState<ChartProps>(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      chart: { ...prevState.chart, fontFamily: fontFamily },
      colors: [color],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    }));
  }, [color, resolvedTheme]);

  const [series] = useState([{ name: 'Orders', data }]);

  return <ReactApexChart options={options} series={series} type="line" height={48} />;
}
