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
    title: 'Messy Duke',
    description: 'Duke is very bored. When he looks at the sky, he feels to run.',
    linkText: 'View more'
  },
  {
    src: advanceImage6,
    alt: 'advance-6',
    title: 'Messy Duke',
    description: 'Duke is very bored. When he looks at the sky, he feels to run.',
    linkText: 'View more'
  }
];

// ==============================|| ADVANCE - DUKE ||============================== //

export default function DukeAdvance() {
  return (
    <MainCard title="Duke">
      <div className="grid p-0">
        {items.map((item, index) => (
          <Figure className="effect-duke" key={index}>
            <Figure.Image src={item.src} alt={item.alt} />
            <Figure.Caption>
              <h2>
                {item.title.split(' ')[0]} <span>{item.title.split(' ')[1]}</span>
              </h2>
              <p>{item.description}</p>
              <a href="#!">{item.linkText}</a>
            </Figure.Caption>
          </Figure>
        ))}
      </div>
    </MainCard>
  );
}
