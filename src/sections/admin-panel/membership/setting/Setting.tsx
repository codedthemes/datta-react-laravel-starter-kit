import { Link } from 'react-router-dom';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| MEMBERSHIP - SETTING ||============================== //

export default function Setting() {
  return (
    <MainCard
      title={
        <Stack direction="horizontal" className="align-items-center justify-content-between">
          <h5 className="mb-0">Setting</h5>
          <Link className="avatar avatar-s btn-link-secondary" to="#">
            <i className="ti ti-bookmarks f-18" />
          </Link>
        </Stack>
      }
    >
      <MainCard
        className="shadow-none border"
        title={
          <Stack direction="horizontal" className="align-items-center">
            <div className="flex-shrink-0">
              <div className="avatar avatar-l btn-light-secondary rounded-circle">
                <i className="ti ti-photo f-18" />
              </div>
            </div>
            <div className="flex-grow-1 mx-3">
              <h6 className="mb-0">Airi Satou</h6>
              <p className="mb-0 text-muted">Maiduguri, Borno State</p>
            </div>
            <div className="flex-shrink-0">
              <Button size="sm" variant="light-secondary">
                <i className="ti ti-edit" /> Edit
              </Button>
            </div>
          </Stack>
        }
      >
        <Row>
          <Col md={6}>
            <MainCard className="shadow-none border mb-0 h-100">
              <Stack direction="horizontal" className="align-items-center">
                <div className="flex-grow-1 me-3">
                  <h6 className="mb-0">Email Address</h6>
                </div>
                <div className="flex-shrink-0">
                  <Button size="sm" variant="light-secondary">
                    <i className="ti ti-edit" /> Edit
                  </Button>
                </div>
              </Stack>
              <div className="mb-3 mt-3">
                <Form.Label>Your email address is</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value="emailis@private.com" />
              </div>
            </MainCard>
          </Col>

          <Col md={6}>
            <MainCard className="shadow-none border mb-0 h-100">
              <h6 className="mb-2">Password</h6>

              <Row>
                <Col sm={6}>
                  <div className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter New Password" value="emailis" />
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="mb-3">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter New Password" value="emailis" />
                  </div>
                </Col>
              </Row>
              <p>
                Can’t Remember your current password?{' '}
                <Link to="#" className="link-primary text-decoration-underline">
                  Reset your password
                </Link>
              </p>
              <Button>Save Password</Button>
            </MainCard>
          </Col>
        </Row>
      </MainCard>
      <Row className="g-3">
        <Col md={6} xl={4}>
          <MainCard className="shadow-none border mb-0">
            <h6 className="mb-3 fw-medium">Membership Plan</h6>
            <h4 className="mb-3 fw-normal text-muted">Addicted $150</h4>
            <Stack as={'a'} direction="horizontal" className="link-primary  align-items-center gap-2">
              See more Plan <i className="ti ti-chevron-right" />
            </Stack>
          </MainCard>
        </Col>

        <Col md={6} xl={4}>
          <MainCard className="shadow-none border mb-0">
            <h6 className="mb-3 fw-medium">Manage</h6>
            <h4 className="mb-3 fw-normal text-muted">Membership</h4>
            <Stack as={'a'} direction="horizontal" className="link-primary  align-items-center gap-2">
              Update, Cancel and more
              <i className="ti ti-chevron-right" />
            </Stack>
          </MainCard>
        </Col>

        <Col md={12} xl={4}>
          <MainCard className="shadow-none border mb-0">
            <h6 className="mb-3 fw-medium">Renewal Date</h6>
            <h4 className="mb-3 fw-normal text-muted">120 November, 2024</h4>
            <Stack as={'a'} direction="horizontal" className="link-primary  align-items-center gap-2">
              View payment method
              <i className="ti ti-chevron-right" />
            </Stack>
          </MainCard>
        </Col>

        <Col xs={12}>
          <MainCard className="shadow-none border mb-0">
            <h6 className="mb-3">Delete Account</h6>
            <p className="mb-3">
              Would you like to delete your account?
              <br />
              Deleting your account will remove all the content associated with it.
            </p>
            <Button className="btn btn-primary">Delete Account</Button>
          </MainCard>
        </Col>
      </Row>
    </MainCard>
  );
}
