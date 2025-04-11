import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';

// third-party
import SimpleBar from 'simplebar-react';

// project-imports
import MainCard from 'components/MainCard';
import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';
import useConfig from 'hooks/useConfig';

// assets
import Img1 from 'assets/images/user/avatar-1.jpg';
import Img2 from 'assets/images/user/avatar-2.jpg';
import Img3 from 'assets/images/user/avatar-3.jpg';
import Img4 from 'assets/images/user/avatar-4.jpg';
import Img5 from 'assets/images/user/avatar-5.jpg';

// types
import { I18n } from 'types/config';

const notifications = [
  {
    id: 1,
    avatar: Img1,
    time: '2 min ago',
    title: 'UI/UX Design',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: 'Today'
  },
  {
    id: 2,
    avatar: Img2,
    time: '1 hour ago',
    title: 'Message',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: 'Today'
  },
  {
    id: 3,
    avatar: Img3,
    time: '2 hour ago',
    title: 'Forms',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: 'Yesterday'
  },
  {
    id: 4,
    avatar: Img4,
    time: '12 hour ago',
    title: 'Challenge invitation',
    description: 'Jonny aber invites you to join the challenge',
    actions: true,
    date: 'Yesterday'
  },
  {
    id: 5,
    avatar: Img5,
    time: '5 hour ago',
    title: 'Security',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: 'Yesterday'
  }
];

// =============================|| HEADER CONTENT ||============================== //

