// react-bootstrap
import Figure from 'react-bootstrap/Figure';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import advanceImage1 from '@assets/images/gallery-grid/img-grd-gal-1.jpg';
import advanceImage2 from '@assets/images/gallery-grid/img-grd-gal-2.jpg';

const items = [
  {
    src: advanceImage1,
    alt: 'advance-1',
    title: 'Lonely Steve',
    desc: 'Steve was afraid of the Boogieman.',
    linkText: 'View more'
  },
  {
    src: advanceImage2,
    alt: 'advance-2',
    title: 'Lonely Steve',
    desc: 'Steve was afraid of the Boogieman.',
    linkText: 'View more'
  }
];

// ==============================|| ADVANCE - STEVE ||============================== //

export default function SteveAdvance() {
  return (
    <MainCard title="Steve">
      <div className="grid p-0">
        {items.map((item, index) => (
          <Figure className="effect-steve" key={index}>
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
