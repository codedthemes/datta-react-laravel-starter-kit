import { useState, useRef, ReactNode } from 'react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Stack from 'react-bootstrap/Stack';
import Tooltip from 'react-bootstrap/Tooltip';

// Project imports
import LinearWithLabel from '@/components/@extended/progress/LinearWithLabel';

// third-party
import { Row } from '@tanstack/react-table';
import * as Yup from 'yup';

interface EditRowProps<TData> {
  row: Row<TData>;
  onSave: (updatedData: Record<string, unknown>) => void;
}

function ShowStatus(value: string) {
  const statusVariant =
    {
      Complicated: 'light-danger',
      Relationship: 'light-success',
      Single: 'light-primary'
    }[value] || 'light-primary';

  return <Badge bg={statusVariant}>{value}</Badge>;
}

// ==============================|| REACT TABLE - EDIT ROW ||============================== //

export default function EditRow<TData>({ row, onSave, groupedColumns }: EditRowProps<TData>) {
  const [isEditMode, setEditMode] = useState(false);

  function getRowData<TData>(row: Row<TData>) {
    return row.getVisibleCells().reduce(
      (acc, cell) => {
        if (cell.column.id !== 'Actions') {
          acc[cell.column.id] = cell.getValue();
        }
        return acc;
      },
      {} as Record<string, unknown>
    );
  }

  const editableFields = row.getVisibleCells().filter((cell) => !nonEditableFields.includes(cell.column.id));

  const formik = useFormik({
    initialValues: getRowData(row),
    enableReinitialize: true,
    validationSchema: getYupSchemaForRow(row),
    onSubmit: (values, actions) => {
      onSave(values);
      setEditMode(false);
      actions.setSubmitting(false);
    }
  });

  const { values, errors, handleChange } = formik;

  const handleEditClick = () => {
    formik.resetForm({ values: getRowData(row) });
    setEditMode(true);
  };

  const handleCancelClick = () => {
    formik.resetForm({ values: getRowData(row) });
    setEditMode(false);
  };

  const handleEditDataChange = (columnId: string, value: unknown) => {
    formik.setFieldValue(columnId, value);
  };

  return (
    <>
      {editableFields.map((cell) => {
        const dataType = (cell.column.columnDef as any).dataType;
        const columnId = cell.column.id;
        const value = cell.getValue();

        // Hide value in grouped columns for leaf rows
        if (groupedColumns && groupedColumns.includes(columnId)) {
          return null;
        }

        let cellContent;
        switch (dataType) {
          case 'avatar':
            cellContent = <Image alt="Avatar" className="avatar avatar-xs" src={getImageUrl(`avatar-${value}.png`, ImagePath.USER)} />;
            break;
          case 'number':
          case 'text':
            cellContent = isEditMode ? (
              <>
                <FormControl
                  type={dataType === 'number' ? 'number' : 'text'}
                  value={values[columnId] as string | number}
                  onChange={(e) => {
                    handleChange(e);
                    const val = e.target.value;
                    handleEditDataChange(columnId, dataType === 'number' && val !== '' && !isNaN(Number(val)) ? Number(val) : val);
                  }}
                  isInvalid={!!errors[columnId]}
                  onBlur={(e) => {
                    const trimmed = (e.target.value ?? '').trim();
                    if (trimmed !== formik.values[columnId]) {
                      formik.setFieldValue(columnId, trimmed, false);
                    }
                  }}
                />
                <Form.Control.Feedback className="invalid-feedback text-start" type="invalid">
                  {errors[columnId]}
                </Form.Control.Feedback>
              </>
            ) : (
              value
            );
            break;
          case 'select':
            cellContent = isEditMode ? (
              <>
                <Form.Select value={values[columnId] as string} onChange={(e) => handleEditDataChange(columnId, e.target.value)}>
                  <option value="Complicated">Complicated</option>
                  <option value="Relationship">Relationship</option>
                  <option value="Single">Single</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">{errors[columnId]}</Form.Control.Feedback>
              </>
            ) : (
              <StatusPill status={value as string} />
            );
            break;

          case 'progress':
            cellContent = isEditMode ? (
              <>
                <FormControl
                  type="number"
                  value={values[columnId] as number}
                  onChange={(e) => handleEditDataChange(columnId, e.target.value)}
                  isInvalid={!!errors[columnId]}
                />
                <Form.Control.Feedback type="invalid">{errors[columnId]}</Form.Control.Feedback>
              </>
            ) : (
              <LinearWithLabel value={value as number} style={{ minWidth: 75 }} />
            );
            break;

          case 'actions':
            cellContent = isEditMode ? (
              <Stack direction="horizontal" gap={2}>
                <OverlayTrigger overlay={<Tooltip>Cancel</Tooltip>}>
                  <a href="#" className="btn-link-danger avatar avatar-xs mx-1" onClick={handleCancelClick}>
                    <i className="ti ti-x f-20" />
                  </a>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Save</Tooltip>}>
                  <a href="#" className="btn-link-success avatar avatar-xs mx-1" onClick={() => formik.handleSubmit()}>
                    <i className="ti ti-check f-20" />
                  </a>
                </OverlayTrigger>
              </Stack>
            ) : (
              <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                <a href="#" className="btn-link-primary avatar avatar-xs " onClick={handleEditClick}>
                  <i className="ti ti-ti ti-edit f-20" />
                </a>
              </OverlayTrigger>
            );
            break;

          default:
            cellContent = value;
        }
        return (
          <td key={cell.id} {...cell.column.columnDef.meta}>
            {cellContent as ReactNode}
          </td>
        );
      })}
    </>
  );
}
