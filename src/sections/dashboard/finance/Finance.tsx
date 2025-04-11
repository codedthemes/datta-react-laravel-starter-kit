import { useState } from 'react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import DropDown from './DropDown';
import MainCard from 'components/MainCard';
import Transactions from './Transactions';

// assets
import Avatar1 from 'assets/images/user/avatar-1.jpg';
import Avatar2 from 'assets/images/user/avatar-2.jpg';
import Avatar3 from 'assets/images/user/avatar-3.jpg';
import Avatar4 from 'assets/images/user/avatar-4.jpg';
import Avatar5 from 'assets/images/user/avatar-5.jpg';
import Acitivity from 'assets/images/widget/img-acitivity-3.svg';
import Card1 from 'assets/images/widget/img-card-1.png';
import Card2 from 'assets/images/widget/img-card-2.png';
import Image1 from 'assets/images/widget/img-card-master.svg';
import Image2 from 'assets/images/widget/img-food.png';
import Image3 from 'assets/images/widget/img-travel.png';
import Image4 from 'assets/images/widget/img-shoping.png';
import Image5 from 'assets/images/widget/img-helth.png';

const chartOptions2: ChartProps = {
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    position: 'bottom'
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%'
      }
    }
  },
  labels: ['Saving', 'Spend', 'Income'],
  series: [25, 50, 25],
  colors: ['#212529', '#04a9f5', '#2ca87f']
};

const chartOptions: ChartProps = {
  chart: {
    type: 'bar',
    height: 210,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '70%',
      borderRadius: 2
    }
  },
  fill: {
    opacity: [1, 0.4]
  },
  stroke: {
    show: true,
    width: 3,
    colors: ['transparent']
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    show: true,
    fontFamily: `'Public Sans', sans-serif`,
    offsetX: 10,
    offsetY: 10,
    labels: {
      useSeriesColors: false
    },
    markers: {
      width: 10,
      height: 10,
      radius: '50%',
      offsexX: 2,
      offsexY: 2
    },
    itemMargin: {
      horizontal: 15,
      vertical: 5
    }
  },
  colors: ['#04a9f5', '#04a9f5'],
  series: [
    {
      name: 'Income',
      data: [180, 90, 135, 114, 120, 145, 180, 90, 135, 114, 120, 145]
    },
    {
      name: 'Expends',
      data: [120, 45, 78, 150, 168, 99, 120, 45, 78, 150, 168, 99]
    }
  ],
  grid: {
    borderColor: '#00000010'
  },
  yaxis: {
    show: false
  }
};

// =============================|| DASHBOARD - FINANCE ||============================== //

