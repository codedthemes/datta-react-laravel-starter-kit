import { useEffect, useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Stack from 'react-bootstrap/Stack';
import Offcanvas from 'react-bootstrap/Offcanvas';

// project-imports
import ChatDetails from './ChatDetails';
import ChatInfo from './ChatInfo';
import ChatLeftHeader from './ChatLeftHeader';
import ChatRightHeader from './ChatRightHeader';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

// =============================|| MESSAGE - CHAT CONTENT ||============================== //

export default function ChatContent() {
  const [showUserList, setShowUserList] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [open, setOpen] = useState(true);
  const [infoOpen, setInfoOpen] = useState(false);

  const handleShowUserList = () => setShowUserList(true);
  const handleCloseUserList = () => {
    setShowUserList(false);
  };

  const handleCloseUserInfo = () => setShowUserInfo(false);
  const handleShowUserInfo = () => {
    setShowUserInfo(true);
    setInfoOpen(false);
  };

  const handleCloseInfo = () => setInfoOpen(false);
  const handleShowInfo = () => setInfoOpen(!infoOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1025) {
        setOpen(false);
        setInfoOpen(false);
      } else {
        setOpen(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="chat-wrapper">
      <Offcanvas placement="start" className="offcanvas-xxl chat-offcanvas" show={showUserList} onHide={handleCloseUserList}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body className="p-0 ">
          <MessageList />
        </Offcanvas.Body>
      </Offcanvas>

      <div className="d-xxl-block d-none">
        <Collapse in={open} dimension="width">
          <div>
            <MessageList />
          </div>
        </Collapse>
      </div>

      <div className="chat-content position-relative">
        <Stack direction="horizontal" className="align-items-center p-3">
          <ChatLeftHeader open={open} setOpen={setOpen} handleShowUserList={handleShowUserList} />
          <ChatRightHeader handleShowUserInfo={handleShowUserInfo} handleShowInfo={handleShowInfo} />
        </Stack>

        <ChatDetails />
        {/* Message Input */}
        <MessageInput />
      </div>
      <Offcanvas placement="end" className="offcanvas-xxl chat-offcanvas" show={showUserInfo} onHide={handleCloseUserInfo}>
        <Offcanvas.Header>
          <div className="d-flex justify-content-between align-items-center w-100">
            <h5 className="text-start mb-0">Profile View</h5>
            <Button className="avatar avatar-xs btn-light-danger" onClick={() => setShowUserInfo(false)}>
              <i className="ti ti-x f-16" />{' '}
            </Button>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <ChatInfo />
        </Offcanvas.Body>
      </Offcanvas>
      <Collapse in={infoOpen} dimension="width">
        <div>
          <Stack className="p-3 justify-content-between" direction="horizontal">
            <h5 className="text-start mb-0">Profile View</h5>
            <Button className="avatar avatar-xs btn-light-danger d-none d-xxl-inline-flex" onClick={handleCloseInfo}>
              <i className="ti ti-x f-16" />
            </Button>
          </Stack>
          <ChatInfo />
        </div>
      </Collapse>
    </div>
  );
}
