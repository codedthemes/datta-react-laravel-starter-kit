// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';
import ProgressBar from 'react-bootstrap/ProgressBar';

// ==============================|| WIDGETS DATA - SOCIAL MEDIA ||============================== //

export default function WidgetDataSocialMedia() {
  return (
    <MainCard title="Social Media Comparison" className="social-media">
      <Row>
        <Col xl={12} className="mb-4">
          <h6 className="m-b-20 text-center">
            Facebook <span className="ms-4">Twitter</span>
          </h6>
          <ProgressBar>
            <h5 className="m-r-20 m-b-0">67%</h5>
            <div className="progress-bar bg-brand-color-2 w-40 h-12" />
            <div className="progress-bar bg-brand-color-1 w-40 h-12" />
            <h5 className="m-l-20 m-b-0">23%</h5>
          </ProgressBar>
          <h6 className="m-t-20 text-center text-muted">
            5326 <span className="m-l-15">234</span>
          </h6>
        </Col>
        <Col xl={12} className="mb-4">
          <h6 className="m-b-20 text-center">
            Pinterest <span className="ms-4">Instagram</span>
          </h6>
          <ProgressBar>
            <h5 className="m-r-20 m-b-0">67%</h5>
            <div className="progress-bar bg-brand-color-2 w-30 h-12" />
            <div className="progress-bar bg-brand-color-1 w-36 h-12" />
            <h5 className="m-l-20 m-b-0">23%</h5>
          </ProgressBar>
          <h6 className="m-t-20 text-center text-muted">
            2856 <span className="m-l-15">5258</span>
          </h6>
        </Col>
        <Col xl={12} className="mb-4">
          <h6 className="m-b-20 text-center">
            YouTube <span className="ms-4">Vimeo</span>
          </h6>
          <ProgressBar>
            <h5 className="m-r-20 m-b-0">67%</h5>
            <div className="progress-bar bg-brand-color-2 w-30 h-12" />
            <div className="progress-bar bg-brand-color-1 w-40 h-12" />
            <h5 className="m-l-20 m-b-0">23%</h5>
          </ProgressBar>
          <h6 className="m-t-20 text-center text-muted">
            2989 <span className="m-l-15">2873</span>
          </h6>
        </Col>
      </Row>
    </MainCard>
  );
}
