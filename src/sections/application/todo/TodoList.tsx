import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/CardHeader';
import CardBody from 'react-bootstrap/CardBody';
import FormCheck from 'react-bootstrap/FormCheck';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

// ==============================|| TODO - TODO LIST ||============================== //

export default function TodoList() {
  const INITIAL_STATIC_TASKS: Task[] = [
    { id: 1, task: 'Lorem Ipsum Dolor Sit Amet', completed: false },
    { id: 2, task: "Industry's standard dummy text ever since the 1500s", completed: false },
    { id: 3, task: 'The point of using Lorem Ipsum is that it has a more-or-less', completed: false },
    { id: 4, task: 'Contrary to popular belief', completed: false },
    { id: 5, task: 'There are many variations of passages of Lorem Ipsum', completed: false },
    { id: 6, task: 'Sed ut perspiciatis unde omnis iste natus', completed: false },
    { id: 7, task: 'must explain to you how all this mistaken idea', completed: false }
  ];

  const [tasks, setTasks] = useState<Task[]>(INITIAL_STATIC_TASKS);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    if (!newTask.trim()) {
      alert('please enter a task');
      return;
    }
    const newTaskObj: Task = { id: tasks.length + 1, task: newTask, completed: false };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <Card>
      <CardHeader>
        <h5>To Do List</h5>
      </CardHeader>
      <CardBody className="py-3 border-bottom">
        <InputGroup>
          <Form.Control type="text" value={newTask} onChange={handleInputChange} placeholder="Create your task list" required />
          <Button variant="scondary" onClick={addTask}>
            <i className="fa fa-plus" />
          </Button>
        </InputGroup>
      </CardBody>
      <CardBody>
        <div className="new-task">
          {tasks.map((task) => (
            <div key={task.id} className="to-do-list mb-3">
              <div className="float-end">
                <Link to="#!" onClick={() => deleteTask(task.id)} className="delete_todolist">
                  <i className="far fa-trash-alt" />
                </Link>
              </div>
              <div className="d-inline-block">
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
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
