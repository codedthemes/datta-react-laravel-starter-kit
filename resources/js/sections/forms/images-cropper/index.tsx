import { useRef, useState, useCallback, useEffect } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// third-party
import ReactCrop, { centerCrop, makeAspectCrop, Crop, PixelCrop, convertToPixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

// project-imports
import MainCard from '@/components/MainCard';
import { canvasPreview } from './canvasPreview';
import { useDebounceEffect } from './useDebounceEffect';

// assets
import backgroundImg from '@assets/images/light-box/l1.jpg';

// ===================================||  Helper Functions ||=================================== //

const createCenteredAspectCrop = (mediaWidth: number, mediaHeight: number, aspect: number) =>
  centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );

// =========================|| IMAGE CROPPER COMPONENT ||========================== //

export default function ImageCropper() {
  const [imgSrc, setImgSrc] = useState<string>(backgroundImg);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);

  const imgRef = useRef<HTMLImageElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
  const blobUrlRef = useRef<string>('');

  // revoke blob URL on unmount
  useEffect(() => {
    return () => {
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
    };
  }, []);

  const onSelectFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // reset crop
      const reader = new FileReader();
      reader.onload = () => {
        setImgSrc(reader.result?.toString() || backgroundImg);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }, []);

  const onImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (aspect) {
        const { width, height } = e.currentTarget;
        const newCrop = createCenteredAspectCrop(width, height, aspect);
        setCrop(newCrop);
      }
    },
    [aspect]
  );

  const onDownloadCropClick = useCallback(async () => {
    if (!imgRef.current || !previewCanvasRef.current || !completedCrop) return;

    const image = imgRef.current;
    const previewCanvas = previewCanvasRef.current;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(completedCrop.width * scaleX, completedCrop.height * scaleY);
    const ctx = offscreen.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(previewCanvas, 0, 0, previewCanvas.width, previewCanvas.height, 0, 0, offscreen.width, offscreen.height);

    const blob = await offscreen.convertToBlob({ type: 'image/png' });

    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
    }
    blobUrlRef.current = URL.createObjectURL(blob);

    if (hiddenAnchorRef.current) {
      hiddenAnchorRef.current.href = blobUrlRef.current;
      hiddenAnchorRef.current.click();
    }
  }, [completedCrop]);

  useDebounceEffect(
    async () => {
      if (completedCrop?.width && completedCrop?.height && imgRef.current && previewCanvasRef.current) {
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop, scale, rotate);
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  const handleToggleAspectClick = useCallback(() => {
    if (aspect) {
      setAspect(undefined);
    } else {
      setAspect(16 / 9);
      if (imgRef.current) {
        const { width, height } = imgRef.current;
        const newCrop = createCenteredAspectCrop(width, height, 16 / 9);
        setCrop(newCrop);
        setCompletedCrop(convertToPixelCrop(newCrop, width, height));
      }
    }
  }, [aspect]);

  return (
    <MainCard title="Image Cropper Plugin">
      <Container>
        <Row>
          {/* Crop Section */}
          <Col sm={6}>
            {imgSrc && (
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={aspect}
                minHeight={100}
              >
                <Image
                  ref={imgRef}
                  alt="Crop me"
                  src={imgSrc}
                  style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
            )}
          </Col>

          {/* Preview Section */}
          <Col sm={6}>
            {completedCrop && (
              <canvas
                ref={previewCanvasRef}
                style={{
                  border: '1px solid #ccc',
                  objectFit: 'contain',
                  width: completedCrop.width,
                  height: completedCrop.height
                }}
              />
            )}
          </Col>

          {/* Controls */}
          <Col sm={12} className="mt-3 mb-xl-0">
            <div className="cropper">
              <div className="cropper-container d-flex flex-column gap-4">
                <Form.Control type="file" accept="image/*" onChange={onSelectFile} />
                <Row className="g-3">
                  <Col sm={6}>
                    <Row className="g-3 align-items-center">
                      <Col sm={3}>
                        <Form.Label htmlFor="scale-input">Scale:</Form.Label>
                      </Col>
                      <Col sm={9}>
                        <Form.Control
                          id="scale-input"
                          type="number"
                          step="0.1"
                          min={0.1}
                          value={scale}
                          disabled={!imgSrc}
                          onChange={(e) => setScale(Number(e.target.value))}
                        />
                      </Col>
                      <Col sm={3}>
                        <Form.Label htmlFor="rotate-input">Rotate:</Form.Label>
                      </Col>
                      <Col sm={9}>
                        <Form.Control
                          id="rotate-input"
                          type="number"
                          value={rotate}
                          min={-180}
                          max={180}
                          disabled={!imgSrc}
                          onChange={(e) => setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={6}>
                    <Row className="g-3">
                      <Col sm={12}>
                        <Button className="w-100" variant="secondary" onClick={handleToggleAspectClick}>
                          Toggle Aspect {aspect ? 'Off' : 'On'}
                        </Button>
                      </Col>
                      <Col sm={12}>
                        <Button className="w-100" variant="success" onClick={onDownloadCropClick}>
                          Download Crop
                        </Button>
                        <a ref={hiddenAnchorRef} download="crop.png" style={{ display: 'none' }}>
                          Hidden download
                        </a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </MainCard>
  );
}
