import { useEffect, useRef } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// third-party
import Choices from 'choices.js';

// project-imports
import MainCard from '@/components/MainCard';

// =============================|| SELECT - MULTIPLE SELECT INPUT ||============================== //

export default function MultipleSelectInput() {
  const defaultSelectRef = useRef<HTMLSelectElement>(null);
  const removeButtonSelectRef = useRef<HTMLSelectElement>(null);
  const groupSelectRef = useRef<HTMLSelectElement>(null);
  const remoteSelectRef = useRef<HTMLSelectElement>(null);
  const rtlSelectRef = useRef<HTMLSelectElement>(null);
  const labelsSelectRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const instances: Choices[] = [];

    if (defaultSelectRef.current) {
      const choices = new Choices(defaultSelectRef.current, {
        removeItemButton: false,
        maxItemCount: 5,
        placeholderValue: 'This is a placeholder set in the config'
      });
      choices.setValue(['Choice 1']);
      instances.push(choices);
    }

    if (removeButtonSelectRef.current) {
      const choices = new Choices(removeButtonSelectRef.current, {
        removeItemButton: true
      });
      choices.setValue(['Choice 1']);
      instances.push(choices);
    }

    if (groupSelectRef.current) {
      const choices = new Choices(groupSelectRef.current, {
        removeItemButton: true
      });
      instances.push(choices);
    }

    if (remoteSelectRef.current) {
      const choices = new Choices(remoteSelectRef.current, {
        removeItemButton: true,
        placeholderValue: 'Pick a Strokes record'
      });
      instances.push(choices);

      // Example fetch for remote data (optional)
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
          choices.setChoices(
            data.map((user: any) => ({
              value: user.id,
              label: user.name
            })),
            'value',
            'label',
            false
          );
        });
    }

    if (rtlSelectRef.current) {
      const choices = new Choices(rtlSelectRef.current, {
        placeholderValue: 'This is a placeholder set in the config'
      });
      choices.setValue(['Choice 1']);
      instances.push(choices);
    }

    if (labelsSelectRef.current) {
      const choices = new Choices(labelsSelectRef.current, {
        removeItemButton: true,
        choices: [
          { value: 'One', label: 'Label One' },
          { value: 'Two', label: 'Label Two', disabled: true },
          { value: 'Three', label: 'Label Three' }
        ]
      });

      choices.setChoices(
        [
          { value: 'Four', label: 'Label Four', disabled: true },
          { value: 'Five', label: 'Label Five' },
          { value: 'Six', label: 'Label Six', selected: true }
        ],
        'value',
        'label',
        false
      );

      choices.passedElement.element.addEventListener('addItem', (event: any) => {
        if (messageRef.current) {
          messageRef.current.innerHTML = `<span class="badge bg-light-primary"> You just added "${event.detail.label}"</span>`;
        }
      });

      choices.passedElement.element.addEventListener('removeItem', (event: any) => {
        if (messageRef.current) {
          messageRef.current.innerHTML = `<span class="badge bg-light-danger"> You just removed "${event.detail.label}"</span>`;
        }
      });

      instances.push(choices);
    }

    // Cleanup to avoid memory leaks
    return () => {
      instances.forEach((instance) => instance.destroy());
    };
  }, []);

  return (
    <MainCard title="Multiple select input">
      <Form>
        <Form.Group className="mb-3" as={Row}>
          <Form.Label column lg={4} sm={12} className="text-lg-end">
            Default
          </Form.Label>
          <Col lg={6} md={11} sm={12}>
            <Form.Control as="select" ref={defaultSelectRef} multiple defaultValue={['Choice 1']}>
              <option value="Choice 1">Choice 1</option>
              <option value="Choice 2">Choice 2</option>
              <option value="Choice 3">Choice 3</option>
              <option value="Choice 4" disabled>
                Choice 4
              </option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <Form.Label column lg={4} sm={12} className="text-lg-end">
            With remove button
          </Form.Label>
          <Col lg={6} md={11} sm={12}>
            <Form.Control as="select" ref={removeButtonSelectRef} multiple defaultValue={['Choice 1']}>
              <option value="Choice 1">Choice 1</option>
              <option value="Choice 2">Choice 2</option>
              <option value="Choice 3">Choice 3</option>
              <option value="Choice 4" disabled>
                Choice 4
              </option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <Form.Label column lg={4} sm={12} className="text-lg-end">
            Option groups
          </Form.Label>
          <Col lg={6} md={11} sm={12}>
            <Form.Control as="select" ref={groupSelectRef} multiple>
              <option value="">Choose a city</option>
              <optgroup label="UK">
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
                <option value="Liverpool">Liverpool</option>
              </optgroup>
              <optgroup label="FR">
                <option value="Paris">Paris</option>
                <option value="Lyon">Lyon</option>
                <option value="Marseille">Marseille</option>
              </optgroup>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <Form.Label column lg={4} sm={12} className="text-lg-end">
            Options from remote source (Fetch API)
          </Form.Label>
          <Col lg={6} md={11} sm={12}>
            <Form.Control as="select" ref={remoteSelectRef} />
            <small className="text-muted">Data loads from API (example users)</small>
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <Form.Label column lg={4} sm={12} className="text-lg-end">
            Right-to-left
          </Form.Label>
          <Col lg={6} md={11} sm={12}>
            <Form.Control as="select" ref={rtlSelectRef} multiple dir="rtl">
              <option value="Choice 1">Choice 1</option>
              <option value="Choice 2">Choice 2</option>
              <option value="Choice 3">Choice 3</option>
              <option value="Choice 4" disabled>
                Choice 4
              </option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group className="my-2" as={Row}>
          <Form.Label column lg={4} sm={12} className="text-lg-end">
            Use label in event (add/remove)
          </Form.Label>
          <Col lg={6} md={11} sm={12}>
            <Form.Select ref={labelsSelectRef} multiple />
            <div ref={messageRef} />
          </Col>
        </Form.Group>
      </Form>
    </MainCard>
  );
}
