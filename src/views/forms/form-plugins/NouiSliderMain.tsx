// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import NouiSlider from 'sections/forms/form-plugins/noui-slider/NouiSlidar';

// =============================|| NOUI SLIDER ||============================== //

export default function NouiSliderMainPage() {
  return (
    <>
      <ComponentHeader
        caption="noUiSlider is a lightweight range slider with multi-touch support and a ton of features. It supports non-linear ranges, requires no external dependencies, has keyboard support, and it works great in responsive designs.

"
        link="https://refreshless.com/nouislider/"
      />
      <NouiSlider />
    </>
  );
}