export default function HeaderContent() {
  const { i18n, onChangeLocalization } = useConfig();

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  const handleListItemClick = (lang: I18n) => {
    onChangeLocalization(lang);
  };

  const [theme, setTheme] = useState('light');

  const layout_change = (newTheme: string) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.setAttribute('data-pc-theme', theme);
  }, [theme]);

  return (
    <header className="pc-header">
      <div className="header-wrapper">
        <div className="me-auto pc-mob-drp">
          <Nav className="list-unstyled">
            <Nav.Item className="pc-h-item pc-sidebar-collapse">
              <Nav.Link as={Link} to="#" className="pc-head-link ms-0" id="sidebar-hide" onClick={() => handlerDrawerOpen(!drawerOpen)}>
                <i className="ti ti-menu-2" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="pc-h-item pc-sidebar-popup">
              <Nav.Link as={Link} to="#" className="pc-head-link ms-0" id="mobile-collapse" onClick={() => handlerDrawerOpen(!drawerOpen)}>
                <i className="ti ti-menu-2" />
              </Nav.Link>
            </Nav.Item>

            <Dropdown className="pc-h-item dropdown">
              <Dropdown.Toggle variant="link" className="pc-head-link arrow-none m-0 trig-drp-search" id="dropdown-search">
                <i className="ti ti-search" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="pc-h-dropdown drp-search">
                <Form className="px-3 py-2">
                  <Form.Control type="search" placeholder="Search here. . ." className="border-0 shadow-none" />
                </Form>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
        <div className="ms-auto">
          <Nav className="list-unstyled">
            <Dropdown className="pc-h-item" align="end">
              <Dropdown.Toggle className="pc-head-link me-0 arrow-none" variant="link" id="dropdown-basic">
                <i className="ti ti-sun" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="pc-h-dropdown">
                <Dropdown.Item onClick={() => layout_change('dark')}>
                  <i className="ti ti-moon" />
                  Dark
                </Dropdown.Item>

                <Dropdown.Item onClick={() => layout_change('light')}>
                  <i className="ti ti-sun" />
                  Light
                </Dropdown.Item>
                <Dropdown.Item onClick={() => layout_change('default')}>
                  <i className="ti ti-settings" />
                  Default
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="pc-h-item d-none d-md-inline-flex" align="end">
              <Dropdown.Toggle className="pc-head-link head-link-primary me-0 arrow-none" variant="link" id="language-dropdown">
                <i className="ti ti-world" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="pc-h-dropdown lng-dropdown">
                <Dropdown.Item active={i18n === 'en'} onClick={() => handleListItemClick('en')}>
                  <span>
                    English <small>(UK)</small>
                  </span>
                </Dropdown.Item>
                <Dropdown.Item active={i18n === 'fr'} onClick={() => handleListItemClick('fr')}>
                  <span>
                    français <small>(French)</small>
                  </span>
                </Dropdown.Item>
                <Dropdown.Item active={i18n === 'ro'} onClick={() => handleListItemClick('ro')}>
                  <span>
                    Română <small>(Romanian)</small>
                  </span>
                </Dropdown.Item>
                <Dropdown.Item active={i18n === 'zh'} onClick={() => handleListItemClick('zh')}>
                  <span>
                    中国人 <small>(Chinese)</small>
                  </span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="pc-h-item" align="end">
              <Dropdown.Toggle className="pc-head-link me-0 arrow-none" variant="link" id="settings-dropdown">
                <i className="ti ti-settings" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="pc-h-dropdown">
                <Dropdown.Item>
                  <i className="ti ti-user"></i>
                  My Account
                </Dropdown.Item>
                <Dropdown.Item>
                  <i className="ti ti-settings"></i>
                  Settings
                </Dropdown.Item>
                <Dropdown.Item>
                  <i className="ti ti-headset"></i>
                  Support
                </Dropdown.Item>
                <Dropdown.Item>
                  <i className="ti ti-lock"></i>
                  Lock Screen
                </Dropdown.Item>
                <Dropdown.Item>
                  <i className="ti ti-power"></i>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="pc-h-item" align="end">
              <Dropdown.Toggle className="pc-head-link me-0 arrow-none" variant="link" id="notification-dropdown">
                <i className="ti ti-bell" />
                <span className="badge bg-success pc-h-badge">3</span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-notification pc-h-dropdown">
                <Dropdown.Header className="d-flex align-items-center justify-content-between">
                  <h5 className="m-0">Notifications</h5>
                  <Link className="btn btn-link btn-sm" to="#">
                    Mark all read
                  </Link>
                </Dropdown.Header>
                <SimpleBar forceVisible="y" style={{ maxHeight: 'calc(100vh - 215px)' }}>
                  <div className="dropdown-body text-wrap position-relative">
                    {notifications.map((notification, index) => (
                      <React.Fragment key={notification.id}>
                        {index === 0 || notifications[index - 1].date !== notification.date ? (
                          <p className="text-span">{notification.date}</p>
                        ) : null}
                        <MainCard className="mb-0">
                          <Stack direction="horizontal" gap={3}>
                            <Image className="img-radius avatar rounded-0" src={notification.avatar} alt="Generic placeholder image" />
                            <div>
                              <span className="float-end text-sm text-muted">{notification.time}</span>
                              <h5 className="text-body mb-2">{notification.title}</h5>
                              <p className="mb-0">{notification.description}</p>
                              {notification.actions && (
                                <div className="mt-2">
                                  <Button className="btn btn-sm btn-outline-secondary me-2">Decline</Button>
                                  <Button className="btn btn-sm btn-primary">Accept</Button>
                                </div>
                              )}
                            </div>
                          </Stack>
                        </MainCard>
                      </React.Fragment>
                    ))}
                  </div>
                </SimpleBar>

                <div className="text-center py-2">
                  <Link to="#!" className="link-danger">
                    Clear all Notifications
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="pc-h-item" align="end">
              <Dropdown.Toggle
                className="pc-head-link arrow-none me-0"
                variant="link"
                id="user-profile-dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ti ti-user" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-user-profile pc-h-dropdown p-0 overflow-hidden">
                <Dropdown.Header className="bg-primary">
                  <Stack direction="horizontal" gap={3} className="my-2">
                    <div className="flex-shrink-0">
                      <Image src={Img2} alt="user-avatar" className="user-avatar wid-35" roundedCircle />
                    </div>
                    <Stack gap={1}>
                      <h6 className="text-white mb-0">Carson Darrin 🖖</h6>
                      <span className="text-white text-opacity-75">carson.darrin@company.io</span>
                    </Stack>
                  </Stack>
                </Dropdown.Header>

                <div className="dropdown-body">
                  <div className="profile-notification-scroll position-relative" style={{ maxHeight: 'calc(100vh - 225px)' }}>
                    <Dropdown.Item as={Link} to="#" className="justify-content-start">
                      <i className="ti ti-settings text-muted me-2" />
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="#" className="justify-content-start">
                      <i className="ti ti-share text-muted me-2" />
                      Share
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="#" className="justify-content-start">
                      <i className="ti ti-lock text-muted me-2" />
                      Change Password
                    </Dropdown.Item>
                    <div className="d-grid my-2">
                      <Button>
                        <i className="ti ti-logout text-white me-2" />
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </div>
    </header>
  );
}
