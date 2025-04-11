import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tooltip from 'react-bootstrap/Tooltip';

// third-party
import { Cpu, Moon, SunDim } from 'phosphor-react';

// assets
import Image1 from 'assets/images/customizer/caption-on.svg';
import Image2 from 'assets/images/customizer/caption-off.svg';
import Image3 from 'assets/images/customizer/ltr.svg';
import Image4 from 'assets/images/customizer/rtl.svg';
import Image5 from 'assets/images/customizer/full.svg';
import Image6 from 'assets/images/customizer/fixed.svg';
import Image7 from 'assets/images/layout/navbar-img-1.jpg';
import Image8 from 'assets/images/layout/navbar-img-2.jpg';
import Image9 from 'assets/images/layout/navbar-img-3.jpg';
import Image10 from 'assets/images/layout/navbar-img-4.jpg';
import Image11 from 'assets/images/layout/navbar-img-5.jpg';
import Image12 from 'assets/images/layout/navbar-img-6.jpg';

interface ColorOption {
  id: string;
  img?: string;
  label?: string;
}

const themeColors: ColorOption[] = [
  { id: 'preset-1', label: 'Blue' },
  { id: 'preset-2', label: 'Indigo' },
  { id: 'preset-3', label: 'Purple' },
  { id: 'preset-4', label: 'Pink' },
  { id: 'preset-5', label: 'Red' },
  { id: 'preset-6', label: 'Orange' },
  { id: 'preset-7', label: 'Yellow' },
  { id: 'preset-8', label: 'Green' },
  { id: 'preset-9', label: 'Teal' },
  { id: 'preset-10', label: 'Cyan' }
];

const headerthemeColors: ColorOption[] = [
  { id: 'preset-1', label: 'Blue' },
  { id: 'preset-2', label: 'Indigo' },
  { id: 'preset-3', label: 'Purple' },
  { id: 'preset-4', label: 'Pink' },
  { id: 'preset-5', label: 'Red' },
  { id: 'preset-6', label: 'Orange' },
  { id: 'preset-7', label: 'Yellow' },
  { id: 'preset-8', label: 'Green' },
  { id: 'preset-9', label: 'Teal' },
  { id: 'preset-10', label: 'Cyan' }
];

const navbarCaptionThemeImages: ColorOption[] = [
  { id: 'preset-1', img: Image7 },
  { id: 'preset-2', img: Image8 },
  { id: 'preset-3', img: Image9 },
  { id: 'preset-4', img: Image10 },
  { id: 'preset-5', img: Image11 },
  { id: 'preset-6', img: Image12 }
];

const icons = [
  { id: 'preset-1', iconClass: 'ti ti-chevron-right' },
  { id: 'preset-2', iconClass: 'ti ti-chevrons-right' },
  { id: 'preset-3', iconClass: 'ti ti-caret-right' },
  { id: 'preset-4', iconClass: 'ti ti-circle-plus' },
  { id: 'preset-5', iconClass: 'ti ti-plus' }
];

const icons2 = [
  { id: 'preset-1', iconClass: '' },
  { id: 'preset-2', iconClass: 'ti ti-arrow-narrow-right' },
  { id: 'preset-3', iconClass: 'ti ti-chevron-right' },
  { id: 'preset-4', iconClass: 'ti ti-chevrons-right' },
  { id: 'preset-5', iconClass: 'ti ti-corner-down-right' },
  { id: 'preset-6', iconClass: 'ti ti-minus' }
];

// =============================|| CUSTOMIZER - SETTINGS ||============================== //

