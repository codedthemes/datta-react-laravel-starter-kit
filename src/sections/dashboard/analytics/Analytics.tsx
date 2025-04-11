// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import Age from './Age';
import MainCard from 'components/MainCard';
import Transactions from './Transactions';

// assets
import Avatar1 from 'assets/images/widget/user-1.png';
import Avatar2 from 'assets/images/widget/user-2.png';

const chartOptions: ChartProps = {
  chart: {
    toolbar: {
      show: false
    }
  },
  series: [
    {
      name: 'Net Profit',
      data: [20, 40, 20, 45]
    },
    {
      name: 'Revenue',
      data: [40, 70, 30, 60]
    },
    {
      name: 'Free Cash Flow',
      data: [30, 50, 40, 40]
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
    categories: ['2014', '2015', '2016', '2017']
  },
  tooltip: {
    y: {
      formatter: function (val: string) {
        return '$ ' + val + ' thousands';
      }
    }
  }
};

const chartOptions1: ChartProps = {
  chart: {
    type: 'line',
    height: 245,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#fff'],
  fill: {
    type: 'solid'
  },
  plotOptions: {
    bar: {
      columnWidth: '30%'
    }
  },
  series: [
    {
      data: [45, 30, 55]
    }
  ],
  xaxis: {
    categories: ['2019', '2020', '2021'],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#fff'
      }
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      width: 0
    },
    labels: {
      show: false
    }
  },
  grid: {
    padding: {
      bottom: 0,
      left: 10
    },
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  markers: {
    size: 5,
    colors: '#04a9f5',
    strokeWidth: 2,
    hover: {
      size: 7
    }
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
          return 'Statistics :';
        }
      }
    },
    marker: {
      show: false
    }
  }
};

// =============================|| DASHBOARD - ANALYTICS ||============================== //

export default function Analytics() {
  return (
    <Row>
      <Col md={12} xl={4}>
        <MainCard>
          <h5 className="m-b-15">Register User</h5>
          <h4 className="f-w-300">1205</h4>
          <span className="text-muted">
            <Badge className="bg-brand-color-1 text-white f-12 f-w-40 rounded-pill me-2">20%</Badge>
            Monthly Increase
          </span>
        </MainCard>
      </Col>
      <Col md={6} xl={4}>
        <MainCard>
          <h5 className="m-b-15">Daily User</h5>
          <h4 className="f-w-300">467</h4>
          <span className="text-muted">
            <Badge className="bg-brand-color-1 text-white f-12 f-w-40 rounded-pill me-2">10%</Badge>
            Weekly Increase
          </span>
        </MainCard>
      </Col>
      <Col md={6} xl={4}>
        <MainCard>
          <h5 className="m-b-15">Premium User</h5>
          <h4 className="f-w-300">346</h4>
          <span className="text-muted">
            <Badge className="bg-brand-color-1 text-white f-12 f-w-40 rounded-pill me-2">50%</Badge>
            Yearly Increase
          </span>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="Active-visitor" bodyClassName="text-center">
          <h5 className="mb-4">Active Visitor</h5>
          <i className="fas fa-user-friends f-30 text-success" />
          <h2 className="f-w-300 mt-3">1,285</h2>
          <span className="text-muted">Active Visit On Sites</span>
          <ProgressBar className="mt-4 m-b-40" children={<ProgressBar now={75} className="bg-brand-color-1" />} />
          <Row className="card-active">
            <Col md={4} xs={6}>
              <h4>52%</h4>
              <span className="text-muted">Desktop</span>
            </Col>

            <Col md={4} xs={6}>
              <h4>80%</h4>
              <span className="text-muted">Mobile</span>
            </Col>

            <Col md={4} xs={6}>
              <h4>68%</h4>
              <span className="text-muted">Tablet</span>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <Age />
      </Col>

      <Col md={12} xl={4}>
        <MainCard className=" bg-brand-color-1 visitor" bodyClassName="text-center">
          <Image className="img-female" src={Avatar1} alt="visitor-user" />
          <h5 className="text-white m-0">TOTAL VISITORS</h5>
          <h3 className="text-white m-t-10 f-w-300">235</h3>
          <span className="text-white">20% More than last Month</span> <Image className="img-men" src={Avatar2} alt="visitor-user" />
        </MainCard>

        <MainCard>
          <Row>
            <Col>
              <i className="ti ti-shopping-cart f-30 text-success" />
              <h6 className="m-t-50 m-b-0">Last week’s orders</h6>
            </Col>
            <Col className="text-end">
              <h3 className="text-success f-w-300">589</h3>
              <span className="text-muted d-block">New Order</span>
              <Badge className="bg-brand-color-1 text-white m-t-20">1434</Badge>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col xl={8} md={12}>
        <MainCard title="Statistics">
          <ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" height={350} />
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard title={<p className="mb-0 text-white">Statistics</p>} className="bg-primary">
          <ReactApexChart options={chartOptions1} series={chartOptions1.series} type="line" height={300} />
        </MainCard>
      </Col>
      <Transactions />
    </Row>
  );
}
