import { useMemo, useState } from 'react';

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

// assets
import Avater1 from 'assets/images/user/avatar-1.jpg';
import Avater2 from 'assets/images/user/avatar-2.jpg';
import Avater3 from 'assets/images/user/avatar-3.jpg';

const userData = [
  { name: 'Silje Larsen', score: 3784, up: true, avatar: Avater1 },
  { name: 'Storm Hanse', score: 2739, up: false, avatar: Avater3 },
  { name: 'Frida Thomse', score: 1032, up: false, avatar: Avater1 },
  { name: 'Silje Larsen', score: 8750, up: true, avatar: Avater2 },
  { name: 'Storm Hanse', score: 8750, up: true, avatar: Avater3 }
];

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
      columnWidth: '65%',
      distributed: true
    }
  },
  dataLabels: {
    enabled: true
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
  }
};

const chartOptions1: ChartProps = {
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

function TableData() {
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
}

// =============================|| DASHBOARD - PROJECT ||============================== //

export default function Project() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const series = useMemo(
    () => [
      {
        name: 'Sport',
        data: [53, 13, 30, 4]
      }
    ],
    []
  );

  const userActivities = [
    {
      image: Avater1,
      projectname: 'Ida Jorgensen',
      desc: 'Assigned to',
      span: 'Tristan Madsen',
      completed: '326,134',
      status: '68%',
      date: 'October 26, 2017'
    },
    {
      image: Avater2,
      projectname: 'Albert Andersen',
      desc: 'Assigned to',
      span: 'Marcus Poulsen',
      completed: '110,134	',
      status: '46%',
      date: 'September 4, 2017'
    },
    {
      image: Avater3,
      projectname: 'Silje Larsen',
      desc: 'Assigned to',
      span: 'Felix Johansen',
      completed: '226,134',
      status: '31%',
      date: 'November 14, 2017'
    },
    {
      image: Avater1,
      projectname: 'Ida Jorgensen',
      desc: 'Assigned to',
      span: 'Tristan Madsen',
      completed: '500,134',
      status: '85%',
      date: 'December 14, 2017'
    }
  ];

  const series1 = useMemo(() => [23, 14, 35, 28], []);
  return (
    <Row>
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
          <h3 className="mb-4">2,30,598</h3>
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
          <i className="fab fa-angellist text-info f-50" />
        </MainCard>
      </Col>

      <Col xl={4} md={6}>
        <MainCard title="Reply">
          <h3 className="f-w-300">2.43 h</h3>
          <span className="text-uppercase">average time for first reply</span>

          <ReactApexChart options={chartOptions} series={series} type="bar" height={250} />
        </MainCard>
      </Col>

      <Col xl={4} md={6}>
        <MainCard title="Statistics">
          <ReactApexChart options={chartOptions1} series={series1} type="donut" height={250} />

          <Row className="mb-3 ">
            <Col>
              <span className="mb-1 text-muted d-block">23%</span>
              <ProgressBar now={23} />
            </Col>
            <Col>
              <span className="mb-1 text-muted d-block">14%</span>
              <ProgressBar now={14} children={<ProgressBar className="bg-warning" />} />
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
      </Col>

      <Col xl={4} md={12}>
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
                <TableData />
              </Tab.Pane>
              <Tab.Pane eventKey="profile">
                <TableData />
              </Tab.Pane>
              <Tab.Pane eventKey="contact">
                <TableData />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard title="Overdue Tasks">
          <Row className="align-items-center">
            <Col xs="8">
              <h2 className="f-w-300 m-0">34</h2>
              <span className="text-muted">Last Week 60%</span>
            </Col>
            <Col xs={4} className=" text-end">
              <h5 className="text-danger f-w-400">10%</h5>
            </Col>
          </Row>
        </MainCard>
      </Col>
      <Col md={6} xl={4}>
        <MainCard title="Tasks to Do">
          <Row className="align-items-center">
            <Col xs="8">
              <h2 className="f-w-300 m-0">25</h2>
              <span className="text-muted">Last Week 40%</span>
            </Col>
            <Col xs={4} className=" text-end">
              <h5 className="text-success f-w-400">30%</h5>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard title="Completed Task">
          <Row className="align-items-center">
            <Col xs="8">
              <h2 className="f-w-300 m-0">19</h2>
              <span className="text-muted">Last Week 60%</span>
            </Col>
            <Col xs={4} className=" text-end">
              <h5 className="text-danger f-w-400">25%</h5>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col>
        <MainCard title="User Project List" bodyClassName="pb-0">
          <Table responsive hover>
            <thead>
              <tr>
                <th>USER</th>
                <th>project</th>
                <th>Completed</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {userActivities.map((user, index) => (
                <tr key={index}>
                  <td>
                    <Image src={user.image} width="40px" />
                  </td>
                  <td>
                    <h6>{user.projectname}</h6>
                    <p className="mb-0">
                      {user.desc}
                      <span className="text-success"> {user.span}</span>
                    </p>
                  </td>
                  <td>
                    <h6>{user.completed}</h6>
                  </td>
                  <td>{user.status}</td>
                  <td>{user.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </MainCard>
      </Col>
    </Row>
  );
}
