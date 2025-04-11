// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import AutoSavingPage from 'sections/forms/text-editor/mark-down/AutoSaving';
import HiddenToolbar from 'sections/forms/text-editor/mark-down/HiddenToolbar';
import SimpleMDEMarkdownEditor from 'sections/forms/text-editor/mark-down/SimpleMDEMarkdownEditor';

// =============================|| TEXT EDITOR - MARKDOWN ||============================== //

export default function MarkDownPage() {
  return (
    <>
      <ComponentHeader caption="SimpleMDE is a simple, embeddable, and beautiful JS markdown editor" link="https://simplemde.com/" />
      <SimpleMDEMarkdownEditor />
      <AutoSavingPage />
      <HiddenToolbar />
    </>
  );
}
