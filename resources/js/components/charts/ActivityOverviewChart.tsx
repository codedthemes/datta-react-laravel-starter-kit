import { useEffect, useState } from 'react';

// react-bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// project-imports
import MainCard from '@/components/MainCard';
import useConfig from '@/hooks/useConfig';
import { ThemeMode } from '@/config';
import { getResolvedTheme, setResolvedTheme } from '@/components/setResolvedTheme';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

type ChartSeries = {
  data: number[];
};

const activityOverviewChartOptions = {
  chart: {
    type: 'area',
    height: 50,
    background: 'transparent',
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  yaxis: {
    show: false
  },
  stroke: {
    curve: 'smooth',
    width: 3
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

  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1
  },
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

interface ActivityOverviewChartProps {
  value: string;
  title: string;
  chartcolor?: string;
  label: string;
  day: string;
  series: ChartSeries[];
}

// ==============================|| STAT INDICATOR CARD ||============================== //

export default function ActivityOverviewChart({ data }: { data: ActivityOverviewChartProps[] }) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState<ChartProps>(activityOverviewChartOptions);

  useEffect(() => {
    setOptions({
      ...activityOverviewChartOptions,
      chart: { ...activityOverviewChartOptions.chart, fontFamily: fontFamily },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [fontFamily, resolvedTheme]);

  return (
    <MainCard>
      <Row>
        {data.map((item, index) => {
          const chartNewOptions = { ...options, colors: [item.chartcolor] };

          return (
            <Col xs={6} key={index}>
              <h5>{item.value}</h5>
              <h6>{item.title}</h6>

              <ReactApexChart options={chartNewOptions} series={item.series} type="line" height={50} />

              <h6 className="mt-2 mb-0">
                {item.label}
                <span className="mb-0 m-r-10 m-l-10">{item.day}</span>
              </h6>
            </Col>
          );
        })}
      </Row>
    </MainCard>
  );
}
