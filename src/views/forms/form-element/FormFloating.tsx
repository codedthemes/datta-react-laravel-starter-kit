// project-imports
import FloatingLabels from 'sections/forms/form-element/form-floating/FloatingLabels';
import Selects from 'sections/forms/form-element/form-floating/Select';
import TextAreas from 'sections/forms/form-element/form-floating/Textareas';

// ==============================|| FORM ELEMENT - FORM FLOATING ||============================== //

export default function FormFlotingPage() {
  return (
    <>
      <FloatingLabels />
      <TextAreas />
      <Selects />
    </>
  );
}
