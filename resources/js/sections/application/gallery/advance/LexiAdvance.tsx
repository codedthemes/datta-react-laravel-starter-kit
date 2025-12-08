// react-bootstrap
import Figure from 'react-bootstrap/Figure';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import advanceImage3 from '@assets/images/gallery-grid/img-grd-gal-3.jpg';
import advanceImage4 from '@assets/images/gallery-grid/img-grd-gal-4.jpg';

const items = [
  {
    src: advanceImage3,
    alt: 'advance-3',
    title: 'Altruistic Lexi',
    description: "Each and every friend is special. Lexi won't hide a single cookie.",
    linkText: 'View more'
  },
  {
    src: advanceImage4,
    alt: 'advance-4',
    title: 'Altruistic Lexi',
    description: "Each and every friend is special. Lexi won't hide a single cookie.",
    linkText: 'View more'
  }
];

// ==============================|| ADVANCE - LEXI ||============================== //

export default function LexiAdvance() {
  return (
    <MainCard title="Lexi">
      <div className="grid p-0">
        {items.map((item, index) => (
          <Figure className="effect-lexi" key={index}>
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
