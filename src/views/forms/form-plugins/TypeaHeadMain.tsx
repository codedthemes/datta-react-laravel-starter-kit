// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import TypeaHead from 'sections/forms/form-plugins/typeahead/TypeaHead';

// ==============================|| FORM PLUGIN - TYPEAHEAD ||============================== //

export default function TypeaHeadPage() {
  return (
    <>
      <ComponentHeader
        caption="a flexible JavaScript library that provides a strong foundation for building robust typeaheads"
        link="https://twitter.github.io/typeahead.js/"
      />
      <TypeaHead />;
    </>
  );
}
