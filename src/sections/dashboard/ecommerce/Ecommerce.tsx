import { useState } from 'react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Sale from 'assets/images/widget/shape5.png';

type EarningsData = {
  [key: string]: string;
};

const chartOptions: ChartProps = {
  chart: {
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
  }
};

// =============================|| DASHBOARD - ECOMMERCE ||============================== //

export default function Ecommerce() {
  const [key, setKey] = useState<string>('mon');
  const earningsData: EarningsData = {
    mon: '359,234',
    tue: '245,987',
    wed: '312,456',
    thu: '400,120',
    fri: '450,234',
    sat: '380,987',
    sun: '270,345'
  };

  const applicationList = [
    {
      idnumber: '#467',
      code: '8765482',
      date: 'November 14, 2017',
      budget: '$ 874.23',
      status: 'Active',
      ratings: 4,
      badgeClass: 'brand-color-1 f-12',
      iconclass: ''
    },
    {
      idnumber: '#466',
      code: '2366482',
      date: 'November 13, 2017',
      budget: '$ 235.34',
      status: 'NotActive',
      ratings: 3,
      badgeClass: 'brand-color-2 f-12',
      iconclass: ''
    },
    {
      idnumber: '#465',
      code: '8832638',
      date: 'October 14, 2017',
      budget: '$ 233.46',
      status: 'Active',
      ratings: 2,
      badgeClass: 'brand-color-1 f-12',
      iconclass: ''
    },
    {
      idnumber: '#464',
      code: '9632638',
      date: 'December 17, 2017',
      budget: '$ 133.46',
      status: 'Not Active',
      ratings: 1,
      badgeClass: 'brand-color-2 f-12',
      iconclass: ''
    },
    {
      idnumber: '#463',
      code: '3332538',
      date: 'July 14, 2017',
      budget: '$ 244.46',
      status: 'Active',
      ratings: 3,
      badgeClass: 'brand-color-1 f-12',
      iconclass: ''
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <>
        {[...Array(5)].map((_, i) => (
          <i key={i} className={`fa fa-star f-18 ${i < rating ? 'text-warning' : 'text-muted'}`} />
        ))}
      </>
    );
  };

  const chartOptions1: ChartProps = {
    series: [{ name: 'Market Days ', data: [10, 60, 45, 72, 45, 86] }],

    options: {
      chart: {
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },

      stroke: {
        curve: 'straight',
        width: 6
      },
      markers: {
        size: 4,
        hover: {
          size: 5
        }
      },
      grid: {
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

      tooltip: {
        x: {
          show: false
        },

        marker: {
          show: false
        }
      },

      yaxis: {
        labels: {
          show: false
        }
      },

      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      colors: ['#44DADD']
    }
  };

  return (
    <Row>
      <Col md={6} xl={4}>
        <MainCard>
          <h5>Online Orders</h5>
          <Stack direction="horizontal" as="h6" className="text-muted align-items-center justify-content-between m-t-30">
            Delivery Orders<span className="float-end f-18 ">237 / 400</span>
          </Stack>
          <ProgressBar className="m-t-10" children={<ProgressBar now={65} className="bg-brand-color-1" />} />
          <span className="text-muted mt-2 d-block">37% Done</span>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard>
          <h5>Pending Orders</h5>
          <Stack direction="horizontal" as="h6" className="text-muted align-items-center justify-content-between m-t-30">
            pending Orders<span className="float-end f-18">100 / 500</span>
          </Stack>
          <ProgressBar className="m-t-10" children={<ProgressBar now={50} className="bg-brand-color-2" />} />
          <span className="text-muted mt-2 d-block">20% pending</span>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard>
          <h5>Return Orders</h5>
          <Stack direction="horizontal" as="h6" className="text-muted align-items-center justify-content-between m-t-30">
            Return Orders
            <span className="float-end f-18 ">50 / 400</span>
          </Stack>
          <ProgressBar className="m-t-10" now={40} />
          <span className="text-muted mt-2 d-block">10% Return</span>
        </MainCard>
      </Col>
      <Col xl={8} md={12}>
        <MainCard title="Yearly Summary">
          <Row className="pb-3">
            <Col md={4} xs={6} className="m-b-15 text-center">
              <h3 className="f-w-300">$ 2356.4</h3>
              <span>Invoiced</span>
            </Col>

            <Col md={4} xs={6} className="m-b-15 text-center">
              <h3 className="f-w-300">$ 1935.6</h3>
              <span>Profit</span>
            </Col>

            <Col md={4} xs={6} className="m-b-15 text-center">
              <h3 className="f-w-300">$ 468.9</h3>
              <span>Expenses</span>
            </Col>
          </Row>
          <ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" height={255} />
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="bg-brand-color-1 earning-date" title={<span className="text-white">Earnings</span>}>
          <h2 className="text-white mb-3 f-w-300">
            {earningsData[key as keyof EarningsData]}
            <i className="ti ti-arrow-up" />
          </h2>
          <span className="text-white mb-4 d-block">TOTAL EARNINGS</span>

          {/* Navigation Tabs for Days */}
          <Nav
            variant="pills"
            className="justify-content-center align-items-center"
            activeKey={key}
            onSelect={(selectedKey: string | null) => setKey(selectedKey ?? 'mon')}
          >
            {Object.keys(earningsData).map((day) => (
              <Nav.Item key={day}>
                <Nav.Link eventKey={day} className={`text-dark ${key === day ? 'bg-white text-dark' : 'text-white'}`}>
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </MainCard>

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

      <Col xl={8} md={6}>
        <MainCard title="Full Width Table" bodyClassName="pb-0">
          <Table responsive hover>
            <thead>
              <tr>
                <th>Id NUMBER</th>
                <th>CODE</th>
                <th>DATE</th>
                <th>BUDGET</th>
                <th>Status</th>
                <th className="text-end">RATINGS</th>
              </tr>
            </thead>
            <tbody>
              {applicationList.map((user, index) => (
                <tr key={index}>
                  <td>{user.idnumber}</td>
                  <td>{user.code}</td>
                  <td>{user.date}</td>
                  <td>{user.budget}</td>
                  <td>
                    <Badge bg={user.badgeClass}>{user.status}</Badge>
                  </td>
                  <td className="text-end">{renderStars(user.ratings)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard title="Earnings" subheader={<p className="d-block">Mon 15 - Sun 21</p>}>
          <div className="earning-price mb-4">
            <h3 className="m-0 f-w-300">$ 894.39</h3>
            <ReactApexChart options={chartOptions1.options} series={chartOptions1.series} type="line" height={210} />
          </div>
        </MainCard>
      </Col>
    </Row>
  );
}
