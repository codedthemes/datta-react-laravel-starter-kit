// project-imports
import ClipBoard from 'sections/forms/form-plugins/clip-board/ClipBoard';
import ComponentHeader from 'components/cards/ComponentHeader';

// ==============================|| FORM PLUGINS - CLIPBOARD ||============================== //

export default function ClipBoardMainPage() {
  return (
    <>
      <ComponentHeader
        caption="A modern approach to copy text to clipboard, Copying text to the clipboard shouldnt be hard. It shouldnt require dozens of steps to configure or hundreds of KBs to load."
        link="https://clipboardjs.com/"
      />
      <ClipBoard />
    </>
  );
}
