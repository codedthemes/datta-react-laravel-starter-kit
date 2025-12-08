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
import incrementer from '@/utils/incrementer';
import InvoiceItem from './InvoiceItem';
import InvoiceModal from './InvoiceModal';
import MainCard from '@/components/MainCard';

import {
  handlerCustomerFrom,
  handlerCustomerTo,
  handlerPreview,
  insertInvoice,
  selectCountry,
  useGetInvoice,
  useGetInvoiceMaster
} from '@/api/invoice';

// types
import { CountryType, InvoiceList, InvoiceProps } from 'types/invoice';

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

function ItemAdd({ push, setFieldTouched }: { push: (item: any) => void; setFieldTouched: (field: string, value: boolean) => void }) {
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
    setFieldTouched('invoice_detail', true);
  };

  return (
    <Button variant="light-primary" onClick={handleAddItem}>
      <Stack direction="horizontal" className="align-items-center" gap={2}>
        <i className="ti ti-plus" />
        Add new item
      </Stack>
    </Button>
  );
}

interface FormProps {
  lists: InvoiceList[];
  invoiceMaster?: InvoiceProps;
}

// ==============================|| INVOICE - CREATE ||============================== //

function CreateForm({ lists, invoiceMaster }: FormProps) {
  const defaultCountry = invoiceMaster?.countries?.find((c: CountryType) => c.code === 'IN') || invoiceMaster?.countries?.[0] || null;
  const [country, setCountry] = useState<CountryType | null>(defaultCountry);

  useEffect(() => {
    if (invoiceMaster?.countries && !country) {
      const defaultCountry = invoiceMaster.countries.find((c: CountryType) => c.code === 'IN') || invoiceMaster.countries[0];
      setCountry(defaultCountry);
      selectCountry(defaultCountry);
    }
  }, [invoiceMaster, country]);

  const handlerCreate = (values: any) => {
    const newList: InvoiceList = {
      id: Number(incrementer(lists.length)),
      invoice_id: Number(values.invoice_id),
      customer_name: values.cashierInfo?.name,
      email: values.cashierInfo?.email,
      avatar: Number(Math.round(Math.random() * 10)),
      discount: Number(values.discount),
      tax: Number(values.tax),
      date: format(new Date(values.date), 'yyyy-MM-dd'),
      due_date: format(new Date(values.due_date), 'yyyy-MM-dd'),
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
    insertInvoice(newList);
    router.visit('/admin-panel/invoice/list');
  };

  const invoiceDetailsID = useId();

  return (
    <Formik
      initialValues={{
        id: 120,
        invoice_id: Date.now(),
        status: '',
        date: new Date(),
        due_date: null,
        cashierInfo: {
          name: 'Belle J. Richter',
          address: '1300 Cooks Mine, NM 87829',
          phone: '305-829-7809',
          email: 'belljrc23@gmail.com'
        },
        customerInfo: {
          address: '',
          email: '',
          name: '',
          phone: ''
        },
        invoice_detail: [
          {
            id: invoiceDetailsID,
            name: '',
            description: '',
            qty: 1,
            price: '1.00'
          }
        ],
        discount: 0,
        tax: 0,
        notes: '',
        country: defaultCountry
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handlerCreate(values);
      }}
    >
      {({ handleBlur, errors, handleChange, handleSubmit, values, isValid, setFieldValue, touched, setFieldTouched, submitCount }) => {
        useEffect(() => {
          if (defaultCountry && !values.country) {
            setFieldValue('country', defaultCountry);
          }
        }, [defaultCountry, values.country, setFieldValue]);
        const subtotal = values?.invoice_detail.reduce((prev, curr: any) => {
          if (curr.name.trim().length > 0) return prev + Number(curr.price * Math.floor(curr.qty));
          else return prev;
        }, 0);
        const taxRate = (values.tax * subtotal) / 100;
        const discountRate = (values.discount * subtotal) / 100;
        const total = subtotal - discountRate + taxRate;
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="g-3 p-4">
              <Col xl={3} sm={6}>
                <div>
                  <Form.Label htmlFor="basic-url">Invoice id</Form.Label>
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
                  <Form.Label htmlFor="basic-url">Status</Form.Label>
                  <InputGroup>
                    <Form.Select
                      id="status"
                      value={values.status}
                      onChange={(e) => {
                        handleChange(e);
                        setFieldTouched('status', true);
                      }}
                      onBlur={() => setFieldTouched('status', true)}
                      isInvalid={(touched.status || submitCount > 0) && !!errors.status && values.status === ''}
                    >
                      <option disabled value="">
                        Select status
                      </option>
                      <option value="Paid">Paid</option>
                      <option value="Unpaid">UnPaid</option>
                      <option value="Cancelled">Cancelled</option>
                    </Form.Select>
                    {(touched.status || submitCount > 0) && errors.status && values.status === '' && (
                      <Form.Control.Feedback type="invalid">{errors.status}</Form.Control.Feedback>
                    )}
                  </InputGroup>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div>
                  <Form.Label htmlFor="basic-url">Start Date</Form.Label>
                  <InputGroup>
                    <Form.Control
                      required
                      type="date"
                      value={values.date ? format(new Date(values.date), 'yyyy-MM-dd') : ''}
                      onChange={(e) => {
                        const dateString = e.target.value;
                        const newDate = dateString ? new Date(`${dateString}T00:00:00`) : null;
                        setFieldValue('date', newDate);
                        setFieldTouched('date', true);
                      }}
                      onBlur={() => setFieldTouched('date', true)}
                      isInvalid={(touched.date || submitCount > 0) && !!errors.date && !values.date}
                    />
                    {(touched.date || submitCount > 0) && errors.date && !values.date && (
                      <Form.Control.Feedback type="invalid">{errors.date as string}</Form.Control.Feedback>
                    )}
                  </InputGroup>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div>
                  <Form.Label htmlFor="basic-url">Due Date</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="date"
                      value={values.due_date ? format(new Date(values.due_date), 'yyyy-MM-dd') : ''}
                      onChange={(e) => {
                        const dateString = e.target.value;
                        const newDate = dateString ? new Date(`${dateString}T00:00:00`) : null;
                        setFieldValue('due_date', newDate);
                        setFieldTouched('due_date', true);
                      }}
                      onBlur={() => setFieldTouched('due_date', true)}
                      isInvalid={(touched.due_date || submitCount > 0) && !!errors.due_date && !values.due_date}
                    />
                    {(touched.due_date || submitCount > 0) && errors.due_date && !values.due_date && (
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
                      handlerAddress={(address) => {
                        setFieldValue('cashierInfo', address);
                        setFieldTouched('cashierInfo', true);
                      }}
                    />
                  </Stack>
                  <h5>{values?.cashierInfo?.name}</h5>
                  <p className="mb-0">{values?.cashierInfo?.address}</p>
                  <p className="mb-0">{values?.cashierInfo?.phone}</p>
                  <p className="mb-0">{values?.cashierInfo?.email}</p>
                </div>
              </Col>
              <Col xl={6}>
                <div
                  className={`border rounded p-3 h-100 ${(touched.customerInfo || submitCount > 0) && errors.customerInfo && (!values.customerInfo?.name || values.customerInfo?.name.trim() === '') ? 'border-danger' : ''}`}
                >
                  <Stack direction="horizontal" className="align-items-center justify-content-between mb-2">
                    <h6 className="mb-0">To:</h6>
                    <Button
                      variant="light-secondary"
                      size="sm"
                      onClick={() => handlerCustomerTo(true)}
                      className={
                        (touched.customerInfo || submitCount > 0) &&
                        errors.customerInfo &&
                        (!values.customerInfo?.name || values.customerInfo?.name.trim() === '')
                          ? 'border-danger'
                          : ''
                      }
                    >
                      <i className="ti ti-circle-plus me-1" />
                      Add
                    </Button>
                    <AddressModal
                      open={invoiceMaster?.isCustomerOpen ?? false}
                      setOpen={(value) => handlerCustomerTo(value as boolean)}
                      handlerAddress={(value) => {
                        setFieldValue('customerInfo', value);
                        setFieldTouched('customerInfo', true);
                      }}
                    />
                  </Stack>
                  <h5>{values?.customerInfo?.name || 'No customer selected'}</h5>
                  <p className="mb-0">{values?.customerInfo?.address || ''}</p>
                  <p className="mb-0">{values?.customerInfo?.phone || ''}</p>
                  <p className="mb-0">{values?.customerInfo?.email || ''}</p>
                </div>
              </Col>
              {(touched.customerInfo || submitCount > 0) &&
                errors.customerInfo &&
                (!values.customerInfo?.name || values.customerInfo?.name.trim() === '') && (
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
                            <th className="text-end">TOTAL AMOUNT</th>
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
                                country={country}
                                description={item.description}
                                qty={item.qty}
                                price={item.price}
                                onDeleteItem={(index: number) => remove(index)}
                                onEditItem={handleChange}
                                Blur={handleBlur}
                                errors={errors}
                                touched={touched}
                                lastItem={values?.invoice_detail?.length === 1}
                                setFieldTouched={setFieldTouched}
                              />
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                      {(touched.invoice_detail || submitCount > 0) && errors.invoice_detail && !Array.isArray(errors?.invoice_detail) && (
                        <Form.Control.Feedback type="invalid">{errors?.invoice_detail as string}</Form.Control.Feedback>
                      )}
                      <div className="text-start px-4 pt-4">
                        <ItemAdd push={push} setFieldTouched={setFieldTouched} />
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
                        <Form.Label htmlFor="basic-url">Discount(%)</Form.Label>

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
                        <Form.Label htmlFor="basic-url">Taxes(%)</Form.Label>

                        <Form.Control type="number" name="tax" id="tax" placeholder="0.0" value={values.tax} onChange={handleChange} />
                      </div>
                    </Col>
                    <Col xs={6}>
                      <p className="text-muted mb-1 text-start">Sub Total :</p>
                    </Col>
                    <Col xs={6}>
                      <p className="f-w-600 mb-1 text-end">{`${country?.prefix} ${subtotal ? subtotal.toFixed(2) : 1}`}</p>
                    </Col>
                    <Col xs={6}>
                      <p className="text-muted mb-1 text-start">Discount :</p>
                    </Col>
                    <Col xs={6}>
                      <p className="f-w-600 mb-1 text-end text-success"> {`${country?.prefix} ${discountRate.toFixed(2)}`}</p>
                    </Col>
                    <Col xs={6}>
                      <p className="text-muted mb-1 text-start">Tax: :</p>
                    </Col>
                    <Col xs={6}>
                      <p className="f-w-600 mb-1 text-end">{`${country?.prefix} ${taxRate.toFixed(2)}`}</p>
                    </Col>
                    <Col xs={6}>
                      <p className="f-w-600 mb-1 text-start">Grand Total :</p>
                    </Col>
                    <Col xs={6}>
                      <p className="f-w-600 mb-1 text-end">
                        {total === undefined || total === null || total === 0
                          ? `${country?.prefix} 1`
                          : `${country?.prefix} ${total % 1 === 0 ? total : total.toFixed(2)}`}
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={12}>
                <div className="mb-0">
                  <Form.Label htmlFor="basic-url">Note </Form.Label>
                  <Form.Control as="textarea" placeholder="Notes" rows={3} value={values.notes} name="notes" onChange={handleChange} />
                </div>
              </Col>
              <Col xs={12}>
                <Row className="align-items-end justify-content-between g-3">
                  <Col sm="auto">
                    <Form.Label>Set Currency*</Form.Label>
                    <Form.Select
                      className="w-auto"
                      value={country?.code || values.country?.code || 'IN'}
                      onChange={(e) => {
                        const selectedCode = e.target.value;
                        const selected = invoiceMaster?.countries.find((c: CountryType) => c.code === selectedCode) ?? null;

                        setCountry(selected);
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
                    <Button variant="outline-secondary">Save</Button>
                    <Button color="primary" type="submit">
                      Create & Send
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

// ==============================|| INVOICE - CREATE ||============================== //

export default function CreateInvoice() {
  const { invoice } = useGetInvoice();
  const { invoiceMaster } = useGetInvoiceMaster();

  return (
    <>
      <MainCard className="table-card">{<CreateForm {...{ lists: invoice, invoiceMaster }} />}</MainCard>
    </>
  );
}
