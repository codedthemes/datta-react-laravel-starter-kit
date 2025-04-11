// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';
import UserCard1 from './UserCard1';
import UserCard2 from './UserCard2';
import UserCard3 from './UserCard3';
import UserCard4 from './UserCard4';

// assets
import Avatar1 from 'assets/images/widget/dashborad-1.jpg';
import Avatar2 from 'assets/images/widget/dashborad-2.jpg';
import Avatar3 from 'assets/images/widget/dashborad-3.jpg';
import MasterCard from 'assets/images/widget/master-background.png';
import Master from 'assets/images/widget/master-logo.png';
import Rupay from 'assets/images/widget/rupay-logo.png';
import RupayBg from 'assets/images/widget/rupay-background.png';
import Visa from 'assets/images/widget/visa-logo.png';
import VisaBg from 'assets/images/widget/visa-background.png';

// =============================|| WIDGET - USER ||============================== //

export default function User() {
  return (
    <Row>
      <Col md={6} xl={4}>
        <Card className="widget-focus mb-0">
          <Image className="card-img-top rounded-top" src={Avatar1} />
        </Card>
        <MainCard>
          <h5>Dashboard UI Kit</h5>
          <span className="text-muted">By Creative Studio Form</span>
          <Row className="m-t-30">
            <Col xs={6} className="p-r-0">
              <div className="d-grid">
                <Button className="text-uppercase ">Add Friend</Button>
              </div>
            </Col>
            <Col xs={6} className="p-r-0">
              <div className="d-grid">
                <Button variant="outline-secondary btn text-uppercase border">Message</Button>
              </div>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="widget-focus">
          <Image className="card-img rounded" src={Avatar2} />
          <h5 className="m-t-35">Dashboard UI Kit</h5>
          <span className="text-muted">By Creative Studio Form</span>
          <p className="border-top m-b-20 p-t-10 m-t-20"></p>
          <Row>
            <Col>
              <h5>$5236.42</h5>
              <span>BUDGET</span>
            </Col>
            <Col>
              <h5>9 May 2017</h5>
              <span>DEADLINE</span>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard className="widget-focus">
          <Image className="card-img rounded" src={Avatar3} />
          <h5 className="m-t-35">Dashboard UI Kit</h5>
          <span className="text-muted">By Creative Studio Form</span>
          <p className="border-top m-b-20 p-t-10 m-t-20"></p>
          <h6 className="m-b-0">
            $2356.23 <span className="float-end">$3200.00</span>
          </h6>
          <ProgressBar className="m-t-10" children={<ProgressBar now={69} className="bg-brand-color-1 rounded-0" />} />

          <Row className="m-t-30">
            <Col xs={6}>
              <div className="d-grid">
                <Button className="text-uppercase">Add friend</Button>
              </div>
            </Col>

            <Col xs={6}>
              <div className="d-grid">
                <Button className="text-uppercase border " variant="outline-secondary">
                  Message
                </Button>
              </div>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <UserCard1 />

      <UserCard2 />
      <Col md={6} xl={4}>
        <MainCard
          title={
            <Stack direction="horizontal" className="align-items-center justify-content-between">
              <p className="text-white mb-0">John Doe</p>
              <Image src={Visa} className="img-fluid " alt="card title" />
            </Stack>
          }
          className="  visa-top widget-focus  bg-brand-color-2"
        >
          <div className="visa">
            <h6 className="f-w-600 text-white ">
              VALID <span className="f-w-300 m-l-10">05/17</span>
            </h6>
            <h3 className="f-w-300 text-white m-t-25 m-b-0">4883 2359 9932 3445</h3>
            <span className="text-white">5346</span>
            <Image src={VisaBg} className="img-fluid" alt="card back" />
          </div>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard
          title={
            <Stack direction="horizontal" className="align-items-center justify-content-between">
              <p className="text-white mb-0">Villads Johansen</p>
              <Image src={Master} className="img-fluid " alt="card title" />
            </Stack>
          }
          className="  visa-top widget-focus  bg-brand-color-1"
        >
          <div className="visa">
            <h6 className="f-w-600 text-white ">
              NOT VALID <span className="f-w-300 m-l-10">10/17</span>
            </h6>
            <h3 className="f-w-300 text-white m-t-25 m-b-0">5635 2489 8596 3445</h3>
            <span className="text-white">1025</span>
            <Image src={MasterCard} className="img-fluid" alt="card back" />
          </div>
        </MainCard>
      </Col>

      <Col md={6} xl={4}>
        <MainCard
          title={
            <Stack direction="horizontal" className="align-items-center justify-content-between">
              <p className="text-white mb-0">Silje Larsen</p>
              <Image src={Rupay} className="img-fluid " alt="card title" />
            </Stack>
          }
          className="  visa-top widget-focus  bg-primary"
        >
          <div className="visa">
            <h6 className="f-w-600 text-white ">
              VALID <span className="f-w-300 m-l-10">09/18</span>
            </h6>
            <h3 className="f-w-300 text-white m-t-25 m-b-0">7895 2359 1534 6548</h3>
            <span className="text-white">7825</span>
            <Image src={RupayBg} className="img-fluid" alt="card back" />
          </div>
        </MainCard>
      </Col>
      <UserCard4 />
      <UserCard3 />
    </Row>
  );
}
