// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

// =============================|| STICKY ACTION BAR ||============================== //

export default function StickyActionBar() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <Row>
      <Col lg={12}>
        <Card>
          {/* Sticky Header */}
          <div id="sticky-action" className="sticky-action">
            <Card.Header>
              <Row className="align-items-center">
                <Col sm={6}>
                  <h5 className="mb-0">Sticky Action Bar</h5>
                </Col>
                <Col sm={6} className="text-sm-end mt-3 mt-sm-0">
                  <Button type="submit" form="main-form" variant="success" className="me-2">
                    Submit
                  </Button>
                  <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Card.Header>
          </div>

          {/* Card Body with Form Examples */}
          <Card.Body>
            <Form id="main-form" noValidate onSubmit={handleSubmit}>
              <h5>Form Controls</h5>
              <hr />
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text muted>We&apos;ll never share your email with anyone else.</Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Check label="Check me out" className="mb-3" />
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formText">
                    <Form.Label>Text</Form.Label>
                    <Form.Control type="text" placeholder="Text" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formTextarea">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Col>
              </Row>

              {/* Sizing */}
              <h5>Sizing</h5>
              <hr />
              <Row>
                <Col md={6}>
                  <Form.Control size="lg" className="mb-3" placeholder=".form-control-lg" />
                  <Form.Control className="mb-3" placeholder="Default input" />
                  <Form.Control size="sm" className="mb-3" placeholder=".form-control-sm" />
                </Col>
                <Col md={6}>
                  <Form.Select size="lg" className="mb-3">
                    <option>Large select</option>
                  </Form.Select>
                  <Form.Select className="mb-3">
                    <option>Default select</option>
                  </Form.Select>
                </Col>
              </Row>

              {/* Inline Form */}
              <h5>Inline</h5>
              <hr />
              <Form className="row row-cols-md-auto g-3 align-items-center">
                <Col>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Jane Doe" />
                </Col>
                <Col>
                  <Form.Label>Username</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control type="text" placeholder="Username" />
                  </InputGroup>
                </Col>
                <Col>
                  <Form.Label>Preference</Form.Label>
                  <Form.Select defaultValue="0">
                    <option value="0">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Check type="checkbox" label="Remember me" />
                </Col>
                <Col>
                  <Button type="submit">Submit</Button>
                </Col>
              </Form>

              {/* Form Grid */}
              <h5 className="mt-5">Form Grid</h5>
              <hr />
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="1234 Main St" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address 2</Form.Label>
                <Form.Control type="text" placeholder="Apartment, studio, or floor" />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="0">
                      <option value="0">Select</option>
                      <option value="1">Large select</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group>
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Check type="checkbox" label="Check me out" className="my-3" />
              <Button type="submit">Sign in</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
