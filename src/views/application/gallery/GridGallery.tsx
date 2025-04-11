// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import ImageGridGallery from 'sections/application/gallery/grid/ImageGridGallery';
import VideoGridGallery from 'sections/application/gallery/grid/VideoGridGallery';

// ==============================|| GALLERY - GRID ||============================== //

export default function GridGalleryPage() {
  return (
    <Row>
      <Col sm={12}>
        <ImageGridGallery />
        <VideoGridGallery />
      </Col>
    </Row>
  );
}
