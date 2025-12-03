import { useState, useCallback } from 'react';

// react-bootstrap
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Table from 'react-bootstrap/Table';
import Tooltip from 'react-bootstrap/Tooltip';

// project-imports
import MainCard from '@/components/MainCard';

// data
import { initialTasks, taskStatus } from '@/data/task-data';

// types
import { Task, AssignedUser, TaskListProps } from '@/types/task';

// ==============================|| APPLICATION TASK - TASK LIST ||============================== //

export default function TaskList({
  tasks = initialTasks,
  loading = false,
  error,
  onTaskUpdate,
  onTaskDelete,
  onStatusChange
}: TaskListProps) {
  const [selectedDates, setSelectedDates] = useState<Record<number, string>>({});
  const [editingTask, setEditingTask] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');

  const handleTaskAction = useCallback(
    (action: string, taskId: number) => {
      switch (action) {
        case 'edit':
          const task = tasks.find((t: Task) => t.id === taskId);
          if (task) {
            setEditingTask(taskId);
            setEditTitle(task.title);
          }
          break;
        case 'delete':
          onTaskDelete?.(taskId);
          break;
        case 'attach':
          // Handle attach file functionality
          break;
        case 'reassign':
          // Handle reassign functionality
          break;
        default:
          break;
      }
    },
    [onTaskDelete, tasks]
  );

  const handleSaveEdit = useCallback(() => {
    if (editingTask && editTitle.trim()) {
      onTaskUpdate?.(editingTask, { title: editTitle.trim() });
      setEditingTask(null);
      setEditTitle('');
    }
  }, [editingTask, editTitle, onTaskUpdate]);

  const handleCancelEdit = useCallback(() => {
    setEditingTask(null);
    setEditTitle('');
  }, []);

  const renderAssignedUsers = useCallback((task: Task) => {
    const maxVisible = 4;
    const visibleUsers = task.assignedUsers.slice(0, maxVisible);
    const remainingCount = task.assignedUsers.length - maxVisible + (task.extraUsers || 0);

    return (
      <div style={{ width: '210px' }}>
        {visibleUsers.map((user: AssignedUser, index: number) => (
          <OverlayTrigger key={`${index}`} placement="top" overlay={<Tooltip>{user.name}</Tooltip>}>
            <Image fluid className="img-radius wid-45 img-thumbnail me-n3" src={user.img} alt={`${user.name} avatar`} />
          </OverlayTrigger>
        ))}
        {remainingCount > 0 && (
          <div
            className="img-radius wid-40 hei-40 me-n3 d-inline-flex align-items-center justify-content-center card align-middle f-16 mb-0 bg-info text-white"
            title={`${remainingCount} more users`}
          >
            {remainingCount}
          </div>
        )}
        <div
          className="img-radius wid-40 hei-40 me-n3 d-inline-flex align-items-center justify-content-center card align-middle f-16 mb-0 bg-success text-white"
          title="Add user"
        >
          <i className="ph ph-plus" />
        </div>
      </div>
    );
  }, []);

  const renderTaskRow = useCallback(
    (task: Task) => (
      <tr key={task.id}>
        <td>#{task.id}</td>
        <td>
          {editingTask === task.id ? (
            <div className="d-flex align-items-center gap-2">
              <Form.Control
                type="text"
                size="sm"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSaveEdit();
                  if (e.key === 'Escape') handleCancelEdit();
                }}
                autoFocus
              />
              <Button variant="success" size="sm" onClick={handleSaveEdit} disabled={!editTitle.trim()} title="Save changes">
                <i className="ph ph-check" style={{ verticalAlign: '-1px' }} />
              </Button>
              <Button variant="outline-secondary" size="sm" onClick={handleCancelEdit} title="Cancel editing">
                <i className="ph ph-x" style={{ verticalAlign: '-1px' }} />
              </Button>
            </div>
          ) : (
            <div className="fw-semibold">{task.title}</div>
          )}
        </td>
        <td>
          <Form.Control
            type="date"
            className="form-control-sm"
            value={selectedDates[task.id] || task.dueDate || ''}
            onChange={(e) => {
              const newDate = e.target.value;
              setSelectedDates((prev) => ({ ...prev, [task.id]: newDate }));
              onTaskUpdate?.(task.id, { dueDate: newDate });
            }}
          />
        </td>
        <td>
          <Dropdown
            align="end"
            onSelect={(status) => {
              if (status) {
                onStatusChange?.(task.id, status);
              }
            }}
            style={{ position: 'unset' }}
          >
            <Dropdown.Toggle variant="light-secondary" size="sm" aria-label={`Status of task ${task.id}`}>
              {task.status}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {taskStatus.map((status) => (
                <Dropdown.Item key={status.value} eventKey={status.value} className={status.color ? `text-${status.color}` : ''}>
                  {status.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </td>
        <td>{renderAssignedUsers(task)}</td>
        <td className="text-end pe-4">
          <Dropdown align="end" style={{ position: 'unset' }}>
            <Dropdown.Toggle
              as="a"
              href="#!"
              variant="outline-secondary"
              size="sm"
              className="p-1 arrow-none text-secondary"
              aria-label={`Actions for task ${task.id}`}
            >
              <i className="ph ph-dots-three-outline-vertical fs-6" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleTaskAction('attach', task.id)}>
                <i className="ph ph-file-plus" />
                Attach File
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleTaskAction('edit', task.id)}>
                <i className="ph ph-pencil-simple-line" />
                Edit Task
              </Dropdown.Item>
              <hr className="m-0 my-2" />
              <Dropdown.Item onClick={() => handleTaskAction('reassign', task.id)}>
                <i className="ph ph-arrow-u-up-left" />
                Reassign Task
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleTaskAction('delete', task.id)} className="text-danger">
                <i className="ph ph-trash" />
                Delete Task
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    ),
    [
      selectedDates,
      onTaskUpdate,
      onStatusChange,
      handleTaskAction,
      renderAssignedUsers,
      editingTask,
      editTitle,
      handleSaveEdit,
      handleCancelEdit
    ]
  );

  if (loading) {
    return (
      <MainCard title="Task List" className="table-card">
        <div className="text-center py-5">
          <div className="spinner-border text-primary mb-3" role="status" aria-hidden="true">
            <span className="visually-hidden">Loading tasks...</span>
          </div>
          <div className="text-muted fs-6">Loading tasks...</div>
        </div>
      </MainCard>
    );
  }

  if (error) {
    return (
      <MainCard title="Task List" className="table-card">
        <Alert variant="danger" className="mb-0">
          <Alert.Heading className="h5">
            <i className="ph ph-warning-circle me-2" />
            Error Loading Tasks
          </Alert.Heading>
          <p className="mb-0">{error}</p>
        </Alert>
      </MainCard>
    );
  }

  return (
    <MainCard title="Task List" className="table-card" bodyClassName="pb-0">
      <Table responsive className="mb-0">
        <thead>
          <tr>
            <th className="ps-4">#</th>
            <th>Task list</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Assigned User</th>
            <th className="text-end pe-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-5">
                <div className="text-muted">
                  <i className="ph ph-clipboard-text fs-1 d-block mb-3" />
                  <div className="fs-5">No tasks found</div>
                  <small>Create your first task to get started</small>
                </div>
              </td>
            </tr>
          ) : (
            tasks.map(renderTaskRow)
          )}
        </tbody>
      </Table>
    </MainCard>
  );
}
