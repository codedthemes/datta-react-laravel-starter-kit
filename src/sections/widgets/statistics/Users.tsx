// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| STATISTICS - USERS ||============================== //

export default function Users() {
  return (
    <>
      <Col md={12} xl={4}>
        <MainCard>
          <h5 className="m-b-15">Register User</h5>
          <h4 className="f-w-300">1205</h4>
          <span className="text-muted">
            <Badge className="bg-brand-color-1 text-white f-12 f-w-40 rounded-pill me-2">20%</Badge>
            Monthly Increase
          </span>
        </MainCard>
      </Col>
      <Col md={6} xl={4}>
        <MainCard>
          <h5 className="m-b-15">Daily User</h5>
          <h4 className="f-w-300">467</h4>
          <span className="text-muted">
            <Badge className="bg-brand-color-1 text-white f-12 f-w-40 rounded-pill me-2">10%</Badge>
            Weekly Increase
          </span>
        </MainCard>
      </Col>
      <Col md={6} xl={4}>
        <MainCard>
          <h5 className="m-b-15">Premium User</h5>
          <h4 className="f-w-300">346</h4>
          <span className="text-muted">
            <Badge className="bg-brand-color-1 text-white f-12 f-w-40 rounded-pill me-2">50%</Badge>
            Yearly Increase
          </span>
        </MainCard>
      </Col>
    </>
  );
}
