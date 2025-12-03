import { ReactNode, useState } from 'react';

// react-bootstrap
import Form from 'react-bootstrap/Form';

// third party
import { Cell } from '@tanstack/react-table';
import { useFormik, Field, FormikProvider } from 'formik';
import * as Yup from 'yup';
import Slider from 'rc-slider';

// project imports
import LinearWithLabel from '@/components/@extended/progress/LinearWithLabel';
import StatusPill from './StatusPill';

type ValueType = string | number;

interface EditCellProps<TData> {
  cell: Cell<TData, unknown>;
  onSave: (updatedData: ValueType) => void;
}

// ==============================|| EDITABLE CELL ||============================== //

export default function EditCell<TData>({ cell, onSave }: EditCellProps<TData>) {
  // @ts-expect-error: columnDef may not always have a `dataType` property
  const dataType = cell.column.columnDef.dataType;
  const columnId = cell.column.id;
  const value = cell.getValue();

  const [isEditMode, setEditMode] = useState<boolean>(false);

  let validationSchema;
  switch (columnId) {
    case 'fullName':
      validationSchema = Yup.object({
        [columnId]: Yup.string()
          .test('trim', 'Name cannot be empty or contain only spaces', (value) => !!value && value.trim().length > 0)
          .required('Name is required')
      });
      break;
    case 'email':
      validationSchema = Yup.object({
        [columnId]: Yup.string().required('Email is required').email('Invalid email address')
      });
      break;
    case 'age':
      validationSchema = Yup.object({
        [columnId]: Yup.number()
          .typeError('Age must be a number')
          .required('Age is required')
          .min(18, 'Minimum age is 18')
          .max(65, 'Maximum age is 65')
      });
      break;
    case 'visits':
      validationSchema = Yup.object({
        [columnId]: Yup.number()
          .typeError('Visits must be a number')
          .required('Visits are required')
          .positive('Visits must be a positive number')
      });
      break;
    default:
      // For any other fields, use a generic required message
      validationSchema = Yup.object({
        [columnId]: Yup.string().required('This field is required')
      });
      break;
  }

  const formik = useFormik({
    initialValues: {
      [columnId]: value as ValueType
    },
    validationSchema,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      const newValue = values[columnId];
      if (value !== newValue) {
        onSave(newValue);
      }
    }
  });

  const handleSaveClick = () => {
    formik.handleSubmit();
  };

  let cellContent;
  switch (dataType) {
    case 'number':
    case 'text':
      cellContent = isEditMode ? (
        <Field name={columnId}>
          {({ field, meta }: any) => (
            <Form.Control
              type={dataType}
              {...field}
              value={field.value}
              autoFocus
              onChange={(e) => {
                field.onChange(e);
                formik.setFieldTouched(columnId, true, false);
              }}
              onBlur={(e) => {
                const trimmed = (e.target.value ?? '').trim();
                if (trimmed !== formik.values[columnId]) {
                  formik.setFieldValue(columnId, trimmed, false);
                }
                handleSaveClick();
                setEditMode(false); // exit edit mode
              }}
              error={meta.touched && !!meta.error}
            />
          )}
        </Field>
      ) : (
        <span onClick={() => setEditMode(true)}>{formik.values[columnId]}</span>
      );
      break;

    case 'select':
      cellContent = isEditMode ? (
        <Form.Select
          autoFocus
          value={formik.values[columnId]}
          onChange={(e) => {
            formik.setFieldValue(columnId, e.target.value);
            formik.setFieldTouched(columnId, true, false);
          }}
          onBlur={() => {
            handleSaveClick();
            setEditMode(false);
          }}
        >
          <option value="Complicated">Complicated</option>
          <option value="Relationship">Relationship</option>
          <option value="Single">Single</option>
        </Form.Select>
      ) : (
        <span onClick={() => setEditMode(true)}>{<StatusPill status={formik.values[columnId] as string} />}</span>
      );
      break;

    case 'progress':
      cellContent = isEditMode ? (
        <Slider
          min={0}
          max={100}
          defaultValue={formik.values[columnId] as number}
          onChange={(newValue: number | number[]) => {
            formik.setFieldValue(columnId, newValue);
            formik.setFieldTouched(columnId, true, false);
          }}
          onAfterChange={() => {
            handleSaveClick();
            setEditMode(false);
          }}
        />
      ) : (
        <div onClick={() => setEditMode(true)}>
          <LinearWithLabel value={formik.values[columnId] as number} />
        </div>
      );
      break;

    default:
      cellContent = value;
      break;
  }
  return (
    <FormikProvider value={formik}>
      <td key={cell.id} {...cell.column.columnDef.meta}>
        {cellContent as ReactNode}
      </td>
    </FormikProvider>
  );
}
