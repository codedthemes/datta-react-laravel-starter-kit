import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// third-party
import SimpleBar from 'simplebar-react';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Avatar1 from 'assets/images/user/avatar-1.jpg';
import Avatar2 from 'assets/images/user/avatar-2.jpg';
import Avatar3 from 'assets/images/user/avatar-3.jpg';
import Avatar5 from 'assets/images/user/avatar-5.jpg';
import { Briefcase, CalendarBlank, EnvelopeOpen, GlobeHemisphereEast, MapPin, RadioButton, PhoneCall } from 'phosphor-react';

const users = [
  {
    id: 1,
    name: 'John Doe',
    message: 'when meeting schedule',
    time: '1 week ago',
    avatar: Avatar1,
    badgeClass: 'bg-success'
  },
  {
    id: 2,
    name: 'Keefs',
    message: 'when meeting schedule',
    time: '1 week ago',
    avatar: Avatar2,
    badgeClass: 'bg-success bg-opacity-50'
  },
  {
    id: 3,
    name: 'Lazaro',
    message: 'when meeting schedule',
    time: '1 week ago',
    avatar: Avatar3,
    badgeClass: 'bg-secondary bg-opacity-50'
  },
  {
    id: 4,
    name: 'Adeline',
    message: 'when meeting schedule',
    time: '1 week ago',
    avatar: Avatar3,
    badgeClass: 'bg-secondary bg-opacity-50'
  }
];

const ReplyDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="avatar avatar-xs btn-link-secondary dropdown-toggle arrow-none" id="dropdown-basic">
        <i className="ti ti-dots-vertical f-18" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="#">
          <i className="ti ti-arrow-back-up" /> Reply
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="#">
          <i className="ti ti-arrow-forward-up" /> Forward
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="#">
          <i className="ti ti-copy" /> Copy
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="#">
          <i className="ti ti-trash" /> Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

// ==============================|| APPLICATION - MESSAGE ||============================== //

