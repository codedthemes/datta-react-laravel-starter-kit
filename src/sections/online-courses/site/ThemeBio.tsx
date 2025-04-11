import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import ReactQuill from 'react-quill-new';

// project-imports
import MainCard from 'components/MainCard';

// assets
import Avatar1 from 'assets/images/user/avatar-1.jpg';
import Avatar2 from 'assets/images/user/avatar-2.jpg';
import Avatar3 from 'assets/images/user/avatar-3.jpg';
import Avatar4 from 'assets/images/user/avatar-4.jpg';
import AddUserImg from 'assets/images/admin/img-add-user.png';

const userData = [
  { id: 1, name: 'Airi Satou', date: '2023/09/12', time: '09:05 PM', avatar: Avatar1 },
  { id: 2, name: 'Ashton Cox', date: '2023/12/24', time: '09:05 PM', avatar: Avatar2 },
  { id: 3, name: 'Bradley Greer', date: '2022/09/19', time: '09:05 PM', avatar: Avatar3 },
  { id: 4, name: 'Brielle Williamson', date: '2022/08/22', time: '09:05 PM', avatar: Avatar4 },
  { id: 5, name: 'Airi Satou', date: '2023/09/12', time: '09:05 PM', avatar: Avatar1 },
  { id: 6, name: 'Ashton Cox', date: '2023/12/24', time: '09:05 PM', avatar: Avatar2 },
  { id: 7, name: 'Bradley Greer', date: '2022/09/19', time: '09:05 PM', avatar: Avatar3 }
];

// ===============================|| SITE - THEME BIO ||============================== //

export default function ThemeBio() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="text-end mb-3">
        <Button onClick={() => setOpen(true)}>Add Bio</Button>
      </div>
      <MainCard className="table-card border shadow-none" bodyClassName="pb-0">
        <Table hover responsive className="mb-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date/Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>
                  <Stack direction="horizontal" className="align-items-center">
                    <div className="flex-shrink-0">
                      <Image src={user.avatar} alt="user image" className="img-radius wid-40" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-0">{user.name}</h6>
                    </div>
                  </Stack>
                </td>
                <td>
                  {user.date} <span className="text-muted text-sm d-block">{user.time}</span>
                </td>
                <td>
                  <Stack direction="horizontal" gap={1} className="align-items-center">
                    <Button variant="link-secondary" href="#" className="avatar avatar-xs mx-1">
                      <i className="ti ti-eye f-20" />
                    </Button>
                    <Button variant="link-secondary" href="#" className="avatar avatar-xs mx-1">
                      <i className="ti ti-edit f-20" />
                    </Button>
                    <Button variant="link-secondary" href="#" className="avatar avatar-xs mx-1">
                      <i className="ti ti-trash f-20" />
                    </Button>
                  </Stack>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </MainCard>
      <Modal className="fade" show={open} onHide={() => setOpen(false)}>
        <div className="modal-content">
          <Modal.Header>
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Add Bio
            </h1>
            <CloseButton onClick={() => setOpen(false)} />
          </Modal.Header>
          <Modal.Body>
            <Stack direction="horizontal" className="flex-column gap-3 align-items-center mb-4">
              <Image src={AddUserImg} fluid alt="img" />
              <Button variant="outline-secondary" size="sm">
                Add Image
              </Button>
            </Stack>
            <ReactQuill
              className="snow"
              value={''}
              placeholder="Type your text here..."
              theme="snow"
              modules={{
                toolbar: {
                  container: [[{ size: ['small', false, 'large', 'huge'] }], ['bold', 'italic', 'underline'], ['image', 'code']]
                }
              }}
            />
            <div className="mt-3 text-center">
              <Button>Add Bio</Button>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}
