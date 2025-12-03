// third-party
import { Typeahead } from 'react-bootstrap-typeahead';

// project-imports
import MainCard from '@/components/MainCard';

// =============================|| TYPEAHEAD - CUSTOM SELECTION ||============================== //

export default function CustomSelection() {
  return (
    <MainCard title="Custom Selections">
      <p>
        {' '}
        Setting the <b>allowNew</b> prop provides the ability to create new options for the data set. You can change the label displayed
        before the custom option in the menu by using the <b>newSelectionPrefix</b> prop.
      </p>
      <Typeahead
        allowNew
        id="custom-selections-example"
        multiple
        newSelectionPrefix="Add a new item: "
        options={[]}
        placeholder="Type anything..."
      />
    </MainCard>
  );
}
