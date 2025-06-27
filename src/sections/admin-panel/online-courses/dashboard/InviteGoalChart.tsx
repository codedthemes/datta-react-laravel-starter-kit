// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

const series = [76];

// chart-options
const chartOptions: ChartProps = {
  chart: {
    offsetY: -10
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: '60%'
      },
      track: {
        background: '#EAEAEA', // Background color of the track
        strokeWidth: '100%'
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          fontSize: '16px',
          fontWeight: 600,
          color: '#000'
        }
      }
    }
  },
  fill: {
    colors: ['#1EADFF'] // Adjust color as needed
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['Progress']
};

// ===============================|| DASHBOARD - INVITE GOAL CHART ||============================== //

export default function InviteGoalChart() {
  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between">
        <h5 className="mb-1">Invites goal</h5>
        <Dropdown>
          <Dropdown.Toggle bsPrefix="false" className="avatar avatar-s btn-link-secondary p-0 border-0">
            <i className="ti ti-dots-vertical f-18" />
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item>Today</Dropdown.Item>
            <Dropdown.Item>Weekly</Dropdown.Item>
            <Dropdown.Item>Monthly</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
      <ReactApexChart options={chartOptions} series={series} type="radialBar" height={320} />
      <div className="text-center">
        <Badge bg="light-success" className="rounded-pill f-12 py-2 px-3">
          +10%
        </Badge>
        <p className="text-muted mb-1">You succeed earn $240 today, its higher than yesterday</p>

        <Row>
          <Col xs={4}>
            <div className="text-center d-inline-block px-md-3">
              <p className="mb-1 text-muted">Target</p>
              <h5 className="d-inline-flex align-items-center gap-1 mb-0">
                $20k <i className="ti ti-arrow-narrow-down text-danger" />
              </h5>
            </div>
          </Col>
          <Col xs={4}>
            <div className="text-center d-inline-block px-md-3">
              <p className="mb-1 text-muted">Revenue</p>
              <h5 className="d-inline-flex align-items-center gap-1 mb-0">
                $16k <i className="ti ti-arrow-narrow-up text-success" />
              </h5>
            </div>
          </Col>
          <Col xs={4}>
            <div className="text-center d-inline-block px-md-3">
              <p className="mb-1 text-muted">Today</p>
              <h5 className="d-inline-flex align-items-center gap-1 mb-0">
                $1.5k <i className="ti ti-arrow-narrow-down text-danger" />
              </h5>
            </div>
          </Col>
        </Row>
      </div>
    </MainCard>
  );
}
