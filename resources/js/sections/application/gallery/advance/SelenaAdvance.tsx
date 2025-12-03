// react-bootstrap
import Figure from 'react-bootstrap/Figure';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import advanceImage3 from '@assets/images/gallery-grid/img-grd-gal-3.jpg';
import advanceImage4 from '@assets/images/gallery-grid/img-grd-gal-4.jpg';

const items = [
  { src: advanceImage3, alt: 'advance-1' },
  { src: advanceImage4, alt: 'advance-2' }
];

// ==============================|| ADVANCE - SELENA ||============================== //

export default function SelenaAdvance() {
  return (
    <MainCard title="Selena">
      <div className="grid p-0">
        {items.map((item, index) => (
          <Figure key={index} className="effect-selena">
            <Figure.Image src={item.src} alt={item.alt} />
            <Figure.Caption>
              <h2>
                Happy <span>Selena</span>
              </h2>
              <p>Selena is a tiny-winged bird.</p>
              <a href="#!">View more</a>
            </Figure.Caption>
          </Figure>
        ))}
      </div>
    </MainCard>
  );
}
