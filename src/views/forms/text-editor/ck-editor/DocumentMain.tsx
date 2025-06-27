// project-imports
import ReferenceHeader from 'components/ReferenceHeader';
import Document from 'sections/forms/text-editor/class-editor/Document';

// =============================|| CK EDITOR - DOCUMENT ||============================== //

export default function DocumentPage() {
  return (
    <>
      <ReferenceHeader
        caption="CKEditor 5 allows users to create any type of content in your application, be it documents, reports, emails, notes or chat messages."
        link="https://ckeditor.com/"
      />
      <Document />
    </>
  );
}
