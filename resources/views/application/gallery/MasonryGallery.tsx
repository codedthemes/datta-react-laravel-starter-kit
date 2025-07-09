// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import FilterLayout from 'sections/application/gallery/masonry/FilterLayout';
import MasonryLayout from 'sections/application/gallery/masonry/MasonryLayout';

// ==============================|| GALLERY - MASONRY ||============================== //

export default function MasonryGalleryPage() {
  return (
    <Row>
      <Col sm={12}>
        <FilterLayout />
        <MasonryLayout />
      </Col>
    </Row>
  );
}
