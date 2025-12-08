import { useState, ChangeEvent, KeyboardEvent } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';

// project-imports
import MainCard from '@/components/MainCard';

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

const staticData: Task[] = [
  { id: 1, task: 'Lorem Ipsum Dolor Sit Amet', completed: false },
  { id: 2, task: "Industry's standard dummy text ever since the 1500s", completed: false },
  { id: 3, task: 'The point of using Lorem Ipsum is that it has a more-or-less', completed: false },
  { id: 4, task: 'Contrary to popular belief', completed: false },
  { id: 5, task: 'There are many variations of passages of Lorem Ipsum', completed: false },
  { id: 6, task: 'Sed ut perspiciatis unde omnis iste natus', completed: false },
  { id: 7, task: 'must explain to you how all this mistaken idea', completed: false }
];

// ==============================|| APPLICATION TASK - SUB TASK LIST ||============================== //

export default function SubTaskList() {
  const [tasks, setTasks] = useState(staticData);
  const [newTask, setNewTask] = useState('');
  const [taskIdCounter, setTaskIdCounter] = useState(staticData.length + 1);
  const [error, setError] = useState('');

  const addTask = () => {
    if (!newTask.trim()) {
      alert('Please enter a task');
      return;
    }
    const newTaskObj: Task = { id: taskIdCounter, task: newTask.trim(), completed: false };
    setTasks([...tasks, newTaskObj]);
    setTaskIdCounter((prev) => prev + 1);
    setNewTask('');
    setError('');
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
    if (error) setError('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTask();
    }
  };

  return (
    <MainCard title="Sub Task List">
      <div className="mb-3">
        <InputGroup>
          <Form.Control
            className="add_task_todo"
            value={newTask}
            required
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Create your task list"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="secondary" onClick={addTask} disabled={!newTask.trim()}>
            <i className="ti ti-plus align-bottom" />
          </Button>
        </InputGroup>
        {error && <Form.Control.Feedback className="text-danger">{error}</Form.Control.Feedback>}
      </div>
      <div className="new-task">
        {tasks.map((task, index) => (
          <Stack
            key={task.id}
            direction="horizontal"
            className={`justify-content-between to-do-list ${index !== tasks.length - 1 ? 'mb-3' : ''}`}
          >
            <div className="d-inline-block pe-2">
              <FormCheck className="check-task">
                <FormCheck.Input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  id={`customCheck${task.id}`}
                />
                <FormCheck.Label className={task.completed ? 'done-task' : ''} htmlFor={`customCheck${task.id}`}>
                  {task.task}
                </FormCheck.Label>
              </FormCheck>
            </div>
            <div className="float-end">
              <Button variant="link" onClick={() => deleteTask(task.id)} className="delete_todolist p-0 text-decoration-none">
                <i className="ti ti-trash text-danger" />
              </Button>
            </div>
          </Stack>
        ))}
      </div>
    </MainCard>
  );
}
