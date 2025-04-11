import { useState } from 'react';

// react-bootstrap
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';

// project-imports
import TaskBoardCard from 'sections/application/task/board/Card';
import TaskBoardList from 'sections/application/task/board/List';
import TaskBoardStatus from 'sections/application/task/board/Status';

// assets
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import EmojiFlagsTwoToneIcon from '@mui/icons-material/EmojiFlagsTwoTone';
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone';

// ==============================|| TASK BOARD ||============================== //

export default function TaskBoardPage() {
  const [activeTab, setActiveTab] = useState('grid');
  return (
    <Row>
      <Col xl={3} lg={4}>
        <TaskBoardStatus />
      </Col>
      <Col xl={9} lg={8}>
        <Card>
          <Card.Body className="py-3">
            <Row className=" align-items-center">
              <Col md={8}>
                <ul className="list-inline m-0">
                  <li className="list-inline-item dropdown py-1">
                    <Dropdown>
                      <Dropdown.Toggle variant="link" className="link-secondary p-0">
                        <CalendarTodayTwoToneIcon className="wid-20 text-primary" /> By Date
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#!">Show all</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#!">Today</Dropdown.Item>
                        <Dropdown.Item href="#!">Yesterday</Dropdown.Item>
                        <Dropdown.Item href="#!">This week</Dropdown.Item>
                        <Dropdown.Item href="#!">This month</Dropdown.Item>
                        <Dropdown.Item href="#!">This year</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="list-inline-item dropdown py-1">
                    <Dropdown>
                      <Dropdown.Toggle variant="link" className="link-secondary p-0">
                        <EmojiFlagsTwoToneIcon className="text-primary wid-20" />
                        By Status
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#!">Show all</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#!">Pending</Dropdown.Item>
                        <Dropdown.Item href="#!">Paid</Dropdown.Item>
                        <Dropdown.Item href="#!">On Hold</Dropdown.Item>
                        <Dropdown.Item href="#!">Canceled</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="list-inline-item dropdown py-1">
                    <Dropdown>
                      <Dropdown.Toggle variant="link" className="link-secondary p-0">
                        <ListAltTwoToneIcon className="text-primary wid-20" />
                        By Priority
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#!">Show all</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#!">Highest</Dropdown.Item>
                        <Dropdown.Item href="#!">High</Dropdown.Item>
                        <Dropdown.Item href="#!">Normal</Dropdown.Item>
                        <Dropdown.Item href="#!">Low</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </Col>
              <Col md={4} className="text-md-end">
                <span className="me-2">View Mode:</span>
                <ButtonGroup size="sm" className="d-inline-flex">
                  <Button
                    className={`btn-light-primary ${activeTab === 'grid' ? 'active' : ''}`}
                    id="grid-tab"
                    data-bs-toggle="tab"
                    href="#grid"
                    role="tab"
                    aria-controls="grid"
                    aria-selected={activeTab === 'grid'}
                    onClick={() => setActiveTab('grid')}
                  >
                    <i className="fas fa-grip-horizontal" />
                  </Button>
                  <Button
                    className={` btn-light-primary ${activeTab === 'list' ? 'active' : ''}`}
                    id="list-tab"
                    data-bs-toggle="tab"
                    href="#list"
                    role="tab"
                    aria-controls="list"
                    aria-selected={activeTab === 'list'}
                    onClick={() => setActiveTab('list')}
                  >
                    <i className="fas fa-list-ul" />
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Col xl={12}>{activeTab === 'grid' ? <TaskBoardCard /> : <TaskBoardList />}</Col>
      </Col>
    </Row>
  );
}
