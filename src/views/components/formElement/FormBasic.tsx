// project-import
import ChecksandRadios from 'sections/components/formElement/formBasic/ChecksandRadios';
import CustomForms from 'sections/components/formElement/formBasic/CustomForms';
import DataList from 'sections/components/formElement/formBasic/DataList';
import FormControls from 'sections/components/formElement/formBasic/FormControls';
import FormControlState from 'sections/components/formElement/formBasic/FormControlState';
import FormGrid from 'sections/components/formElement/formBasic/FormGrid';
import HorizontalForm from 'sections/components/formElement/formBasic/HorizontalForm';
import InlineForm from 'sections/components/formElement/formBasic/InlineForm';
import InputGroup from 'sections/components/formElement/formBasic/InputGroup';
import Picker from 'sections/components/formElement/formBasic/Picker';
import Sizeing from 'sections/components/formElement/formBasic/Sizing';
import SupportedElements from 'sections/components/formElement/formBasic/SupportedElements';
import Tooltips from 'sections/components/formElement/formBasic/Tooltips';
import ValidationForm from 'sections/components/formElement/formBasic/ValidationForm';

export default function FormBasic() {
  return (
    <>
      <FormControls />
      <Sizeing />
      <Picker />
      <DataList />
      <FormControlState />
      <InlineForm />
      <FormGrid />
      <HorizontalForm />
      <ValidationForm />
      <SupportedElements />
      <Tooltips />
      <ChecksandRadios />
      <InputGroup />
      <CustomForms />
    </>
  );
}
