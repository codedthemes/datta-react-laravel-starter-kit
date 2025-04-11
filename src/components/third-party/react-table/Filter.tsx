// react-bootstrap
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';

// project-imports
import DebouncedInput from './DebouncedInput';

// third-party
import { Column, RowData, Table } from '@tanstack/react-table';

type NumberInputProps = {
  columnFilterValue: [number, number];
  getFacetedMinMaxValues: () => [number, number] | undefined;
  setFilterValue: (updater: any) => void;
};

// ==============================|| FILTER - NUMBER FIELD ||============================== //

function NumberInput({ columnFilterValue, getFacetedMinMaxValues, setFilterValue }: NumberInputProps) {
  const minOpt = getFacetedMinMaxValues()?.[0];
  const min = Number(minOpt ?? '');

  const maxOpt = getFacetedMinMaxValues()?.[1];
  const max = Number(maxOpt);

  return (
    <Stack direction="horizontal" className="align-items-center g-2">
      <DebouncedInput
        type="number"
        value={columnFilterValue?.[0] ?? ''}
        onFilterChange={(value) => setFilterValue((old: [number, number]) => [value, old?.[1]])}
        inputProps={{ min: min, max: max }}
      />

      <i className="ti ti-minus" style={{ marginLeft: 8, marginRight: 8 }} />

      <DebouncedInput
        type="number"
        value={columnFilterValue?.[1] ?? ''}
        onFilterChange={(value) => setFilterValue((old: [number, number]) => [old?.[0], value])}
        inputProps={{ min: min, max: max }}
      />
    </Stack>
  );
}

type TextInputProps = {
  columnId: string;
  columnFilterValue: string;
  setFilterValue: (updater: any) => void;
  header?: string;
};

// ==============================|| FILTER - TEXT FIELD ||============================== //

function TextInput({ columnId, columnFilterValue, header, setFilterValue }: TextInputProps) {
  const dataListId = columnId + 'list';

  return (
    <InputGroup size="sm">
      <Form.Control
        type="text"
        value={columnFilterValue ?? ''}
        onChange={(e) => setFilterValue(e.target.value)}
        placeholder={`Search ${header}`}
        list={dataListId}
      />
    </InputGroup>
  );
}

type Props<T extends RowData> = {
  column: Column<T, unknown>;
  table: Table<T>;
};

// ==============================|| FILTER - INPUT ||============================== //

export default function Filter<T extends RowData>({ column, table }: Props<T>) {
  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === 'number' ? (
    <NumberInput
      columnFilterValue={columnFilterValue as [number, number]}
      getFacetedMinMaxValues={column.getFacetedMinMaxValues}
      setFilterValue={column.setFilterValue}
    />
  ) : (
    <TextInput
      columnId={column.id}
      columnFilterValue={columnFilterValue as string}
      setFilterValue={column.setFilterValue}
      header={column.columnDef.header as string}
    />
  );
}
