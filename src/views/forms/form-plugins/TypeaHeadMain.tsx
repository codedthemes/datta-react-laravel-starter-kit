// project-imports
import ReferenceHeader from 'components/ReferenceHeader';
import TypeaHead from 'sections/forms/form-plugins/TypeaHead';

// ==============================|| FORM PLUGIN - TYPEAHEAD ||============================== //

export default function TypeaHeadPage() {
  return (
    <>
      <ReferenceHeader
        caption="a flexible JavaScript library that provides a strong foundation for building robust typeaheads"
        link="https://twitter.github.io/typeahead.js/"
      />
      <TypeaHead />;
    </>
  );
}
