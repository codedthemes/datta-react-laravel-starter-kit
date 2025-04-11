import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

// project-imports
import MainCard from 'components/MainCard';

type EarningsData = {
  [key: string]: string;
};

export default function MontlyEarnings() {
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

  const pagesviewData: EarningsData = {
    mon: '9,456',
    tue: '8,568',
    wed: '3,756',
    thu: '9,635',
    fri: '23,486',
    sat: '86,789',
    sun: '93,628'
  };

  return (
    <>
      {/* Earnings Section */}
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
      </Col>

      {/* Deposit Section */}
      <Col md={6} xl={4}>
        <MainCard>
          <h2 className="mb-3 f-w-300">$894.39</h2>
          <h5 className="text-muted">
            <span className="f-14 me-1">Deposits:</span>$10,000
          </h5>
          <h5 className="mt-3 text-primary mb-4">
            <i className="fas fa-caret-down text-primary f-22" /> 5.2% ($456)
          </h5>
          <div className="d-grid">
            <Button href="#!" className="shadow-2 text-uppercase w-50 m-auto">
              Add Funds
            </Button>
          </div>
        </MainCard>
      </Col>

      <Col md={12} xl={4}>
        <MainCard className="bg-brand-color-1 earning-date" title={<span className="text-white">Page View</span>}>
          <h2 className="text-white mb-3 f-w-300">
            {pagesviewData[key as keyof EarningsData]}
            <i className="ti ti-arrow-up" />
          </h2>
          <span className="text-white mb-4 d-block">TOTAL PAGE VIEWS</span>

          <Nav
            variant="pills"
            className="justify-content-center align-items-center"
            activeKey={key}
            onSelect={(selectedKey: string | null) => setKey(selectedKey ?? 'mon')}
          >
            {Object.keys(pagesviewData).map((day) => (
              <Nav.Item key={day}>
                <Nav.Link eventKey={day} className={`text-dark ${key === day ? 'bg-white text-dark' : 'text-white'}`}>
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </MainCard>
      </Col>
    </>
  );
}
