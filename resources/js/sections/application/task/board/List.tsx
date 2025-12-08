import React from 'react';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FormCheck from 'react-bootstrap/FormCheck';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// assets
import avatar1 from '@assets/images/user/avatar-1.png';
import avatar2 from '@assets/images/user/avatar-2.png';
import avatar3 from '@assets/images/user/avatar-5.png';

interface TaskData {
  id: number;
  title: string;
  priority: {
    label: string;
    color: string;
  };
  assignee: string;
  playlistNo: string;
  message: number;
  avatar: string;
}

// list data
const listData: TaskData[] = [
  {
    id: 24,
    title: 'Create UI Design Model',
    priority: { label: 'Highest', color: 'light-danger' },
    assignee: 'Joseph William',
    playlistNo: '14/40',
    message: 9,
    avatar: avatar1
  },
  {
    id: 22,
    title: 'Make Responsive UIKit',
    priority: { label: 'Normal', color: 'light-success' },
    assignee: 'Ashoka T.',
    playlistNo: '23/37',
    message: 16,
    avatar: avatar2
  },
  {
    id: 21,
    title: ' Add E-Commerce Module',
    priority: { label: 'Normal', color: 'light-warning' },
    assignee: 'Ashoka T.',
    playlistNo: '16/28',
    message: 12,
    avatar: avatar3
  }
];

const boardData: TaskData[] = Array(2).fill(listData).flat();

// =================|| BOARD LIST ITEM ||============================== //

type Props = { data: TaskData; isLast?: boolean };

const BoardListItem: React.FC<Props> = ({ data, isLast }) => {
  return (
    <Card.Body className={`py-3 ${isLast ? '' : ' border-bottom'}`}>
      <Row className="justify-content-sm-between align-items-center">
        <Col sm={5} className="mb-2 mb-sm-0">
          <Stack direction="horizontal" className="align-items-center">
            <FormCheck.Input className="input-secondary me-1" type="checkbox" />
            <span>
              #{data.id}. {data.title}
            </span>
          </Stack>
        </Col>
        <Col sm={2}>
          <Badge bg={data.priority.color}>{data.priority.label}</Badge>
        </Col>
        <Col sm={5}>
          <Stack direction="horizontal" className="justify-content-between">
            <div>
              <Image src={data.avatar} alt={data.assignee} fluid roundedCircle className="wid-20 me-2" /> {data.assignee}
            </div>
            <div>
              <p className="d-inline-block mb-0">
                <i className="ph ph-list-checks align-text-bottom f-18 text-primary" style={{ marginInlineEnd: '0.25rem' }} />
                {data.playlistNo}
              </p>
              <p className="d-inline-block mb-0 ms-2">
                <i className="ph ph-chat align-text-bottom f-18 text-success" style={{ marginInlineEnd: '0.25rem' }} />
                {data.message}
              </p>
            </div>
          </Stack>
        </Col>
      </Row>
    </Card.Body>
  );
};

// =================|| TASK BOARD - LIST ||============================== //

export default function TaskBoardList() {
  return (
    <Row>
      <Col xs={12}>
        <Card>
          {boardData.map((value, index) => (
            <BoardListItem key={index} data={value} isLast={index === boardData.length - 1} />
          ))}
        </Card>
      </Col>
    </Row>
  );
}
