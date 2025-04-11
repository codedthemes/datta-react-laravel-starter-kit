import { useState, useRef, ReactNode } from 'react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Stack from 'react-bootstrap/Stack';
import Tooltip from 'react-bootstrap/Tooltip';

// Project imports
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

// third-party
import { Row } from '@tanstack/react-table';
import * as Yup from 'yup';

// assets
import { PencilSimpleLine } from 'phosphor-react';

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

export default function EditRow<TData>({ row, onSave }: EditRowProps<TData>) {
  const [isEditMode, setEditMode] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const initialEditData = useRef<Record<string, unknown>>(
    row.getVisibleCells().reduce(
      (acc, cell) => {
        if (cell.column.id !== 'Actions') {
          acc[cell.column.id] = cell.getValue();
        }
        return acc;
      },
      {} as Record<string, unknown>
    )
  );

  const [editData, setEditData] = useState<Record<string, unknown>>(initialEditData.current);

  const validationSchemas: Record<string, Yup.Schema<any>> = {
    email: Yup.string().email('Invalid email').required('Email is required'),
    age: Yup.number().required('Age is required').min(18, 'Minimum age is 18').max(65, 'Maximum age is 65'),
    visits: Yup.number().required('Visits are required').positive('Must be positive').integer('Must be an integer'),
    fullName: Yup.string().required('Name is required'),
    profile: Yup.number().required('Profile progress is required').min(0, 'Minimum progress is 0%').max(100, 'Maximum progress is 100%')
  };

  const handleValidate = async () => {
    const newErrors: Record<string, string> = {};

    for (const key in editData) {
      const schema = validationSchemas[key];
      if (schema) {
        try {
          await schema.validate(editData[key]);
        } catch (error: any) {
          newErrors[key] = error.message;
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveClick = async () => {
    const isValid = await handleValidate();
    if (isValid) {
      onSave(editData);
      setEditMode(false);
    }
  };

  const handleChange = (columnId: string, value: unknown) => {
    setEditData((prev) => ({ ...prev, [columnId]: value }));
  };

  const handleCancelClick = () => {
    setEditData(initialEditData.current);
    setErrors({});
    setEditMode(false);
  };

  return (
    <tr>
      {row.getVisibleCells().map((cell) => {
        const columnId = cell.column.id;
        // @ts-expect-error: columnDef may not always have a `dataType` property
        const dataType = cell.column.columnDef.dataType;
        const value = cell.getValue();

        let cellContent;
        switch (dataType) {
          case 'text':
          case 'number':
            cellContent = isEditMode ? (
              <>
                <FormControl
                  type={dataType === 'number' ? 'number' : 'text'}
                  value={editData[columnId] as string | number}
                  onChange={(e) => handleChange(columnId, dataType === 'number' ? Number(e.target.value) : e.target.value)}
                  isInvalid={!!errors[columnId]}
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
                <Form.Select value={editData[columnId] as string} onChange={(e) => handleChange(columnId, e.target.value)}>
                  <option value="Complicated">Complicated</option>
                  <option value="Relationship">Relationship</option>
                  <option value="Single">Single</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">{errors[columnId]}</Form.Control.Feedback>
              </>
            ) : (
              ShowStatus(value as string)
            );
            break;

          case 'progress':
            cellContent = isEditMode ? (
              <>
                <FormControl
                  type="number"
                  value={editData[columnId] as number}
                  onChange={(e) => handleChange(columnId, Number(e.target.value))}
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
                  <Button variant="link-danger" onClick={handleCancelClick}>
                    <i className="ti ti-x" />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Save</Tooltip>}>
                  <Button variant="link-danger" onClick={handleSaveClick}>
                    <i className="ti ti-check" />
                  </Button>
                </OverlayTrigger>
              </Stack>
            ) : (
              <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                <Button variant="link-primary" onClick={() => setEditMode(true)}>
                  <PencilSimpleLine size={22} />
                </Button>
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
    </tr>
  );
}
