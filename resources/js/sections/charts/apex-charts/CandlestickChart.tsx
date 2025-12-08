import { useEffect, useState } from 'react';

// project import
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { candlestickChartData } from '@/data/candlestickChartData';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

const candlestickChartOptions: ChartProps = {
  chart: {
    type: 'candlestick',
    height: 350,
    background: 'transparent'
  },
  fill: {
    type: 'solid'
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  }
};

// ==============================|| APEX CHART - CANDLESTICK CHART ||============================== //

export default function CandleStickChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      data: candlestickChartData
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(candlestickChartOptions);

  useEffect(() => {
    setOptions({
      ...candlestickChartOptions,
      chart: { ...candlestickChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-success)', 'var(--bs-danger)'],
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return <ReactApexChart options={options} series={series} type="candlestick" height={350} />;
}
