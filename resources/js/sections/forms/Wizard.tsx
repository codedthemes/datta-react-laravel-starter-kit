import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import Image1 from '@assets/images/application/img-prod-3.jpg';

const steps = [
  { key: 'first', title: 'About me', icon: 'ph ph-user-circle', progress: 25 },
  { key: 'second', title: 'Address', icon: 'ph ph-map-pin', progress: 50 },
  { key: 'third', title: 'Education Detail', icon: 'ph ph-graduation-cap', progress: 75 },
  { key: 'fourth', title: 'Finish', icon: 'ph ph-check-circle', progress: 100 }
] as const;

type StepKey = (typeof steps)[number]['key'];

// ==============================|| WIZARD ||============================== //

export default function Wizard() {
  const [currentStep, setCurrentStep] = useState<StepKey>('first');

  const stepIndex = steps.findIndex((s) => s.key === currentStep);
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === steps.length - 1;

  const goToNextStep = () => {
    if (!isLastStep) setCurrentStep(steps[stepIndex + 1].key);
  };

  const goToPrevStep = () => {
    if (!isFirstStep) setCurrentStep(steps[stepIndex - 1].key);
  };

  const goToStep = (key: StepKey) => setCurrentStep(key);

  return (
    <TabContainer activeKey={currentStep} onSelect={(k) => goToStep(k as StepKey)}>
      <Row>
        <Col className="text-center">
          <h3>Build Your Profile</h3>
          <p className="text-muted mb-4">
            A group of people who collectively are responsible for all of the work necessary to produce working, validated assets.
          </p>
        </Col>
      </Row>

      {/* Step navigation */}
      <MainCard bodyClassName="p-3">
        <Nav variant="pills" className="flex-column">
          <Stack direction="horizontal" className="align-items-center w-100">
            {steps.map((step) => (
              <Nav.Item key={step.key} className="w-100">
                <Nav.Link eventKey={step.key} className={currentStep === step.key ? 'text-white' : 'text-secondary'}>
                  <Stack direction="horizontal" gap={2} className="flex-wrap align-items-center justify-content-center">
                    <i className={`${step.icon} f-20`} />
                    <span>{step.title}</span>
                  </Stack>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Stack>
        </Nav>
      </MainCard>

      {/* Step content */}
      <MainCard>
        <ProgressBar striped variant="success" now={steps[stepIndex].progress} className="mb-3" />
        <Tab.Content>
          {/* Step 1 */}
          <Tab.Pane eventKey="first">
            <div className="text-center">
              <h3 className="mb-2">Let's start with the basic information</h3>
              <Form.Text>Let us know your name and email address. Use an address you don't mind other users contacting you at</Form.Text>
            </div>
            <Row className="mt-4">
              <div className="col-sm-auto text-center">
                <div className="position-relative me-3 d-inline-flex">
                  <div className="position-absolute top-50 start-100 translate-middle">
                    <Button className="btn-sm btn-icon">
                      <i className="ti ti-pencil" />
                    </Button>
                  </div>
                  <Image src={Image1} alt="" className="wid-150 rounded img-fluid ms-2" />
                </div>
              </div>
              <Col>
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter First Name" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                  </Col>
                  <Col sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="text" placeholder="Enter Email Address" />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Tab.Pane>

          {/* Step 2 */}
          <Tab.Pane eventKey="second">
            <div className="text-center">
              <h3 className="mb-2">Tell me something about Home address</h3>
              <Form.Text>Provide your complete address details for better communication.</Form.Text>
            </div>
            <Row className="mt-4">
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Street Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Street Name" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Street No</Form.Label>
                  <Form.Control type="text" placeholder="Enter Street No" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="Enter City" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Select>
                    <option>Select Country</option>
                    <option>India</option>
                    <option>Russia</option>
                    <option>Dubai</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Tab.Pane>

          {/* Step 3 */}
          <Tab.Pane eventKey="third">
            <div className="text-center">
              <h3 className="mb-2">Tell us about your education</h3>
              <Form.Text>Provide your school details</Form.Text>
            </div>
            <Row className="mt-4">
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>School Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your school name" />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>School Location</Form.Label>
                  <Form.Control type="text" placeholder="Enter your school location" />
                </Form.Group>
              </Col>
            </Row>
          </Tab.Pane>

          {/* Step 4 */}
          <Tab.Pane eventKey="fourth">
            <div className="text-center mb-3">
              <i className="ti ti-gift f-50 text-danger" />
              <h3 className="mt-4 mb-3">Thank you!</h3>
              <Stack direction="horizontal" gap={2} className="justify-content-center mb-3">
                <Form.Check />
                <span>I accept all terms and conditions</span>
              </Stack>
            </div>
          </Tab.Pane>
        </Tab.Content>

        {/* Navigation buttons */}
        <div className="d-flex wizard justify-content-between flex-column flex-sm-row mt-3 gap-2">
          <Button variant="secondary" onClick={() => goToStep('first')} disabled={isFirstStep}>
            First
          </Button>

          <Stack direction="horizontal" gap={2}>
            <Button variant="secondary" disabled={isFirstStep} onClick={goToPrevStep}>
              Back To Previous
            </Button>
            <Button variant="secondary" disabled={isLastStep} onClick={goToNextStep}>
              Next Step
            </Button>
          </Stack>

          <Button variant="secondary" onClick={() => goToStep('fourth')} disabled={isLastStep}>
            Finish
          </Button>
        </div>
      </MainCard>
    </TabContainer>
  );
}
