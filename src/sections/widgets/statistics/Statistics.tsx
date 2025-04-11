import { useMemo } from 'react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';
import MontlyEarnings from './MontlyEarnings';
import Orders from './Orders';
import Offer from './Offer';
import ProductSummary from './ProductSummary';
import Rating from './Ratings';
import Sales from './Sales';
import Tasks from './Tasks';
import TotalLeads from './TotalLeads';
import TotalLike from './TotalLike';
import TodayMontlyYearSales from './TodayMontlyYearSales';
import Users from './Users';
import Wallet from './Wallet';

// assets
import Avatar1 from 'assets/images/widget/user-1.png';
import Avatar2 from 'assets/images/widget/user-2.png';
import Avater4 from 'assets/images/widget/shape1.png';
import Avater5 from 'assets/images/widget/shape2.png';
import Avater6 from 'assets/images/widget/shape3.png';
import Earnings from 'assets/images/widget/shape6.png';
import Home from 'assets/images/widget/shape4.png';
import Sale from 'assets/images/widget/shape5.png';

const chartOptions7: ChartProps = {
  chart: {
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
    width: 2
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
  colors: ['#ff3366']
};

const chartOptions8: ChartProps = {
  chart: {
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
    width: 2
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
  colors: ['#ff3366']
};

const chartOptions9: ChartProps = {
  chart: {
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
    width: 2
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
  colors: ['#9DABDA']
};

const chartOptions10: ChartProps = {
  chart: {
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
    width: 2
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
  }
};

// =============================|| WIDGET - STATISTICS ||============================== //

export default function Statistics() {
  const series5 = useMemo(
    () => [
      {
        name: 'Car',
        data: [45, 66, 41, 89, 25, 44, 9, 54]
      }
    ],
    []
  );
  const series6 = useMemo(
    () => [
      {
        name: 'Car',
        data: [54, 9, 44, 25, 89, 41, 66, 45]
      }
    ],
    []
  );
  return (
    <Row>
      <Sales />

      <Col md={6} xl={4}>
        <MainCard title="Filter" subheader={<p className="mb-0">Distance Filter</p>}>
          <h3 className="f-w-300">4 - 25 Miles</h3>
          <Row className="m-t-30">
            <Col xs={6} className="p-r-0">
              <div className="d-grid">
                <Button className="text-uppercase ">Add Friend</Button>
              </div>
            </Col>
            <Col xs={6}>
              <div className="d-grid">
                <Button className="text-uppercase border" variant="outline-secondary">
                  Message
                </Button>
              </div>
            </Col>
          </Row>
        </MainCard>
      </Col>
      <Col md={6} xl={4}>
        <Card>
          <Card.Body className="border-bottom">
            <Row as={Stack} direction="horizontal" className="align-items-center">
              <Col xs="auto">
                <i className="ti ti-bolt f-30 text-success" />
              </Col>
              <Col>
                <h3 className="f-w-300">235</h3>
                <span className="d-block text-uppercase">total ideas</span>
              </Col>
            </Row>
          </Card.Body>

          <Card.Body>
            <Row as={Stack} direction="horizontal" className="align-items-center">
              <Col xs="auto">
                <i className="ti ti-map-pin f-30 text-primary" />
              </Col>
              <Col>
                <h3 className="f-w-300">26</h3>
                <span className="d-block text-uppercase">total locations</span>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>

      <Col md={12} xl={4}>
        <Card>
          <Card.Body className="border-bottom">
            <Row as={Stack} direction="horizontal" className="align-items-center">
              <Col xs="auto">
                <i className="ti ti-sun f-40 text-success" />
              </Col>
              <Col>
                <h2 className="f-w-300">
                  26° <span className="m-r-3 f-14 text-muted">Sunny</span>
                </h2>
                <span className="d-block text-muted">Monday 12:00 PM</span>
              </Col>
            </Row>
          </Card.Body>
          <Card.Body>
            <Row as={Stack} className="align-items-center">
              <Col sm={12} className="pt-2 pb-1">
                <span>Wind</span>
                <span className="float-end text-muted">ESE 14 mph</span>
              </Col>

              <Col sm={12} className="pt-2 pb-1">
                <span>Humidity</span>
                <span className="float-end text-muted">78%</span>
              </Col>

              <Col sm={12} className="pt-2 pb-1">
                <span>Pressure</span>
                <span className="float-end text-muted">27.64 in</span>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>

      <Col md={12} xl={4}>
        <MainCard className="bg-brand-color-2">
          <Row as={Stack} direction="horizontal" className="align-items-center">
            <Col className="col-auto">
              <i className="ti ti-sun f-40 text-white" />
            </Col>
            <Col>
              <h2 className="f-w-300 text-white ">
                26° <span className="m-r-3 f-14 ">Sunny</span>
              </h2>
              <span className="d-block text-white">Monday 12:00 PM</span>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <Card className="table-card">
          <Row className="row-table">
            <div className="col-auto bg-brand-color-1 text-white p-t-50 p-b-50">
              <i className="ti ti-package f-40" />
            </div>
            <Col className="text-center">
              <span className="text-uppercase d-block m-b-10">New Products</span>
              <h3 className="f-w-300">235</h3>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col md={6} xl={4}>
        <MainCard className="rides-bar">
          <Row as={Stack} direction="horizontal" className="align-items-center">
            <div className="col-auto">
              <i className="ti ti-shopping-cart f-30 text-white rides-icon" />
            </div>
            <Col>
              <h3 className="f-w-300">383 Rides</h3>
              <span>
                Last week 295 <strong className="text-success f-w-300">(+88)</strong>
              </span>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard className=" bg-brand-color-1 visitor" bodyClassName="text-center">
          <Image className="img-female" src={Avatar1} alt="visitor-user" />
          <h5 className="text-white m-0">TOTAL VISITORS</h5>
          <h3 className="text-white m-t-10 f-w-300">235</h3>
          <span className="text-white">20% More than last Month</span> <Image className="img-men" src={Avatar2} alt="visitor-user" />
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard>
          <Row as={Stack} direction="horizontal" className="align-items-center">
            <div className="col-auto">
              <i className="ti ti-map-pin f-30 text-primary" />
            </div>
            <Col className="text-end">
              <h3 className="f-w-300">235</h3>
              <h5 className="d-block text-uppercase text-muted">Impression</h5>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col>
        <MainCard className="bg-brand-color-1">
          <Row>
            <Col className="text-center">
              <h3 className="text-white f-w-300 m-b-10">598</h3>
              <span className="text-white text-uppercase">Pending Users</span>
            </Col>
            <Col className="text-end">
              <span className="text-white d-block p-1">Last Month</span>
              <span className="text-white d-block p-1">204</span>
              <Stack direction="horizontal" className="text-white justify-content-end align-items-center gap-1 p-1">
                <i className="fas fa-caret-up text-white f-26" /> 56.68%
              </Stack>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
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

      <Col md={6} xl={4}>
        <MainCard className="bg-brand-color-1">
          <h4 className="text-white text-uppercase text-center">Savings Account</h4>
          <Row className="m-t-10 p-t-20">
            <Col className="text-center">
              <h4 className="text-white f-w-300">$2,456.78</h4>
              <p className="text-white d-block">Balance</p>
            </Col>
            <Col className="text-center">
              <h4 className="text-white f-w-300">$867.00</h4>
              <p className="text-white d-block">Expenses</p>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="profit-bar">
          <Row>
            <Col>
              <h5 className="f-w-300">Total Profit</h5>
              <h3 className="text-success f-w-400 m-t-10">$1,783</h3>
            </Col>
            <Col>
              <i className="fas fa-money-bill-alt text-white f-20 float-end" />
            </Col>
          </Row>
          <h6 className="m-t-20 text-muted">
            <Badge className="bg-brand-color-1 text-white m-r-10">+11%</Badge>From Previous Month
          </h6>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard className="bg-brand-color-2" bodyClassName="text-center text-white">
          <i className="fas fa-chart-line f-30  m-b-20" />
          <h5 className="text-white m-b-12">Total Growth</h5>
          <h3 className="text-white f-w-300">2,80,500</h3>
          <span>80% More than last Month</span>
        </MainCard>
      </Col>
      <Col md={6} xl={4}>
        <MainCard title={<h5 className="text-white">Timer</h5>} className="bg-brand-color-1" bodyClassName="text-center">
          <h2 className="f-w-300 m-b-30 text-white">00:24:38</h2>
          <i className="ti ti-player-play f-50 text-white d-block m-b-25" />
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="bg-brand-color-1" bodyClassName="text-center">
          <i className="fas fa-users f-50 text-white m-b-20" />
          <h5 className="text-white m-b-15">Total Assets</h5>
          <h3 className="text-white f-w-300">3,85,600</h3>
          <span className="text-white">60% More than last Month</span>
        </MainCard>
      </Col>

      <Tasks />
      <Users />
      <Rating />
      <TotalLeads />
      <Col md={12} xl={4}>
        <MainCard>
          <h5 className="mb-4">Your Portfolio Balance</h5>
          <Row className="align-items-center justify-between-center">
            <Col>
              <h3 className="f-w-300">$193,700</h3>
            </Col>
            <Col xs="auto">
              <span className="text-success f-18">
                15% <i className="ti ti-arrow-up-right f-20" />
              </span>
            </Col>
          </Row>

          <Row className="m-t-25">
            <Col xs={6}>
              <div className="d-grid">
                <Button className="text-uppercase ">Deposit</Button>
              </div>
            </Col>

            <Col xs={6}>
              <div className="d-grid">
                <Button className="text-uppercase" variant="outline-secondary">
                  withdraw
                </Button>
              </div>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="bg-brand-color-1">
          <Row className=" align-items-center justify-content-center">
            <Col>
              <h4 className="text-white">Profit</h4>
            </Col>
            <Col>
              <h2 className="text-white text-end f-w-300">$3,764</h2>
            </Col>
          </Row>

          <div className="m-t-50">
            <h6 className="text-white">
              Monthly Profit <span className="float-end text-white">$340</span>
            </h6>
            <h6 className="text-white mt-3">
              Weekly Profit <span className="float-end text-whitw">$150</span>
            </h6>
          </div>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard>
          <h5 className="mb-4">Review With Emotions</h5>

          <div className="review-emotion mb-3">
            <Row className=" align-items-center justify-content-center">
              <Col>
                <span>
                  <i className="far fa-smile f-20 text-success" />
                </span>
              </Col>
              <Col xs="auto">
                <h5 className="m-0">235</h5>
              </Col>
              <Col className="text-end">
                <span>Google Chrome</span>
              </Col>
            </Row>
          </div>

          <div className="review-emotion mb-3">
            <Row className=" align-items-center justify-content-center">
              <Col>
                <span>
                  <i className="fas fa-smile text-secondary f-20" />
                </span>
              </Col>
              <Col xs="auto">
                <h5 className="m-0">95</h5>
              </Col>
              <Col className="text-end">
                <span>Mozilla Firefox</span>
              </Col>
            </Row>
          </div>

          <div className="review-emotion mb-3">
            <Row className=" align-items-center justify-content-center">
              <Col>
                <span>
                  <i className="far fa-smile text-danger f-20" />
                </span>
              </Col>
              <Col xs="auto">
                <h5 className="m-0">18</h5>
              </Col>
              <Col className="text-end">
                <span>Internet Explore</span>
              </Col>
            </Row>
          </div>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard className=" bg-brand-color-1 card-Revenue">
          <h5 className="text-white">Total Revenue</h5>
          <Row className="align-items-center justify-between-center">
            <Col xs="auto">
              <i className="ti ti-file-text f-30 text-white" />
            </Col>

            <Col>
              <div className="float-end text-white me-4">
                <h6 className="text-white mb-2">This Month</h6>
                <span className="d-block mb-2">$ 2018</span> <span>+175 (22.5%)</span>
              </div>
            </Col>
          </Row>
        </MainCard>
      </Col>
      <Col md={6} xl={4}>
        <MainCard className="bg-brand-color-1 Invoice-bar">
          <div className="text-end">
            <Badge className="text-body rounded-pill f-14" bg="white">
              monthly
            </Badge>
          </div>

          <Row>
            <Col xs="auto">
              <i className="fas fa-file-alt f-30 text-white" />
            </Col>

            <Col>
              <h5 className="text-white">Invoices</h5>
              <h3 className="text-white">450</h3>
              <ProgressBar now={50} variant="white" className="mt-3" />
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="bg-brand-color-1 location-sale">
          <i className="card-icon fas fa-map-marker-alt text-c-purple f-30" />

          <h5 className="text-white mt-3">
            Location Sale
            <span className="float-end">
              23% <i className="fas fa-arrow-down text-white" />
            </span>
          </h5>

          <Stack direction="horizontal" as="h3" className="text-white align-items-center justify-content-between m-t-50 mb-0">
            $ 1372,05 <span className="float-end f-16">+ $23,13 (12%)</span>
          </Stack>
        </MainCard>
      </Col>
      <Col md={12} xl={4}>
        <MainCard className="card-Impression">
          <Row className="align-items-center justify-between-cetner">
            <Col>
              <h5 className="mb-3">Impression</h5>
              <h3 className="mb-2 f-w-300">1,563</h3>
              <span className="text-muted">May 23 - June 01 (2017)</span>
            </Col>
            <Col xs="auto">
              <i className="fas fa-eye text-white f-20" />
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard className="card-Impression">
          <Row className="align-items-center justify-between-cetner">
            <Col>
              <h5 className="mb-3">Impression</h5>
              <h3 className="mb-2 f-w-300">2,013</h3>
              <span className="text-muted">July 01 - June 01 (2016)</span>
            </Col>
            <Col xs="auto">
              <i className="fas fa-dolly text-white f-20" />
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard className="card-Impression">
          <Row className="align-items-center justify-between-cetner">
            <Col>
              <h5 className="mb-3">Email Sent</h5>
              <h3 className="mb-2 f-w-300">2,013</h3>
              <span className="text-muted">Sep 23 - Nov 06 (2015)</span>
            </Col>
            <Col xs="auto">
              <i className="fas fa-envelope text-white f-20" />
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard className=" card-customer">
          <Row className="align-items-center justify-between-center">
            <Col>
              <h2 className="mb-2 f-w-300">3210</h2>
              <h5 className="text-muted mb-0">Happy Customer</h5>
            </Col>
            <Col xs="auto">
              <i className="ti ti-users f-30 text-white bg-brand-color-1" />
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className=" card-customer">
          <Row className="align-items-center justify-between-center">
            <Col>
              <h2 className="mb-2 f-w-300">432</h2>
              <h5 className="text-muted mb-0">Award Winning</h5>
            </Col>
            <Col xs="auto">
              <i className="ti ti-award  f-30 text-white bg-brand-color-2" />
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className=" card-customer">
          <Row className="align-items-center justify-between-center">
            <Col>
              <h2 className="mb-2 f-w-300">4230</h2>
              <h5 className="text-muted mb-0">Project Completed</h5>
            </Col>
            <Col xs="auto">
              <i className="far fa-check-square f-30 text-white bg-brand-color-1" />
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard className="bg-brand-color-2 ticket-customer">
          <Row className="align-items-center justify-content-center">
            <Col xs="auto">
              <h2 className="text-white mb-0 f-w-300">286</h2>
            </Col>
            <Col>
              <span className="text-white d-block">+134</span>
              <span className="text-white">Since last week</span>
            </Col>
          </Row>
          <h5 className="text-white f-w-300 mt-4">Ticket Answered</h5>
          <i className="fas fa-file-alt text-white f-70" />
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard bodyClassName="ticket-visitor">
          <h3 className="mb-2">7210</h3>
          <h5 className="text-muted f-w-300 mb-4">Visitors</h5>
          <ProgressBar className="m-t-10" children={<ProgressBar now={75} label="75%" className="bg-brand-color-2" />} />
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="bg-brand-color-2" bodyClassName=" customer-visitor">
          <h2 className="text-white text-end mt-2 f-w-300">3254</h2>
          <span className="text-white text-end d-block">Customers</span>
          <i className="fas fa-globe text-white" />
        </MainCard>
      </Col>

      <TotalLike />
      <Orders />
      <Offer />
      <MontlyEarnings />
      <TodayMontlyYearSales />
      <Col md={6} xl={4}>
        <MainCard className="project-task">
          <Row className="align-items-center justify-content-center">
            <Col>
              <h5 className="m-0">
                <i className="far fa-edit m-r-10" />
                Project Task
              </h5>
            </Col>
            <Col xs="auto">
              <Badge className="bg-brand-color-1 text-white f-14 f-w-400 float-end">23% Done</Badge>
            </Col>
          </Row>
          <h6 className="text-muted mt-4 mb-3">Complete Task : 6/10</h6>
          <ProgressBar className="m-t-10" children={<ProgressBar now={58} className="bg-brand-color-1" />} />
          <h6 className="mt-3 mb-0 text-center text-muted">Project Team : 28 Persons</h6>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard>
          <h5 className="mb-4">Sales Statistics</h5>
          <h3 className="mb-4">23,0598</h3>
          <span className="text-muted d-block">Top selling items statistic by last month</span>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className=" card-event">
          <Row className="align-items-center justify-content-center">
            <Col>
              <h5 className="m-0">Upcoming Event</h5>
            </Col>
            <Col xs="auto">
              <Badge className=" bg-brand-color-2 text-white f-14 f-w-400 float-end">34%</Badge>
            </Col>
          </Row>

          <h2 className="mt-2 f-w-300">
            45<sub className="text-muted f-14">Competitors</sub>
          </h2>
          <h6 className="text-muted mt-3 mb-0">You can participate in event</h6>
          <i className="fab fa-angellist text-c-purple f-50" />
        </MainCard>
      </Col>
      <Wallet />
      <ProductSummary />
      <Col md={6} xl={4}>
        <MainCard>
          <Row className=" align-items-center justify-content-center">
            <Col>
              <h3 className="text-success">2,02,150</h3>
              <h5>Total Orders</h5>
            </Col>
            <Col className=" text-end">
              <Image src={Avater4} alt="activity-user" />
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard>
          <Row className=" align-items-center justify-content-center">
            <Col>
              <h3 className="text-danger">8940</h3>
              <h5>New Orders</h5>
            </Col>
            <Col className=" text-end">
              <Image src={Avater5} alt="activity-user" />
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard>
          <Row className=" align-items-center justify-content-center">
            <Col>
              <h3 className="text-success">$52,510</h3>
              <h5>Total Revenue</h5>
            </Col>
            <Col className=" text-end">
              <Image src={Avater6} alt="activity-user" />
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="bg-brand-color-1">
          <Row className=" align-items-center justify-content-center">
            <Col xs="auto">
              <Image src={Home} alt="activity-user" />
            </Col>
            <Col>
              <h2 className="text-white f-w-300">520</h2>
              <h5 className="text-white">All Properties</h5>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="bg-brand-color-2">
          <Row className=" align-items-center justify-content-center">
            <Col xs="auto">
              <Image src={Sale} alt="activity-user" />
            </Col>
            <Col>
              <h2 className="text-white f-w-300">375</h2>
              <h5 className="text-white">Sale Product</h5>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard className="bg-brand-color-1">
          <Row className=" align-items-center justify-content-center">
            <Col xs="auto">
              <Image src={Earnings} alt="activity-user" />
            </Col>
            <Col>
              <h2 className="text-white f-w-300">$874</h2>
              <h5 className="text-white">Total Earnings</h5>
            </Col>
          </Row>
        </MainCard>
      </Col>
      <Col md={12} xl={4}>
        <MainCard>
          <Row>
            <Col xs={6}>
              <h5>2,456</h5>
              <h6>Total Sales</h6>
              <ReactApexChart options={chartOptions7} series={series5} type="line" height={50} width={128} />
              <h6 className="mt-2 mb-0">
                2567<span className="m-r-10 m-l-10">Today</span>
              </h6>
            </Col>
            <Col xs={6}>
              <h5>4,679</h5>
              <h6>Total User</h6>
              <ReactApexChart options={chartOptions8} series={series6} type="line" height={50} width={128} />
              <h6 className="mt-2 mb-0">
                7896<span className="m-r-10 m-l-10">Today</span>
              </h6>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard>
          <Row>
            <Col xs={6}>
              <h5>1,456</h5>
              <h6>Total Revenue</h6>
              <ReactApexChart options={chartOptions9} series={series5} type="line" height={50} width={128} />
              <h6 className="mt-2 mb-0">
                7423<span className="m-r-10 m-l-10">Yesterday</span>
              </h6>
            </Col>
            <Col xs={6}>
              <h5>5,652</h5>
              <h6>Total User</h6>
              <ReactApexChart options={chartOptions9} series={series6} type="line" height={50} width={128} />
              <h6 className="mt-2 mb-0">
                9632<span className="m-r-10 m-l-10">Today</span>
              </h6>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard>
          <Row>
            <Col xs={6}>
              <h5>4,456</h5>
              <h6>Total Order</h6>
              <ReactApexChart options={chartOptions10} series={series5} type="line" height={50} width={128} />
              <h6 className="mt-2 mb-0">
                4532<span className="m-r-10 m-l-10">Today</span>
              </h6>
            </Col>
            <Col xs={6}>
              <h5>6,325</h5>
              <h6>Total User</h6>
              <ReactApexChart options={chartOptions10} series={series6} type="line" height={50} width={128} />
              <h6 className="mt-2 mb-0">
                4532
                <span className="m-r-10 m-l-10">Tomorrow</span>
              </h6>
            </Col>
          </Row>
        </MainCard>
      </Col>
    </Row>
  );
}
