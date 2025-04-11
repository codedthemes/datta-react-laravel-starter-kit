// project-imports
import BasicUsage from 'sections/components/advance/syntax-highlighter/BasicUsage';
import CssMarkup from 'sections/components/advance/syntax-highlighter/CssMarkup';
import HtmlMarkup from 'sections/components/advance/syntax-highlighter/HtmlMarkup';
import LineHighlight from 'sections/components/advance/syntax-highlighter/LineHighlight';
import LineNumber from 'sections/components/advance/syntax-highlighter/LineNumber';
import ComponentHeader from 'components/cards/ComponentHeader';

// ==============================|| ADVANCED - SYNTAX HIGHLIGHTER ||============================== //

export default function SyntaxHighlighterPage() {
  return (
    <>
      <ComponentHeader
        caption="Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind."
        link="https://github.com/react-syntax-highlighter/react-syntax-highlighter#readme"
      />
      <BasicUsage />
      <HtmlMarkup />
      <CssMarkup />
      <LineNumber />
      <LineHighlight />
    </>
  );
}
