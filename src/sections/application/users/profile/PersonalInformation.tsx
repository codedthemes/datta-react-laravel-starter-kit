import React, { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

interface FormData {
  name: string;
  location: string;
  bio: string;
  experience: string;
  skills: string;
  phone: string;
  email: string;
  portfolioUrl: string;
  address: string;
}

const experienceOptions = ['Startup', '2 year', '3 year', '4 year', '5 year'];
const locationOptions = ['Washington', 'India', 'Africa', 'New York', 'Malaysia'];
const skillsOptions = [
  'admin template',
  'bootstrap',
  'css',
  'html5',
  'css3',
  'ionic',
  'framework',
  'javascript',
  'jquery',
  'scss',
  'uidesigner',
  'web design',
  'webflow'
];

const initialData: FormData = {
  name: 'Ashoka Tano',
  location: 'Washington',
  bio: 'I consider myself as a creative, professional and a flexible person. I can adapt with any kind of brief and design style',
  experience: '4 year',
  skills: 'admin template',
  phone: '(+99) 9999 999 999',
  email: 'demo@sample.com',
  portfolioUrl: 'https://demo.com',
  address: '3379 Monroe Avenue, Fort Myers, Florida(33912)'
};

// ==============================|| PROFILE - PERSONAL INFORMATION ||==============================

export default function PersonalInformation() {
  const [formData, setFormData] = useState<FormData>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const renderFormField = (label: string, name: keyof FormData, type: string = 'text', options: string[] = []) => (
    <Form.Group controlId={`formBasic${name}`} className="mb-3">
      <Form.Label>
        {label} {['name', 'bio', 'experience', 'email'].includes(name) && <span className="text-danger">*</span>}
      </Form.Label>
      {options.length > 0 ? (
        <Form.Control as="select" name={name} value={formData[name]} onChange={handleChange}>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Form.Control>
      ) : (
        <Form.Control
          as={type === 'textarea' ? 'textarea' : 'input'}
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
        />
      )}
    </Form.Group>
  );

  return (
    <MainCard bodyClassName="p-0">
      <Card.Header>
        <h5>
          <i className="ti ti-user f-20 text-primary" /> Personal Information
        </h5>
      </Card.Header>
      <Card.Body>
        <Form>
          <Row>
            <Col sm={6}>{renderFormField('Name', 'name')}</Col>
            <Col sm={6}>{renderFormField('Location', 'location', 'select', locationOptions)}</Col>
            <Col sm={12}>{renderFormField('Bio', 'bio', 'textarea')}</Col>
            <Col sm={6}>{renderFormField('Experience', 'experience', 'select', experienceOptions)}</Col>
            <Col sm={12}>{renderFormField('Skills', 'skills', 'select', skillsOptions)}</Col>
          </Row>
        </Form>
      </Card.Body>
      <Card.Header>
        <h5>
          <i className="ti ti-upload f-20 text-primary" /> Social Information
        </h5>
      </Card.Header>
      <Card.Body>
        {[
          { icon: 'ti ti-brand-facebook', color: 'primary', name: 'Facebook' },
          { icon: 'ti ti-brand-twitter', color: 'info', name: 'Twitter' },
          { icon: 'ti ti-brand-google', color: 'danger', name: 'Google Plus' }
        ].map(({ icon, color, name }) => (
          <Form.Group controlId={`formBasic${name}`} key={name} className="mb-3">
            <Form.Label>{name}</Form.Label>
            <InputGroup>
              <InputGroup.Text className={`bg-${color} text-white`}>
                <i className={icon} />
              </InputGroup.Text>
              <FormControl placeholder="Profile URL" aria-label="Profile URL" />
              <Button className={`bg-${color}`}>Connect</Button>
            </InputGroup>
          </Form.Group>
        ))}
      </Card.Body>
      <Card.Header>
        <h5>
          <i className="ti ti-map-pin f-20 text-primary" /> Contact Information
        </h5>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col sm={6}>{renderFormField('Contact Phone', 'phone')}</Col>
          <Col sm={6}>{renderFormField('Email', 'email', 'email')}</Col>
          <Col sm={12}>{renderFormField('Portfolio URL', 'portfolioUrl')}</Col>
          <Col sm={12}>{renderFormField('Address', 'address', 'textarea')}</Col>
        </Row>
      </Card.Body>
      <Card.Footer className="text-end">
        <Button variant="primary">Update Profile</Button>
        <Button variant="outline-dark" className="ms-2">
          Clear
        </Button>
      </Card.Footer>
    </MainCard>
  );
}
