import { useState } from 'react';

// react-bootstrap
import Form from 'react-bootstrap/Form';

// third-party
import { Typeahead } from 'react-bootstrap-typeahead';

// project-imports
import MainCard from '@/components/MainCard';

// data
import { TypedData } from 'data/typead-data';

interface Option {
  name: string;
  population: number;
  capital: string;
  region: string;
}

// =============================|| TYPEAHEAD - BASIC EXAMPLE ||============================== //

export default function BasicTypeahead() {
  const [singleSelections, setSingleSelections] = useState<Option[]>([]);
  const [multiSelections, setMultiSelections] = useState<Option[]>([]);

  return (
    <MainCard title="Basic Typeahead">
      <p>
        The typeahead allows single-selection by default. Setting the <b>multiple</b> prop turns the component into a tokenizer, allowing
        multiple selections.
      </p>
      <Form.Group>
        <Form.Label>Single Selection</Form.Label>
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange={(selected) => setSingleSelections(selected as Option[])}
          options={TypedData}
          placeholder="Choose a state..."
          selected={singleSelections}
        />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Multiple Selections</Form.Label>
        <Typeahead
          id="basic-typeahead-multiple"
          labelKey="name"
          multiple
          onChange={(selected) => setMultiSelections(selected as Option[])}
          options={TypedData}
          placeholder="Choose several states..."
          selected={multiSelections}
        />
      </Form.Group>
    </MainCard>
  );
}
