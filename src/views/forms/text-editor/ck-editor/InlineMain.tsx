// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import Inline from 'sections/forms/text-editor/class-editor/inline/Inline';

// =================|| CK EDITOR - INLINE MAIN ||============================== //

export default function InlinePage() {
  return (
    <>
      <ComponentHeader
        caption="CKEditor 5 allows users to create any type of content in your application, be it documents, reports, emails, notes or chat messages.

"
        link="https://ckeditor.com/"
      />
      <Inline />
    </>
  );
}
