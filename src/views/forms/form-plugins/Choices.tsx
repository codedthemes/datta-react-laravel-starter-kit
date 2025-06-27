// project-imports
import ReferenceHeader from 'components/ReferenceHeader';
import FormInteraction from 'sections/forms/form-plugins/select/FormInteraction';
import MultipleSelectInput from 'sections/forms/form-plugins/select/MultipleSelectInput';
import SingleSelectInput from 'sections/forms/form-plugins/select/SingleSelectInput';
import TextInputs from 'sections/forms/form-plugins/select/TextInputs';

// =============================|| FORM PLUGIN - CHOICES ||============================== //

export default function ChoicesPage() {
  return (
    <>
      <ReferenceHeader
        caption="Choices.js is a lightweight, configurable select box/text input plugin. Similar to Select2 and Selectize but without the jQuery dependency."
        link="https://choices-js.github.io/Choices/"
      />
      <TextInputs />
      <MultipleSelectInput />
      <SingleSelectInput />
      <FormInteraction />
    </>
  );
}
