// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

// project-imports
import SimpleBarScroll from '@/components/third-party/SimpleBar';
import ReplyDropdown from './ReplyDropdown';

// assets
import Avatar3 from '@assets/images/user/avatar-3.png';

// =============================|| MESSAGE - CHAT DETAILS ||============================== //

export default function ChatDetails() {
  return (
    <Card className="chat-body shadow-none mb-0">
      <SimpleBarScroll style={{ maxHeight: 'calc(100vh - 199px)' }}>
        <div className="chat-message">
          <Card.Body>
            <div className="message-out">
              <Stack direction="horizontal" className="align-items-end flex-column">
                <p className="mb-1 text-muted">
                  <small>9h ago</small>
                </p>
                <Stack direction="horizontal" className="d-flex message align-items-end flex-column">
                  <Stack direction="horizontal" className="d-flex align-items-center mb-1 chat-msg">
                    <ul className="list-inline ms-auto mb-0 chat-msg-option">
                      <li className="list-inline-item">
                        <ReplyDropdown />
                      </li>
                      <li className="list-inline-item">
                        <Button className="avatar avatar-xs btn-link-secondary">
                          <i className="ti ti-edit-circle f-18" />
                        </Button>
                      </li>
                    </ul>
                    <div className="ms-3">
                      <div className="msg-content card mb-0">
                        <p className="mb-0">Hi...Henny!!</p>
                      </div>
                    </div>
                  </Stack>
                  <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                    <ul className="list-inline ms-auto mb-0 chat-msg-option">
                      <li className="list-inline-item">
                        <ReplyDropdown />
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="avatar avatar-xs btn-link-secondary">
                          <i className="ti ti-edit-circle f-18" />
                        </a>
                      </li>
                    </ul>
                    <div className="ms-3">
                      <div className="msg-content card mb-0">
                        <p className="mb-0">How can i cap you today?</p>
                      </div>
                    </div>
                  </Stack>
                </Stack>
              </Stack>
            </div>
            <div className="message-in">
              <Stack direction="horizontal">
                <div className="chat-avatar">
                  <Image className="rounded-circle img-fluid wid-40" style={{ minWidth: '40px' }} src={Avatar3} alt="User image" />
                  <i className="chat-badge bg-success" />
                </div>
                <div className="mx-3">
                  <Stack direction="horizontal" className="align-items-start flex-column">
                    <p className="mb-1 text-muted">
                      Agilulf Fuxg <small>11:23 AM</small>
                    </p>
                    <Stack className="message  align-items-start flex-column">
                      <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                        <div className="msg-content card bg-primary mb-0 me-3">
                          <p className="mb-0">Hey.. Bill</p>
                        </div>
                        <ul className="list-inline ms-auto mb-0 chat-msg-option">
                          <li className="list-inline-item">
                            <ReplyDropdown />
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="avatar avatar-xs btn-link-secondary">
                              <i className="ti ti-edit-circle f-18" />
                            </a>
                          </li>
                        </ul>
                      </Stack>
                      <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                        <div className="flex-grow-1 me-3">
                          <div className="msg-content card bg-primary mb-0">
                            <p className="mb-0">nice to meet you!</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <ul className="list-inline ms-auto mb-0 chat-msg-option">
                            <li className="list-inline-item">
                              <ReplyDropdown />
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="avatar avatar-xs btn-link-secondary">
                                <i className="ti ti-edit-circle f-18" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </Stack>
                    </Stack>
                  </Stack>
                </div>
              </Stack>
            </div>
            <div className="message-out">
              <Stack direction="horizontal" className="align-items-end flex-column">
                <p className="mb-1 text-muted">
                  <small>9h ago</small>
                </p>
                <Stack direction="horizontal" className="message align-items-end flex-column">
                  <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                    <ul className="list-inline ms-auto mb-0 chat-msg-option">
                      <li className="list-inline-item">
                        <ReplyDropdown />
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="avatar avatar-xs btn-link-secondary">
                          <i className="ti ti-edit-circle f-18" />
                        </a>
                      </li>
                    </ul>
                    <div className="ms-3">
                      <div className="msg-content card mb-0">
                        <p className="mb-0">Hi...Henny!!</p>
                      </div>
                    </div>
                  </Stack>
                  <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                    <ul className="list-inline ms-auto mb-0 chat-msg-option">
                      <li className="list-inline-item">
                        <ReplyDropdown />
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="avatar avatar-xs btn-link-secondary">
                          <i className="ti ti-edit-circle f-18" />
                        </a>
                      </li>
                    </ul>
                    <div className="ms-3">
                      <div className="msg-content card mb-0">
                        <p className="mb-0">Are u listening me ?</p>
                      </div>
                    </div>
                  </Stack>
                  <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                    <ul className="list-inline ms-auto mb-0 chat-msg-option">
                      <li className="list-inline-item">
                        <ReplyDropdown />
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="avatar avatar-xs btn-link-secondary">
                          <i className="ti ti-edit-circle f-18" />
                        </a>
                      </li>
                    </ul>
                    <div className="ms-3">
                      <div className="msg-content card mb-0">
                        <p className="mb-0">How can i cap you today?</p>
                      </div>
                    </div>
                  </Stack>
                </Stack>
              </Stack>
            </div>
            <div className="message-in">
              <Stack direction="horizontal" className="align-items-center">
                <div className="chat-avatar">
                  <Image className="rounded-circle img-fluid wid-40" style={{ minWidth: '40px' }} src={Avatar3} alt="User image" />
                  <i className="chat-badge bg-success" />
                </div>
                <div className="flex-grow-1 mx-3">
                  <Stack direction="horizontal" className="align-items-start flex-column">
                    <p className="mb-1 text-muted">
                      Agilulf Fuxg <small>11:23 AM</small>
                    </p>
                    <Stack direction="horizontal" className="message align-items-start flex-column">
                      <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                        <div className="flex-grow-1 me-3">
                          <div className="msg-content card bg-primary mb-0">
                            <p className="mb-0">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                              standard dummy text ever since the 1500s.
                            </p>
                          </div>
                        </div>
                        <ul className="list-inline ms-auto mb-0 chat-msg-option">
                          <li className="list-inline-item">
                            <ReplyDropdown />
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="avatar avatar-xs btn-link-secondary">
                              <i className="ti ti-edit-circle f-18" />
                            </a>
                          </li>
                        </ul>
                      </Stack>
                    </Stack>
                  </Stack>
                </div>
              </Stack>
            </div>
            <div className="message-out">
              <Stack direction="horizontal" className="align-items-end flex-column">
                <p className="mb-1 text-muted">
                  <small>9h ago</small>
                </p>
                <Stack direction="horizontal" className="message align-items-end flex-column">
                  <Stack direction="horizontal" className="align-items-center mb-1 chat-msg">
                    <ul className="list-inline ms-auto mb-0 chat-msg-option">
                      <li className="list-inline-item">
                        <ReplyDropdown />
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="avatar avatar-xs btn-link-secondary">
                          <i className="ti ti-edit-circle f-18" />
                        </a>
                      </li>
                    </ul>
                    <div className="ms-3">
                      <div className="msg-content card mb-0">
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                          standard dummy text ever since the 1500s.
                        </p>
                      </div>
                    </div>
                  </Stack>
                </Stack>
              </Stack>
            </div>
          </Card.Body>
        </div>
      </SimpleBarScroll>
    </Card>
  );
}
