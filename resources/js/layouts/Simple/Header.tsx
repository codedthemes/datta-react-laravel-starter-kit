import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { useCallback, useEffect, useRef } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// project-imports
import branding from '../../../branding.json';
import { APP_DEFAULT_PATH } from '@/config';

// assets
import Logo from '@assets/images/logo-white.svg';

// ==============================|| SIMPLE - HEADER ||============================== //

export default function HeaderSection() {
  const navbarRef = useRef<HTMLElement | null>(null); // ✅ Explicit type
  const { auth } = usePage<SharedData>().props;
  const handleScroll = useCallback(() => {
    if (navbarRef.current) {
      navbarRef.current.classList.toggle('default', window.scrollY === 0);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Navbar expand="md" className="navbar-Datta top-nav-collapse default" ref={navbarRef} data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarTogglerDemo01" />
        <Navbar.Collapse id="navbarTogglerDemo01">
          <Nav className="ms-auto mb-2 mb-md-0 align-items-start">
            {auth.user ? (
              <Nav.Item className="px-1">
                <Nav.Link href={route('dashboard')} target="_blank">
                  Dashboard
                </Nav.Link>
              </Nav.Item>
            ) : (
              <>
                <Nav.Item className="px-1">
                  <Nav.Link href={route('login')} target="_blank">
                    Log in
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-1">
                  <Nav.Link href={route('register')} target="_blank">
                    Register
                  </Nav.Link>
                </Nav.Item>
              </>
            )}
            <Nav.Item className="px-1">
              <a href="https://codedthemes.gitbook.io/datta" target="_blank" className="nav-link">
                Documentation
              </a>
            </Nav.Item>
            <Nav.Item className="px-1">
              <a href="/dashboard/default" target="_blank" className="nav-link">
                Live Preview
              </a>
            </Nav.Item>
            <Nav.Item className="px-1">
              <a href="/basic/alert" target="_blank" className="nav-link me-sm-3">
                Components
              </a>
            </Nav.Item>
            <Nav.Item>
              <Button variant="dark" href={branding.buyNow} target="_blank" className='d-inline-flex align-items-center gap-2'>
                Purchase Now <i className="ti ti-external-link" />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
