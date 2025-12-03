// react-bootstrap
import Figure from 'react-bootstrap/Figure';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import advanceImage5 from '@assets/images/gallery-grid/img-grd-gal-5.jpg';
import advanceImage6 from '@assets/images/gallery-grid/img-grd-gal-6.jpg';

const items = [
  { src: advanceImage5, alt: 'advance-5' },
  { src: advanceImage6, alt: 'advance-6' }
];

const icons = ['ti ti-home', 'ti ti-download', 'ti ti-heart', 'ti ti-brand-stackshare'];

// ==============================|| ADVANCE - KIRA ||============================== //

export default function KiraAdvance() {
  return (
    <MainCard title="Kira">
      <div className="grid p-0">
        {items.map((item, index) => (
          <Figure key={index} className="effect-kira">
            <Figure.Image src={item.src} alt={item.alt} />
            <Figure.Caption>
              <h2>
                Dark <span>Kira</span>
              </h2>
              <p>
                {icons.map((icon, i) => (
                  <a href="#!" key={i}>
                    <i className={`${icon} text-black`} />
                  </a>
                ))}
              </p>
            </Figure.Caption>
          </Figure>
        ))}
      </div>
    </MainCard>
  );
}
