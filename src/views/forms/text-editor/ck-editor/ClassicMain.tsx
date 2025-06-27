// project-imports
import ReferenceHeader from 'components/ReferenceHeader';
import Classic from 'sections/forms/text-editor/class-editor/Classic';

// =============================|| CK EDITOR - CLASSIC ||============================== //

export default function ClassicPage() {
  return (
    <>
      <ReferenceHeader
        caption="CKEditor 5 allows users to create any type of content in your application, be it documents, reports, emails, notes or chat messages.

"
        link="https://ckeditor.com/"
      />
      <Classic />
    </>
  );
}
