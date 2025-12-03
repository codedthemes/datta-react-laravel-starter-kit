import { useState, useEffect } from 'react';

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
const shortTermStatsChartOptions = {
  chart: {
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  stroke: {
    curve: 'straight',
    width: 0
  },
  tooltip: {
    x: {
      show: false
    },
    marker: {
      show: false
    }
  }
};

// =============================|| WIDGET - SHORT TERM STATS CHART ||============================== //

export default function ShortTermStatsChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Sales',
      data: [10, 45, 35, 55, 40]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(shortTermStatsChartOptions);

  useEffect(() => {
    setOptions({
      ...shortTermStatsChartOptions,
      chart: { ...shortTermStatsChartOptions.chart, fontFamily: fontFamily },
      xaxis: { ...shortTermStatsChartOptions.xaxis, labels: { style: { colors: '#fff' } } },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [fontFamily, resolvedTheme]);

  return (
    <MainCard title="Last 3 Days" bodyClassName="p-0">
      <Row className="pt-3">
        <Col md={4} xs={6} className="m-b-15 text-center">
          <h3 className="f-w-300">$ 32,42</h3>
          <span className="text-end">
            Mon <strong>+5,93</strong>
          </span>
        </Col>

        <Col md={4} xs={6} className="m-b-15 text-center">
          <h3 className="f-w-300">$ 28,36</h3>
          <span className="text-end">
            Tue <strong>-4,24</strong>
          </span>
        </Col>

        <Col md={4} xs={6} className="m-b-15 text-center">
          <h3 className="f-w-300">$ 59,48</h3>
          <span className="text-end">
            Wed <strong>+12,25</strong>
          </span>
        </Col>
      </Row>

      <ReactApexChart options={options} series={series} type="area" height={245} />
    </MainCard>
  );
}
