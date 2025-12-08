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
const statisticsChartOptions = {
  chart: {
    type: 'bar',
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
      columnWidth: '35%',
      distributed: true
    }
  },
  stroke: {
    show: false
  },
  dataLabels: {
    enabled: false
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
  },
  tooltip: {
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

// ==============================|| DATA - NEWS STATISTICS CHART ||============================== //

const newsStatisticsData = [
  { label: 'Sport', value: 53, color: 'text-success' },
  { label: 'Music', value: 13, color: 'text-brand-color-2' },
  { label: 'Travel', value: 30, color: 'text-primary' },
  { label: 'News', value: 4, color: 'text-danger' }
];

// =============================|| CRM - NEWS STATISTICS CHART ||============================== //

export default function NewsStatisticsChart() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      name: 'Sport',
      data: [53, 13, 30, 4]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(statisticsChartOptions);

  useEffect(() => {
    setOptions({
      ...statisticsChartOptions,
      chart: { ...statisticsChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-success)', 'var(--bs-purple)', 'var(--bs-primary)', 'var(--bs-danger)'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [fontFamily, resolvedTheme]);

  return (
    <>
      <MainCard title="News Statistics" className="mb-0" bodyClassName="pl-0 pr-0 pb-2">
        <ReactApexChart options={options} series={series} type="bar" height={200} />
      </MainCard>
      <MainCard className="border-top">
        <Row>
          {newsStatisticsData.map((item, index) => (
            <Col key={index} className="text-center">
              <i className={`ti ti-circle-filled f-10 ${item.color} d-block mx-auto mb-2`} />
              <h6 className="mb-2">{item.value}</h6>
              <h6 className="mt-2 mb-0">{item.label}</h6>
            </Col>
          ))}
        </Row>
      </MainCard>
    </>
  );
}