export default function Finance() {
  const data = [
    {
      title: 'Food & Drink',
      progress: 65,
      amount: 1000,
      imageSrc: `${Image2}`
    },
    {
      title: 'Travel',
      progress: 30,
      amount: 400,
      imageSrc: `${Image3}`
    },
    {
      title: 'Shopping',
      progress: 50,
      amount: 900,
      imageSrc: `${Image4}`
    },
    {
      title: 'Healthcare',
      progress: 26,
      amount: 250,
      imageSrc: `${Image5}`
    }
  ];

  const data1 = [
    {
      id: 1,
      avatar: 'AI',
      title: 'Apple Inc.',
      subtitle: '#ABLE-PRO-T00232',
      value: '$210,000',
      percentage: -10.6,
      time: '',
      avatarClass: 'border',
      valueClass: 'text-danger',
      arrowClass: 'ti-arrow-down-left'
    },
    {
      id: 2,
      avatar: 'SM',
      title: 'Spotify Music',
      subtitle: '#ABLE-PRO-T10232',
      value: '-10,000',
      percentage: 30.6,
      time: '',
      avatarClass: 'border',
      valueClass: 'text-success',
      arrowClass: 'ti-arrow-up-right'
    },
    {
      id: 3,
      avatar: 'MD',
      title: 'Medium',
      subtitle: '06:30 pm',
      value: '-26',
      percentage: 5,
      time: '06:30 pm',
      avatarClass: 'border bg-light-primary',
      valueClass: 'text-warning',
      arrowClass: 'ti-arrows-left-right'
    },
    {
      id: 4,
      avatar: 'U',
      title: 'Uber',
      subtitle: '08:40 pm',
      value: '+210,000',
      percentage: 10.6,
      time: '08:40 pm',
      avatarClass: 'border',
      valueClass: 'text-success',
      arrowClass: 'ti-arrow-up-right'
    },
    {
      id: 5,
      avatar: 'OC',
      title: 'Ola Cabs',
      subtitle: '07:40 pm',
      value: '+210,000',
      percentage: 10.6,
      time: '07:40 pm',
      avatarClass: 'border bg-light-warning',
      valueClass: 'text-success',
      arrowClass: 'ti-arrow-up-right'
    }
  ];

  const transactions = [
    {
      id: 1,
      image: Acitivity,
      title: 'Starbucks Cafe',
      date: '11th Sep 2020',
      amount: -26,
      isNegative: true
    },
    {
      id: 2,
      image: Acitivity,
      title: 'Starbucks Cafe',
      date: '11th Sep 2020',
      amount: -750,
      isNegative: false
    },
    {
      id: 3,
      image: Acitivity,
      title: 'Starbucks Cafe',
      date: '11th Sep 2020',
      amount: -26,
      isNegative: true
    }
  ];

  const initialData = [
    {
      id: 1,
      name: 'Airi Satou',
      category: 'Salary Payment',
      date: '2023/02/07',
      time: '09:05 PM',
      amount: '$950.54',
      avatar: Avatar1,
      status: 'Completed'
    },
    {
      id: 2,
      name: 'Ashton Cox',
      category: 'Project Payment',
      date: '2023/02/01',
      time: '02:14 PM',
      amount: '$520.30',
      avatar: Avatar2,
      status: 'Completed'
    },
    {
      id: 3,
      name: 'Bradley Greer',
      category: 'You Tube Subscribe',
      date: '2023/01/22',
      time: '10:32 AM',
      amount: '$100.00',
      avatar: Avatar3,
      status: 'Pending'
    },
    {
      id: 4,
      name: 'Brielle Williamson',
      category: 'Salary Payment',
      date: '2023/02/07',
      time: '09:05 PM',
      amount: '$760.25',
      avatar: Avatar2,
      status: 'In Progress'
    },
    {
      id: 5,
      name: 'Airi Satou',
      category: 'Spotify Subscribe',
      date: '2023/02/07',
      time: '09:05 PM',
      amount: '$60.05',
      avatar: Avatar4,
      status: 'Canceled'
    }
  ];

  const [data3] = useState(initialData);

  const renderStatusBadge = (status: any) => {
    switch (status) {
      case 'Completed':
        return <Badge bg="success">Completed</Badge>;
      case 'Pending':
        return <Badge bg="warning">Pending</Badge>;
      case 'In Progress':
        return <Badge bg="primary">In Progress</Badge>;
      case 'Canceled':
        return <Badge bg="danger">Canceled</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  return (
    <Row>
      <Col md={5} xxl={4}>
        <MainCard>
          <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
            <h5 className="mb-0">My Card</h5>
            <DropDown />
          </Stack>
          <MainCard className="rounded-4 overflow-hidden bg-cover finance-image">
            <Stack direction="horizontal">
              <div className="flex-grow-1 me-3">
                <p className="text-white text-sm text-opacity-50 mb-0">CARD NAME</p>
                <h5 className="text-white">Jonh Smith</h5>
              </div>
              <div className="flex-shrink-0">
                <Image src={Image1} className="img-fluid" alt="img-card-master" />
              </div>
            </Stack>
            <h4 className="text-white my-3">**** **** **** **** 8361</h4>
            <Row>
              <Col className="col-auto">
                <p className="text-white text-sm text-opacity-50 mb-0">EXP</p>
                <h6 className="text-white mb-0">7/30</h6>
              </Col>
              <Col className="col-auto">
                <p className="text-white text-sm text-opacity-50 mb-0">CVV</p>
                <h6 className="text-white mb-0">455</h6>
              </Col>
            </Row>
          </MainCard>
          <div className="text-center mt-3">
            <h3 className="mb-1">$1.480.000</h3>
            <p className="text-muted mb-0">Total Balance</p>
          </div>
        </MainCard>

        <MainCard>
          <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
            <h5 className="mb-0">Transactions</h5>
            <DropDown />
          </Stack>

          {data1.map((item) => (
            <ListGroup.Item as="li" className="px-0 border-bottom" key={item.id}>
              <Stack direction="horizontal" className="py-3 align-items-center">
                <div className="flex-shrink-0">
                  <div className={`avatar avatar-s ${item.avatarClass}`} title={item.subtitle}>
                    <span>{item.avatar}</span>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <Row className="g-1">
                    <Col xs={6}>
                      <h6 className="mb-0">{item.title}</h6>
                      <p className="text-muted mb-0">
                        <small>{item.subtitle}</small>
                      </p>
                    </Col>
                    <Col xs={6} className="text-end">
                      <h6 className="mb-1">{item.value}</h6>
                      <p className={item.valueClass + ' mb-0'}>
                        <i className={`ti ${item.arrowClass}`}></i> {item.percentage}%
                      </p>
                    </Col>
                  </Row>
                </div>
              </Stack>
            </ListGroup.Item>
          ))}
        </MainCard>
      </Col>

      <Col md={7} xxl={8}>
        <Row>
          <Col md={6} xxl={4}>
            <Transactions colorCondition="success" />
          </Col>
          <Col md={6} xxl={4}>
            <Transactions colorCondition="success" />
          </Col>
          <Col md={6} xxl={4}>
            <Transactions colorCondition="danger" />
          </Col>
        </Row>

        <MainCard>
          <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
            <div>
              <h5 className="mb-1">Cashflow</h5>
              <p>
                5.44% <span className="badge text-bg-success">5.44%</span>
              </p>
            </div>

            <Form.Select className="rounded-3 form-select-sm w-auto" defaultValue="Monthly">
              <option>Today</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </Form.Select>
          </Stack>
          <ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" height={210} />
        </MainCard>

        <MainCard>
          <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
            <h5 className="mb-0">Where your money go ?</h5>
            <Button className="btn btn-sm btn-primary">+ Add New</Button>
          </Stack>

          <Row className="g-3">
            {data.map((item, index) => (
              <Col key={index} md={6} xxl={3}>
                <MainCard className="shadow-none border mb-0" bodyClassName="p-3">
                  <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
                    <Image src={item.imageSrc} />
                    <DropDown />
                  </Stack>
                  <h6 className="mb-3">{item.title}</h6>

                  <div className="bg-dark p-3 pt-4 rounded-4">
                    <ProgressBar className="bg-white bg-opacity-25">
                      <ProgressBar now={item.progress} className="bg-white" />
                    </ProgressBar>
                    <Stack direction="horizontal" className="align-items-center justify-content-between mt-2">
                      <p className="mb-0 text-white text-opacity-75 text-sm">{item.progress}%</p>
                      <p className="mb-0 text-white text-opacity-75 text-sm">${item.amount}</p>
                    </Stack>
                  </div>
                </MainCard>
              </Col>
            ))}
          </Row>
        </MainCard>
      </Col>

      <Col md={12} xxl={4}>
        <MainCard>
          <h5 className="mb-3">Accounts</h5>

          <Row className="g-3">
            <Col xs={12}>
              <MainCard className="shadow-none border mb-0" bodyClassName="p-3">
                <Stack direction="horizontal" className="align-items-center">
                  <div className="flex-shrink-0">
                    <Image src={Card1} alt="img" fluid />
                  </div>

                  <div className="flex-grow-1 ms-3">
                    <Stack direction="horizontal" gap={2} className=" align-items-center justify-content-center text-success">
                      <i className="ti ti-circle f-10"></i>
                      <p className="mb-0">Active</p>
                    </Stack>
                  </div>

                  <div className="flex-shrink-0">
                    <h6 className="mb-0">12,920.000</h6>
                    <p className="mb-0">US Dollar</p>
                  </div>
                </Stack>
              </MainCard>
            </Col>

            <Col xs={12}>
              <MainCard className="shadow-none border mb-0" bodyClassName="p-3">
                <Stack direction="horizontal" className="align-items-center">
                  <div className="flex-shrink-0">
                    <Image src={Card2} alt="img" className="img-fluid" />
                  </div>

                  <div className="flex-grow-1 ms-3">
                    <Stack direction="horizontal" gap={2} className=" align-items-center justify-content-center text-success">
                      <i className="ti ti-circle f-10"></i>
                      <p className="mb-0">Active</p>
                    </Stack>
                  </div>

                  <div className="flex-shrink-0">
                    <h6 className="mb-0">12,920.000</h6>
                    <p className="mb-0">US Dollar</p>
                  </div>
                </Stack>
              </MainCard>
            </Col>

            <Col xs={12}>
              <Form.Group controlId="formFile" className="d-none">
                <Form.Control type="file" />
              </Form.Group>
              <Form.Label htmlFor="formFile" className="d-block mb-0">
                <MainCard className="shadow-none border mb-0" bodyClassName="p-3 text-center">
                  <Stack direction="horizontal" gap={2} className=" align-items-center justify-content-center flex-column">
                    <div className="avatar avatar-s bg-dark text-white rounded-circle">
                      <i className="ti ti-plus f-18"></i>
                    </div>
                    <span className="text-muted">Add to Account</span>
                  </Stack>
                </MainCard>
              </Form.Label>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xxl={4}>
        <MainCard>
          <Stack direction="horizontal" className=" align-items-center justify-content-between mb-3">
            <h5 className="mb-0">Quick Transfer</h5>
            <DropDown />
          </Stack>

          <Stack direction="horizontal" gap={2} className="align-items-center justify-content-between my-3">
            <Button variant="light" className="avatar border border-secondary rounded-circle">
              <i className="ti ti-plus f-20"></i>
            </Button>

            <a href="#" className="avatar">
              <Image className="rounded-circle img-fluid" src={Avatar2} alt="User image" />
            </a>
            <a href="#" className="avatar">
              <Image className="rounded-circle img-fluid" src={Avatar3} alt="User image" />
            </a>
            <a href="#" className="avatar">
              <Image className="rounded-circle img-fluid" src={Avatar4} alt="User image" />
            </a>
            <a href="#" className="avatar">
              <Image className="rounded-circle img-fluid" src={Avatar5} alt="User image" />
            </a>
          </Stack>

          <ListGroup as="ul" className="list-group-flush">
            {transactions.map((transaction) => (
              <ListGroup.Item as="li" className="px-0" key={transaction.id}>
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image src={transaction.image} alt="img" className="wid-30 rounded" />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <Row className="g-1">
                      <Col xs={6}>
                        <h6 className="mb-0">{transaction.title}</h6>
                        <p className="text-muted mb-0">{transaction.date}</p>
                      </Col>
                      <Col xs={6} className="text-end">
                        <h5 className={`mb-1 ${transaction.isNegative ? 'text-danger' : 'text-success'}`}>
                          {transaction.isNegative ? `-$${Math.abs(transaction.amount)}` : `+$${Math.abs(transaction.amount)}`}
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </MainCard>
      </Col>

      <Col md={6} xxl={4}>
        <MainCard>
          <Stack direction="horizontal" className=" align-items-center justify-content-between mb-3">
            <h5 className="mb-0">Category</h5>
            <DropDown />
          </Stack>

          <ReactApexChart options={chartOptions2} series={chartOptions2.series} type="donut" height={250} />
        </MainCard>
      </Col>

      <Col xs={12}>
        <MainCard
          title={
            <Stack direction="horizontal" className=" align-items-center justify-content-between">
              <h5 className="mb-0">Transaction History</h5>
              <Button className="btn-link-primary" size="sm">
                View All
              </Button>
            </Stack>
          }
        >
          <div className="table-responsive">
            <Table hover id="pc-dt-simple">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Category</th>
                  <th>Date/Time</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data3.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <Stack direction="horizontal" className=" align-items-center">
                        <div className="flex-shrink-0">
                          <Image src={row.avatar} width="40px" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">{row.name}</h6>
                        </div>
                      </Stack>
                    </td>
                    <td>{row.category}</td>
                    <td>
                      {row.date} <span className="text-muted text-sm d-block">{row.time}</span>
                    </td>
                    <td>{row.amount}</td>
                    <td>{renderStatusBadge(row.status)}</td>
                    <td>
                      <a href="#" className="avatar avatar-xs btn-link-secondary">
                        <i className="ti ti-eye f-20" />
                      </a>
                      <a href="#" className="avatar avatar-xs btn-link-secondary">
                        <i className="ti ti-edit f-20"></i>{' '}
                      </a>
                      <a href="#" className="avatar avatar-xs btn-link-secondary">
                        <i className="ti ti-trash f-20"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </MainCard>
      </Col>
    </Row>
  );
}
