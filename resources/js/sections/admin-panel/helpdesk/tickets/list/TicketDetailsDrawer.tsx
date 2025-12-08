import { useState } from 'react';

// react-bootstrap
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import SimpleBarScroll from '@/components/third-party/SimpleBar';
import ReactQuillDemo from '@/components/third-party/ReactQuill';

// third-party
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/coy-without-shadows';
import SyntaxHighlighter from 'react-syntax-highlighter';

// type
import { TicketDetailsDrawerProps } from '@/types/helpdesk';

// assets
import Avatar from '@assets/images/user/avatar-1.png';
import Image1 from '@assets/images/admin/p1.jpg';
import Image7 from '@assets/images/light-box/sl1.jpg';
import Image2 from '@assets/images/light-box/sl2.jpg';
import Image5 from '@assets/images/light-box/sl5.jpg';
import Image6 from '@assets/images/light-box/sl6.jpg';

// ==============================|| TICKET DETAILS - SIDE DRAWER ||============================== //

export default function TicketDetailsDrawer({ isOpen, handleDrawerOpen }: TicketDetailsDrawerProps) {
  const [text, setText] = useState('<p>Hello...</p>');

  const handleChange = (value: string) => {
    setText(value);
  };
  return (
    <Offcanvas show={isOpen} onHide={handleDrawerOpen} placement="end" style={{ width: '550px' }}>
      <Offcanvas.Header closeButton className="border-bottom">
        <Offcanvas.Title>
          Chrome bug The page uses a roller to slide under a black block
          <Badge bg="light-danger" className="text-uppercase ms-2 f-12">
            Private
          </Badge>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <SimpleBarScroll style={{ maxHeight: 'calc(100vh - 90px)' }}>
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

                <ReactQuillDemo value={text} onChange={handleChange} />

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
                      <hr className="m-0 my-2" />
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
                <a className="me-1">
                  <i className="ti ti-edit text-muted" />
                </a>

                <a>
                  <i className="ti ti-trash text-muted" />
                </a>
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
    <code class="language-css">
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
                <a className="me-1">
                  <i className="ti ti-edit text-muted" />
                </a>

                <a>
                  <i className="ti ti-trash text-muted" />
                </a>
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
                <Col xl={2} lg={3} sm={4} xs={6}>
                  <Image src={Image7} className="m-b-10" alt="image-7" fluid />
                </Col>
                <Col xl={2} lg={3} sm={4} xs={6}>
                  <Image src={Image2} className="m-b-10" alt="image-2" fluid />
                </Col>
                <Col xl={2} lg={3} sm={4} xs={6}>
                  <Image src={Image5} className="m-b-10" alt="image-5" fluid />
                </Col>
                <Col xl={2} lg={3} sm={4} xs={6}>
                  <Image src={Image6} className="m-b-10" alt="image-6" fluid />
                </Col>
                <Col xl={2} lg={3} sm={4} xs={6}>
                  <Image src={Image2} className="m-b-10" alt="image-2" fluid />
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
                <a className="me-1">
                  <i className="ti ti-edit text-muted" />
                </a>

                <a>
                  <i className="ti ti-trash text-muted" />
                </a>
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
    <code class="language-css">
        p {
            color: #1abc9c
        }
    </code>
</pre>`}
              </SyntaxHighlighter>
            </Row>
          </Card.Body>
        </Offcanvas.Body>
      </SimpleBarScroll>
    </Offcanvas>
  );
}
