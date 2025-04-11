// react-bootstrap
import ThreeColumnsFormLayout from 'sections/forms/form-layouts/multi-layouts/ThreeColumnsFormLayout';
import ThreeColumnsHorizontalLayout from 'sections/forms/form-layouts/multi-layouts/ThreeColumnsHorizontalLayout';
import TwoColumnsFormLayout from 'sections/forms/form-layouts/multi-layouts/TwoColumnsFormLayout';
import TwoColumnsHorizontalForm from 'sections/forms/form-layouts/multi-layouts/TwoColumnsHorizontalForm';

// =============================|| FORM LAYOUTS - MULTI LAYOUTS ||============================== //

export default function MultiLayoutsPage() {
  return (
    <>
      <TwoColumnsFormLayout />
      <TwoColumnsHorizontalForm />
      <ThreeColumnsFormLayout />
      <ThreeColumnsHorizontalLayout />
    </>
  );
}
