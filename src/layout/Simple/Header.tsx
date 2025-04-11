import { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// assets
import Logo from 'assets/images/logo-white.svg';

// ==============================|| SIMPLE - HEADER ||============================== //

export default function HeaderSection() {
  const navbarRef = useRef<HTMLElement | null>(null); // ✅ Explicit type

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
    <Navbar expand="md" className="navbar-Datta top-nav-collapse default " ref={navbarRef}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarTogglerDemo01" />
        <Navbar.Collapse id="navbarTogglerDemo01">
          <Nav className="ms-auto mb-2 mb-md-0 align-items-start">
            <Nav.Item className="px-1">
              <Nav.Link as={Link} to="https://codedthemes.gitbook.io/datta" target="_blank">
                Documentation
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-1">
              <Nav.Link as={Link} to="/dashboard/default">
                Live Preview
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-1">
              <Nav.Link as={Link} to="/basic/alert" className="me-sm-3">
                Components
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button variant="dark" href="https://codedthemes.com/item/datta-able-bootstrap-admin-template/" target="_blank">
                Purchase Now <i className="ti ti-external-link" />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
