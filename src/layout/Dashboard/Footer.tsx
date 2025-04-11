import { Link } from 'react-router-dom';

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// ==============================|| DASHBOARD - FOOTER ||============================== //

export default function Footer() {
  return (
    <footer className="pc-footer">
      <Container fluid className="footer-wrapper">
        <Row className="justify-content-md-between">
          {/* Footer Text */}
          <Col xs={12} md="auto" className="my-1 text-center text-md-start">
            <p className="m-0">
              Datta able ♥ crafted by Team{' '}
              <Link to="https://codedthemes.com/" target="_blank" rel="noopener noreferrer">
                CodedThemes
              </Link>
            </p>
          </Col>

          {/* Footer Links */}
          <Col xs={12} md="auto" className="my-1 col-auto text-center text-md-start">
            <Stack direction="horizontal" gap={3}>
              <Nav.Link className="p-0" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="p-0" as={Link} to="https://codedthemes.gitbook.io/datta" target="_blank" rel="noopener noreferrer">
                Documentation
              </Nav.Link>
              <Nav.Link className="p-0" as={Link} to="https://codedthemes.support-hub.io/" target="_blank" rel="noopener noreferrer">
                Support
              </Nav.Link>
            </Stack>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
