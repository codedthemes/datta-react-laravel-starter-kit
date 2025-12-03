// react-bootstrap
import Figure from 'react-bootstrap/Figure';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import advanceImage1 from '@assets/images/gallery-grid/img-grd-gal-1.jpg';
import advanceImage2 from '@assets/images/gallery-grid/img-grd-gal-2.jpg';

const items = [
  { src: advanceImage1, alt: 'advance-1' },
  { src: advanceImage2, alt: 'advance-2' }
];

const icons = ['ti ti-star', 'ti ti-message-circle', 'ti ti-mail-opened'];

// ==============================|| ADVANCE - WINSTON ||============================== //

export default function WinstonAdvance() {
  return (
    <MainCard title="Winston">
      <div className="grid p-0">
        {items.map((item, index) => (
          <Figure key={index} className="effect-winston">
            <Figure.Image src={item.src} alt={item.alt} />
            <Figure.Caption>
              <h2>
                Jolly <span>Winston</span>
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
