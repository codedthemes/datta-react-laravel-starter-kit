// project-imports

import MainCard from 'components/MainCard';

// third-party
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/coy-without-shadows';
import SyntaxHighlighter from 'react-syntax-highlighter';

// ============================|| SYNTAX HIGHLIGHTER - LINE NUMBER ||============================== //

export default function LineNumberPage() {
  return (
    <MainCard title="Line Number">
      <p>Line number at the beginning of code lines.</p>
      <p>
        Obviously, this is supposed to work only for code blocks ( <code>{`<pre><code>`}</code> ) and not for inline code. Add class
        line-numbers to your desired <code>{`<pre>`}</code> and line-numbers plugin will take care.
      </p>
      <p>
        Optional: You can specify the data-start (Number) attribute on the <code>{`<pre>`}</code> element. It will shift the line counter.
      </p>

      <h6 className="m-t-20 f-w-600">Usage:</h6>

      <SyntaxHighlighter language="javascript" style={dark} customStyle={{ backgroundColor: '#EEE', borderRadius: 2 }}>
        {`
<pre class="line-numbers">
  <code class="language-css">
      p {
          color: red;
      }

  </code>
</pre>
 `}
      </SyntaxHighlighter>

      <h6 className="m-t-20 f-w-600">Example:</h6>

      <SyntaxHighlighter language="javascript" style={dark} customStyle={{ backgroundColor: '#EEE', borderRadius: 2 }}>
        {`
(function() {
  if (typeof self==='undefined' || !self.Prism || !self.document) {
      return;
  }
});
 `}
      </SyntaxHighlighter>
    </MainCard>
  );
}
