import { useState } from 'react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';
import Markets from './Markets';
import NewStatistics from './NewsStatistics';
import PageView from './PageView';

// assets
import Image1 from 'assets/images/user/avatar-1.jpg';
import Image2 from 'assets/images/user/avatar-2.jpg';
import Image3 from 'assets/images/user/avatar-3.jpg';

const chartOptions: ChartProps = {
  chart: {
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#1dc4e9'],
  plotOptions: {
    bar: {
      columnWidth: '40%'
    }
  },
  series: [
    {
      data: [48, 30, 25, 30, 20, 40, 30]
    }
  ],
  xaxis: {
    crosshairs: {
      width: 1
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
          return 'Amount Spent:';
        }
      }
    },
    marker: {
      show: false
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
  colors: ['#1de9b6'],
  fill: {
    opacity: 1,
    type: 'gradient',
    gradient: {
      shade: 'light',
      gradientToColors: ['#1dc4e9'],
      shadeIntensity: 0.5,
      type: 'vertical',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  markers: {
    size: 0,
    opacity: 0.9,
    color: '#1de9b6',
    strokeColor: '#fff',
    strokeWidth: 2,
    hover: {
      size: 7
    }
  },
  stroke: {
    width: 0
  },
  series: [
    {
      name: 'series1',
      data: [20, 25, 33, 28, 25, 35, 28]
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
          return 'Visite:';
        }
      }
    },
    marker: {
      show: false
    }
  }
};

const recentUser = [
  {
    image: Image1,
    projectname: 'Isabella Christensen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '11 MAY 12:56',
    iconClass: 'text-success m-r-15',
    badge1: 'Reject',
    badge2: 'Approve'
  },
  {
    image: Image2,
    projectname: 'Mathilde Andersen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '11 MAY 10:35',
    iconClass: 'text-danger m-r-15',
    badge1: 'Reject',
    badge2: 'Approve'
  },
  {
    image: Image3,
    projectname: 'Karla Sorensen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '9 MAY 17:38',
    iconClass: 'text-success m-r-15',
    badge1: 'Rejct',
    badge2: 'Approve'
  },
  {
    image: Image1,
    projectname: 'Ida Jorgensen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '19 MAY 12:56',
    iconClass: 'text-danger m-r-15',
    badge1: 'Rejct',
    badge2: 'Approve'
  },
  {
    image: Image1,
    projectname: 'Albert Andersen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '21 July 12:56',
    iconClass: 'text-success m-r-15',
    badge1: 'Rejct',
    badge2: 'Approve'
  }
];

const TableData = ({ userData }: { userData: { name: string; score: number; up: boolean; avatar: string }[] }) => {
  return (
    <div className="p-4">
      {userData.map((user, index) => (
        <Stack direction="horizontal" key={index} className="align-items-center justify-content-between mb-3">
          <Stack direction="horizontal" className="align-items-center">
            <Image src={user.avatar} roundedCircle width={40} height={40} className="me-3" />
            <span>{user.name}</span>
          </Stack>
          <Stack direction="horizontal" className="align-items-center">
            {user.up ? <i className="fas fa-caret-up text-success f-20" /> : <i className="fas fa-caret-down text-danger f-20" />}
            <span className="ms-2">{user.score}</span>
          </Stack>
        </Stack>
      ))}
    </div>
  );
};

// =============================|| DASHBOARD - CRM PAGE ||============================== //

export default function CRM() {
  const [activeTab, setActiveTab] = useState<string>('home');

  const userData = [
    { name: 'Silje Larsen', score: 3784, up: true, avatar: Image1 },
    { name: 'Storm Hanse', score: 2739, up: false, avatar: Image2 },
    { name: 'Frida Thomse', score: 1032, up: false, avatar: Image3 },
    { name: 'Silje Larsen', score: 8750, up: true, avatar: Image1 },
    { name: 'Storm Hanse', score: 8750, up: true, avatar: Image2 }
  ];

  return (
    <Row>
      <Col md={6} xl={4}>
        <MainCard title="Transactions" subheader={<p className="mb-0">Jun 23 - Jul 23</p>}>
          <Row className="align-items-center justify-content-center">
            <Col xs={6}>
              <h3 className="f-w-300 mb-0 float-left">$ 59,48</h3>
            </Col>
            <Col xs={6}>
              <ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" height={75} />
            </Col>
          </Row>
        </MainCard>

        <MainCard title="Project Rating">
          <Row className="align-items-center justify-content-center">
            <Col xs={6}>
              <Stack direction="horizontal" as="h2" className="f-w-300 align-items-center float-start m-0">
                4.7
                <i className="fas fa-star f-10 ms-2 text-warning" />
              </Stack>
            </Col>
            <Col xs={6}>
              <Stack as="h6" direction="horizontal" className="align-items-center float-end m-0">
                0.4
                <i className="fas fa-caret-up text-success ms-2 f-20" />
              </Stack>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col xl={4} md={6}>
        <NewStatistics />
      </Col>

      <Col xl={4} md={6}>
        <MainCard title="Phone Calls" bodyClassName="p-0">
          <ReactApexChart options={chartOptions1} series={chartOptions1.series} type="area" height={320} />
        </MainCard>
      </Col>

      <Col xl={8} md={12}>
        <MainCard title="Recent Users" className="Recent-Users" bodyClassName="pb-0">
          <Table responsive hover>
            <tbody>
              {recentUser.map((user, index) => (
                <tr key={index}>
                  <td>
                    <Image src={user.image} width="40px" />
                  </td>
                  <td>
                    <h6>{user.projectname}</h6>
                    <p className="mb-0">{user.desc}</p>
                  </td>
                  <td>
                    <i className={`fas fa-circle f-10 ${user.iconClass}`} />
                    {user.date}
                  </td>
                  <td>
                    <Badge bg="success" className="me-2 f-12">
                      {user.badge1}
                    </Badge>
                    <Badge bg="primary" className="me-2 f-12">
                      {user.badge2}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </MainCard>
      </Col>

      <Col>
        <MainCard
          bodyClassName="p-0"
          title={
            <Nav activeKey={activeTab} variant="pills" onSelect={(k) => k && setActiveTab(k)} className="mx-0">
              <Nav.Item>
                <Nav.Link eventKey="home">Today</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="profile">This Week</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="contact">All</Nav.Link>
              </Nav.Item>
            </Nav>
          }
        >
          <Tab.Container activeKey={activeTab} onSelect={(k) => k && setActiveTab(k)}>
            <Tab.Content>
              <Tab.Pane eventKey="home">
                <TableData userData={userData} />
              </Tab.Pane>
              <Tab.Pane eventKey="profile">
                <TableData userData={userData} />
              </Tab.Pane>
              <Tab.Pane eventKey="contact">
                <TableData userData={userData} />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <PageView />
      </Col>

      <Col md={6} xl={4}>
        <MainCard title="Statistical" className="statistial-visit" subheader="Status : live">
          <h3 className="f-w-300">4,445,701</h3>
          <span className="d-block">
            <i className="fas fa-map-marker-alt m-r-10" />
            256 Countries, 5667 Cites
          </span>

          <Stack direction="horizontal" className=" mt-4">
            <div className="flex-shrink-0">
              <h6>Our Overseas visits</h6>
              <ProgressBar children={<ProgressBar now={60} className="bg-brand-color-1" />} />
            </div>
            <div className="flex-grow-1 ms-3">
              <Badge className=" bg-brand-color-1 text-white f-14 f-w-400 float-end">14%</Badge>
            </div>
          </Stack>
          <Stack direction="horizontal" className="align-items-start mt-4">
            <div className="flex-shrink-0">
              <h6>Our Overseas visits</h6>
              <ProgressBar children={<ProgressBar now={60} className="bg-brand-color-2" />} />
            </div>
            <div className="flex-grow-1 ms-3">
              <Badge className=" bg-brand-color-2 text-white f-14 f-w-400 float-end">14%</Badge>
            </div>
          </Stack>

          <Stack direction="horizontal" className=" align-items-start mt-4">
            <div className="flex-shrink-0">
              <h6>Our Overseas visits</h6>
              <ProgressBar children={<ProgressBar now={60} />} />
            </div>
            <div className="flex-grow-1 ms-3">
              <Badge className=" text-white f-14 f-w-400 float-end">14%</Badge>
            </div>
          </Stack>
        </MainCard>
      </Col>

      <Col xl={4} md={12}>
        <Markets />
      </Col>
    </Row>
  );
}
