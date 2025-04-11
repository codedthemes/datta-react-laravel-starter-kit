import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

// project-imports
import MainCard from 'components/MainCard';

type EarningsData = {
  [key: string]: string;
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

// =============================|| CRM - PAGE VIEW ||============================== //

export default function PageView() {
  const [key, setKey] = useState<string>('mon');

  return (
    <>
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

      <MainCard>
        <h2 className="mb-3 f-w-300">$894.39</h2>
        <h5 className="text-muted">
          <span className="f-14 me-1">Deposits:</span>$10,000
        </h5>
        <h5 className="mt-3 text-primary mb-4">
          <i className="fas fa-caret-down text-primary f-22" /> 5.2% ($456)
        </h5>
        <div className="d-grid">
          <Button href="#!" className="shadow-2 text-uppercase w-50">
            Add Funds
          </Button>
        </div>
      </MainCard>
    </>
  );
}
