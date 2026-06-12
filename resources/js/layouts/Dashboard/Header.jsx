import React, { useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';

// project imports
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';

import MainCard from '@/components/MainCard';
import SimpleBarScroll from '@/components/third-party/SimpleBar';
import { handlerDrawerOpen, useGetMenuMaster } from '@/api/menu';

import Img1 from '@assets/images/user/avatar-1.png';
import Img2 from '@assets/images/user/avatar-2.png';
import Img3 from '@assets/images/user/avatar-3.png';
import Img4 from '@assets/images/user/avatar-4.png';
import Img5 from '@assets/images/user/avatar-5.png';

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

export default function Header() {
  const page = usePage();
  const cleanup = useMobileNavigation();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  const { auth } = page.props;

  return (
    <header className="pc-header">
      <div className="header-wrapper">
        <div className="me-auto pc-mob-drp">
          <Nav className="list-unstyled">
            <Nav.Item className="pc-h-item pc-sidebar-collapse">
              <Nav.Link
                href="#"
                className="pc-head-link ms-0"
                id="sidebar-hide"
                onClick={() => handlerDrawerOpen(!drawerOpen)}
              >
                <i className="ph ph-list" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="pc-h-item pc-sidebar-popup">
              <Nav.Link
                href="#"
                className="pc-head-link ms-0"
                id="mobile-collapse"
                onClick={() => handlerDrawerOpen(!drawerOpen)}
              >
                <i className="ph ph-list" />
              </Nav.Link>
            </Nav.Item>

            <Dropdown className="pc-h-item dropdown">
              <Dropdown.Toggle variant="link" className="pc-head-link arrow-none m-0 trig-drp-search">
                <i className="ph ph-magnifying-glass" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="pc-h-dropdown drp-search">
                <Form className="px-3 py-2">
                  <Form.Control type="search" placeholder="Search here..." className="border-0 shadow-none" />
                </Form>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>

        <div className="ms-auto">
          <Nav className="list-unstyled">

            {/* Theme Switcher */}
            <Dropdown className="pc-h-item" align="end">
              <Dropdown.Toggle className="pc-head-link me-0 arrow-none" variant="link" id="notification-dropdown">
                <i className="ph ph-bell" />
                <span className="badge bg-success pc-h-badge">3</span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-notification pc-h-dropdown">
                <Dropdown.Header className="d-flex align-items-center justify-content-between">
                  <h5 className="m-0">Notifications</h5>
                  <Link className="btn btn-link btn-sm" href="#">
                    Mark all read
                  </Link>
                </Dropdown.Header>

                <SimpleBarScroll style={{ maxHeight: 'calc(100vh - 215px)' }}>
                  <div className="dropdown-body text-wrap position-relative">
                    {notifications.map((notification, index) => (
                      <React.Fragment key={notification.id}>
                        {index === 0 || notifications[index - 1].date !== notification.date ? (
                          <p className="text-span">{notification.date}</p>
                        ) : null}

                        <MainCard className="mb-0">
                          <Stack direction="horizontal" gap={3}>
                            <Image className="img-radius avatar rounded-0" src={notification.avatar} />
                            <div>
                              <span className="float-end text-sm text-muted">{notification.time}</span>
                              <h5 className="text-body mb-2">{notification.title}</h5>
                              <p className="mb-0">{notification.description}</p>

                              {notification.actions && (
                                <div className="mt-2">
                                  <Button variant="outline-secondary" size="sm" className="me-2">
                                    Decline
                                  </Button>
                                  <Button variant="primary" size="sm">
                                    Accept
                                  </Button>
                                </div>
                              )}
                            </div>
                          </Stack>
                        </MainCard>
                      </React.Fragment>
                    ))}
                  </div>
                </SimpleBarScroll>

                <div className="text-center py-2">
                  <Link href="#!" className="link-danger">
                    Clear all Notifications
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            {/* User Profile */}
            <Dropdown className="pc-h-item" align="end">
              <Dropdown.Toggle className="pc-head-link arrow-none me-0" variant="link">
                <i className="ph ph-user-circle" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-user-profile pc-h-dropdown p-0 overflow-hidden">
                <Dropdown.Header className="bg-primary">
                  <Stack direction="horizontal" gap={3} className="my-2">
                    <Image src={Img2} className="user-avatar wid-35" roundedCircle />
                    <Stack gap={1}>
                      <h6 className="text-white mb-0">{auth.user.name} 🖖</h6>
                      <span className="text-white text-opacity-75">{auth.user.email}</span>
                    </Stack>
                  </Stack>
                </Dropdown.Header>

                <div className="dropdown-body">
                  <div className="profile-notification-scroll" style={{ maxHeight: 'calc(100vh - 225px)' }}>
                    <Dropdown.Item href="#" className="justify-content-start">
                      <i className="ph ph-gear me-2" /> Settings
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="justify-content-start">
                      <i className="ph ph-share-network me-2" /> Share
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="justify-content-start">
                      <i className="ph ph-lock-key me-2" /> Change Password
                    </Dropdown.Item>

                    <div className="d-grid my-2">
                      <Link
                        className="btn btn-primary"
                        method="post"
                        href={route('logout')}
                        as="button"
                        onClick={cleanup}
                      >
                        <i className="ph ph-sign-out me-2" />
                        Logout
                      </Link>
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
