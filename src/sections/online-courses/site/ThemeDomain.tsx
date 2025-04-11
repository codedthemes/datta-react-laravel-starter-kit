// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// assets
import ImgDomain from 'assets/images/admin/img-domain.png';

// ===============================|| SITE - THEME DOMAIN ||=============================== //

export default function ThemeDomain() {
  return (
    <Row className="row justify-content-center">
      <Col md={10} lg={8} xxl={6}>
        <MainCard className="border text-center">
          <h5>Confirm your domain</h5>
          <p className="text-muted">If you edit this domain, your school URL will update the next time you log out.</p>
          <Image src={ImgDomain} fluid alt="images" className="mb-4" />
          <div className="mb-3 text-start">
            <label className="form-label">URL</label>
            <Stack direction="horizontal" className="align-items-center">
              <div className="flex-grow-1 me-3">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="https://admin123-20"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">.ablepro.com</InputGroup.Text>
                </InputGroup>
              </div>
              <div className="flex-shrink-0">
                <Button>Confirm</Button>
              </div>
            </Stack>
          </div>
        </MainCard>
      </Col>
    </Row>
  );
}
