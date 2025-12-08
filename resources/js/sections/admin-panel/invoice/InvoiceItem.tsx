import { useState } from 'react';

// react bootstrap
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

// third-party
import { FormikErrors, FormikTouched, getIn } from 'formik';

// project-imports
import AlertProductDelete from './AlertProductDelete';
import InvoiceField from './InvoiceField';
import { useGetInvoiceMaster } from '@/api/invoice';

// types
import { CountryType, Items } from '@/types/invoice';

interface FormValue {
  id: number;
  invoice_id: number;
  status: string;
  date: Date;
  due_date: Date;
  cashierInfo: { name: string; address: string; phone: string; email: string };
  customerInfo: { address: string; email: string; name: string; phone: string };
  invoice_detail: Items[];
  discount: number;
  tax: number;
  notes: string;
}

interface InvoiceItemProps {
  id: string;
  name: string;
  description: string;
  qty: number;
  price: number;
  onDeleteItem: (index: number) => void;
  onEditItem: (event: React.ChangeEvent<HTMLInputElement>) => void;
  index: number;
  Blur: (event: React.FocusEvent<HTMLInputElement>) => void;
  errors: FormikErrors<FormValue>;
  touched: FormikTouched<FormValue>;
  country?: CountryType | null;
  lastItem: boolean;
  setFieldTouched?: (field: string, value: boolean) => void;
}

// ==============================|| INVOICE - ITEMS ||============================== //

export default function InvoiceItem({
  id,
  name,
  description,
  qty,
  price,
  onDeleteItem,
  onEditItem,
  index,
  Blur,
  errors,
  touched,
  country,
  lastItem,
  setFieldTouched
}: InvoiceItemProps) {
  const { invoiceMaster } = useGetInvoiceMaster();

  const [open, setOpen] = useState(false);
  const handleModalClose = (status: boolean) => {
    setOpen(false);
    if (status) {
      onDeleteItem(index);
    }
  };

  const Name = `invoice_detail[${index}].name`;
  const touchedName = getIn(touched, Name);
  const errorName = getIn(errors, Name);

  const textFieldItem = [
    {
      placeholder: 'Item name',
      label: 'Item Name',
      name: `invoice_detail.${index}.name`,
      type: 'text',
      id: id + '_name',
      value: name,
      errors: errorName,
      touched: touchedName,
      align: 'left'
    },
    {
      placeholder: 'Description',
      label: 'Description',
      name: `invoice_detail.${index}.description`,
      type: 'text',
      id: id + '_description',
      value: description,
      align: 'left'
    },
    { placeholder: '', label: 'Qty', type: 'number', name: `invoice_detail.${index}.qty`, id: id + '_qty', value: qty, align: 'right' },
    {
      placeholder: '',
      label: 'price',
      type: 'number',
      name: `invoice_detail.${index}.price`,
      id: id + '_price',
      value: price,
      align: 'right'
    }
  ];

  return (
    <>
      {textFieldItem.map((item: any) => {
        return (
          <InvoiceField
            onEditItem={(event: any) => {
              onEditItem(event);
              if (setFieldTouched) setFieldTouched(item.name, true);
            }}
            onBlur={(event: any) => {
              Blur(event);
              if (setFieldTouched) setFieldTouched(item.name, true);
            }}
            cellData={{
              placeholder: item.placeholder,
              name: item.name,
              type: item.type,
              id: item.id,
              value: item.value,
              errors: item.errors,
              touched: item.touched,
              align: item.align
            }}
            key={item.label}
          />
        );
      })}
      <td>
        <Stack direction="horizontal" gap={2} className="justify-content-end align-items-end">
          <div className="pl-2">
            <p>
              {country ? `${country.prefix} ${(price * qty).toFixed(2)}` : `${invoiceMaster?.country?.prefix} ${(price * qty).toFixed(2)}`}
            </p>
          </div>
        </Stack>
      </td>
      <td>
        <Button
          variant="link"
          className="avatar avatar-s btn-link-danger mx-1 text-decoration-none"
          onClick={() => setOpen(true)}
          disabled={lastItem}
        >
          <i className="ti ti-trash f-20" />
        </Button>
      </td>
      <AlertProductDelete title={name} open={open} handleClose={handleModalClose} />
    </>
  );
}
