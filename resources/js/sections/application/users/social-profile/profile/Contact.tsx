import { useCallback, useEffect, useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

interface InfoField {
  label: string;
  value: string;
  type: string;
}

// Initial contact data
const initialFields: InfoField[] = [
  { label: 'Mobile Number', value: '9988663366', type: 'text' },
  { label: 'Email Address', value: 'Demo@domain.com', type: 'text' },
  { label: 'Twitter', value: '@codedtheme', type: 'text' },
  { label: 'Skype', value: '@codedtheme demo', type: 'text' }
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^\d{10}$/;

// ==============================|| PROFILE - CONTACT ||============================== //

export default function Contact() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [isValid, setIsValid] = useState(false);

  // Convert initialFields to state map
  const [formData, setFormData] = useState<Record<string, string>>(() =>
    initialFields.reduce<Record<string, string>>((acc, cur) => {
      acc[cur.label] = cur.value;
      return acc;
    }, {})
  );

  const handleChange = useCallback((label: string, value: string) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  }, []);

  const handleSave = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (isValid) setIsCollapsed(true);
    },
    [isValid]
  );

  const validateForm = useCallback(() => {
    const mobile = (formData['Mobile Number'] || '').replace(/\D/g, '');
    if (!MOBILE_REGEX.test(mobile)) return false;

    const email = formData['Email Address'] || '';
    if (!EMAIL_REGEX.test(email)) return false;

    return !!(formData['Twitter'] || '').trim() && !!(formData['Skype'] || '').trim();
  }, [formData]);

  useEffect(() => {
    setIsValid(validateForm());
  }, [validateForm]);

  const validateField = useCallback((label: string, value: string): boolean => {
    switch (label) {
      case 'Mobile Number':
        return MOBILE_REGEX.test(value.replace(/\D/g, ''));
      case 'Email Address':
        return EMAIL_REGEX.test(value);
      default:
        return value.trim() !== '';
    }
  }, []);

  const getRowClassName = (index: number) => {
    const baseClass = 'align-items-center col-form-label';
    if (index === 0) return `${baseClass} pt-0`;
    if (index === initialFields.length - 1) return `${baseClass} pb-0`;
    return baseClass;
  };

  return (
    <MainCard
      bodyClassName="p-0"
      title="Contact Information"
      secondary={
        <Button variant="primary" size="sm" className="rounded m-0 float-end" onClick={() => setIsCollapsed(!isCollapsed)}>
          <i className="ph ph-note-pencil align-middle" />
        </Button>
      }
    >
      {/* View Mode */}
      {isCollapsed && (
        <Card.Body className="border-top">
          <Form>
            {initialFields.map((item, index) => (
              <Row key={index} className={getRowClassName(index)}>
                <Col sm={3} xs={5} className="f-w-500">
                  {item.label}
                </Col>
                <Col sm={9} xs={7} className="text-muted">
                  {formData[item.label]}
                </Col>
              </Row>
            ))}
          </Form>
        </Card.Body>
      )}

      {/* Edit Mode */}
      {!isCollapsed && (
        <Card.Body className="border-top">
          <Form onSubmit={handleSave}>
            {initialFields.map((item) => {
              const value = formData[item.label];
              const isInvalid = !validateField(item.label, value);

              return (
                <Row key={item.label} className="mb-3 align-items-center">
                  <Col sm={3} className="col-form-label f-w-500">
                    {item.label}
                  </Col>
                  <Col sm={9}>
                    <Form.Control
                      type={item.type}
                      value={value}
                      onChange={(e) => handleChange(item.label, e.target.value)}
                      isInvalid={isInvalid}
                    />
                  </Col>
                </Row>
              );
            })}

            <Row>
              <Col sm={3}></Col>
              <Col sm={9}>
                <Button variant="primary" type="submit" disabled={!isValid}>
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      )}
    </MainCard>
  );
}
