import { useMemo } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

const chartOptions: ChartProps = {
  series: [
    {
      name: 'News',
      data: [53, 13, 30, 4]
    }
  ],
  chart: {
    toolbar: {
      show: false
    }
  },
  colors: ['#1de9b6', '#a389d4', '#04a9f5', '#f44236'],
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

// =============================|| WIDGET - NEWS STATISTICS ||============================== //

export default function NewsStatistics() {
  const series = useMemo(
    () => [
      {
        name: 'Sport',
        data: [53, 13, 30, 4]
      }
    ],
    []
  );

  return (
    <>
      <MainCard title="News Statistics" className="mb-0" bodyClassName="pl-0 pr-0 pb-2">
        <ReactApexChart options={chartOptions} series={series} type="bar" height={250} />
      </MainCard>
      <MainCard>
        <Row>
          <Col className="text-center">
            <span className="bg-brand-color-1 d-block rounded-circle mx-auto mb-2 wid-10 hei-10"></span>
            <h6 className="mb-2">53</h6>
            <h6 className="mt-2 mb-0">Sport</h6>
          </Col>
          <Col className="text-center">
            <span className="bg-brand-color-2 d-block rounded-circle mx-auto mb-2 wid-10 hei-10"></span>
            <h6 className="mb-2">13</h6>
            <h6 className="mt-2 mb-0">Music</h6>
          </Col>
          <Col className="text-center">
            <span className="bg-primary d-block rounded-circle mx-auto mb-2 wid-10 hei-10"></span>
            <h6 className="mb-2">30</h6>
            <h6 className="mt-2 mb-0">Travel</h6>
          </Col>
          <Col className="text-center">
            <span className="bg-danger d-block rounded-circle mx-auto mb-2 wid-10 hei-10"></span>
            <h6 className="mb-2">4</h6>
            <h6 className="mt-2 mb-0">News</h6>
          </Col>
        </Row>
      </MainCard>
    </>
  );
}
