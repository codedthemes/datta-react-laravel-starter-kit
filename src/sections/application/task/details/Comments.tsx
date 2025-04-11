// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Avatar1 from 'assets/images/user/avatar-1.jpg';
import Avatar2 from 'assets/images/user/avatar-2.jpg';
import TextsmsTwoToneIcon from '@mui/icons-material/TextsmsTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone';

interface Comment {
  id: number;
  name: string;
  time: string;
  text: string;
  avatar: string;
  replies?: Comment[];
  borderBottom?: boolean;
}

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

const CommentItem = ({ comment }: { comment: Comment }) => (
  <Row>
    <Col xs="auto" className="me-0">
      <Image fluid className="img-radius wid-45 img-thumbnail" src={comment.avatar} alt="User Avatar" />
    </Col>
    <Col>
      <div className="h6">
        {comment.name}
        <span className="f-12 text-muted ms-1">
          <i className="ti ti-clock me-1" />
          {comment.time}
        </span>
      </div>
      <p className="text-muted">{comment.text}</p>
      <a href="#!" className="me-2 link-primary">
        <TextsmsTwoToneIcon className="f-16 text-primary" /> Reply
      </a>
      <a href="#!" className="me-2 link-success">
        <EditTwoToneIcon className="f-16 text-success" /> Edit
      </a>
      <a href="#!" className="me-2 link-danger">
        <DeleteTwoToneIcon className="f-16 text-danger" /> Delete
      </a>
      {comment.borderBottom && <hr />}

      {comment.replies && (
        <div className="mt-3 ps-4">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} />
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
        <Stack direction="horizontal" gap={2} className="align-items-center justify-content-between">
          <h5>
            <ChromeReaderModeTwoToneIcon className="w-20 text-primary" /> Comments
          </h5>
          <Button variant="light-primary" size="sm">
            <i className="fas fa-plus" /> Add
          </Button>
        </Stack>
      }
    >
      <Card.Body className="border-bottom">
        {initialComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </Card.Body>
      <Card.Body className="py-3">
        <InputGroup>
          <FormControl placeholder="Add New Comment..." value="" />
          <Button variant="light-secondary">
            <i className="fas fa-search" />
          </Button>
        </InputGroup>
      </Card.Body>
    </MainCard>
  );
}
