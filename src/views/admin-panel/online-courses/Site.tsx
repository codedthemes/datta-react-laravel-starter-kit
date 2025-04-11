import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

// project-imports
import MainCard from 'components/MainCard';
import ThemeBio from 'sections/online-courses/site/ThemeBio';
import ThemeDomain from 'sections/online-courses/site/ThemeDomain';
import ThemePage from 'sections/online-courses/site/ThemePage';
import ThemeSite from 'sections/online-courses/site/ThemeSite';

const tabs = ['contactDetail', 'jobDetail', 'educationDetail', 'finish'];

// ===============================|| ONLINE COURSE - SITE PAGE ||=============================== //

export default function SitePage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabSelect = (eventKey: string | null) => {
    if (eventKey !== null) {
      setActiveTab(eventKey);
    }
  };

  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  return (
    <MainCard title="Site">
      <div id="basicwizard" className="form-wizard row justify-content-center">
        <Tab.Container id="list-group-tabs-example" activeKey={activeTab} onSelect={handleTabSelect}>
          <Nav className="nav-pills justify-content-center course-wizard">
            {tabs.map((tab, index) => (
              <Nav.Item key={tab} className="nav-item">
                <Nav.Link eventKey={tab}>
                  <div className="course-wizard-num">
                    <span>{index + 1}</span>
                  </div>
                  <span className="d-none d-sm-inline">
                    {tab === 'contactDetail' ? 'Theme' : tab === 'jobDetail' ? 'Domain' : tab === 'educationDetail' ? 'Bio' : 'Page'}
                  </span>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="contactDetail">
              <ThemeSite />
            </Tab.Pane>
            <Tab.Pane eventKey="jobDetail">
              <ThemeDomain />
            </Tab.Pane>
            <Tab.Pane eventKey="educationDetail">
              <ThemeBio />
            </Tab.Pane>
            <Tab.Pane eventKey="finish">
              <ThemePage />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <div className="d-sm-flex mt-3 justify-content-between wizard">
          <div className="first">
            <Button variant="secondary" onClick={() => setActiveTab(tabs[0])}>
              First
            </Button>
          </div>
          <div className="d-sm-flex">
            <div className="previous me-2">
              <Button variant="secondary" onClick={handlePrevious} disabled={activeTab === tabs[0]}>
                Back To Previous
              </Button>
            </div>
            <div className="next">
              <Button variant="secondary" onClick={handleNext} disabled={activeTab === tabs[tabs.length - 1]}>
                Next Step
              </Button>
            </div>
          </div>
          <div className="last">
            <Button variant="secondary" onClick={() => setActiveTab(tabs[tabs.length - 1])}>
              Finish
            </Button>
          </div>
        </div>
      </div>
    </MainCard>
  );
}
