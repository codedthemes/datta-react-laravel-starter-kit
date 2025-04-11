// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import RatingMain from 'sections/forms/form-plugins/rating/Rating';

// =============================|| FORM PLUGIN - RATING ||============================== //

export default function RatingMainPage() {
  return (
    <>
      <ComponentHeader
        caption="A zero-dependency ES6 module that transforms a SELECT with numerical-range values (i.e. 1-5) into a dynamic star rating element."
        link="https://pryley.github.io/star-rating.js/"
      />
      <RatingMain />;
    </>
  );
}
