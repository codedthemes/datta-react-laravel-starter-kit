// react-bootstrap
import ComponentHeader from 'components/cards/ComponentHeader';
import FormValidation from 'sections/forms/form-validation/FormValidation';

// =============================|| FORMS - FORM VALIDATION ||============================== //

export default function FormValidationPage() {
  return (
    <>
      <ComponentHeader
        caption="lightweight form validation script that augments native HTML5 form validation elements and attributes."
        link="https://github.com/cferdinandi/bouncer"
      />
      <FormValidation />
    </>
  );
}
