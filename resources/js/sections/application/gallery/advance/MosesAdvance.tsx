// react-bootstrap
import Figure from 'react-bootstrap/Figure';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import advanceImage3 from '@assets/images/gallery-grid/img-grd-gal-3.jpg';
import advanceImage4 from '@assets/images/gallery-grid/img-grd-gal-4.jpg';

const items = [
  { src: advanceImage3, alt: 'advance-3', title: 'Cute Moses', content: 'Moses loves to run after butterflies.', linkLabel: 'View more' },
  { src: advanceImage4, alt: 'advance-4', title: 'Cute Moses', content: 'Moses loves to run after butterflies.', linkLabel: 'View more' }
];

// ==============================|| ADVANCE - MOSES ||============================== //

export default function MosesAdvance() {
  return (
    <MainCard title="Moses">
      <div className="grid p-0">
        {items.map((item, index) => (
          <Figure key={index} className="effect-moses">
            <Figure.Image src={item.src} alt={item.alt} />
            <Figure.Caption>
              <h2>
                {item.title.split(' ')[0]} <span>{item.title.split(' ')[1]}</span>
              </h2>
              <p>{item.content}</p>
              <a href="#!">{item.linkLabel}</a>
            </Figure.Caption>
          </Figure>
        ))}
      </div>
    </MainCard>
  );
}
