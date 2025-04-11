import { useState } from 'react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import SimpleBar from 'simplebar-react';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| OFFCANVAS - LIVE DEMO ||============================== //

export default function LiveDemoPage() {
  const [showFirstOffcanvas, setShowFirstOffcanvas] = useState(false);
  const [showSecondOffcanvas, setShowSecondOffcanvas] = useState(false);

  const handleCloseFirstOffcanvas = () => setShowFirstOffcanvas(false);
  const handleShowFirstOffcanvas = () => setShowFirstOffcanvas(true);

  const handleCloseSecondOffcanvas = () => setShowSecondOffcanvas(false);
  const handleShowSecondOffcanvas = () => setShowSecondOffcanvas(true);

  return (
    <MainCard title="Live Demo">
      <div className="bd-example-modal mb-4">
        <div className="offcanvas offcanvas-start">
          <Offcanvas.Header>
            <h5 className="offcanvas-title" id="offcanvasLabel">
              Offcanvas
            </h5>
            <CloseButton />
          </Offcanvas.Header>
          <Offcanvas.Body>
            Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
          </Offcanvas.Body>
        </div>
      </div>
      <Stack direction="horizontal" gap={2} className="flex-wrap">
        <Button as="a" onClick={handleShowFirstOffcanvas}>
          Link with href
        </Button>

        <Offcanvas show={showFirstOffcanvas} onHide={handleCloseFirstOffcanvas} backdropClassName="offcanvas-backdrop show">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <SimpleBar forceVisible="y" className="max-height-adjust">
            <Offcanvas.Body>
              <h5 className="mb-2">
                $746.5k{' '}
                <small className="text-success f-w-400">
                  +20.6 <i className="ti ti-arrow-up" />
                </small>
              </h5>
              <p className="text-muted mb-3">Past 30 days</p>

              <div className="table-body">
                <div className="table-responsive">
                  <Table className="table-hover">
                    <thead>
                      <tr>
                        <th>customer</th>
                        <th className="text-end">plan</th>
                        <th className="text-end">mrp</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-arrow-down f-16" />
                            </div>
                            <span>Logicoma</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-star f-16" />
                            </div>
                            <span>UAC</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span>$199</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-wallet f-16" />
                            </div>
                            <span>Biffco</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-arrow-down f-16" />
                            </div>
                            <span>Matsumura</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-wallet f-16" />
                            </div>
                            <span>Biffco</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-arrow-down f-16" />
                            </div>
                            <span>Logicoma</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-star f-16" />
                            </div>
                            <span>UAC</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span>$199</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-wallet f-16" />
                            </div>
                            <span>Biffco</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-arrow-down f-16" />
                            </div>
                            <span>Matsumura</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-wallet f-16" />
                            </div>
                            <span>Biffco</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="text-end">
                    <Button className="btn-light-danger btn-sm" onClick={handleCloseFirstOffcanvas}>
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </SimpleBar>
        </Offcanvas>

        <Button onClick={handleShowSecondOffcanvas}>Button with data-bs-target</Button>

        <Offcanvas show={showSecondOffcanvas} onHide={handleCloseSecondOffcanvas} backdropClassName="offcanvas-backdrop show">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <SimpleBar forceVisible="y" className="max-height-adjust">
            <Offcanvas.Body className="simplebar-content">
              <h5 className="mb-2">
                $746.5k{' '}
                <small className="text-success f-w-400">
                  +20.6 <i className="ti ti-arrow-up" />
                </small>
              </h5>
              <p className="text-muted mb-3">Past 30 days</p>

              <div className="table-body">
                <div className="table-responsive">
                  <Table className="table-hover">
                    <thead>
                      <tr>
                        <th>customer</th>
                        <th className="text-end">plan</th>
                        <th className="text-end">mrp</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-arrow-down f-16" />
                            </div>
                            <span>Logicoma</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-star f-16" />
                            </div>
                            <span>UAC</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span>$199</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-wallet f-16" />
                            </div>
                            <span>Biffco</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-arrow-down f-16" />
                            </div>
                            <span>Matsumura</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-wallet f-16" />
                            </div>
                            <span>Biffco</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-arrow-down f-16" />
                            </div>
                            <span>Logicoma</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-star f-16" />
                            </div>
                            <span>UAC</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span>$199</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-wallet f-16" />
                            </div>
                            <span>Biffco</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-arrow-down f-16" />
                            </div>
                            <span>Matsumura</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Stack direction="horizontal">
                            <div className="avatar avatar-xs bg-light-secondary flex-shrink-0 me-2">
                              <i className="ti ti-wallet f-16" />
                            </div>
                            <span>Biffco</span>
                          </Stack>
                        </td>
                        <td className="text-end">
                          <Badge bg="light-success ">Team</Badge>
                        </td>
                        <td className="text-end f-w-600">
                          <span className="text-danger">-$72</span>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="text-end">
                    <Button className="btn-light-danger btn-sm" onClick={handleCloseSecondOffcanvas}>
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </SimpleBar>
        </Offcanvas>
      </Stack>
    </MainCard>
  );
}
