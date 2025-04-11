import { useRef } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// assets
import ImgStar from 'assets/images/admin/img-star.png';

const presets = [
  { title: 'Preset 1', colors: ['text-green-600', 'text-green-400', 'text-green-200'], active: false },
  { title: 'Preset 2', colors: ['text-yellow-600', 'text-yellow-400', 'text-yellow-200'], active: false },
  { title: 'Preset 3', colors: ['text-blue-600', 'text-blue-400', 'text-blue-200'], active: true },
  { title: 'Preset 4', colors: ['text-gray-600', 'text-gray-400', 'text-gray-200'], active: false }
];

const colorData = [
  {
    title: 'Nav Bar & Footer Background',
    description: 'Fixed, scrolling & email',
    colorClass: 'text-green-400',
    hexCode: '#96D4BF'
  },
  {
    title: 'Navigation Bar Link',
    description: 'Links when nav bar is fixed',
    colorClass: 'text-red-500',
    hexCode: '#FF602E'
  },
  {
    title: 'Navigation Bar',
    description: 'Links when nav bar is scrolling',
    colorClass: 'text-green-200',
    hexCode: '#96C9D4'
  },
  {
    title: 'Homepage Headings & Subtitle',
    description: 'When a background is set',
    colorClass: 'text-gray-400',
    hexCode: '#A7A6A6'
  },
  {
    title: 'Course Page Heading & Subtitle',
    description: 'When a Background is set',
    colorClass: 'text-gray-200',
    hexCode: '#E6F5F0'
  },
  {
    title: 'Headings',
    description: '<h2> to <h5>',
    colorClass: 'text-gray-500',
    hexCode: '#737373'
  },
  {
    title: 'Body text',
    description: '<body> , <p>',
    colorClass: 'text-gray-800',
    hexCode: '#3A3A3A'
  },
  {
    title: 'Buttons & Links',
    description: '<a> , <button>',
    colorClass: 'text-green-500',
    hexCode: '#2CA87F'
  }
];

// =============================|| SITE - THEME SITE ||============================== //

export default function ThemeSite() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <>
      <h5>Logo & Branding</h5>
      <p className="text-muted mb-4">
        Incorporate a custom logo and favicon, and fine-tune your school thumbnail to enhance its appearance and branding
      </p>
      <Row className="g-3">
        <Col sm={12} md={4}>
          <p className="mb-2">Logo & Branding</p>
          <Form action="/file-upload" className="dropzone dz-clickable" onClick={handleClick}>
            <div className="dz-default dz-message" style={{ cursor: 'pointer' }}>
              <Form.Control type="file" name="file" multiple className="dz-button" style={{ display: 'none' }} ref={fileInputRef} />
              Drop files here to upload
            </div>
          </Form>
        </Col>
        <Col sm={12} md={4}>
          <p className="mb-2">Thumbnail</p>
          <Form action="/file-upload" className="dropzone dz-clickable" onClick={handleClick}>
            <div className="dz-default dz-message">
              <Form.Control type="file" name="file" multiple className="dz-button" style={{ display: 'none' }} ref={fileInputRef} />
              Drop files here to upload
            </div>
          </Form>
        </Col>
        <Col sm={12} md={4}>
          <p className="mb-2">Favicon</p>
          <Form action="/file-upload" className="dropzone dz-clickable" onClick={handleClick}>
            <div className="dz-default dz-message">
              <Form.Control type="file" name="file" multiple className="dz-button" style={{ display: 'none' }} ref={fileInputRef} />
              Drop files here to upload
            </div>
          </Form>
        </Col>
      </Row>
      <hr className="my-4 border-top border-secondary border-opacity-50" />
      <Stack direction="horizontal" className="align-items-center mb-4">
        <div className="flex-shrink-0">
          <Image src={ImgStar} alt="img" fluid />
        </div>
        <div className="flex-grow-1 ms-3">
          <h6 className="mb-1">Able pro Branding</h6>
          <p className="mb-0 text-muted">
            Personalize your school and eliminate Able Pro branding from your school website, emails, and products. To access this feature,
            upgrade to the Professional plan.
          </p>
        </div>
      </Stack>

      <h5>Font Family</h5>
      <p className="text-muted mb-4">Change the font used across your school.</p>
      <MainCard className="border">
        <Form.Select className="w-auto mb-3">
          <option selected>Open Sans</option>
          <option value="1">Inter</option>
          <option value="2">Popince</option>
          <option value="3">Roboto</option>
        </Form.Select>
        <p className="mb-0 text-muted">
          Make your school your own and remove Teachable branding from your school website, emails, and all products. Upgrade to the
          Professional plan to use this feature.
        </p>
      </MainCard>

      <h5>Color Palette</h5>
      <p className="text-muted mb-4">
        Select a predefined color scheme to establish consistency across your site and products. Alternatively, customize your own color
        palette to reflect your unique branding and preferences.
      </p>
      <MainCard className="border">
        <Row className="row g-4 mb-4">
          {presets.map(({ title, colors, active }, index) => (
            <Col key={index} md={6} xl={3}>
              <div className={`admin-color-block ${active === true ? 'active' : ''}`}>
                <h6 className="mb-1">{title}</h6>
                <p className="text-muted text-sm mb-2">Theme Color</p>
                <MainCard className="border p-3 shadow-none mb-0" bodyClassName="p-0">
                  <Stack direction="horizontal" gap={2} className="align-items-center justify-content-center">
                    {colors.map((color, idx) => (
                      <i key={idx} className={`fas fa-circle f-26 ${color}`}></i>
                    ))}
                  </Stack>
                </MainCard>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="g-4">
          {colorData.map(({ title, description, colorClass, hexCode }, index) => (
            <Col md={6} xl={3} key={index}>
              <h6 className="mb-1">{title}</h6>
              <p className="text-muted text-sm mb-2">{description}</p>
              <MainCard className="border p-3 shadow-none mb-0" bodyClassName="p-0">
                <Stack direction="horizontal" gap={2} className="align-items-center justify-content-start">
                  <i className={`fas fa-circle f-26 ${colorClass}`}></i>
                  <p className="mb-0">{hexCode}</p>
                </Stack>
              </MainCard>
            </Col>
          ))}
        </Row>
      </MainCard>
    </>
  );
}
