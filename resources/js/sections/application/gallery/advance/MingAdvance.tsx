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
    title: 'Funny Ming',
    description: "Ming sits in the corner the whole day. She's into crochet.",
    linkText: 'View more'
  },
  {
    src: advanceImage2,
    alt: 'advance-2',
    title: 'Funny Ming',
    description: "Ming sits in the corner the whole day. She's into crochet.",
    linkText: 'View more'
  }
];

// ==============================|| ADVANCE - MING ||============================== //

export default function MingAdvance() {
  return (
    <MainCard title="Ming">
      <div className="grid p-0">
        {items.map((item, index) => (
          <Figure className="effect-ming" key={index}>
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
