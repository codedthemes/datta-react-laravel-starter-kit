import { useMemo } from 'react';
// react-bootstrap
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

const chartOptions: ChartProps = {
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '85%'
      }
    }
  },
  colors: ['#1de9b6', '#f4c22b', '#a389d4', '#04a9f5'],
  labels: ['page done', 'page progress', 'page outstanding', 'page started'],
  legend: {
    show: false
  }
};

// =============================|| WIDGET - STATISTICS 5 ||============================== //

export default function Statistics5() {
  const series = useMemo(() => [23, 14, 35, 28], []);

  return (
    <MainCard title="Statistics">
      <ReactApexChart options={chartOptions} series={series} type="donut" height={250} />

      <Row className="mb-3 mt-4">
        <Col>
          <span className="mb-1 text-muted d-block">23%</span>
          <ProgressBar now={23} />
        </Col>
        <Col>
          <span className="mb-1 text-muted d-block">14%</span>
          <ProgressBar now={14} />
        </Col>
      </Row>

      <Row className="mb-2">
        <Col>
          <span className="mb-1 text-muted d-block">35%</span>
          <ProgressBar now={35} />
        </Col>
        <Col>
          <span className="mb-1 text-muted d-block">28%</span>
          <ProgressBar now={28} />
        </Col>
      </Row>
    </MainCard>
  );
}