export default function Settings() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectHeader, setSelectHeader] = useState(null);
  const [selectNavBar, setSelecteNavBar] = useState(null);
  const [selectLogo, setSelectLogo] = useState(null);
  const [selectCaption, setSelectCaption] = useState(null);
  const [selectNavimg, setSelectNavimg] = useState(null);
  const [selectDropMenuIcon, setSelectedIcons] = useState(null);
  const [selectDropMenuLinkIcon, setSelectDropMenuLinkIcon] = useState(null);

  const handleColorSelect = (color: any) => {
    setSelectedColor(color);
  };

  const handleSelectHeader = (color: any) => {
    setSelectHeader(color);
  };

  const handleSelectNavBar = (color: any) => {
    setSelecteNavBar(color);
  };

  const handleSelectLogo = (color: any) => {
    setSelectLogo(color);
  };

  const handleSelectCaption = (color: any) => {
    setSelectCaption(color);
  };

  const handleSelectNavimg = (color: any) => {
    setSelectNavimg(color);
  };

  const handleDropMenuIcon = (icon: any) => {
    setSelectedIcons(icon);
  };

  const handleDropMenuLinkIcon = (icon: any) => {
    setSelectDropMenuLinkIcon(icon);
  };

  const [visible, setVisible] = useState(true);
  const [theme, setTheme] = useState('light');

  const layout_change = (newTheme: string) => {
    setTheme(newTheme);
    if (newTheme === 'dark') {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    document.body.setAttribute('data-pc-theme', theme);
  }, [theme]);

  const [theme1, setTheme1] = useState('false');
  const layout_theme_sidebar_change = (newTheme1: string) => {
    setTheme1(newTheme1);
  };

  useEffect(() => {
    document.body.setAttribute('data-pc-sidebar_theme', theme1);
  }, [theme1]);

  const [theme2, setTheme2] = useState('true');
  const layout_theme_cation_hide_show = (newTheme2: string) => {
    setTheme2(newTheme2);
  };

  useEffect(() => {
    document.body.setAttribute('data-pc-sidebar-caption', theme2);
  }, [theme2]);

  const [directionrtl, setDirection] = useState('ltr');

  const layout_theme_rtl_ltr = (newDirection: string) => {
    setDirection(newDirection);
  };

  useEffect(() => {
    document.body.setAttribute('data-pc-direction', directionrtl);
  }, [directionrtl]);

  useEffect(() => {
    if (selectedColor) {
      document.body.setAttribute('data-pc-preset', selectedColor);
    } else {
      document.body.removeAttribute('data-pc-preset');
    }
  }, [selectedColor]);

  useEffect(() => {
    if (selectHeader) {
      document.body.setAttribute('data-pc-header', selectHeader);
    } else {
      document.body.removeAttribute('data-pc-header');
    }
  }, [selectHeader]);

  useEffect(() => {
    if (selectNavBar) {
      document.body.setAttribute('data-pc-navbar', selectNavBar);
    } else {
      document.body.removeAttribute('data-pc-navbar');
    }
  }, [selectNavBar]);

  useEffect(() => {
    if (selectLogo) {
      document.body.setAttribute('data-pc-logo', selectLogo);
    } else {
      document.body.removeAttribute('data-pc-logo');
    }
  }, [selectLogo]);

  useEffect(() => {
    if (selectCaption) {
      document.body.setAttribute('data-pc-caption', selectCaption);
    } else {
      document.body.removeAttribute('data-pc-caption');
    }
  }, [selectCaption]);

  useEffect(() => {
    if (selectNavimg) {
      document.body.setAttribute('data-pc-navimg', selectNavimg);
    } else {
      document.body.removeAttribute('data-pc-navimg');
    }
  }, [selectNavimg]);

  useEffect(() => {
    if (selectDropMenuIcon) {
      document.body.setAttribute('data-pc-drp-menu-icon', selectDropMenuIcon);
    } else {
      document.body.removeAttribute('data-pc-drp-menu-icon');
    }
  }, [selectDropMenuIcon]);

  useEffect(() => {
    if (selectDropMenuLinkIcon) {
      document.body.setAttribute('data-pc-drp-menu-link-icon', selectDropMenuLinkIcon);
    } else {
      document.body.removeAttribute('data-pc-drp-menu-link-icon');
    }
  }, [selectDropMenuLinkIcon]);

  return (
    <>
      <div className="pct-c-btn">
        <a href="#!" onClick={handleShow}>
          <i className="ti ti-settings" />
        </a>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header className="d-flex justify-content-between ">
          <Offcanvas.Title>
            <h5 className="mb-0">Settings</h5>
          </Offcanvas.Title>
          <Stack direction="horizontal" gap={2}>
            <Button variant="outline-danger" size="sm" className="rounded" onClick={() => window.location.reload()}>
              Reset
            </Button>
            <Button size="sm" variant="link-danger" className="btn-pc-default" onClick={handleClose}>
              <i className="ti ti-x f-20" />
            </Button>
          </Stack>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <div className="pc-dark p-4">
            <Stack direction="horizontal" className="align-items-center">
              <div className="flex-shrink-0">
                <h6 className="mb-1">Theme Mode</h6>
                <p className="text-muted text-sm mb-0">Light / Dark / System</p>
              </div>

              <div className="flex-grow-1 ms-3">
                <Stack direction="horizontal" gap={2} className="row  theme-color theme-layout justify-content-end">
                  <OverlayTrigger placement="top" overlay={<Tooltip>Light</Tooltip>}>
                    <Button variant="white" className="preset-btn" onClick={() => layout_change('light')}>
                      <SunDim size={22} weight="fill" className="text-warning" />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={<Tooltip>Dark</Tooltip>}>
                    <Button variant="white" className="preset-btn" onClick={() => layout_change('dark')}>
                      <Moon size={22} weight="fill" />
                    </Button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="left"
                    overlay={<Tooltip>Automatically sets the theme based on user's operating system's color scheme.</Tooltip>}
                  >
                    <Button variant="white" className="preset-btn" onClick={() => layout_change('default')}>
                      <Cpu size={22} weight="duotone" />
                    </Button>
                  </OverlayTrigger>
                </Stack>
              </div>
            </Stack>
          </div>
          <Tab.Container defaultActiveKey="pct-1-tab">
            <Nav variant="pills" className="nav-fill pct-tabs" id="myTab" role="tablist">
              <OverlayTrigger placement="top" overlay={<Tooltip>Layout Settings</Tooltip>}>
                <Nav.Item role="presentation">
                  <Nav.Link eventKey="pct-1-tab">
                    <i className="ti ti-device-desktop" />
                  </Nav.Link>
                </Nav.Item>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>Color Settings</Tooltip>}>
                <Nav.Item role="presentation">
                  <Nav.Link eventKey="pct-2-tab">
                    <i className="ti ti-color-swatch" />
                  </Nav.Link>
                </Nav.Item>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>Extra Settings</Tooltip>}>
                <Nav.Item role="presentation" data-bs-toggle="tooltip" aria-label="Extra Settings" data-bs-original-title="Extra Settings">
                  <Nav.Link eventKey="pct-3-tab">
                    <i className="ti ti-adjustments-horizontal" />
                  </Nav.Link>
                </Nav.Item>
              </OverlayTrigger>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="pct-1-tab">
                {visible && (
                  <Offcanvas.Body className="py-0 ">
                    <Stack direction="horizontal" className="align-items-center py-3 my-1 justify-content-between border-bottom ">
                      <div className="flex-shrink-0">
                        <h6 className="mb-1">Sidebar theme</h6>
                        <p className="text-muted text-sm mb-0">Dark / Light</p>
                      </div>
                      <Row className="row g-2">
                        <Col xs="auto">
                          <OverlayTrigger placement="top" overlay={<Tooltip>Light</Tooltip>}>
                            <Button variant="white" className="preset-btn" onClick={() => layout_theme_sidebar_change('true')}>
                              <SunDim size={22} weight="fill" className="text-warning" />
                            </Button>
                          </OverlayTrigger>
                        </Col>
                        <Col xs="auto">
                          <OverlayTrigger placement="top" overlay={<Tooltip>Dark</Tooltip>}>
                            <Button variant="white" className="preset-btn" onClick={() => layout_theme_sidebar_change('false')}>
                              <Moon size={22} weight="fill" />
                            </Button>
                          </OverlayTrigger>
                        </Col>
                      </Row>
                    </Stack>
                  </Offcanvas.Body>
                )}
                <Offcanvas.Body className="py-0">
                  <Stack direction="horizontal" className="align-items-center py-3 my-1 justify-content-between border-bottom">
                    <div className="flex-shrink-0">
                      <h6 className="mb-1">Sidebar Caption</h6>
                      <p className="text-muted text-sm mb-0">Show / Hide</p>
                    </div>

                    <Row className="row g-2">
                      <Col xs="auto">
                        <OverlayTrigger placement="top" overlay={<Tooltip>Caption Show</Tooltip>}>
                          <Button variant="white" className="preset-btn btn-img" onClick={() => layout_theme_cation_hide_show('true')}>
                            <Image src={Image1} fluid />
                          </Button>
                        </OverlayTrigger>
                      </Col>
                      <Col xs="auto">
                        <OverlayTrigger placement="top" overlay={<Tooltip>Caption Hide</Tooltip>}>
                          <Button variant="white" className="preset-btn btn-img" onClick={() => layout_theme_cation_hide_show('false')}>
                            <Image src={Image2} fluid />
                          </Button>
                        </OverlayTrigger>
                      </Col>
                    </Row>
                  </Stack>
                </Offcanvas.Body>

                <Offcanvas.Body className="py-0">
                  <Stack direction="horizontal" className="align-items-center py-3 my-1 justify-content-between border-bottom ">
                    <div className="flex-shrink-0">
                      <h6 className="mb-1">Theme Layout</h6>
                      <p className="text-muted text-sm mb-0">LTR/RTL</p>
                    </div>

                    <Row className="row g-2">
                      {/* Button for LTR */}
                      <Col xs="auto">
                        <OverlayTrigger placement="top" overlay={<Tooltip>LTR</Tooltip>}>
                          <Button variant="white" className="preset-btn btn-img" dir="ltr" onClick={() => layout_theme_rtl_ltr('ltr')}>
                            <Image src={Image3} fluid />
                          </Button>
                        </OverlayTrigger>
                      </Col>

                      {/* Button for RTL */}
                      <Col xs="auto">
                        <OverlayTrigger placement="top" overlay={<Tooltip>RTL</Tooltip>}>
                          <Button variant="white" className="preset-btn btn-img" dir="rtl" onClick={() => layout_theme_rtl_ltr('rtl')}>
                            <Image src={Image4} fluid />
                          </Button>
                        </OverlayTrigger>
                      </Col>
                    </Row>
                  </Stack>
                </Offcanvas.Body>

                <Offcanvas.Body className="py-0">
                  <Stack direction="horizontal" className="align-items-center py-3 my-1 justify-content-between border-bottom ">
                    <div className="flex-shrink-0">
                      <h6 className="mb-1">Layout Width</h6>
                      <p className="text-muted text-sm mb-0">Full / Fixed</p>
                    </div>

                    <Row className="row g-2">
                      <Col xs="auto">
                        <OverlayTrigger placement="top" overlay={<Tooltip>Full Width</Tooltip>}>
                          <Button variant="white" className="preset-btn btn-img">
                            <Image src={Image5} fluid />
                          </Button>
                        </OverlayTrigger>
                      </Col>
                      <Col xs="auto">
                        <OverlayTrigger placement="top" overlay={<Tooltip>Fixed Width</Tooltip>}>
                          <Button variant="white" className="preset-btn btn-img">
                            <Image src={Image6} fluid />
                          </Button>
                        </OverlayTrigger>
                      </Col>
                    </Row>
                  </Stack>
                </Offcanvas.Body>
              </Tab.Pane>

              <Tab.Pane eventKey="pct-2-tab">
                <Offcanvas.Body className="py-0">
                  <ListGroup as="ul">
                    <ListGroup.Item className="py-3 p-0 border-0">
                      <h6 className="mb-1">Custom Theme</h6>
                      <p className="text-muted text-sm">Choose your primary theme color</p>
                      <div className="theme-color preset-color">
                        {themeColors.map(({ id, label }) => (
                          <OverlayTrigger key={id} placement="top" overlay={<Tooltip>{label}</Tooltip>}>
                            <Link
                              to="#!"
                              className={selectedColor === id ? 'active' : ''}
                              data-value={id}
                              aria-label={label}
                              onClick={(e) => {
                                e.preventDefault();
                                handleColorSelect(id);
                              }}
                            >
                              <i className="ti ti-checks" />
                            </Link>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item className="py-3 p-0 border-0">
                      <h6 className="mb-1">Header Theme</h6>
                      <p className="text-muted text-sm">Choose your Header theme color</p>
                      <div className="theme-color preset-color">
                        {headerthemeColors.map(({ id, label }) => (
                          <OverlayTrigger key={id} placement="top" overlay={<Tooltip>{label}</Tooltip>}>
                            <Link
                              to="#!"
                              className={selectHeader === id ? 'active' : ''}
                              data-value={id}
                              aria-label={label}
                              onClick={(e) => {
                                e.preventDefault();
                                handleSelectHeader(id);
                              }}
                            >
                              <i className="ti ti-checks" />
                            </Link>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item className="py-3 p-0 border-0">
                      <h6 className="mb-1">Navbar Theme</h6>
                      <p className="text-muted text-sm">Choose your Navbar theme color</p>
                      <div className="theme-color preset-color">
                        {headerthemeColors.map(({ id, label }) => (
                          <OverlayTrigger key={id} placement="top" overlay={<Tooltip>{label}</Tooltip>}>
                            <Link
                              to="#!"
                              className={selectNavBar === id ? 'active' : ''}
                              data-value={id}
                              aria-label={label}
                              onClick={(e) => {
                                e.preventDefault();
                                handleSelectNavBar(id);
                              }}
                            >
                              <i className="ti ti-checks" />
                            </Link>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item className="py-3 p-0 border-0">
                      <h6 className="mb-1">Logo Theme</h6>
                      <p className="text-muted text-sm">Choose your Logo theme color</p>
                      <div className="theme-color preset-color">
                        {headerthemeColors.map(({ id, label }) => (
                          <OverlayTrigger key={id} placement="top" overlay={<Tooltip>{label}</Tooltip>}>
                            <Link
                              to="#!"
                              className={selectLogo === id ? 'active' : ''}
                              data-value={id}
                              aria-label={label}
                              onClick={(e) => {
                                e.preventDefault();
                                handleSelectLogo(id);
                              }}
                            >
                              <i className="ti ti-checks" />
                            </Link>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item className="py-3 p-0 border-0">
                      <h6 className="mb-1">Navbar Caption Color</h6>
                      <p className="text-muted text-sm">Choose your Navbar Caption Color</p>
                      <div className="theme-color preset-color">
                        {headerthemeColors.map(({ id, label }) => (
                          <OverlayTrigger key={id} placement="top" overlay={<Tooltip>{label}</Tooltip>}>
                            <Link
                              to="#!"
                              className={selectCaption === id ? 'active' : ''}
                              data-value={id}
                              aria-label={label}
                              onClick={(e) => {
                                e.preventDefault();
                                handleSelectCaption(id);
                              }}
                            >
                              <i className="ti ti-checks" />
                            </Link>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </ListGroup.Item>
                    <hr className="my-0" />
                    <ListGroup.Item className="py-3 p-0 border-0">
                      <h6 className="mb-1">Navbar Image</h6>
                      <p className="text-muted text-sm">Choose your Navbar Background Image</p>

                      <div className="theme-color preset-color">
                        {navbarCaptionThemeImages.map(({ id, img }) => (
                          <Link
                            to="#!"
                            className={`${selectNavimg === id ? 'active' : ''} wid-45 hei-100 `}
                            data-value={id}
                            onClick={(e) => {
                              e.preventDefault();
                              handleSelectNavimg(id); // Update state
                            }}
                            key={id} // Add key prop to avoid any React key issues
                          >
                            <Image src={img} className="color-image" />
                            <i className="ti ti-checks position-absolute" />
                          </Link>
                        ))}
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Offcanvas.Body>
              </Tab.Pane>
              <Tab.Pane eventKey="pct-3-tab">
                <Offcanvas.Body className="py-0">
                  <ListGroup as="ul">
                    <ListGroup>
                      <ListGroup.Item className="py-3 p-0 border-0">
                        <h6 className="mb-1">Dropdown Menu Icon</h6>
                        <p className="text-muted text-sm">Choose your Dropdown Menu Icon</p>
                        <div className="theme-color drp-menu-icon">
                          {icons.map(({ id, iconClass }) => (
                            <Link
                              key={id}
                              to="#"
                              className={selectDropMenuIcon === id ? 'active' : ''}
                              onClick={(e) => {
                                e.preventDefault();
                                handleDropMenuIcon(id);
                              }}
                            >
                              <i className={iconClass} />
                            </Link>
                          ))}
                        </div>
                      </ListGroup.Item>

                      <hr className="my-0" />

                      <ListGroup.Item className="py-3 p-0 border-0">
                        <h6 className="mb-1">Dropdown Menu Icon</h6>
                        <p className="text-muted text-sm">Choose your Dropdown Menu Icon</p>
                        <div className="theme-color drp-menu-icon">
                          {icons2.map(({ id, iconClass }) => (
                            <Link
                              key={id}
                              to="#"
                              className={selectDropMenuLinkIcon === id ? 'active' : ''}
                              onClick={(e) => {
                                e.preventDefault();
                                handleDropMenuLinkIcon(id);
                              }}
                            >
                              <i className={iconClass} />
                            </Link>
                          ))}
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup>
                </Offcanvas.Body>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
