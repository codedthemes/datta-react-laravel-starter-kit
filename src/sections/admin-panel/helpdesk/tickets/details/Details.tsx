// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tooltip from 'react-bootstrap/Tooltip';

// third-party
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/coy-without-shadows';
import SyntaxHighlighter from 'react-syntax-highlighter';

// project-imports
import MainCard from 'components/MainCard';
import TicketDetails from './TicketDetails';

// assets
import Avatar from 'assets/images/user/avatar-10.jpg';
import Avatar1 from 'assets/images/user/avatar-4.jpg';
import Image1 from 'assets/images/light-box/sl1.jpg';
import Image2 from 'assets/images/light-box/sl2.jpg';
import Image5 from 'assets/images/light-box/sl5.jpg';
import Image6 from 'assets/images/light-box/sl6.jpg';

// ==============================|| TICKET - DETAILS ||============================== //

export default function Details() {
  return (
    <Row>
      <Col lg={8}>
        <MainCard
          bodyClassName="p-0"
          title={
            <>
              <i className="ti ti-lock f-20 text-primary" /> <span>Private Ticket #1831786</span>
            </>
          }
        >
          <div className="card-body border-bottom py-2">
            <Row className="align-items-center">
              <Col md={8}>
                <h4 className="d-inline-block mb-0">Theme customization issue</h4>
              </Col>
              <Col md={4} className="text-md-end">
                <Stack direction="horizontal" gap={2} className="justify-content-end">
                  <Button variant="light-success" size="sm">
                    Make as unread
                  </Button>
                  <i className="ti ti-star f-20 text-warning" />
                </Stack>
              </Col>
            </Row>
          </div>

          <div className="card-body border-bottom py-2">
            <Row className="align-items-center">
              <Col md={12}>
                <Button size="sm" variant="light-success" className="me-1">
                  <i className="me-2 ti ti-message" />
                  Post a reply
                </Button>

                <Button size="sm" variant="light-warning" className="me-1">
                  <i className="me-2 ti ti-edit" />
                  Post a Note
                </Button>

                <Button size="sm" variant="light-danger" className="my-2 ">
                  <i className="me-2 ti ti-user-check" />
                  Customer Notes
                </Button>
              </Col>
            </Row>
          </div>

          <div className="card-body border-bottom">
            <Row>
              <Col sm="auto" className="mb-3 mb-sm-0">
                <Stack className="d-sm-inline-block align-items-center">
                  <Image src={Avatar} className="wid-60 img-radius mb-2" />
                  <div className="ms-3 ms-sm-0 text-sm-center">
                    <p>
                      <i className="ti ti-thumb-up f-18 text-primary" /> 4
                    </p>
                  </div>
                </Stack>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div>
                      <h4 className="d-inline-block">You</h4>
                      <Badge bg="light-secondary">replied</Badge>
                      <p className="text-muted">1 day ago on Wednesday at 8:18am</p>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <ul className="list-unstyled mb-0">
                      <li className="d-inline-block f-20 me-1">
                        <OverlayTrigger placement="top" overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>}>
                          <i className="ti ti-edit f-24 text-success" />
                        </OverlayTrigger>
                      </li>
                      <li className="d-inline-block f-20">
                        <OverlayTrigger placement="top" overlay={<Tooltip id="delete-tooltip">Delete</Tooltip>}>
                          <i className="ti ti-trash f-24 text-danger" />
                        </OverlayTrigger>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <div>
                  <p>
                    <b>hello john doe,</b>
                  </p>

                  <p>
                    you need to create <strong>"toolbar-options" div only once</strong> in a page in your code, this div fill found{' '}
                    <strong>every "td"</strong> tag in your page, just remove those things.
                  </p>
                  <p>
                    and also, in option button add <strong>"p-0" className in "I" tag</strong> to
                  </p>

                  <p>Thanks...</p>
                </div>

                <SyntaxHighlighter language="javascript" style={dark} customStyle={{ backgroundColor: '#EEE', borderRadius: 2 }}>
                  {`<pre>
  <code className="language-css">
      p {
        color: #1abc9c
        }
  </code>
 </pre>`}
                </SyntaxHighlighter>
              </Col>
            </Row>
          </div>

          <div className="card-body border-bottom">
            <Row>
              <Col sm="auto" className="mb-3 mb-sm-0">
                <Stack className="d-sm-inline-block align-items-center">
                  <Image src={Avatar1} className="wid-60 img-radius mb-2" />
                  <div className="ms-3 ms-sm-0 text-sm-center">
                    <div className="ms-3 ms-sm-0 text-sm-center">
                      <Badge bg="light-danger">1</Badge> Ticket
                    </div>
                  </div>
                </Stack>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div>
                      <h4 className="d-inline-block">You</h4>
                      <Badge bg="light-secondary">replied</Badge>
                      <p className="text-muted">1 day ago on Wednesday at 8:18am</p>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <ul className="list-unstyled mb-0">
                      <li className="d-inline-block f-20 me-1">
                        <OverlayTrigger placement="top" overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>}>
                          <i className="ti ti-edit f-24 text-success" />
                        </OverlayTrigger>
                      </li>
                      <li className="d-inline-block f-20">
                        <OverlayTrigger placement="top" overlay={<Tooltip id="delete-tooltip">Delete</Tooltip>}>
                          <i className="ti ti-trash f-24 text-danger" />
                        </OverlayTrigger>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <div>
                  <p>
                    <b>hello john doe,</b>
                  </p>

                  <p>
                    you need to create <strong>"toolbar-options" div only once</strong> in a page in your code, this div fill found{' '}
                    <strong>every "td"</strong> tag in your page, just remove those things.
                  </p>
                  <p>
                    and also, in option button add <strong>"p-0" className in "I" tag</strong> to
                  </p>

                  <p>Thanks...</p>
                </div>

                <Row className="text-center mb-2">
                  <Col xl={2} lg={3} sm={4} xs={12}>
                    <Image src={Image1} className=" m-b-10" fluid />
                  </Col>

                  <Col xl={2} lg={3} sm={4} xs={12}>
                    <Image src={Image2} className="m-b-10" fluid />
                  </Col>

                  <Col xl={2} lg={3} sm={4} xs={12}>
                    <Image src={Image5} className=" m-b-10" fluid />
                  </Col>

                  <Col xl={2} lg={3} sm={4} xs={12}>
                    <Image src={Image6} className=" m-b-10" fluid />
                  </Col>

                  <Col xl={2} lg={3} sm={4} xs={12}>
                    <Image src={Image2} className=" m-b-10" fluid />
                  </Col>
                </Row>
                <Button variant="light-danger" size="sm">
                  <i className="ti ti-thumb-up me-1" />
                  Like
                </Button>
              </Col>
            </Row>
          </div>

          <div className="card-body border-bottom">
            <Row>
              <Col sm="auto" className="mb-3 mb-sm-0">
                <Stack className="d-sm-inline-block align-items-center">
                  <Image src={Avatar} className="wid-60 img-radius mb-2" />
                  <div className="ms-3 ms-sm-0 text-sm-center">
                    <p>
                      <i className="ti ti-thumb-up f-18 text-primary" /> 4
                    </p>
                  </div>
                </Stack>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div>
                      <h4 className="d-inline-block">You</h4>
                      <Badge bg="light-secondary">replied</Badge>
                      <p className="text-muted">1 day ago on Wednesday at 8:18am</p>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <ul className="list-unstyled mb-0">
                      <li className="d-inline-block f-20 me-1">
                        <OverlayTrigger placement="top" overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>}>
                          <i className="ti ti-edit f-24 text-success" />
                        </OverlayTrigger>
                      </li>
                      <li className="d-inline-block f-20">
                        <OverlayTrigger placement="top" overlay={<Tooltip id="delete-tooltip">Delete</Tooltip>}>
                          <i className="ti ti-trash f-24 text-danger" />
                        </OverlayTrigger>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <div>
                  <p>
                    <b>hello john doe,</b>
                  </p>

                  <p>
                    you need to create <strong>"toolbar-options" div only once</strong> in a page in your code, this div fill found{' '}
                    <strong>every "td"</strong> tag in your page, just remove those things.
                  </p>
                  <p>
                    and also, in option button add <strong>"p-0" className in "I" tag</strong> to
                  </p>

                  <p>Thanks...</p>
                </div>

                <SyntaxHighlighter language="javascript" style={dark} customStyle={{ backgroundColor: '#EEE', borderRadius: 2 }}>
                  {`<pre>
  <code className="language-css">
      p {
        color: #1abc9c
        }
  </code>
 </pre>`}
                </SyntaxHighlighter>
              </Col>
            </Row>
          </div>
        </MainCard>
      </Col>

      <Col lg={4}>
        <TicketDetails />
      </Col>
    </Row>
  );
}
