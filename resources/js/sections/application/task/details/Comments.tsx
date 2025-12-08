// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from '@/components/MainCard';

// assets
import Avatar1 from '@assets/images/user/avatar-1.png';
import Avatar2 from '@assets/images/user/avatar-2.png';

interface Comment {
  id: number;
  name: string;
  time: string;
  text: string;
  avatar: string;
  replies?: Comment[];
  borderBottom?: boolean;
}

// initial data
const initialComments: Comment[] = [
  {
    id: 1,
    name: 'Larry Heading',
    time: '15 min ago',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    avatar: Avatar1,
    borderBottom: true,
    replies: [
      {
        id: 2,
        name: 'Joseph William',
        time: '12 min ago',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        avatar: Avatar2,
        borderBottom: true
      }
    ]
  },
  {
    id: 3,
    name: 'Joseph William',
    time: 'Just now',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    avatar: Avatar2
  }
];

// ===========================|| COMMENTS - COMMENT ITEM ||=========================== //

const CommentItem = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
  <Row className={isReply ? 'ms-2' : ''}>
    <Col xs="auto" className="me-0">
      <Image fluid roundedCircle thumbnail className="wid-45" src={comment.avatar} alt={`${comment.name} avatar`} />
    </Col>
    <Col>
      <h6>
        {comment.name}
        <span className="f-12 text-muted ms-1">
          <i className="ph ph-clock align-middle f-14 ms-1 me-1" />
          {comment.time}
        </span>
      </h6>
      <p className="text-muted">{comment.text}</p>
      <div className="d-flex flex-wrap gap-2">
        <a href="#!" className="link-primary text-decoration-none">
          <i className="ph ph-chat-dots f-16 text-primary me-1" style={{ verticalAlign: '-2px' }} /> Reply
        </a>
        <a href="#!" className="link-success text-decoration-none">
          <i className="ph ph-pencil-simple-line f-16 text-success me-1" style={{ verticalAlign: '-2px' }} /> Edit
        </a>
        <a href="#!" className="link-danger text-decoration-none">
          <i className="ph ph-trash f-16 text-danger me-1" style={{ verticalAlign: '-2px' }} /> Delete
        </a>
      </div>
      {comment.borderBottom && <hr />}
      {comment.replies && (
        <div className="mt-3">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} isReply={true} />
          ))}
        </div>
      )}
    </Col>
  </Row>
);

// ===========================|| DETAILS - COMMENTS ||=========================== //

export default function Comments() {
  return (
    <MainCard
      bodyClassName="p-0"
      title={
        <h5>
          <i className="ph ph-chat-dots align-text-top f-20 text-primary" /> Comments
        </h5>
      }
      secondary={
        <Button variant="light-primary" size="sm">
          <i className="ti ti-plus" /> Add
        </Button>
      }
    >
      <Card.Body className="border-bottom">
        {initialComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </Card.Body>
      <Card.Footer className="py-3">
        <InputGroup>
          <Form.Control placeholder="Add New Comment..." defaultValue="" aria-label="new comment" aria-describedby="button-addon1" />
          <Button variant="light-secondary" id="button-addon1">
            <i className="ti ti-send" />
          </Button>
        </InputGroup>
      </Card.Footer>
    </MainCard>
  );
}
