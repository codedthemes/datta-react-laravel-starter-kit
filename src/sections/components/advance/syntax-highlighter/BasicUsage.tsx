// project-imports
import MainCard from 'components/MainCard';

// third-party
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/coy-without-shadows';
import SyntaxHighlighter from 'react-syntax-highlighter';

// ============================|| SYNTAX HIGHLIGHTER - BASIC USAGE ||============================== //

export default function BasicUsagePage() {
  return (
    <MainCard title="Basic Usage">
      <p>
        The recommended way to mark up a code block (both for semantics and for Prism) is a <code> {`<pre>`} </code> element with a{' '}
        <code>{`<code>`}</code> element inside, like so:
      </p>
      <h6 className="m-t-20 f-w-600">Code:</h6>

      <SyntaxHighlighter language="javascript" style={dark} customStyle={{ backgroundColor: '#EEE', borderRadius: 2 }}>
        {`
<pre>
  <code class="language-css">
      p {
        color: #1abc9c
        }
  </code>
 </pre>
 `}
      </SyntaxHighlighter>
    </MainCard>
  );
}
