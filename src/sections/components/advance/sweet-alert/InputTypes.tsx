// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';
import { handleCheckboxInput } from 'sections/components/advance/sweet-alert/utils/CheckboxInput';
import { handleTextInput } from 'sections/components/advance/sweet-alert/utils/TextInput';
import { handleEmailInput } from 'sections/components/advance/sweet-alert/utils/EmailInput';
import { handleURLInput } from 'sections/components/advance/sweet-alert/utils/Alert';
import { handlePasswordInput } from 'sections/components/advance/sweet-alert/utils/PasswordInput';
import { handleTextareaInput } from 'sections/components/advance/sweet-alert/utils/TextAreaInput';
import { handleSelectInput } from 'sections/components/advance/sweet-alert/utils/SelectInput';
import { handleRadioInput } from 'sections/components/advance/sweet-alert/utils/RadioInput';
import { handleFileInput } from 'sections/components/advance/sweet-alert/utils/FileInput';
import { handleRangeInput } from 'sections/components/advance/sweet-alert/utils/RangeInput';
import { handleMultipleInputs } from 'sections/components/advance/sweet-alert/utils/MultiInput';

const InputTypesData = [
  { title: 'Text', function: handleTextInput },
  { title: 'Email', function: handleEmailInput },
  { title: 'Url', function: handleURLInput },
  { title: 'Password', function: handlePasswordInput },
  { title: 'Textarea', function: handleTextareaInput },
  { title: 'Select', function: handleSelectInput },
  { title: 'Radio', function: handleRadioInput },
  { title: 'Checkbox', function: handleCheckboxInput },
  { title: 'File', function: handleFileInput },
  { title: 'Range', function: handleRangeInput },
  { title: 'Multiple inputs', function: handleMultipleInputs }
];

// ==============================|| SWEET ALERT - INPUT TYPES ||============================== //

export default function InputTypesPage() {
  return (
    <MainCard title="Input types">
      {InputTypesData.map((value, index) => (
        <Row className="mb-3 align-items-center" key={index}>
          <Col lg={5} sm={12} className="text-lg-end">
            <Form.Label>{value.title}</Form.Label>
          </Col>
          <Col lg={4} md={9} sm={12}>
            <Button className="btn-light-primary" onClick={value.function}>
              Try me!
            </Button>
          </Col>
        </Row>
      ))}
    </MainCard>
  );
}
