import { useEffect } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// third-party
import JsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

const chartOptions: ChartProps = {
  series: [
    { name: 'Market Days ', data: [5, 30, 25, 55, 45, 65, 60, 105, 80, 110, 120, 150], color: '#00E396' },
    { name: 'Market Days ALL ', data: [80, 95, 87, 155, 140, 147, 130, 180, 160, 175, 165, 200], color: '#008FFB' }
  ],

  options: {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true,
        type: 'x'
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 6,
      hover: {
        size: 5
      }
    },
    stroke: {
      curve: 'straight',
      width: 2
    },

    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  }
};

const chartOptions1: ChartProps = {
  chart: {
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#1dc4e9'],
  fill: {
    colors: ['#1dc4e9'],
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'vertical',
      gradientToColors: ['#A389D4'],
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 70, 100],
      colorStops: []
    }
  },
  stroke: {
    width: 3,
    curve: 'smooth'
  },
  series: [
    {
      name: 'series1',
      data: [30, 55, 80, 60, 70, 70, 110, 90, 130]
    }
  ],
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

// =============================|| DASHBOARD - CRYPTO ||============================== //

export default function Crypto() {
  useEffect(() => {
    new JsVectorMap({
      selector: '#basic-map',
      map: 'world',
      showTooltip: true,
      zoomOnScroll: true,
      zoomButtons: true,
      zoom: {
        min: 1,
        max: 10
      },
      markers: [
        { coords: [-15.7939, -47.8825], name: 'Brazil' },
        { coords: [24.7743, 47.7439], name: 'Saudi Arabia' },
        { coords: [35.8617, 104.1954], name: 'China' },
        { coords: [61.524, 105.3188], name: 'Russia' }
      ]
    });
  }, []);
  return (
    <Row>
      <Col md={6} xl={4}>
        <MainCard className="bg-brand-color-1 bitcoin-wallet">
          <h5 className="text-white mb-2">Bitcoin Wallet</h5>
          <h2 className="text-white mb-3 f-w-300">$9,302</h2>
          <span className="text-white d-block">Ratings by Market Capitalization</span>
          <i className="fab fa-btc f-70 text-white" />
        </MainCard>
      </Col>
      <Col md={6} xl={4}>
        <MainCard className="bg-brand-color-2 bitcoin-wallet">
          <h5 className="text-white mb-2">Bitcoin Wallet</h5>
          <h2 className="text-white mb-3 f-w-300">$9,302</h2>
          <span className="text-white d-block">Ratings by Market Capitalization</span>
          <i className="fas fa-dollar-sign f-70 text-white" />
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard className="bg-primary bitcoin-wallet">
          <h5 className="text-white mb-2">Bitcoin Wallet</h5>
          <h2 className="text-white mb-3 f-w-300">$8,101</h2>
          <span className="text-white d-block">Ratings by Market Capitalization</span>
          <i className="fas fa-pound-sign f-70 text-white" />
        </MainCard>
      </Col>

      <Col xl={8} md={12}>
        <MainCard title="Statistics">
          <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="line" height={350} />
        </MainCard>
      </Col>

      <Col xl={4} md={12}>
        <MainCard title="Notifications" bodyClassName="p-0">
          <Stack direction="horizontal" className="p-4">
            <div className="me-3 flex-shrink-0">
              <i className="far fa-bell f-30" />
            </div>
            <div className="flex-grow-1 ms-3">
              <h6>New order received</h6>
              <span className="f-12 float-end text-muted">12.56</span>
              <p className="text-muted m-0">2 unread notification</p>
            </div>
          </Stack>

          <Stack direction="horizontal" className="p-4 border-top">
            <div className="me-3 flex-shrink-0">
              <i className="far fa-bell f-30" />
            </div>
            <div className="flex-grow-1 ms-3">
              <h6>New user register</h6>
              <span className="f-12 float-end text-muted">12.36</span>
              <p className="text-muted m-0">xx messages</p>
            </div>
          </Stack>

          <Stack direction="horizontal" className="p-4 border-top">
            <div className="me-3 flex-shrink-0">
              <i className="far fa-bell f-30" />
            </div>
            <div className="flex-grow-1 ms-3">
              <h6>New order register</h6>
              <span className="f-12 float-end text-muted">11.45</span>
              <p className="text-muted m-0">2 read notification</p>
            </div>
          </Stack>

          <Stack direction="horizontal" className="p-4 border-top">
            <div className="me-3 flex-shrink-0">
              <i className="far fa-bell f-30" />
            </div>
            <div className="flex-grow-1 ms-3">
              <h6>New order prepend</h6>
              <span className="f-12 float-end text-muted">9.39</span>
              <p className="text-muted m-0">xx messages</p>
            </div>
          </Stack>
        </MainCard>
      </Col>

      <Col xl={8} md={6}>
        <MainCard title="Users from United States">
          <div id="basic-map" className="set-map hei-350 " />
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="gradient-background" title="Statistics" bodyClassName="p-0">
          <h3 className="f-w-300 p-4">$ 894.39</h3>
          <ReactApexChart options={chartOptions1} series={chartOptions1.series} type="area" height={230} />
        </MainCard>
      </Col>
    </Row>
  );
}
