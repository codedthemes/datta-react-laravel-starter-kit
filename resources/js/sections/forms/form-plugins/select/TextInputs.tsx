   import { useEffect } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// third-party
import Choices from 'choices.js';

// project-imports
import MainCard from '@/components/MainCard';

// =============================|| SELECT - TEXT INPUTS ||============================== //

export default function TextInputs() {
  useEffect(() => {
    const instances: Choices[] = [];

    const initChoices = (id: string, options: any = {}, values: string[] = []) => {
      const el = document.getElementById(id) as HTMLInputElement | null;
      if (el) {
        const instance = new Choices(el, options);
        if (values.length > 0) {
          instance.setValue(values);
        }
        instances.push(instance);
      }
    };

    initChoices('choices-text-remove-button-1', { removeItemButton: true, maxItemCount: 5 }, ['preset-1', 'preset-2']);

    initChoices('choices-text-unique-values', { duplicateItemsAllowed: false }, ['preset-1', 'preset-2']);

    initChoices('choices-text-email-filter', {
      addItemFilter: (value: string) => /\S+@\S+\.\S+/.test(value) // only allow emails
    });

    initChoices('choices-text-disabled', {}, ['josh@joshuajohnson.co.uk', 'joe@bloggs.co.uk']);

    initChoices('choices-text-prepend-append-value', {
      callbackOnCreateTemplates: function (template: any) {
        return {
          item: (classNames: any, data: any) => {
            return template(`
              <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable}"
                   data-item data-id="${data.id}" data-value="[PREPEND]${data.value}[APPEND]" data-deletable>
                [PREPEND] ${data.label} [APPEND]
              </div>
            `);
          },
          choice: (classNames: any, data: any) => {
            return template(`
              <div class="${classNames.item} ${classNames.itemChoice}"
                   data-select-text="Press to select" data-choice
                   data-id="${data.id}" data-value="[PREPEND]${data.value}[APPEND]">
                [PREPEND] ${data.label} [APPEND]
              </div>
            `);
          }
        };
      }
    });

    initChoices('choices-text-preset-values', {}, ['Josh Johnson', 'Joe Bloggs', 'Michael Smith']);

    initChoices('choices-text-i18n', {
      loadingText: 'Un momento...',
      noResultsText: 'Ningún resultado encontrado',
      noChoicesText: 'No hay opciones disponibles',
      itemSelectText: 'Pulsa para seleccionar'
    });

    initChoices('choices-text-rtl', { placeholderValue: 'This is a placeholder set in the config' }, ['Value 2', 'Value 1']);

    return () => {
      instances.forEach((instance) => instance.destroy());
    };
  }, []);

  return (
    <MainCard title="Text inputs">
      <Form>
        <Row>
          <Form.Group className="mb-3" as={Row}>
            <Col sm={12} lg={4} className="col-form-label text-lg-end">
              <Form.Label className="mb-0">Limited to 5 values with remove button</Form.Label>
            </Col>
            <Col lg={6} md={11} sm={12}>
              <Form.Control id="choices-text-remove-button-1" />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Row}>
            <Col sm={12} lg={4} className="col-form-label text-lg-end">
              <Form.Label className="mb-0">Unique values only, no pasting</Form.Label>
            </Col>
            <Col lg={6} md={11} sm={12}>
              <Form.Control id="choices-text-unique-values" />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Row}>
            <Col sm={12} lg={4} className="col-form-label text-lg-end">
              <Form.Label className="mb-0">Email addresses only</Form.Label>
            </Col>
            <Col lg={6} md={11} sm={12}>
              <Form.Control id="choices-text-email-filter" />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Row}>
            <Col sm={12} lg={4} className="col-form-label text-lg-end">
              <Form.Label className="mb-0">Disabled</Form.Label>
            </Col>
            <Col lg={6} md={11} sm={12}>
              <Form.Control id="choices-text-disabled" disabled />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Row}>
            <Col sm={12} lg={4} className="col-form-label text-lg-end">
              <Form.Label className="mb-0">Prepends and appends a value to each item’s return value</Form.Label>
            </Col>
            <Col lg={6} md={11} sm={12}>
              <Form.Control id="choices-text-prepend-append-value" />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Row}>
            <Col sm={12} lg={4} className="col-form-label text-lg-end">
              <Form.Label className="mb-0">Preset values passed through options</Form.Label>
            </Col>
            <Col lg={6} md={11} sm={12}>
              <Form.Control id="choices-text-preset-values" />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Row}>
            <Col sm={12} lg={4} className="col-form-label text-lg-end">
              <Form.Label className="mb-0">I18N labels</Form.Label>
            </Col>
            <Col lg={6} md={11} sm={12}>
              <Form.Control id="choices-text-i18n" />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Row}>
            <Col sm={12} lg={4} className="col-form-label text-lg-end">
              <Form.Label className="mb-0">Right-to-left</Form.Label>
            </Col>
            <Col lg={6} md={11} sm={12}>
              <Form.Control id="choices-text-rtl" dir="rtl" />
            </Col>
          </Form.Group>
        </Row>
      </Form>
    </MainCard>
  );
}
