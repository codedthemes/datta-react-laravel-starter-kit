import { useEffect, useRef } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

// third-party
import Isotope from 'isotope-layout';

// project-imports
import MainCard from 'components/MainCard';

// assets
import masonryImage1 from 'assets/images/gallery-grid/masonry-1.jpg';
import masonryImage2 from 'assets/images/gallery-grid/masonry-2.jpg';
import masonryImage3 from 'assets/images/gallery-grid/masonry-3.jpg';
import masonryImage4 from 'assets/images/gallery-grid/masonry-4.jpg';
import masonryImage5 from 'assets/images/gallery-grid/masonry-5.jpg';
import masonryImage6 from 'assets/images/gallery-grid/masonry-6.jpg';
import masonryImage7 from 'assets/images/gallery-grid/masonry-7.jpg';
import masonryImage8 from 'assets/images/gallery-grid/masonry-8.jpg';

const images = [masonryImage1, masonryImage2, masonryImage8, masonryImage3, masonryImage4, masonryImage5, masonryImage6, masonryImage7];

// ==============================|| MASONRY LAYOUTS - MASONRY ||============================== //

export default function MasonryLayout() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (gridRef.current) {
      const isotopeInstance = new Isotope(gridRef.current, {
        itemSelector: '.masonry-item',
        masonry: {
          columnWidth: 1
        }
      });

      return () => {
        isotopeInstance.destroy();
      };
    }
  }, []); // Runs only once after mount

  return (
    <MainCard title="Masonry Layouts">
      <Row className="grid-masonry" ref={gridRef}>
        {images.map((img, index) => (
          <Col key={index} xl={3} md={4} sm={6} className="masonry-item">
            <Image fluid className="img-thumbnail mb-3" src={img} alt="Masonry gallery image" />
          </Col>
        ))}
      </Row>
    </MainCard>
  );
}
