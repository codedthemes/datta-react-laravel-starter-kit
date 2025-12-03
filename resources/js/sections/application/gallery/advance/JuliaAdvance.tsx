// react-bootstrap
import Figure from 'react-bootstrap/Figure';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import advanceImage1 from '@assets/images/gallery-grid/img-grd-gal-1.jpg';
import advanceImage2 from '@assets/images/gallery-grid/img-grd-gal-2.jpg';

type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  paragraphs: string[];
  linkLabel?: string;
};

const items: GalleryItem[] = [
  {
    id: 'julia-1',
    src: advanceImage1,
    alt: 'Julia standing at the shoreline',
    title: 'Passionate Julia',
    paragraphs: ['Julia dances in the deep dark', 'She loves the smell of the ocean', 'And dives into the morning light'],
    linkLabel: 'View more'
  },
  {
    id: 'julia-2',
    src: advanceImage2,
    alt: 'Julia looking toward the ocean',
    title: 'Passionate Julia',
    paragraphs: ['Julia dances in the deep dark', 'She loves the smell of the ocean', 'And dives into the morning light'],
    linkLabel: 'View more'
  }
];

// ==============================|| ADVANCE - JULIA ||============================== //

export default function JuliaAdvance() {
  return (
    <MainCard title="Julia">
      <div className="grid p-0">
        {items.map((item) => (
          <Figure className="effect-julia" key={item.id}>
            <Figure.Image src={item.src} alt={item.alt} />
            <Figure.Caption>
              <h2>
                {item.title.split(' ')[0]} <span>{item.title.split(' ')[1]}</span>
              </h2>
              <div>
                {item.paragraphs.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
              <a href="#!">{item.linkLabel}</a>
            </Figure.Caption>
          </Figure>
        ))}
      </div>
    </MainCard>
  );
}
