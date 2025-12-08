import { useEffect, useId, useState } from 'react';
import { router } from '@inertiajs/react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import { format } from 'date-fns';
import { FieldArray, Formik } from 'formik';
import * as yup from 'yup';

// project-imports
import AddressModal from './AddressModal';
import InvoiceItem from './InvoiceItem';
import InvoiceModal from './InvoiceModal';
import MainCard from '@/components/MainCard';
import Loader from '@/components/Loader';

import {
  handlerCustomerFrom,
  handlerCustomerTo,
  handlerPreview,
  selectCountry,
  updateInvoice,
  useGetInvoice,
  useGetInvoiceMaster
} from '@/api/invoice';

// types
import { CountryType, InvoiceList, InvoiceProps } from '@/types/invoice';
import { usePage } from '@inertiajs/react';

const validationSchema = yup.object({
  date: yup.date().required('Invoice date is required'),
  due_date: yup
    .date()
    .when('date', (date, schema) => date && schema.min(date, "Due date can't be before invoice date"))
    .nullable()
    .required('Due date is required'),
  customerInfo: yup
    .object({
      name: yup.string().required('Invoice receiver information is required')
    })
    .required('Invoice receiver information is required'),
  country: yup.object().nullable().required('Please select a currency'),
  status: yup.string().required('Status selection is required'),
  invoice_detail: yup
    .array()
    .required('Invoice details is required')
    .of(
      yup.object().shape({
        name: yup.string().required('Product name is required')
      })
    )
    .min(1, 'Invoice must have at least 1 items')
});

function ItemAdd({ push }: { push: (item: any) => void }) {
  const baseId = useId(); // Generate a base ID
  const [idCounter, setIdCounter] = useState(0); // Counter for unique IDs

  const handleAddItem = () => {
    const newId = `${baseId}-${idCounter}`; // Create a unique ID by combining baseId and counter
    setIdCounter((prev) => prev + 1); // Increment the counter
    push({
      id: newId,
      name: '',
      description: '',
      qty: 1,
      price: '1.00'
    });
  };

  return (
    <Button variant="light-primary" onClick={handleAddItem}>
      <Stack direction="horizontal" className="align-items-center" gap={2}>
        <i className="ti ti-plus" />
        Add Item
      </Stack>
    </Button>
  );
}

const invoiceSingleList: InvoiceList['cashierInfo'] = {
  name: '',
  address: '',
  phone: '',
  email: ''
};

interface FormProps {
  list: InvoiceList;
  invoiceMaster?: InvoiceProps;
}

// ==============================|| INVOICE - CREATE ||============================== //

