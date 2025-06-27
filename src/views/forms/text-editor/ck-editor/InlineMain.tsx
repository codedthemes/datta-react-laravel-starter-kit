// project-imports
import ReferenceHeader from 'components/ReferenceHeader';
import Inline from 'sections/forms/text-editor/class-editor/inline';

// =================|| CK EDITOR - INLINE MAIN ||============================== //

export default function InlinePage() {
  return (
    <>
      <ReferenceHeader
        caption="CKEditor 5 allows users to create any type of content in your application, be it documents, reports, emails, notes or chat messages."
        link="https://ckeditor.com/"
      />
      <Inline />
    </>
  );
}
