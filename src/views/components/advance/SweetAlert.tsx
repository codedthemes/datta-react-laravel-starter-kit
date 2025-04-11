// project-imports
import IconsSection from 'sections/components/advance/sweet-alert/Icons';
import InputTypesSection from 'sections/components/advance/sweet-alert/InputTypes';
import MixinSection from 'sections/components/advance/sweet-alert/Mixin';
import Sweetalert2Section from 'sections/components/advance/sweet-alert/SweetAlert2';
import ComponentHeader from 'components/cards/ComponentHeader';

// ==============================|| ADVANCED - SWEET ALERT ||============================== //

export default function SweetAlertPage() {
  return (
    <>
      <ComponentHeader
        caption="A beautiful, responsive, customizable, and accessible (WAI-ARIA) replacement for JavaScript's popup boxes in React."
        link="https://sweetalert2.github.io/#examples"
      />
      <Sweetalert2Section />
      <MixinSection />
      <IconsSection />
      <InputTypesSection />
    </>
  );
}
