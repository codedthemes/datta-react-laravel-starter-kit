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

const icons = ['ti ti-file-type-pdf', 'ti ti-photo', 'ti ti-file-zip', 'ti ti-file-code'];

// ==============================|| ADVANCE - HERA ||============================== //

export default function HeraAdvance() {
  return (
    <MainCard title="Hera">
      <div className="grid p-0">
        {items.map((item, index) => (
          <Figure key={index} className="effect-hera">
            <Figure.Image src={item.src} alt={item.alt} />
            <Figure.Caption>
              <h2>
                Tender <span>Hera</span>
              </h2>
              <p className="text-spacing">
                {icons.map((icon, i) => (
                  <a href="#!" key={i}>
                    <i className={`${icon} f-36`} />
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
