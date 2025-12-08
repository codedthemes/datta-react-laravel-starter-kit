import { useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

// assets
import img1 from '@assets/images/light-box/sl1.jpg';
import img2 from '@assets/images/light-box/sl2.jpg';
import img3 from '@assets/images/light-box/sl3.jpg';
import img4 from '@assets/images/light-box/sl4.jpg';
import img5 from '@assets/images/light-box/sl5.jpg';
import img6 from '@assets/images/light-box/sl6.jpg';

const galleryImages = [
  { src: img1, full: img1 },
  { src: img2, full: img2 },
  { src: img3, full: img3 },
  { src: img4, full: img4 },
  { src: img5, full: img5 },
  { src: img6, full: img6 }
];

// ==============================|| SOCIAL PROFILE - GALLERY ||============================== //

export default function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleShow = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  return (
    <>
      <Row className="text-center g-3 mb-4">
        {galleryImages.map((image, index) => (
          <Col key={index} xl={3} lg={4} sm={6}>
            <a href="#!" className="thumbnail" onClick={() => handleShow(image.full)}>
              <Image src={image.src} alt={`Gallery image ${index + 1}`} fluid thumbnail className="bg-white" />
            </a>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered className="modal-lightbox">
        <Modal.Body className="p-0">
          <CloseButton
            variant="white"
            className="position-absolute bottom-100 start-100 translate-middle"
            onClick={() => setShowModal(false)}
          />
          {selectedImage && <Image src={selectedImage} alt="Lightbox Preview" className="w-100" fluid />}
        </Modal.Body>
      </Modal>
    </>
  );
}
