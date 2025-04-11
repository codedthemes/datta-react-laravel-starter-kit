// project-imports
import MainCard from 'components/MainCard';

// third-party
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/coy-without-shadows';
import SyntaxHighlighter from 'react-syntax-highlighter';

// =============================|| SYNTAX HIGHLIGHTER - CSS MARKUP ||============================== //

export default function CssMarkupPage() {
  return (
    <MainCard title="CSS Markup">
      <p>Use the following code to use CSS syntax highlighter.</p>
      <h6 className=" m-t-20 f-w-600">Example:</h6>

      <SyntaxHighlighter language="javascript" style={dark} customStyle={{ backgroundColor: '#EEE', borderRadius: 2 }}>
        {`
a:active{
    color:#1abc9c;
  }
  p{
    font-size:13px;
  }
  .btn-primary{
    color: #1abc9c;
    background-color: #fff;
  }
  .label-primary {
    background-color: #1abc9c;
  }
  .badge-primary {
    background-color: #1abc9c;
  }
  .bg-primary {
    background-color: #1abc9c !important;
    color: #fff;
  }
  .panel-primary {
    border-color: #1abc9c;
  } 
 `}
      </SyntaxHighlighter>
    </MainCard>
  );
}
