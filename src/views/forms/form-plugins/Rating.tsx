// project-imports
import ReferenceHeader from 'components/ReferenceHeader';
import RatingMain from 'sections/forms/form-plugins/Rating';

// =============================|| FORM PLUGIN - RATING ||============================== //

export default function RatingMainPage() {
  return (
    <>
      <ReferenceHeader
        caption="A zero-dependency ES6 module that transforms a SELECT with numerical-range values (i.e. 1-5) into a dynamic star rating element."
        link="https://pryley.github.io/star-rating.js/"
      />
      <RatingMain />;
    </>
  );
}
