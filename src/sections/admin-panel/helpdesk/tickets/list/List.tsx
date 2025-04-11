import { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// third-party
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/coy-without-shadows';
import SimpleBar from 'simplebar-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

// project-imports
import MainCard from 'components/MainCard';
import TicketCategories from './TicketCategories';
import SupportAggent from './SupportAggent';

// assets
import Avatar from 'assets/images/user/avatar-1.jpg';
import Avatar1 from 'assets/images/admin/p1.jpg';
import Image1 from 'assets/images/admin/p1.jpg';
import Image7 from 'assets/images/light-box/sl1.jpg';
import Image2 from 'assets/images/light-box/sl2.jpg';
import Image5 from 'assets/images/light-box/sl5.jpg';
import Image6 from 'assets/images/light-box/sl6.jpg';

// =============================|| TICKET - LIST ||============================== //

export default function List() {
  const [selectedButton, setSelectedButton] = useState(3);

  const handleButtonClick = (buttonIndex: SetStateAction<number>) => {
    setSelectedButton(buttonIndex);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialValues = `<p>Hello...</p>`;

  return (
    <Row>
      <Col xl={8} lg={12} className="help-main large-view">
        <MainCard>
          <Stack direction="horizontal" className="justify-content-between">
            <h5>Ticket List</h5>
            <ButtonGroup size="sm" aria-label="button groups sm">
              <Button variant={selectedButton === 1 ? 'secondary' : 'light-secondary'} onClick={() => handleButtonClick(1)}>
                <i className="fas fa-align-justify" />
              </Button>
              <Button variant={selectedButton === 2 ? 'secondary' : 'light-secondary'} onClick={() => handleButtonClick(2)}>
                <i className="ti ti-menu-2" />
              </Button>
              <Button variant={selectedButton === 3 ? 'secondary' : 'light-secondary'} onClick={() => handleButtonClick(3)}>
                <i className="ti ti-layout-grid" />
              </Button>
            </ButtonGroup>
          </Stack>
        </MainCard>
        <MainCard className="ticket-card">
          <Row>
            <Col sm="auto" className="mb-3 md-sm-0">
              <Stack direction="horizontal" className="d-sm-inline-block align-items-center">
                <Image src={Avatar} className="wid-60" />
                <div className="ms-3 ms-sm-0">
                  <Nav className="flex-column">
                    <Nav.Link href="#" className="p-0 mt-2 text-muted text-center">
                      1 Ticket
                    </Nav.Link>
                    <Nav.Link href="#" className="p-0 text-center text-danger">
                      <i className="fas fa-heart me-1" />3
                    </Nav.Link>
                  </Nav>
                </div>
              </Stack>
            </Col>

            <Col>
              <div className="popup-trigger" onClick={handleShow}>
                <h5>
                  John lui
                  <Badge bg="light-secondary" className="ms-2">
                    Replied
                  </Badge>
                </h5>
                {selectedButton !== 1 && (
                  <Stack direction="horizontal" gap={2} className="mt-3 flex-wrap ">
                    <Stack direction="horizontal">
                      <Image src={Avatar1} className="wid-20 me-2" />
                      Piaf able
                    </Stack>

                    <Stack direction="horizontal">
                      <Image src={Avatar} className="wid-20 me-2" />
                      <span>Assigned to </span>
                      <b className="ms-1 me-2">Robert alia</b>
                    </Stack>

                    <Stack direction="horizontal">
                      <i className="ti ti-calendar me-1" />
                      Updated 22 hours ago
                    </Stack>

                    <Stack direction="horizontal">
                      <i className="fas fa-comment ms-2 me-2" />9
                    </Stack>
                  </Stack>
                )}
                <div className="h5 mt-3">
                  <i className="ti ti-lock f-16 me-1" /> Theme customization issue
                </div>

                {selectedButton !== 2 && selectedButton != 1 && (
                  <div className="bg-body mb-3 p-3">
                    <h6>
                      <Image src={Avatar} className="wid-20  me-2 rounded" />
                      Last comment from{' '}
                      <Link to="#" className="link-secondary">
                        Robert alia:
                      </Link>
                    </h6>
                    <p className="mb-0">
                      <b>hello John lui</b>,<br />
                      you need to create <b>"toolbar-options" div only</b> once in a page&nbsp;in your code,
                      <br />
                      this div fill found every "td" tag in your page,
                      <br />
                      just remove those things and also in option button add
                    </p>
                  </div>
                )}
              </div>

              <Stack direction="horizontal" gap={2}>
                <Button href="#" size="sm" variant="light-primary">
                  <i className="ti ti-eye" />
                  View Ticket
                </Button>

                <Button size="sm" variant="light-danger">
                  <i className="ti ti-trash" />
                  Delete
                </Button>
              </Stack>
            </Col>
          </Row>
        </MainCard>

        <MainCard className="ticket-card  open-ticket">
          <Row>
            <Col sm="auto" className="mb-3 md-sm-0">
              <Stack direction="horizontal" className="d-sm-inline-block align-items-center">
                <Image src={Avatar} className="wid-60" />
                <div className="ms-3 ms-sm-0">
                  <Nav className="flex-column">
                    <Nav.Link href="#" className="p-0 mt-2 text-muted text-center">
                      1 Ticket
                    </Nav.Link>
                    <Nav.Link href="#" className="p-0 text-center text-danger">
                      <i className="fas fa-heart me-1" />3
                    </Nav.Link>
                  </Nav>
                </div>
              </Stack>
            </Col>

            <Col>
              <div className="popup-trigger">
                <h5>
                  John lui
                  <Badge bg="light-secondary" className="ms-2">
                    Replied
                  </Badge>
                </h5>

                {selectedButton !== 1 && (
                  <Stack direction="horizontal" gap={2} className="mt-3 flex-wrap">
                    <Stack direction="horizontal">
                      <Image src={Avatar1} className="wid-20 me-2" />
                      Piaf able
                    </Stack>

                    <Stack direction="horizontal">
                      <Image src={Avatar} className="wid-20 me-2" />
                      <span>Assigned to </span>
                      <b className="ms-1 me-2">Robert alia</b>
                    </Stack>

                    <Stack direction="horizontal">
                      <i className="ti ti-calendar me-1" />
                      Updated 22 hours ago
                    </Stack>

                    <Stack direction="horizontal">
                      <i className="fas fa-comment ms-2 me-2" />9
                    </Stack>
                  </Stack>
                )}
                <div className="h5 mt-3">
                  <i className="ti ti-lock f-16 me-1" /> Theme customization issue
                </div>

                {selectedButton !== 2 && selectedButton != 1 && (
                  <div className="bg-body mb-3 p-3">
                    <h6>
                      <Image src={Avatar} className="wid-20  me-2 rounded" />
                      Last comment from{' '}
                      <Link to="#" className="link-secondary">
                        Robert alia:
                      </Link>
                    </h6>
                    <p className="mb-0">
                      <b>hello John lui</b>,<br />
                      you need to create <b>"toolbar-options" div only</b> once in a page&nbsp;in your code,
                      <br />
                      this div fill found every "td" tag in your page,
                      <br />
                      just remove those things and also in option button add
                    </p>
                  </div>
                )}
              </div>

              <Stack direction="horizontal" gap={2}>
                <Button size="sm" variant="light-primary" href="#">
                  <i className="ti ti-eye" />
                  View Ticket
                </Button>

                <Button size="sm" variant="light-danger">
                  <i className="ti ti-trash" />
                  Delete
                </Button>
              </Stack>
            </Col>
          </Row>
        </MainCard>

        <MainCard className="ticket-card close-ticket">
          <Row>
            <Col sm="auto" className="mb-3 md-sm-0">
              <Stack direction="horizontal" className="d-sm-inline-block align-items-center">
                <Image src={Avatar} className="wid-60" />
                <div className="ms-3 ms-sm-0">
                  <Nav className="flex-column">
                    <Nav.Link href="#" className="p-0 mt-2 text-muted text-center">
                      1 Ticket
                    </Nav.Link>
                    <Nav.Link href="#" className="p-0 text-center text-danger">
                      <i className="fas fa-heart me-1" />3
                    </Nav.Link>
                  </Nav>
                </div>
              </Stack>
            </Col>

            <Col>
              <div className="popup-trigger">
                <h5>
                  John lui
                  <Badge bg="light-secondary" className="ms-2">
                    Replied
                  </Badge>
                </h5>

                {selectedButton !== 1 && (
                  <Stack direction="horizontal" gap={2} className="mt-3 flex-wrap">
                    <Stack direction="horizontal">
                      <Image src={Avatar1} className="wid-20 me-2" />
                      Piaf able
                    </Stack>

                    <Stack direction="horizontal">
                      <Image src={Avatar} className="wid-20 me-2" />
                      <span>Assigned to </span>
                      <b className="ms-1 me-2">Robert alia</b>
                    </Stack>

                    <Stack direction="horizontal">
                      <i className="ti ti-calendar me-1" />
                      Updated 22 hours ago
                    </Stack>

                    <Stack direction="horizontal">
                      <i className="fas fa-comment ms-2 me-2" />9
                    </Stack>
                  </Stack>
                )}
                <div className="h5 mt-3">
                  <i className="ti ti-lock f-16 me-1" /> Theme customization issue
                </div>

                {selectedButton !== 2 && selectedButton != 1 && (
                  <div className="bg-body mb-3 p-3">
                    <h6>
                      <Image src={Avatar} className="wid-20  me-2 rounded" />
                      Last comment from{' '}
                      <Link to="#" className="link-secondary">
                        Robert alia:
                      </Link>
                    </h6>
                    <p className="mb-0">
                      <b>hello John lui</b>,<br />
                      you need to create <b>"toolbar-options" div only</b> once in a page&nbsp;in your code,
                      <br />
                      this div fill found every "td" tag in your page,
                      <br />
                      just remove those things and also in option button add
                    </p>
                  </div>
                )}
              </div>

              <Stack direction="horizontal" gap={2}>
                <Button size="sm" variant="light-primary" href="#">
                  <i className="ti ti-eye" />
                  View Ticket
                </Button>

                <Button size="sm" variant="light-danger">
                  <i className="ti ti-trash" />
                  Delete
                </Button>
              </Stack>
            </Col>
          </Row>
        </MainCard>
      </Col>

      <Col xl={4} lg={12}>
        <TicketCategories />
        <SupportAggent />
      </Col>

      <Offcanvas show={show} onHide={handleClose} placement="end" style={{ width: '550px' }}>
        <Offcanvas.Header closeButton className="border-bottom">
          <Offcanvas.Title>
            Chrome bug The page uses a roller to slide under a black block
            <Badge bg="light-danger" className="text-uppercase ms-2 f-12">
              Private
            </Badge>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <SimpleBar className="custom-scrollbar">
          <Offcanvas.Body className="p-0">
            <Card.Body className="border-bottom p-4">
              <Row>
                <Col md={7}>
                  <Badge bg="light-success" className="me-1">
                    <i className="ti ti-check me-1" />
                    Closed
                  </Badge>

                  <p className="list-inline-item mb-0">
                    <Image src={Image1} alt="" className="wid-20 rounded me-1 img-fluid" />
                    Alpha pro
                  </p>
                </Col>
                <Col md={5} className="text-end">
                  <p className="d-inline-block mb-0">
                    <i className="wid-20 ti ti-calendar text-center f-16 me-2" />
                    <label className="mb-0">Jan,1st,2019</label>
                  </p>
                </Col>
              </Row>
            </Card.Body>

            <Card.Body className="border-bottom p-3">
              <Row>
                <Col xs="auto">
                  <Image className="media-object wid-60 img-radius" src={Avatar} />
                </Col>
                <Col>
                  <Alert variant="warning" dismissible>
                    <b>Note!</b> This ticket is closed. If you want to re-open it, just post a reply below.
                  </Alert>

                  <ReactQuill
                    className="hei-150 d-inline-block w-100"
                    value={initialValues}
                    theme="snow"
                    modules={{
                      toolbar: {
                        container: [[{ size: ['small', false, 'large', 'huge'] }], ['bold', 'italic', 'underline'], ['image', 'code']]
                      }
                    }}
                  />

                  <Stack direction="horizontal" gap={2} className="mt-2">
                    <Dropdown>
                      <Button variant="light-primary" size="sm">
                        Primary
                      </Button>

                      <Dropdown.Toggle split variant="light-primary" size="sm" />

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-1">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Form.Label as={Button} variant="light-secondary" size={'sm'} className="mb-0">
                      <i className="ti ti-paperclip me-1" /> Add Atachment
                    </Form.Label>
                    <Form.Control type="file" name="file" className="d-none" id="mod-flup" />
                  </Stack>
                </Col>
              </Row>
            </Card.Body>

            <Card.Body className="border-bottom p-3">
              <Row className="align-items-center">
                <Col xs="auto">
                  <Image src={Avatar} alt="" className="wid-60 img-radius" />
                </Col>

                <Col>
                  <h6 className="mb-0">
                    Support Agent name
                    <Badge bg="light-secondary" className=" ms-2">
                      Support Agent
                    </Badge>
                  </h6>
                  <Form.Label className="text-muted">5 Month ago</Form.Label>
                </Col>

                <Col xs="auto">
                  <Link to="#" className="me-1">
                    <i className="ti ti-edit text-muted" />
                  </Link>

                  <Link to="#">
                    <i className="ti ti-trash text-muted" />
                  </Link>
                </Col>

                <div className="mt-3">
                  <p>hello John lui,</p>
                  <p>
                    you need to create <strong>"toolbar-options" div only once</strong> in a page in your code, this div fill found{' '}
                    <strong>every "td"</strong> tag in your page, just remove those things.
                  </p>
                  <p>and also</p>
                  <p>
                    in option button add "<strong>p-0</strong>" className in "<strong>I</strong>" tag
                  </p>
                  <p>to</p>
                  <p></p>
                  <p>Thanks...</p>
                </div>

                <SyntaxHighlighter language="javascript" style={dark} customStyle={{ borderRadius: 2, marginLeft: 10, width: 520 }}>
                  {`<pre>
  <code className="language-css">
      p {
        color: #1abc9c
        }
  </code>
 </pre>`}
                </SyntaxHighlighter>
              </Row>
            </Card.Body>

            <Card.Body className="border-bottom p-3">
              <Row className="align-items-center">
                <Col xs="auto">
                  <Image src={Avatar} alt="" className="wid-60 img-radius" />
                </Col>

                <Col>
                  <h6 className="mb-0">
                    Support Agent name
                    <Badge bg="light-secondary" className=" ms-2">
                      Support Agent
                    </Badge>
                  </h6>
                  <Form.Label className="text-muted">5 Month ago</Form.Label>
                </Col>

                <Col xs="auto">
                  <Link to="#" className="me-1">
                    <i className="ti ti-edit text-muted" />
                  </Link>

                  <Link to="#">
                    <i className="ti ti-trash text-muted" />
                  </Link>
                </Col>

                <div className="mt-3">
                  <p>hello John lui,</p>
                  <p>
                    you need to create <strong>"toolbar-options" div only once</strong> in a page in your code, this div fill found{' '}
                    <strong>every "td"</strong> tag in your page, just remove those things.
                  </p>
                  <p>and also</p>
                  <p>
                    in option button add "<strong>p-0</strong>" className in "<strong>I</strong>" tag
                  </p>
                  <p>to</p>
                  <p></p>
                  <p>Thanks...</p>
                </div>

                <Row className="text-center mb-2">
                  <Col xl={2} lg={3} sm={4} xs={12}>
                    <Image src={Image7} className=" m-b-10" />
                  </Col>

                  <Col xl={2} lg={3} sm={4} xs={12}>
                    <Image src={Image2} className=" m-b-10" />
                  </Col>

                  <Col xl={2} lg={3} sm={4} xs={12}>
                    <Image src={Image5} className=" m-b-10" />
                  </Col>

                  <Col xl={2} lg={3} sm={4} xs={12}>
                    <Image src={Image6} className=" m-b-10" />
                  </Col>

                  <Col xl={2} lg={3} sm={4} xs={12}>
                    <Image src={Image2} className=" m-b-10" />
                  </Col>
                </Row>
              </Row>
            </Card.Body>

            <Card.Body className="border-bottom p-3">
              <Row className="align-items-center">
                <Col xs="auto">
                  <Image src={Avatar} alt="" className="wid-60 img-radius" />
                </Col>

                <Col>
                  <h6 className="mb-0">
                    Support Agent name
                    <Badge bg="light-secondary" className=" ms-2">
                      Support Agent
                    </Badge>
                  </h6>
                  <Form.Label className="text-muted">5 Month ago</Form.Label>
                </Col>

                <Col xs="auto">
                  <Link to="#" className="me-1">
                    <i className="ti ti-edit text-muted" />
                  </Link>

                  <Link to="#">
                    <i className="ti ti-trash text-muted" />
                  </Link>
                </Col>

                <div className="mt-3">
                  <p>hello John lui,</p>
                  <p>
                    you need to create <strong>"toolbar-options" div only once</strong> in a page in your code, this div fill found{' '}
                    <strong>every "td"</strong> tag in your page, just remove those things.
                  </p>
                  <p>and also</p>
                  <p>
                    in option button add "<strong>p-0</strong>" className in "<strong>I</strong>" tag
                  </p>
                  <p>to</p>
                  <p></p>
                  <p>Thanks...</p>
                </div>

                <SyntaxHighlighter language="javascript" style={dark} customStyle={{ borderRadius: 2, marginLeft: 10, width: 520 }}>
                  {`<pre>
  <code className="language-css">
      p {
        color: #1abc9c
        }
  </code>
 </pre>`}
                </SyntaxHighlighter>
              </Row>
            </Card.Body>
          </Offcanvas.Body>
        </SimpleBar>
      </Offcanvas>
    </Row>
  );
}
