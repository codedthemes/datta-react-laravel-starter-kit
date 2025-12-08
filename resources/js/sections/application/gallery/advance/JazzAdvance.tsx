// react-bootstrap
import Figure from 'react-bootstrap/Figure';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import advanceImage5 from '@assets/images/gallery-grid/img-grd-gal-5.jpg';
import advanceImage6 from '@assets/images/gallery-grid/img-grd-gal-6.jpg';

const items = [
  {
    src: advanceImage5,
    alt: 'advance-5',
    title: 'Dynamic Jazz',
    desc: 'When Jazz starts to chase cars, the whole world stands still.',
    linkText: 'View more'
  },
  {
    src: advanceImage6,
    alt: 'advance-6',
    title: 'Dynamic Jazz',
    desc: 'When Jazz starts to chase cars, the whole world stands still.',
    linkText: 'View more'
  }
];

// ==============================|| ADVANCE - JAZZ ||============================== //

export default function JazzAdvance() {
  return (
    <MainCard title="Jazz">
      <div className="grid p-0">
        {items.map((item, index) => (
          <Figure className="effect-jazz" key={index}>
            <Figure.Image src={item.src} alt={item.alt} />
            <Figure.Caption>
              <h2>
                {item.title.split(' ')[0]} <span>{item.title.split(' ')[1]}</span>
              </h2>
              <p>{item.desc}</p>
              <a href="#!">{item.linkText}</a>
            </Figure.Caption>
          </Figure>
        ))}
      </div>
    </MainCard>
  );
}
