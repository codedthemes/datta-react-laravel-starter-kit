import { useState } from 'react';

// react-bootstrap
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| TOAST - PLACEMENT ||============================== //

export default function Placement() {
  const [position, setPosition] = useState('top-start');

  const handlePositionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPosition = event.target.value;
    setPosition(selectedPosition);
  };

  return (
    <>
      <MainCard title="Placement" className="mb-0 border-bottom">
        <Form>
          <Form.Select aria-label="Select position" onChange={handlePositionChange}>
            <option>Select a position...</option>
            <option value="top-0 start-0 ">Top left</option>
            <option value="top-0 start-50 translate-middle-x">Top center</option>
            <option value="top-0 end-0">Top right</option>
            <option value="top-50 start-0 translate-middle-y">Middle left</option>
            <option value="top-50 start-50 translate-middle">Middle center</option>
            <option value="top-50 end-0 translate-middle-y">Middle right</option>
            <option value="bottom-0 start-0">Bottom left</option>
            <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
            <option value="bottom-0 end-0">Bottom right</option>
          </Form.Select>
        </Form>
      </MainCard>
      <MainCard>
        <div className="bg-dark position-relative h-200">
          <ToastContainer className={`position-absolute p-3 ${position}`}>
            <Toast>
              <Toast.Header closeButton={false}>
                <Image src="/favicon.svg" width={17} className="rounded me-2" alt="" />
                <strong className="me-auto">Datta able</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </MainCard>
    </>
  );
}
