import { useEffect, useRef, useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

// third-party
import CopyToClipboard from 'react-copy-to-clipboard';

// project-imports
import MainCard from 'components/MainCard';

// =============================|| FORM PLUGINS - CLIPBOARD ||============================== //

export default function ClipBoardPage() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<string>('');
  const [containerValue, setContainerValue] = useState<string>('');

  useEffect(() => {
    if (containerRef.current) {
      setContainerValue(containerRef.current.innerText);
    }
  }, [containerRef?.current?.innerText]);

  const copyHandler = (): void => {
    alert('Copied');
  };

  const cutToClipboard = (e: any): any => {
    textAreaRef?.current?.select();
    document.execCommand('cut');
    e.target.focus();
    alert('Copied');
  };

  return (
    <MainCard>
      <Form>
        <Row className="mb-3">
          <Col lg={3} sm={12} className="col-form-label text-lg-end">
            Copy text from another element
          </Col>
          <Col lg={6} md={9} sm={12}>
            <InputGroup className="mb-2">
              <Form.Control type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type some value to copy" />
              <CopyToClipboard text={value} onCopy={copyHandler}>
                <Button className="hei-55">
                  <i className="ti ti-copy" />
                </Button>
              </CopyToClipboard>
            </InputGroup>
            <small>
              You can do by adding a <code>data-clipboard-target</code> attribute in your trigger element
            </small>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={3} sm={12} className="col-form-label text-lg-end">
            Cut text from another element
          </Col>
          <Col lg={6} md={9} sm={12}>
            <Form.Control
              className="mb-2"
              as="textarea"
              rows={6}
              ref={textAreaRef}
              defaultValue="Lorem ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga."
            />
            <small>
              you can define a <code>data-clipboard-action</code> attribute to specify if you want to either <code>copy</code> or{' '}
              <code>cut</code> content
            </small>
            <br />
            <Button variant="danger" className="mt-2" onClick={cutToClipboard}>
              Cut to clipboard
            </Button>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={3} sm={12} className="col-form-label text-lg-end">
            Copy text from attribute
          </Col>
          <Col lg={6} md={9} sm={12}>
            <CopyToClipboard
              text="Just because you can doesn't mean you should — clipboard.js"
              onCopy={copyHandler}
              data-clipboard-target="Just because you can doesn't mean you should — clipboard.js"
            >
              <Button variant="success" data-clipboard="true" className="mb-2">
                Copy to clipboard
              </Button>
            </CopyToClipboard>
            <br />
            <Form.Text>
              You can just include a <code>data-clipboard-text</code> attribute in your trigger element
            </Form.Text>
          </Col>
        </Row>

        <Row>
          <Col lg={3} sm={12} className="col-form-label text-lg-end">
            Copy From Container
          </Col>
          <Col lg={6} md={9} sm={12}>
            <div className="border-10 p-2" ref={containerRef}>
              Lorem ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis,
              filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
              Manduma pindureta quium dia nois paga.
            </div>
            <CopyToClipboard text={containerValue} onCopy={copyHandler}>
              <Button className="mt-2"> Copy to clipboard</Button>
            </CopyToClipboard>
          </Col>
        </Row>
      </Form>
    </MainCard>
  );
}
