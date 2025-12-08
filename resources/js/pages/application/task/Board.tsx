import { useState, useCallback } from 'react';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
// react-bootstrap
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';

// project-imports
import TaskBoardCard from '@/sections/application/task/board/Card';
import TaskBoardList from '@/sections/application/task/board/List';
import TaskBoardStatus from '@/sections/application/task/board/TaskBoardStatus';

type ViewMode = 'grid' | 'list';

const dropdownConfig = [
  {
    key: 'date',
    icon: 'ph ph-calendar-blank',
    label: 'By Date',
    items: ['Show all', { divider: true }, 'Today', 'Yesterday', 'This week', 'This month', 'This year']
  },
  {
    key: 'status',
    icon: 'ph ph-flag-checkered',
    label: 'By Status',
    items: ['Show all', { divider: true }, 'Pending', 'Paid', 'On Hold', 'Canceled']
  },
  {
    key: 'priority',
    icon: 'ph ph-list-numbers',
    label: 'By Priority',
    items: ['Show all', { divider: true }, 'Highest', 'High', 'Normal', 'Low']
  }
];


// ==============================|| TASK BOARD ||============================== //

export default function TaskBoardPage() {
  const [activeTab, setActiveTab] = useState<ViewMode>('grid');
  const setView = useCallback((mode: ViewMode) => () => setActiveTab(mode), []);

  return (
    <AppLayout>
      <Head title="Task board" />
<Row>
      <Col xl={3} lg={4}>
        <TaskBoardStatus />
      </Col>

      <Col xl={9} lg={8}>
        <Card>
          <Card.Body className="py-3">
            <Row className="align-items-center">
              <Col md={8}>
                <ul className="list-inline m-0">
                  {dropdownConfig.map((item) => (
                    <li key={item.key} className="list-inline-item py-1 me-3">
                      <Dropdown>
                        <Dropdown.Toggle as="a" href="#!" className="link-secondary p-0" aria-haspopup="true" aria-expanded="false">
                          <i className={`${item.icon} align-middle fs-4 text-primary`} style={{ marginInlineEnd: '0.25rem' }} />
                          {item.label}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {item.items.map((entry, entryIndex) =>
                            typeof entry === 'object' && entry !== null && 'divider' in entry ? (
                              <hr className="m-0 my-2" key={`${item.key}-divider-${entryIndex}`} />
                            ) : (
                              <Dropdown.Item key={`${item.key}-item-${entryIndex}`} href="#!">
                                {entry}
                              </Dropdown.Item>
                            )
                          )}
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col md={4} className="text-md-end">
                <span className="m-r-15">View Mode :</span>{' '}
                <ButtonGroup size="sm" className="d-inline-flex">
                  <Button
                    className={`btn-light-primary ${activeTab === 'grid' ? 'active' : ''}`}
                    id="grid-tab"
                    role="tab"
                    aria-controls="grid"
                    aria-selected={activeTab === 'grid'}
                    onClick={setView('grid')}
                  >
                    <i className="ti ti-layout-grid-filled align-baseline" />
                  </Button>

                  <Button
                    className={`btn-light-primary ${activeTab === 'list' ? 'active' : ''}`}
                    id="list-tab"
                    role="tab"
                    aria-controls="list"
                    aria-selected={activeTab === 'list'}
                    onClick={setView('list')}
                  >
                    <i className="ti ti-layout-list-filled align-baseline" />
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Row className="mt-3">
          <Col xl={12}>{activeTab === 'grid' ? <TaskBoardCard /> : <TaskBoardList />}</Col>
        </Row>
      </Col>
    </Row>
    </AppLayout>
  )
}
