// react-bootstrap
import Figure from 'react-bootstrap/Figure';
import FigureCaption from 'react-bootstrap/FigureCaption';

// project-imports
import MainCard from 'components/MainCard';

// assets
import advanceImage5 from 'assets/images/gallery-grid/img-grd-gal-5.jpg';
import advanceImage6 from 'assets/images/gallery-grid/img-grd-gal-6.jpg';

// ==============================|| ADVANCE - TERRY ||============================== //

export default function TerryAdvance() {
  return (
    <MainCard title="Terry">
      <div className="grid">
        <Figure className="effect-terry">
          <Figure.Image src={advanceImage5} alt="advance-1" />
          <FigureCaption>
            <h2>
              Noisy <span>Terry</span>
            </h2>
            <p>
              <a href="#!">
                <i className="fa fa-fw fa-download" />
              </a>
              <a href="#!">
                <i className="fa fa-fw fa-heart" />
              </a>
              <a href="#!">
                <i className="fa fa-fw fa-share" />
              </a>
              <a href="#!">
                <i className="fa fa-fw fa-tags" />
              </a>
            </p>
          </FigureCaption>
        </Figure>
        <Figure className="effect-terry">
          <Figure.Image src={advanceImage6} alt="advance-2" />
          <FigureCaption>
            <h2>
              Noisy <span>Terry</span>
            </h2>
            <p>
              <a href="#!">
                <i className="fa fa-fw fa-download" />
              </a>
              <a href="#!">
                <i className="fa fa-fw fa-heart" />
              </a>
              <a href="#!">
                <i className="fa fa-fw fa-share" />
              </a>
              <a href="#!">
                <i className="fa fa-fw fa-tags" />
              </a>
            </p>
          </FigureCaption>
        </Figure>
      </div>
    </MainCard>
  );
}
