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
    title: 'Thoughtful Goliath',
    description: 'When Goliath comes out, you should run.',
    linkText: 'View more'
  },
  {
    src: advanceImage4,
    alt: 'advance-4',
    title: 'Thoughtful Goliath',
    description: 'When Goliath comes out, you should run.',
    linkText: 'View more'
  }
];

// ==============================|| ADVANCE - GOLIATH ||============================== //

export default function GoliathAdvance() {
  return (
    <MainCard title="Goliath">
      <div className="grid p-0">
        {items.map((item, index) => (
          <Figure key={index} className="effect-goliath">
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
