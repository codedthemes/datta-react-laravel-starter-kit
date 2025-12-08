import React, { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  { id: '1', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been', completed: false },
  { id: '2', text: "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley", completed: false },
  { id: '3', text: 'of type and scrambled it to make a type specimen book. It has survived not only five', completed: false },
  { id: '4', text: 'centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', completed: false }
];

// ==============================|| TODO - TODO LIST MODEL ||============================== //

export default function TodoListModel() {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState<string>('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const newTaskObj: Task = {
      id: crypto.randomUUID(),
      text: newTask.trim(),
      completed: false
    };
    setTasks((prev) => [...prev, newTaskObj]);
    setNewTask('');
    handleClose();
  };

  const handleToggleTaskCompletion = (taskId: string) => {
    setTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddTask();
  };

  return (
    <>
      <MainCard title="To Do List in Modal">
        <div className="tasks-widget">
          {tasks.map((task) => (
            <Stack key={task.id} direction="horizontal" className={`justify-content-between mb-3 ${task.completed ? 'done-task' : ''}`}>
              <FormCheck className="check-task">
                <FormCheck.Input
                  type="checkbox"
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onChange={() => handleToggleTaskCompletion(task.id)}
                />
                <FormCheck.Label className={task.completed ? 'done-task' : ''} htmlFor={`task-${task.id}`}>
                  {task.text}
                </FormCheck.Label>
              </FormCheck>

              <Button
                variant="link"
                className="text-decoration-none p-0 ms-2 text-danger"
                onClick={() => handleDeleteTask(task.id)}
                aria-label="Delete task"
              >
                <i className="ti ti-trash" />
              </Button>
            </Stack>
          ))}
        </div>
        <Button onClick={handleShow} className="btn-add-task mt-2">
          Add New Task
        </Button>
      </MainCard>

      <Modal show={show} onHide={handleClose} aria-labelledby="modalLabel" centered>
        <Modal.Header closeButton>
          <Modal.Title id="modalLabel">Add new todo</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col sm={12}>
                <Form.Group className="mb-3 form-primary">
                  <Form.Control
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Create your task"
                    autoFocus
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="light-primary" disabled={!newTask.trim()}>
              Add
            </Button>
            <Button onClick={handleClose} variant="light-secondary">
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
