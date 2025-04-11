// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import Activity from 'sections/widgets/charts/Activity';
import Age from 'sections/widgets/charts/Age';
import Command from 'sections/widgets/charts/Command';
import Devices from 'sections/widgets/charts/Devices';
import Earnings from 'sections/widgets/charts/Earnings';
import Earnings1 from 'sections/widgets/charts/Earnings1';
import Gender from 'sections/widgets/charts/Gender';
import Last3Days from 'sections/widgets/charts/Last3Days';
import NewsStatistics from 'sections/widgets/charts/NewsStatistics';
import PhoneCalls from 'sections/widgets/charts/PhoneCalls';
import Profile from 'sections/widgets/charts/Profile';
import Reviews from 'sections/widgets/charts/Reviews';
import Reply from 'sections/widgets/charts/Reply';
import Sales from 'sections/widgets/charts/Sales';
import Statistics from 'sections/widgets/charts/Statistics';
import Statistics1 from 'sections/widgets/charts/Statistics1';
import StatiStics2 from 'sections/widgets/charts/Statistics2';
import Statistics3 from 'sections/widgets/charts/Statistics3';
import Statistics4 from 'sections/widgets/charts/Statistics4';
import Statistics5 from 'sections/widgets/charts/Statistics5';
import Statistics6 from 'sections/widgets/charts/Statistics6';
import Statistics7 from 'sections/widgets/charts/Statistics7';
import Statistics8 from 'sections/widgets/charts/Statistics8';
import Statistics9 from 'sections/widgets/charts/Statistics9';
import Statistics10 from 'sections/widgets/charts/Statistics10';
import Statistics11 from 'sections/widgets/charts/Statistics11';
import Status from 'sections/widgets/charts/Status';
import TotalSaving from 'sections/widgets/charts/TotalSaving';
import Transactions from 'sections/widgets/charts/Transactions';
import Transaction1 from 'sections/widgets/charts/Transaction1';
import Transaction2 from 'sections/widgets/charts/Transaction2';
import UsersfromUnitedStates from 'sections/widgets/charts/UsersfromUnitedStates';
import WebStatistics from 'sections/widgets/charts/WebStatistics';
import YearlySummary from 'sections/widgets/charts/YearlySummary';

// ==============================|| WIDGET - CHARTS ||============================== //

export default function ChartsMainPage() {
  return (
    <Row>
      <Col xl={4} md={12}>
        <Command />
      </Col>

      <Col xl={4} md={6}>
        <Sales />
      </Col>
      <Col xl={4} md={6}>
        <Statistics />
      </Col>

      <Col md={12} xl={8}>
        <Statistics1 />
      </Col>
      <Col md={12} xl={4}>
        <StatiStics2 />
      </Col>

      <Col xl={4} md={12}>
        <NewsStatistics />
      </Col>

      <Col xl={8} md={12}>
        <Statistics3 />
      </Col>

      <Col xl={8} md={12}>
        <Statistics4 />
      </Col>

      <Col xl={4} md={6}>
        <Earnings />
      </Col>

      <Col xl={4} md={6}>
        <Earnings1 />
      </Col>

      <Col xl={4} md={6}>
        <Reply />
      </Col>

      <Col xl={4} md={6}>
        <Statistics5 />
      </Col>

      <Col xl={8} md={12}>
        <Statistics6 />
      </Col>

      <Col xl={4} md={6}>
        <Devices />
      </Col>

      <Col xl={4} md={6}>
        <TotalSaving />
      </Col>

      <Col xl={8} md={12}>
        <YearlySummary />
      </Col>

      <Col xl={8} md={12}>
        <Last3Days />
      </Col>

      <Col xl={4} md={6}>
        <Statistics7 />
      </Col>

      <Col md={6} xl={4}>
        <Activity />
      </Col>
      <Col md={12} xl={4}>
        <Statistics8 />
      </Col>

      <Col md={6} xl={4}>
        <Statistics9 />
      </Col>

      <Col md={6} xl={4}>
        <WebStatistics />
      </Col>

      <Col md={12} xl={8}>
        <Statistics10 />
      </Col>

      <Col md={6} xl={4}>
        <Transactions />
      </Col>

      <Col md={6} xl={4}>
        <Transaction1 />
      </Col>

      <Col md={12} xl={4}>
        <Transaction2 />
      </Col>

      <Col md={6} xl={4}>
        <Status />
      </Col>

      <Col md={6} xl={4}>
        <Statistics11 />
      </Col>

      <Col md={12} xl={4}>
        <Profile />
      </Col>

      <Col xl={8} sm={12}>
        <UsersfromUnitedStates />
      </Col>

      <Col xl={4} sm={12}>
        <Reviews />
      </Col>

      <Col md={12} xl={4}>
        <PhoneCalls />
      </Col>

      <Col md={12} xl={4}>
        <Gender />
      </Col>

      <Col md={12} xl={4}>
        <Age />
      </Col>
    </Row>
  );
}
