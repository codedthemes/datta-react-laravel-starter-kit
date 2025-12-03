import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// third-party
import { Rating } from 'react-simple-star-rating';

// project-imports
import MainCard from '@/components/MainCard';

// ==============================|| RATING ||============================== //

export default function RatingMain() {
  const [showStars, setShowStars] = useState(true);

  // Ratings state
  const [prebuilt, setPrebuilt] = useState<number>(0);
  const [leftToRight, setLeftToRight] = useState<number>(0);
  const [heart, setHeart] = useState<number>(0);
  const [rightToLeft, setRightToLeft] = useState<number>(0);
  const [hideTooltip, setHideTooltip] = useState<number>(5); // default 5

  const resetForm = () => {
    setPrebuilt(0);
    setLeftToRight(0);
    setHeart(0);
    setRightToLeft(0);
    setHideTooltip(5);
    setShowStars(true);
  };

  return (
    <MainCard title="Rating" className="overflow-scroll">
      <Form>
        {/* Prebuilt */}
        <Row className="mb-3 align-items-center">
          <Col lg={3} className="text-lg-end">
            <Form.Label>Prebuilt</Form.Label>
          </Col>
          <Col lg={9}>
            {showStars ? (
              <Rating
                initialValue={prebuilt}
                onClick={(value) => setPrebuilt(value)}
                showTooltip
                tooltipArray={['1 star', '2 star', '3 star', '4 star', '5 star']}
              />
            ) : (
              <Form.Select value={prebuilt} onChange={(e) => setPrebuilt(Number(e.target.value))}>
                <option value={0}>Select a rating</option>
                <option value={5}>5 star</option>
                <option value={4}>4 star</option>
                <option value={3}>3 star</option>
                <option value={2}>2 star</option>
                <option value={1}>1 star</option>
              </Form.Select>
            )}
          </Col>
        </Row>

        {/* Left to Right */}
        <Row className="mb-3 align-items-center">
          <Col lg={3} className="text-lg-end">
            <Form.Label>Left to Right</Form.Label>
          </Col>
          <Col lg={9}>
            {showStars ? (
              <Rating
                initialValue={leftToRight}
                onClick={(value) => setLeftToRight(value)}
                showTooltip
                tooltipArray={['Fantastic', 'Great', 'Good', 'Poor', 'Terrible']}
              />
            ) : (
              <Form.Select value={leftToRight} onChange={(e) => setLeftToRight(Number(e.target.value))}>
                <option value={0}>Select a rating</option>
                <option value={1}>Fantastic</option>
                <option value={2}>Great</option>
                <option value={3}>Good</option>
                <option value={4}>Poor</option>
                <option value={5}>Terrible</option>
              </Form.Select>
            )}
          </Col>
        </Row>

        {/* Heart */}
        <Row className="mb-3 align-items-center">
          <Col lg={3} className="text-lg-end">
            <Form.Label>Heart</Form.Label>
          </Col>
          <Col lg={9}>
            {showStars ? (
              <Rating
                initialValue={heart}
                onClick={(value) => setHeart(value)}
                emptyIcon={<i className="ti ti-heart f-36" />}
                fillIcon={<i className="ti ti-heart-filled text-danger f-36" />}
                showTooltip
                tooltipArray={['1', '2', '3', '4', '5']}
              />
            ) : (
              <Form.Select value={heart} onChange={(e) => setHeart(Number(e.target.value))}>
                <option value={0}>Select a rating</option>
                <option value={1}>Fantastic</option>
                <option value={2}>Great</option>
                <option value={3}>Good</option>
                <option value={4}>Poor</option>
                <option value={5}>Terrible</option>
              </Form.Select>
            )}
          </Col>
        </Row>

        {/* Right to Left */}
        <Row className="mb-3 align-items-center">
          <Col lg={3} className="text-lg-end">
            <Form.Label>Right to Left</Form.Label>
          </Col>
          <Col lg={9} dir="rtl">
            {showStars ? (
              <Rating
                initialValue={rightToLeft}
                onClick={(value) => setRightToLeft(value)}
                rtl
                emptyIcon={<i className="ti ti-star text-warning f-36" />}
                fillIcon={<i className="ti ti-star-filled text-warning f-36" />}
                showTooltip
                tooltipArray={['Terrible', 'Poor', 'Good', 'Great', 'Fantastic']}
              />
            ) : (
              <Form.Select value={rightToLeft} onChange={(e) => setRightToLeft(Number(e.target.value))}>
                <option value={0}>Select a rating</option>
                <option value={1}>Fantastic</option>
                <option value={2}>Great</option>
                <option value={3}>Good</option>
                <option value={4}>Poor</option>
                <option value={5}>Terrible</option>
              </Form.Select>
            )}
          </Col>
        </Row>

        {/* Hide Tooltip */}
        <Row className="mb-3 align-items-center">
          <Col lg={3} className="text-lg-end">
            <Form.Label>Hide tooltip</Form.Label>
          </Col>
          <Col lg={9}>
            {showStars ? (
              <Rating iconsCount={10} initialValue={hideTooltip} onClick={(value) => setHideTooltip(value)} />
            ) : (
              <Form.Select value={hideTooltip} onChange={(e) => setHideTooltip(Number(e.target.value))}>
                {[...Array(11).keys()].map((n) => (
                  <option key={n} value={n}>
                    {n === 0 ? 'Select a rating' : n}
                  </option>
                ))}
              </Form.Select>
            )}
          </Col>
        </Row>

        {/* Actions */}
        <Row>
          <Col lg={3}></Col>
          <Col lg={9}>
            <Stack direction="horizontal" gap={1}>
              <Button onClick={() => setShowStars((s) => !s)}>Toggle Star Rating</Button>
              <Button variant="secondary" onClick={resetForm}>
                Reset form
              </Button>
            </Stack>
          </Col>
        </Row>
      </Form>
    </MainCard>
  );
}