function EditForm({ list, invoiceMaster }: FormProps) {

  const handlerEdit = (values: any) => {
    const newList: InvoiceList = {
      id: Number(list.id),
      invoice_id: Number(values.invoice_id),
      customer_name: values.cashierInfo?.name,
      email: values.cashierInfo?.email,
      avatar: Number(list.avatar),
      discount: Number(values.discount),
      tax: Number(values.tax),
      date: format(new Date(values.date), 'MM/dd/yyyy'),
      due_date: format(new Date(values.due_date), 'MM/dd/yyyy'),
      quantity: Number(
        values.invoice_detail?.reduce((sum: any, i: any) => {
          return sum + i.qty;
        }, 0)
      ),
      status: values.status,
      cashierInfo: values.cashierInfo,
      customerInfo: values.customerInfo,
      invoice_detail: values.invoice_detail,
      notes: values.notes
    };

    updateInvoice(newList.id, newList);
    router.visit('/admin-panel/invoice/list');
  };

  return (
    <Formik
      initialValues={{
        id: list.id || '',
        invoice_id: list.invoice_id || '',
        status: list.status || '',
        date: new Date(list.date!) || null,
        due_date: new Date(list.due_date!) || null,
        cashierInfo: list.cashierInfo || invoiceSingleList,
        customerInfo: list.customerInfo || invoiceSingleList,
        invoice_detail: list.invoice_detail || [],
        discount: list.discount || 0,
        tax: list.tax || 0,
        notes: list.notes || '',
        country: invoiceMaster?.country || null
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handlerEdit(values);
      }}
    >
      {({ handleBlur, errors, handleChange, handleSubmit, values, isValid, setFieldValue, touched }) => {
        const subtotal =
          values?.invoice_detail?.reduce((prev, curr: any) => {
            if (curr.name.trim().length > 0) return prev + Number(curr.price * Math.floor(curr.qty));
            else return prev;
          }, 0) || 0;
        const taxRate = (values?.tax * subtotal) / 100;
        const discountRate = (values.discount * subtotal) / 100;
        const total = subtotal - discountRate + taxRate;
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="g-3 p-4">
              <Col xl={3} sm={6}>
                <div>
                  <Form.Label htmlFor="invoice id">Invoice id</Form.Label>
                  <InputGroup>
                    <Form.Control
                      required
                      disabled
                      type="number"
                      name="invoice_id"
                      id="invoice_id"
                      value={values.invoice_id}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div>
                  <Form.Label htmlFor="Status">Status</Form.Label>
                  <InputGroup>
                    <Form.Select id="status" value={values.status} onChange={handleChange} isInvalid={!!errors.status}>
                      <option disabled value="">
                        Select status
                      </option>
                      <option value="Paid">Paid</option>
                      <option value="Unpaid">UnPaid</option>
                      <option value="Cancelled">Cancelled</option>
                    </Form.Select>
                    {touched.status && errors.status && <Form.Control.Feedback type="invalid">{errors.status}</Form.Control.Feedback>}
                  </InputGroup>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div>
                  <Form.Label htmlFor="start date">Start Date</Form.Label>
                  <InputGroup>
                    <Form.Control
                      required
                      type="date"
                      value={values.date ? format(new Date(values.date), 'yyyy-MM-dd') : ''}
                      onChange={(e) => {
                        const dateString = e.target.value;
                        const newDate = dateString ? new Date(`${dateString}T00:00:00`) : null;
                        setFieldValue('date', newDate);
                      }}
                      isInvalid={!!errors.date}
                    />
                    {touched.status && errors.status && (
                      <Form.Control.Feedback type="invalid">{errors.date as string}</Form.Control.Feedback>
                    )}
                  </InputGroup>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div>
                  <Form.Label htmlFor="due date">Due Date</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="date"
                      value={values.due_date ? format(new Date(values.due_date), 'yyyy-MM-dd') : ''}
                      onChange={(e) => {
                        const dateString = e.target.value;
                        const newDate = dateString ? new Date(`${dateString}T00:00:00`) : null;
                        setFieldValue('due_date', newDate);
                      }}
                      isInvalid={!!errors.due_date}
                    />
                    {touched.status && errors.status && (
                      <Form.Control.Feedback type="invalid">{errors.due_date as string}</Form.Control.Feedback>
                    )}
                  </InputGroup>
                </div>
              </Col>
              <Col xl={6}>
                <div className="border rounded p-3 h-100">
                  <Stack direction="horizontal" className="align-items-center justify-content-between mb-2">
                    <h6 className="mb-0">From:</h6>
                    <Button variant="light-secondary" size="sm" onClick={() => handlerCustomerFrom(true)}>
                      <i className="ti ti-pencil me-1" />
                      Change
                    </Button>
                    <AddressModal
                      open={invoiceMaster?.open ?? false}
                      setOpen={(value) => handlerCustomerFrom(value as boolean)}
                      handlerAddress={(address) => setFieldValue('cashierInfo', address)}
                    />
                  </Stack>
                  <h5>{values?.cashierInfo?.name}</h5>
                  <p className="mb-0">{values?.cashierInfo?.address}</p>
                  <p className="mb-0">{values?.cashierInfo?.phone}</p>
                  <p className="mb-0">{values?.cashierInfo?.email}</p>
                </div>
              </Col>
              <Col xl={6}>
                <div className="border rounded p-3 h-100">
                  <Stack direction="horizontal" className="align-items-center justify-content-between mb-2">
                    <h6 className="mb-0">To:</h6>
                    <Button variant="light-secondary" size="sm" onClick={() => handlerCustomerTo(true)}>
                      <i className="ti ti-circle-plus me-1" />
                      Add
                    </Button>
                    <AddressModal
                      open={invoiceMaster?.isCustomerOpen ?? false}
                      setOpen={(value) => handlerCustomerTo(value as boolean)}
                      handlerAddress={(value) => setFieldValue('customerInfo', value)}
                    />
                  </Stack>
                  <h5>{values?.customerInfo?.name}</h5>
                  <p className="mb-0">{values?.customerInfo?.address}</p>
                  <p className="mb-0">{values?.customerInfo?.phone}</p>
                  <p className="mb-0">{values?.customerInfo?.email}</p>
                </div>
              </Col>
              {values?.customerInfo?.name?.length > 0 && values.customerInfo && touched.customerInfo && errors.customerInfo && (
                <Form.Control.Feedback type="invalid">{errors?.customerInfo?.name as string}</Form.Control.Feedback>
              )}
            </Row>
            <Row className="g-3">
              <Col xs={12}>
                <h5 className="px-4 pb-2">Detail</h5>
              </Col>
              <FieldArray
                name="invoice_detail"
                render={({ remove, push }) => {
                  return (
                    <>
                      <Table responsive hover className="mb-0 border-bottom">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>
                              <span className="text-danger">*</span> NAME
                            </th>
                            <th>DESCRIPTION</th>
                            <th className="text-end">
                              <span className="text-danger">*</span>QTY
                            </th>
                            <th className="text-end">
                              <span className="text-danger ">*</span>PRICE
                            </th>
                            <th className="text-end">AMOUNT</th>
                            <th className="text-center">ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {values.invoice_detail?.map((item: any, index: number) => (
                            <tr key={index}>
                              <td>{values.invoice_detail.indexOf(item) + 1}</td>
                              <InvoiceItem
                                key={index}
                                id={item.id}
                                index={index}
                                name={item.name}
                                description={item.description}
                                qty={item.qty}
                                price={item.price}
                                onDeleteItem={(index: number) => remove(index)}
                                onEditItem={handleChange}
                                Blur={handleBlur}
                                errors={errors}
                                touched={touched}
                                lastItem={values?.invoice_detail?.length === 1}
                              />
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                      {touched.invoice_detail && errors.invoice_detail && !Array.isArray(errors?.invoice_detail) && (
                        <Form.Control.Feedback type="invalid">{errors?.invoice_detail as string}</Form.Control.Feedback>
                      )}
                      <div className="text-start px-4 pt-4">
                        <ItemAdd push={push} />
                      </div>
                    </>
                  );
                }}
              />
            </Row>
            <Row className="g-3 px-4">
              <Col xs={12}>
                <div className="invoice-total ms-auto" style={{ maxWidth: '400px' }}>
                  <Row>
                    <Col xs={6}>
                      <div className="mb-3">
                        <Form.Label htmlFor="discount">Discount(%)</Form.Label>

                        <Form.Control
                          type="number"
                          name="discount"
                          id="discount"
                          placeholder="0.0"
                          value={values.discount}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className="mb-3">
                        <Form.Label htmlFor="taxes">Taxes(%)</Form.Label>

                        <Form.Control type="number" name="tax" id="tax" placeholder="0.0" value={values.tax} onChange={handleChange} />
                      </div>
                    </Col>
                    <Col xs={6}>
                      <p className="text-muted mb-1 text-start">Sub Total :</p>
                    </Col>
                    <Col xs={6}>
                      <p className="f-w-600 mb-1 text-end">{`${invoiceMaster?.country?.prefix} ${subtotal ? subtotal.toFixed(2) : 1}`}</p>
                    </Col>
                    <Col xs={6}>
                      <p className="text-muted mb-1 text-start">Discount :</p>
                    </Col>
                    <Col xs={6}>
                      <p className="f-w-600 mb-1 text-end text-success">
                        {' '}
                        {`${invoiceMaster?.country?.prefix} ${discountRate.toFixed(2)}`}
                      </p>
                    </Col>
                    <Col xs={6}>
                      <p className="text-muted mb-1 text-start">Tax: :</p>
                    </Col>
                    <Col xs={6}>
                      <p className="f-w-600 mb-1 text-end">{`${invoiceMaster?.country?.prefix} ${taxRate.toFixed(2)}`}</p>
                    </Col>
                    <Col xs={6}>
                      <p className="f-w-600 mb-1 text-start">Grand Total :</p>
                    </Col>
                    <Col xs={6}>
                      <p className="f-w-600 mb-1 text-end">
                        {total % 1 === 0
                          ? invoiceMaster?.country?.prefix + ' ' + total
                          : invoiceMaster?.country?.prefix + ' ' + total.toFixed(2)}
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={12}>
                <div className="mb-0">
                  <Form.Label htmlFor="note">Note </Form.Label>
                  <Form.Control as="textarea" placeholder="Notes" rows={3} value={values.notes} name="notes" onChange={handleChange} />
                </div>
              </Col>
              <Col xs={12}>
                <Row className="align-items-end justify-content-between g-3">
                  <Col sm="auto">
                    <Form.Label>Set Currency*</Form.Label>
                    <Form.Select
                      className="w-auto"
                      value={values.country?.code || 'IN'}
                      onChange={(e) => {
                        const selectedCode = e.target.value;
                        const selected = invoiceMaster?.countries.find((c: CountryType) => c.code === selectedCode) ?? null;

                        setFieldValue('country', selected);
                        selectCountry(selected);
                      }}
                    >
                      {invoiceMaster?.countries.map((c: CountryType) => (
                        <option key={c.code} value={c.code}>
                          {c.label} ({c.currency})
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col sm="auto" className="btn-page">
                    <Button variant="outline-secondary" disabled={values.status === '' || !isValid} onClick={() => handlerPreview(true)}>
                      Preview
                    </Button>
                    <Button color="primary" type="submit">
                      Update & Send
                    </Button>
                  </Col>
                  <InvoiceModal
                    isOpen={invoiceMaster?.isOpen}
                    setIsOpen={(value: any) => handlerPreview(value)}
                    key={values.invoice_id}
                    invoiceMaster={invoiceMaster}
                    invoiceInfo={{
                      ...values,
                      subtotal,
                      taxRate,
                      discountRate,
                      total
                    }}
                    items={values?.invoice_detail}
                  />
                </Row>
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
}

// ==============================|| INVOICE - EDIT ||============================== //

export default function EditInvoice() {
  const { id } = usePage().props;
  const { invoiceLoading, invoice } = useGetInvoice();
  const { invoiceMaster } = useGetInvoiceMaster();
  const [list, seList] = useState<InvoiceList | null>(null);

  const loader = (
    <div style={{ height: 'calc(100vh - 310px)' }}>
      <Loader />
    </div>
  );

  useEffect(() => {
    if (id && !invoiceLoading) {
      seList(invoice.filter((item: InvoiceList) => item.id.toString() === id)[0]);
    }
  }, [id, invoiceLoading]);

  const isLoader = invoiceLoading || invoiceMaster === undefined || list === null;

  return (
    <>
      <MainCard className="table-card">{isLoader ? loader : <EditForm {...{ list: list!, invoiceMaster }} />}</MainCard>
    </>
  );
}
