import { useEffect, useState } from 'react';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// chart-options
const replayChartOptions = {
  chart: {
    type: 'bar',
    height: 265,
    background: 'transparent',
    toolbar: {
      show: false
    }
  },
  fill: {
    type: 'gradient',
    opacity: 1,
    gradient: {
      shade: 'dark',
      type: 'vertical',
      gradientToColors: ['#1dc4e9', '#899ed4', '#049df5', '#f48f36'],
      stops: [0, 100]
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '65%',
      distributed: true
    }
  },
  dataLabels: {
    enabled: true
  },
  legend: {
    show: false
  },
  grid: {
    show: false
  },
  yaxis: {
    show: false
  },
  xaxis: {
    axisBorder: {
      show: false
    },
    categories: ['Sport', 'Music', 'Travel', 'News']
  }
};

// =============================|| PROJECT - REPLY CHART ||============================== //

export default function ReplyChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Reply',
      data: [53, 13, 30, 4]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(replayChartOptions);

  useEffect(() => {
    setOptions({
      ...replayChartOptions,
      chart: { ...replayChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-success)', 'var(--bs-purple)', 'var(--bs-primary)', 'var(--bs-danger)'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return (
    <>
      <MainCard title="Reply">
        <h3>2.43 h</h3>
        <span className="text-uppercase">average time for first reply</span>

        <ReactApexChart options={options} series={series} type="bar" height={265} />
      </MainCard>
    </>
  );
}
