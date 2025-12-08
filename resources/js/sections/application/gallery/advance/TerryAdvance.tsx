// react-bootstrap
import Figure from 'react-bootstrap/Figure';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import advanceImage5 from '@assets/images/gallery-grid/img-grd-gal-5.jpg';
import advanceImage6 from '@assets/images/gallery-grid/img-grd-gal-6.jpg';

const items = [
  { src: advanceImage5, alt: 'advance-5', title: 'Noisy Terry' },
  { src: advanceImage6, alt: 'advance-6', title: 'Noisy Terry' }
];

const icons = ['ti ti-download', 'ti ti-heart', 'ti ti-brand-stackshare', 'ti ti-tags'];

// ==============================|| ADVANCE - TERRY ||============================== //

export default function TerryAdvance() {
  return (
    <MainCard title="Terry">
      <div className="grid p-0">
        {items.map((item, index) => (
          <Figure key={index} className="effect-terry">
            <Figure.Image src={item.src} alt={item.alt} />
            <Figure.Caption>
              <h2>
                {item.title.split(' ')[0]} <span>{item.title.split(' ')[1]}</span>
              </h2>
              <p>
                {icons.map((icon, i) => (
                  <a href="#!" key={i}>
                    <i className={icon} />
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