export default function MessagePage() {
  const [showUserList, setShowUserList] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [open, setOpen] = useState(true);
  const [infoOpen, setInfoOpen] = useState(false);

  const handleShowUserList = () => setShowUserList(true);
  const handleCloseUserList = () => {
    setShowUserList(false);
  };

  const handleCloseUserInfo = () => setShowUserInfo(false);
  const handleShowUserInfo = () => {
    setShowUserInfo(true);
    setInfoOpen(false);
  };

  const handleCloseInfo = () => setInfoOpen(false);
  const handleShowInfo = () => setInfoOpen(!infoOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1025) {
        setOpen(false);
        setInfoOpen(false);
      } else {
        setOpen(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Row>
      <Col md={12}>
        <MainCard title={false}>
          <div className="chat-wrapper">
            <Offcanvas xxl placement="start" className="chat-offcanvas" show={showUserList} onHide={handleCloseUserList}>
              <Offcanvas.Header closeButton />
              <Offcanvas.Body className="p-0 ">
                <div id="chat-user_list" className="show collapse">
                  <div className="chat-user_list">
                    <Card className="bg-transparent shadow-none border-0 mb-0">
                      <CardBody className="px-0 pt-0">
                        <Stack direction="horizontal" className="align-items-center mb-4">
                          <div className="me-auto">
                            <h5 className="mb-0">
                              Inbox <span className="avatar avatar-xs bg-light-secondary rounded-circle">9</span>
                            </h5>
                          </div>
                          <div className="ms-auto">
                            <Dropdown>
                              <Dropdown.Toggle className="avatar avatar-s btn-link-secondary arrow-none" id="dropdown-basic">
                                <i className="ti ti-dots f-18" />
                              </Dropdown.Toggle>

                              <Dropdown.Menu align="end">
                                <Dropdown.Item as={Link} to="#">
                                  Preferences
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="#">
                                  Edit profile
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="#">
                                  Go offline
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="#">
                                  Mark all read
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </Stack>
                        <div className="form-search">
                          <i className="ph-duotone ph-magnifying-glass icon-search" />
                          <Form.Control type="search" placeholder="Search here..." />
                        </div>
                      </CardBody>
                    </Card>
                    <SimpleBar style={{ maxHeight: 'calc(100vh - 370px)' }}>
                      <Card.Body className="p-0">
                        <ListGroup variant="flush">
                          {Array(2)
                            .fill(users)
                            .flat()
                            .map((user, index) => (
                              <ListGroup.Item action key={index} className="p-3">
                                <Stack direction="horizontal" className="align-items-center justify-content-between">
                                  <Stack direction="horizontal" className="align-items-center">
                                    <div className="chat-avatar">
                                      <Image className="rounded-circle img-fluid wid-40" src={user.avatar} alt="User " />
                                      <div className={`chat-badge ${user.badgeClass}`}></div>
                                    </div>
                                    <div className="flex-grow-1 mx-2">
                                      <h6 className="mb-0">{user.name}</h6>
                                      <Stack direction="horizontal" className="text-sm text-muted">
                                        <div className="flex-grow-1 position-relative">
                                          <span className="mb-0 text-truncate position-absolute top-0 start-0 w-100">{user.message}</span>
                                        </div>
                                        <span>{user.time}</span>
                                      </Stack>
                                    </div>
                                  </Stack>
                                  <Dropdown>
                                    <Dropdown.Toggle
                                      className="avatar avatar-xs btn-link-secondary dropdown-toggle arrow-none"
                                      id={`dropdown-${user.id}`}
                                    >
                                      <i className="ti ti-dots-vertical f-18" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                      <Dropdown.Item as={Link} to="#">
                                        Delete conversation
                                      </Dropdown.Item>
                                      <Dropdown.Item as={Link} to="#">
                                        Mark as read
                                      </Dropdown.Item>
                                      <Dropdown.Item as={Link} to="#">
                                        Profile
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </Stack>
                              </ListGroup.Item>
                            ))}
                        </ListGroup>
                      </Card.Body>
                    </SimpleBar>

                    <Card.Body className="p-0">
                      <ListGroup variant="flush">
                        <ListGroup.Item action>
                          <i className="ti ti-power" />
                          <span>Logout</span>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                          <i className="ti ti-settings" />
                          <span>Setting</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Stack direction="horizontal" className="align-items-center ju">
                            <div className="chat-avatar position-relative">
                              <Image roundedCircle fluid width={40} height={40} src={Avatar5} alt="User" />
                              <span className="chat-badge bg-success" />
                            </div>
                            <div className="flex-grow-1 mx-3">
                              <h6 className="mb-0">John Doe</h6>
                              <span className="text-muted text-sm">UI/UX Designer</span>
                            </div>
                            <Dropdown align="end">
                              <Dropdown.Toggle className="avatar avatar-xs arrow-none btn-link-secondary p-0">
                                <i className="ti ti-chevron-right f-16" />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="#">
                                  <span className="chat-badge bg-success me-2"></span> Active
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="#">
                                  <span className="chat-badge bg-warning me-2"></span> Away
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="#">
                                  <span className="chat-badge bg-secondary me-2"></span> Do not disturb
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Stack>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>

            <Collapse in={open} dimension="width">
              <div className="chat-user_list ">
                <Card className="bg-transparent shadow-none border-0 mb-0">
                  <CardBody className="px-0 pt-0">
                    <Stack direction="horizontal" className="align-items-center mb-4">
                      <div className="me-auto">
                        <h5 className="mb-0">
                          Inbox <span className="avatar avatar-xs bg-light-secondary rounded-circle">9</span>
                        </h5>
                      </div>
                      <div className="ms-auto">
                        <Dropdown>
                          <Dropdown.Toggle className="avatar avatar-s btn-link-secondary arrow-none" id="dropdown-basic">
                            <i className="ti ti-dots f-18" />
                          </Dropdown.Toggle>

                          <Dropdown.Menu align="end">
                            <Dropdown.Item href="#">Preferences</Dropdown.Item>
                            <Dropdown.Item href="#">Edit profile</Dropdown.Item>
                            <Dropdown.Item href="#">Go offline</Dropdown.Item>
                            <Dropdown.Item href="#">Mark all read</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </Stack>
                    <div className="form-search">
                      <i className="ph-duotone ph-magnifying-glass icon-search" />
                      <Form.Control type="search" placeholder="Search here..." />
                    </div>
                  </CardBody>
                </Card>
                <SimpleBar style={{ maxHeight: 'calc(100vh - 550px)' }}>
                  <Card.Body className="p-0">
                    <ListGroup variant="flush">
                      {Array(2)
                        .fill(users)
                        .flat()
                        .map((user, index) => (
                          <ListGroup.Item action key={index} className="p-3">
                            <Stack direction="horizontal" className="align-items-center">
                              <div className="chat-avatar">
                                <Image className="rounded-circle img-fluid wid-40" src={user.avatar} alt="User " />
                                <div className={`chat-badge ${user.badgeClass}`}></div>
                              </div>
                              <div className="flex-grow-1 mx-2">
                                <h6 className="mb-0">{user.name}</h6>
                                <Stack direction="horizontal" className="text-sm text-muted">
                                  <div className="flex-grow-1 position-relative">
                                    <span className="mb-0 text-truncate position-absolute top-0 start-0 w-100">{user.message}</span>
                                  </div>
                                  <span>{user.time}</span>
                                </Stack>
                              </div>
                              <Dropdown>
                                <Dropdown.Toggle
                                  className="avatar avatar-xs btn-link-secondary dropdown-toggle arrow-none"
                                  id={`dropdown-${user.id}`}
                                >
                                  <i className="ti ti-dots-vertical f-18"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                  <Dropdown.Item href="#">Delete conversation</Dropdown.Item>
                                  <Dropdown.Item href="#">Mark as read</Dropdown.Item>
                                  <Dropdown.Item href="#">Profile</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </Stack>
                          </ListGroup.Item>
                        ))}
                    </ListGroup>
                  </Card.Body>
                </SimpleBar>
                <Card.Body className="p-0">
                  <ListGroup variant="flush">
                    <ListGroup.Item action>
                      <i className="ti ti-power" />
                      <span>Logout</span>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                      <i className="ti ti-settings" />
                      <span>Setting</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Stack direction="horizontal" className="align-items-center">
                        <div className="flex-shrink-0">
                          <div className="chat-avatar position-relative">
                            <Image roundedCircle fluid width={40} height={40} src={Avatar5} alt="User" />
                            <span className="chat-badge bg-success"></span>
                          </div>
                        </div>
                        <div className="mx-3">
                          <h6 className="mb-0">John Doe</h6>
                          <span className="text-muted text-sm">UI/UX Designer</span>
                        </div>
                        <div className="flex-shrink-0">
                          <Dropdown align="end">
                            <Dropdown.Toggle className="avatar avatar-xs btn-link-secondary p-0 arrow-none">
                              <i className="ti ti-chevron-right f-16" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#">
                                <span className="chat-badge bg-success me-2"></span> Active
                              </Dropdown.Item>
                              <Dropdown.Item href="#">
                                <span className="chat-badge bg-warning me-2"></span> Away
                              </Dropdown.Item>
                              <Dropdown.Item href="#">
                                <span className="chat-badge bg-secondary me-2"></span> Do not disturb
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </Stack>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </div>
            </Collapse>

            <div className="chat-content">
              <Stack direction="horizontal" className="align-items-center mb-3">
                <ul className="list-inline me-auto mb-0">
                  <li className="list-inline-item">
                    <Button className="d-xxl-none avatar avatar-s btn-link-secondary" onClick={handleShowUserList}>
                      <i className="ti ti-menu-2 f-18" />
                    </Button>
                    <Button className="d-none d-xxl-inline-flex avatar avatar-s btn-link-secondary" onClick={() => setOpen(!open)}>
                      <i className="ti ti-menu-2 f-18" />
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Stack direction="horizontal" className="align-items-center">
                      <div className="chat-avatar">
                        <Image className="rounded-circle img-fluid wid-40" src={Avatar5} alt="User image" />
                        <i className="chat-badge bg-success" />
                      </div>
                      <div className="mx-3 d-none d-sm-inline-block">
                        <h6 className="mb-0">Alene</h6>
                        <span className="text-sm text-muted">UI/UX Designer</span>
                      </div>
                    </Stack>
                  </li>
                </ul>
                <ul className="list-inline ms-auto mb-0">
                  <li className="list-inline-item">
                    <Link to="#" className="avatar avatar-s btn-link-secondary">
                      <i className="ti ti-phone-call f-18" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="avatar avatar-s btn-link-secondary">
                      <i className="ti ti-video f-18" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="d-xxl-none avatar avatar-s btn-link-secondary"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas_User_info"
                      onClick={handleShowUserInfo}
                    >
                      <i className="ti ti-info-circle f-18" />
                    </Link>
                    <Link
                      to="#"
                      className="d-none d-xxl-inline-flex avatar avatar-s btn-link-secondary"
                      data-bs-toggle="collapse"
                      data-bs-target="#chat-user_info"
                      onClick={handleShowInfo}
                    >
                      <i className="ti ti-info-circle f-18" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Dropdown>
                      <Dropdown.Toggle className="avatar avatar-s btn-link-secondary arrow-none" id="dropdown-basic">
                        <i className="ti ti-dots f-18" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="#">
                          Name
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="#">
                          Date
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="#">
                          Rating
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="#">
                          Unread
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </Stack>

              <Card className="chat-body shadow-none mb-0">
                <SimpleBar style={{ maxHeight: 'calc(100vh - 340px)' }}>
                  <div className="chat-message">
                    <Card.Body>
                      <div className="message-out">
                        <Stack direction="horizontal" className="align-items-end flex-column">
                          <p className="mb-1 text-muted">
                            <small>9h ago</small>
                          </p>
                          <Stack direction="horizontal" className="d-flex message align-items-end flex-column">
                            <Stack direction="horizontal" className="d-flex align-items-center mb-1 chat-msg">
                              <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                <li className="list-inline-item">
                                  <ReplyDropdown />
                                </li>
                                <li className="list-inline-item">
                                  <Button className="avatar avatar-xs btn-link-secondary">
                                    <i className="ti ti-edit-circle f-18" />
                                  </Button>
                                </li>
                              </ul>
                              <div className="ms-3">
                                <div className="msg-content card mb-0">
                                  <p className="mb-0">Hi...Henny!!</p>
                                </div>
                              </div>
                            </Stack>
                            <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                              <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                <li className="list-inline-item">
                                  <ReplyDropdown />
                                </li>
                                <li className="list-inline-item">
                                  <Link to="#" className="avatar avatar-xs btn-link-secondary">
                                    <i className="ti ti-edit-circle f-18" />
                                  </Link>
                                </li>
                              </ul>
                              <div className="ms-3">
                                <div className="msg-content card mb-0">
                                  <p className="mb-0">How can i cap you today?</p>
                                </div>
                              </div>
                            </Stack>
                          </Stack>
                        </Stack>
                      </div>
                      <div className="message-in">
                        <Stack direction="horizontal">
                          <div className="chat-avatar">
                            <Image className="rounded-circle img-fluid wid-40" src={Avatar3} alt="User image" />
                            <i className="chat-badge bg-success" />
                          </div>
                          <div className="mx-3">
                            <Stack direction="horizontal" className="align-items-start flex-column">
                              <p className="mb-1 text-muted">
                                Agilulf Fuxg <small>11:23 AM</small>
                              </p>
                              <Stack className="message  align-items-start flex-column">
                                <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                                  <div className="msg-content card bg-primary mb-0 me-3">
                                    <p className="mb-0">Hey.. Bill</p>
                                  </div>
                                  <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                    <li className="list-inline-item">
                                      <ReplyDropdown />
                                    </li>
                                    <li className="list-inline-item">
                                      <Link to="#" className="avatar avatar-xs btn-link-secondary">
                                        <i className="ti ti-edit-circle f-18" />
                                      </Link>
                                    </li>
                                  </ul>
                                </Stack>
                                <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                                  <div className="flex-grow-1 me-3">
                                    <div className="msg-content card bg-primary mb-0">
                                      <p className="mb-0">nice to meet you!</p>
                                    </div>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                      <li className="list-inline-item">
                                        <ReplyDropdown />
                                      </li>
                                      <li className="list-inline-item">
                                        <Link to="#" className="avatar avatar-xs btn-link-secondary">
                                          <i className="ti ti-edit-circle f-18" />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </Stack>
                              </Stack>
                            </Stack>
                          </div>
                        </Stack>
                      </div>
                      <div className="message-out">
                        <Stack direction="horizontal" className="align-items-end flex-column">
                          <p className="mb-1 text-muted">
                            <small>9h ago</small>
                          </p>
                          <Stack direction="horizontal" className="message align-items-end flex-column">
                            <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                              <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                <li className="list-inline-item">
                                  <ReplyDropdown />
                                </li>
                                <li className="list-inline-item">
                                  <Link to="#" className="avatar avatar-xs btn-link-secondary">
                                    <i className="ti ti-edit-circle f-18" />
                                  </Link>
                                </li>
                              </ul>
                              <div className="ms-3">
                                <div className="msg-content card mb-0">
                                  <p className="mb-0">Hi...Henny!!</p>
                                </div>
                              </div>
                            </Stack>
                            <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                              <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                <li className="list-inline-item">
                                  <ReplyDropdown />
                                </li>
                                <li className="list-inline-item">
                                  <Link to="#" className="avatar avatar-xs btn-link-secondary">
                                    <i className="ti ti-edit-circle f-18" />
                                  </Link>
                                </li>
                              </ul>
                              <div className="ms-3">
                                <div className="msg-content card mb-0">
                                  <p className="mb-0">Are u listening me ?</p>
                                </div>
                              </div>
                            </Stack>
                            <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                              <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                <li className="list-inline-item">
                                  <ReplyDropdown />
                                </li>
                                <li className="list-inline-item">
                                  <Link to="#" className="avatar avatar-xs btn-link-secondary">
                                    <i className="ti ti-edit-circle f-18" />
                                  </Link>
                                </li>
                              </ul>
                              <div className="ms-3">
                                <div className="msg-content card mb-0">
                                  <p className="mb-0">How can i cap you today?</p>
                                </div>
                              </div>
                            </Stack>
                          </Stack>
                        </Stack>
                      </div>
                      <div className="message-in">
                        <Stack direction="horizontal" className="align-items-center">
                          <div className="chat-avatar">
                            <Image className="rounded-circle img-fluid wid-40" src={Avatar3} alt="User image" />
                            <i className="chat-badge bg-success" />
                          </div>
                          <div className="flex-grow-1 mx-3">
                            <Stack direction="horizontal" className="align-items-start flex-column">
                              <p className="mb-1 text-muted">
                                Agilulf Fuxg <small>11:23 AM</small>
                              </p>
                              <Stack direction="horizontal" className="message align-items-start flex-column">
                                <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                                  <div className="flex-grow-1 me-3">
                                    <div className="msg-content card bg-primary mb-0">
                                      <p className="mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s.
                                      </p>
                                    </div>
                                  </div>
                                  <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                    <li className="list-inline-item">
                                      <ReplyDropdown />
                                    </li>
                                    <li className="list-inline-item">
                                      <Link to="#" className="avatar avatar-xs btn-link-secondary">
                                        <i className="ti ti-edit-circle f-18" />
                                      </Link>
                                    </li>
                                  </ul>
                                </Stack>
                              </Stack>
                            </Stack>
                          </div>
                        </Stack>
                      </div>
                      <div className="message-out">
                        <Stack direction="horizontal" className="align-items-end flex-column">
                          <p className="mb-1 text-muted">
                            <small>9h ago</small>
                          </p>
                          <Stack direction="horizontal" className="message align-items-end flex-column">
                            <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                              <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                <li className="list-inline-item">
                                  <div className="dropdown">
                                    <Link
                                      className="avatar avatar-xs btn-link-secondary dropdown-toggle arrow-none"
                                      to="#"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i className="ti ti-dots-vertical f-18" />
                                    </Link>
                                    <div className="dropdown-menu">
                                      <Link className="dropdown-item" to="#">
                                        <i className="ti ti-arrow-back-up" /> Reply
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ti ti-arrow-forward-up" /> Forward
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ti ti-copy" /> Copy
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="ti ti-trash" /> Delete
                                      </Link>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-inline-item">
                                  <Link to="#" className="avatar avatar-xs btn-link-secondary">
                                    <i className="ti ti-edit-circle f-18" />
                                  </Link>
                                </li>
                              </ul>
                              <div className="ms-3">
                                <div className="msg-content card mb-0">
                                  <p className="mb-0">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s.
                                  </p>
                                </div>
                              </div>
                            </Stack>
                          </Stack>
                        </Stack>
                      </div>
                    </Card.Body>
                  </div>
                </SimpleBar>
              </Card>
              {/* Message Input */}
              <Card.Footer className="border-top pt-2 px-3 pb-0">
                <div className="input-group align-items-center">
                  <ul className="list-inline me-auto mb-0">
                    <li className="list-inline-item">
                      <Link to="#" className="avatar avatar-xs btn-link-secondary">
                        <i className="ti ti-paperclip f-18" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="avatar avatar-xs btn-link-secondary">
                        <i className="ti ti-photo f-18" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="avatar avatar-xs btn-link-secondary">
                        <i className="ti ti-mood-smile f-18" />
                      </Link>
                    </li>
                  </ul>
                  <Form.Control type="text" className="shadow-none border-0 bg-transparent" placeholder="Type Link Message" />
                  <ul className="list-inline ms-auto mb-0">
                    <li className="list-inline-item">
                      <Link to="#" className="avatar avatar-s rounded-circlen btn btn-primary">
                        <i className="ti ti-send f-18" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card.Footer>
            </div>

            <Offcanvas placement="end" xxl className=" chat-offcanvas" show={showUserInfo} onHide={handleCloseUserInfo}>
              <Offcanvas.Header>
                <div className="position-absolute end-0 top-0 p-2 d-flex">
                  <Button
                    className="avatar avatar-xs btn-link-danger btn-pc-default"
                    href="#chat-user_info"
                    onClick={() => setShowUserInfo(false)}
                  >
                    <i className="ti ti-x f-16" />{' '}
                  </Button>
                </div>
              </Offcanvas.Header>
              <Offcanvas.Body className="p-0">
                <Collapse in={true} dimension="width">
                  <div id="chat-user_info">
                    <div className="chat-user_info">
                      <Card className="bg-transparent shadow-none border-0 mb-0">
                        <Card.Body className="text-center position-relative p-3 pb-0 px-0">
                          <h5 className="text-start">Profile View</h5>
                          <div className="chat-avatar d-inline-flex mx-auto">
                            <Image className="rounded-circle img-fluid wid-100" src={Avatar5} alt="User" />
                          </div>
                          <h5 className="mb-0">Alene</h5>
                          <p className="text-muted text-sm">
                            DM on{' '}
                            <Link to="#" className="link-primary">
                              @williambond
                            </Link>
                          </p>
                          <ul className="list-inline ms-auto">
                            <li className="list-inline-item">
                              <Link to="#" className="avatar avatar-s btn-link-secondary">
                                <i className="ti ti-phone-call f-18" />
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="avatar avatar-s btn-link-secondary">
                                <i className="ti ti-message-circle f-18" />
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="avatar avatar-s btn-link-secondary">
                                <i className="ti ti-video f-18" />
                              </Link>
                            </li>
                          </ul>
                        </Card.Body>
                        <SimpleBar style={{ maxHeight: 'calc(100vh - 340px)' }}>
                          <Card.Body className="p-0">
                            <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
                              <label className="form-check-label h5 mb-0" htmlFor="customSwitchemlnot1">
                                Notification
                              </label>
                              <Form.Check type="switch" id="customSwitchemlnot1" defaultChecked />
                            </Stack>
                            <hr className="border border-secondary-subtle" />

                            <Accordion defaultActiveKey="0" flush>
                              <Accordion.Item eventKey="0">
                                <Accordion.Header className="custom-accordion-header">
                                  <h5 className="mb-0">Information</h5>
                                </Accordion.Header>
                                <Accordion.Body className="p-0 py-3">
                                  <Stack direction="horizontal" className="align-items-center justify-content-start mb-2">
                                    <MapPin size={14} weight="duotone" />
                                    <p className="mb-0 text-muted ms-2">32188 Sips Parkways, U.S</p>
                                  </Stack>
                                  <Stack direction="horizontal" className="align-items-center justify-content-start mb-2">
                                    <EnvelopeOpen size={14} weight="duotone" />
                                    <p className="mb-0 text-muted ms-2">Keefe@codedtheme.com</p>
                                  </Stack>
                                  <Stack direction="horizontal" className="align-items-center justify-content-start mb-2">
                                    <PhoneCall size={14} weight="duotone" />
                                    <p className="mb-0 text-muted ms-2">995-250-1803</p>
                                  </Stack>
                                  <Stack direction="horizontal" className="align-items-center justify-content-start mb-2">
                                    <CalendarBlank size={14} weight="duotone" />
                                    <p className="mb-0 text-muted ms-2">30, Nov 2021</p>
                                  </Stack>
                                  <Stack direction="horizontal" className="align-items-center justify-content-start mb-2">
                                    <GlobeHemisphereEast size={14} weight="duotone" />
                                    <p className="mb-0 text-muted ms-2">India</p>
                                  </Stack>
                                  <Stack direction="horizontal" className="align-items-center justify-content-start mb-2">
                                    <Briefcase size={14} weight="duotone" />
                                    <p className="mb-0 text-muted ms-2">
                                      <Link to="#" className="link-primary">
                                        Light able.com
                                      </Link>
                                    </p>
                                  </Stack>
                                  <Stack direction="horizontal" className="align-items-center justify-content-start">
                                    <RadioButton size={14} weight="duotone" />
                                    <p className="mb-0 text-muted ms-2">
                                      <Badge bg="light-warning" text="warning">
                                        UI/UX Designer
                                      </Badge>
                                    </p>
                                  </Stack>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                            <hr className="border border-secondary-subtle" />
                            <Accordion defaultActiveKey="0" flush>
                              <Accordion.Item eventKey="0">
                                <Accordion.Header className="custom-accordion-header">
                                  <h5 className="mb-0">File Type</h5>
                                </Accordion.Header>
                                <Accordion.Body className="p-0 py-3">
                                  <Stack direction="horizontal" className="align-items-center mb-2">
                                    <Link to="#" className="avatar avatar-s btn-light-success">
                                      <i className="ti ti-file-text f-20" />
                                    </Link>
                                    <div className="ms-3">
                                      <h6 className="mb-0">Document</h6>
                                      <span className="text-muted text-sm">123 files, 193MB</span>
                                    </div>
                                    <Link to="#" className="avatar avatar-xs btn-link-secondary">
                                      <i className="ti ti-chevron-right f-16" />
                                    </Link>
                                  </Stack>
                                  <Stack direction="horizontal" className="align-items-center mb-2">
                                    <Link to="#" className="avatar avatar-s btn-light-danger">
                                      <i className="ti ti-photo f-20" />
                                    </Link>
                                    <div className="ms-3">
                                      <h6 className="mb-0">Photos</h6>
                                      <span className="text-muted text-sm">53 files, 321MB</span>
                                    </div>
                                    <Link to="#" className="avatar avatar-xs btn-link-secondary">
                                      <i className="ti ti-chevron-right f-16" />
                                    </Link>
                                  </Stack>
                                  <Stack direction="horizontal" className="align-items-center mb-2">
                                    <Link to="#" className="avatar avatar-s btn-light-primary">
                                      <i className="ti ti-id f-20" />
                                    </Link>
                                    <div className="ms-3">
                                      <h6 className="mb-0">Other</h6>
                                      <span className="text-muted text-sm">49 files, 193MB</span>
                                    </div>
                                    <Link to="#" className="avatar avatar-xs btn-link-secondary">
                                      <i className="ti ti-chevron-right f-16" />
                                    </Link>
                                  </Stack>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </Card.Body>
                        </SimpleBar>
                      </Card>
                    </div>
                  </div>
                </Collapse>
                {/* Additional user info can be added here */}
              </Offcanvas.Body>
            </Offcanvas>

            <Collapse in={infoOpen}>
              <div className="chat-user_info">
                <Card className="bg-transparent shadow-none border-0 mb-0">
                  <Card.Body className="text-center position-relative p-3 pb-0 px-0">
                    <h5 className="text-start">Profile View</h5>
                    <div className="position-absolute end-0 top-0 p-2 d-none d-xxl-inline-flex">
                      <Button className="avatar avatar-xs btn-link-danger btn-pc-default" href="#chat-user_info" onClick={handleCloseInfo}>
                        <i className="ti ti-x f-16" />{' '}
                      </Button>
                    </div>
                    <div className="chat-avatar d-inline-flex mx-auto">
                      <Image className="rounded-circle img-fluid wid-100" src={Avatar5} alt="User" />
                    </div>
                    <h5 className="mb-0">Alene</h5>
                    <p className="text-muted text-sm">
                      DM on{' '}
                      <Link to="#" className="link-primary">
                        @williambond
                      </Link>
                    </p>
                    <ul className="list-inline ms-auto">
                      <li className="list-inline-item">
                        <Link to="#" className="avatar avatar-s btn-link-secondary">
                          <i className="ti ti-phone-call f-18" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="avatar avatar-s btn-link-secondary">
                          <i className="ti ti-message-circle f-18" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="avatar avatar-s btn-link-secondary">
                          <i className="ti ti-video f-18" />
                        </Link>
                      </li>
                    </ul>
                  </Card.Body>
                  <SimpleBar style={{ maxHeight: 'calc(100vh - 480px)' }}>
                    <Card.Body>
                      <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
                        <label className="form-check-label h5 mb-0" htmlFor="customSwitchemlnot1">
                          Notification
                        </label>
                        <Form.Check type="switch" id="customSwitchemlnot1" defaultChecked />
                      </Stack>
                      <hr className="border border-secondary-subtle" />

                      <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header className="custom-accordion-header">
                            <h5 className="mb-0">Information</h5>
                          </Accordion.Header>
                          <Accordion.Body className="p-0 py-3">
                            <Stack direction="horizontal" className="align-items-center justify-content-start mb-2">
                              <MapPin size={14} weight="duotone" />
                              <p className="mb-0 text-muted ms-2">32188 Sips Parkways, U.S</p>
                            </Stack>
                            <Stack direction="horizontal" className="align-items-center justify-content-start mb-2">
                              <EnvelopeOpen size={14} weight="duotone" />
                              <p className="mb-0 text-muted ms-2">Keefe@codedtheme.com</p>
                            </Stack>
                            <Stack direction="horizontal" className="align-items-center justify-content-start mb-2">
                              <PhoneCall size={14} weight="duotone" />
                              <p className="mb-0 text-muted ms-2">995-250-1803</p>
                            </Stack>
                            <Stack direction="horizontal" className="align-items-center justify-content-start mb-2">
                              <CalendarBlank size={14} weight="duotone" />
                              <p className="mb-0 text-muted ms-2">30, Nov 2021</p>
                            </Stack>
                            <Stack direction="horizontal" className="align-items-center justify-content-start mb-2">
                              <GlobeHemisphereEast size={14} weight="duotone" />
                              <p className="mb-0 text-muted ms-2">India</p>
                            </Stack>
                            <Stack direction="horizontal" className="align-items-center justify-content-start mb-2">
                              <Briefcase size={14} weight="duotone" />
                              <p className="mb-0 text-muted ms-2">
                                <Link to="#" className="link-primary">
                                  Light able.com
                                </Link>
                              </p>
                            </Stack>
                            <Stack direction="horizontal" className="align-items-center justify-content-start">
                              <RadioButton size={14} weight="duotone" />
                              <p className="mb-0 text-muted ms-2">
                                <Badge bg="light-warning" text="warning">
                                  UI/UX Designer
                                </Badge>
                              </p>
                            </Stack>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <hr className="border border-secondary-subtle" />
                      <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header className="custom-accordion-header">
                            <h5 className="mb-0">File Type</h5>
                          </Accordion.Header>
                          <Accordion.Body className="p-0 py-3">
                            <Stack direction="horizontal" className="align-items-center mb-2">
                              <Link to="#" className="avatar avatar-s btn-light-success">
                                <i className="ti ti-file-text f-20" />
                              </Link>
                              <div className="ms-3">
                                <h6 className="mb-0">Document</h6>
                                <span className="text-muted text-sm">123 files, 193MB</span>
                              </div>
                              <Link to="#" className="avatar avatar-xs btn-link-secondary">
                                <i className="ti ti-chevron-right f-16" />
                              </Link>
                            </Stack>
                            <Stack direction="horizontal" className="align-items-center mb-2">
                              <Link to="#" className="avatar avatar-s btn-light-danger">
                                <i className="ti ti-photo f-20" />
                              </Link>
                              <div className="ms-3">
                                <h6 className="mb-0">Photos</h6>
                                <span className="text-muted text-sm">53 files, 321MB</span>
                              </div>
                              <Link to="#" className="avatar avatar-xs btn-link-secondary">
                                <i className="ti ti-chevron-right f-16" />
                              </Link>
                            </Stack>
                            <Stack direction="horizontal" className="align-items-center mb-2">
                              <Link to="#" className="avatar avatar-s btn-light-primary">
                                <i className="ti ti-id f-20" />
                              </Link>
                              <div className="ms-3">
                                <h6 className="mb-0">Other</h6>
                                <span className="text-muted text-sm">49 files, 193MB</span>
                              </div>
                              <Link to="#" className="avatar avatar-xs btn-link-secondary">
                                <i className="ti ti-chevron-right f-16" />
                              </Link>
                            </Stack>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Card.Body>
                  </SimpleBar>
                </Card>
              </div>
            </Collapse>
          </div>
        </MainCard>
      </Col>
    </Row>
  );
}
