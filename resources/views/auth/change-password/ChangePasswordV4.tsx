// react-bootstrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// project-imports
import AuthChangePasswordForm from 'sections/auth/AuthChangePassword';

// assets
import LockImg from 'assets/images/authentication/lock.png';

// ===========================|| AUTH - CHANGE PASSWORD V4 ||=========================== //

export default function ChangePasswordV4Page() {
  return (
    <div className="auth-main">
      <div className="auth-wrapper v4">
        <div className="auth-form">
          <Card className="my-5">
            <Row className="g-0">
              <Col md={6} sm={12} className="bg-brand-color-1 d-none d-md-flex d-lg-flex align-items-center justify-content-center">
                <Image src={LockImg} alt="lock images" fluid />
              </Col>
              <Col md={6} sm={12}>
                <AuthChangePasswordForm />
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </div>
  );
}
