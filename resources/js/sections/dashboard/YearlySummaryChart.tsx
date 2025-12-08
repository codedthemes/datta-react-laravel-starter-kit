import { useEffect, useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// chart-options
const yearlySummaryChartOptions: ChartProps = {
  chart: {
    type: 'bar',
    height: 245,
    background: 'transparent',
    toolbar: {
      show: false
    }
  },
  series: [
    {
      name: 'Net Profit',
      data: [40, 70, 30, 60]
    },
    {
      name: 'Revenue',
      data: [20, 40, 20, 45]
    }
  ],
  colors: ['#1de9b6', '#a389d4', '#04a9f5'],
  fill: {
    type: 'gradient',
    opacity: 1,
    gradient: {
      shade: 'dark',
      type: 'vertical',
      gradientToColors: ['#1dc4e9', '#899ed4', '#049df5'],
      stops: [0, 100]
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '45%'
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
    categories: ['Q1', 'Q2', 'Q3', 'Q4']
  },
  tooltip: {
    y: {
      formatter: function (val: string) {
        return '$ ' + val + ' thousands';
      }
    }
  },
  legend: {
    show: true,
    position: 'bottom',
    offsetX: 10,
    offsetY: 10,
    labels: { useSeriesColors: false },
    markers: { size: 6, shape: 'circle', strokeWidth: 0 },
    itemMargin: { horizontal: 15, vertical: 8 }
  }
};

// =============================|| E-COMMERCE - YEARLY SUMMARY CHART ||============================== //

export default function YearlySummaryChart({ height }: { height?: number }) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState<ChartProps>(yearlySummaryChartOptions);

  useEffect(() => {
    setOptions({
      ...yearlySummaryChartOptions,
      chart: { ...yearlySummaryChartOptions.chart, fontFamily: fontFamily },
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return (
    <MainCard title="Yearly Summary">
      <Row className="pb-3">
        <Col md={4} xs={6} className="m-b-15 text-center">
          <h3 className="f-w-300">$2356.4</h3>
          <span>Invoiced</span>
        </Col>

        <Col md={4} xs={6} className="m-b-15 text-center">
          <h3 className="f-w-300">$1935.6</h3>
          <span>Profit</span>
        </Col>

        <Col md={4} xs={6} className="m-b-15 text-center">
          <h3 className="f-w-300">$468.9</h3>
          <span>Expenses</span>
        </Col>
      </Row>
      <ReactApexChart options={options} series={options.series} type="bar" height={height || 245} />
    </MainCard>
  );
}
