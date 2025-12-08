// Task-related type definitions

export interface AssignedUser {
  img: string;
  name: string;
}

export interface Task {
  id: number;
  title: string;
  status: string;
  name: string;
  assignedUsers: AssignedUser[];
  extraUsers?: number;
  dueDate?: string;
}

export interface TaskStatus {
  value: string;
  label: string;
  color?: string;
}

export interface TaskAction {
  id: string;
  label: string;
  icon: string;
  onClick: (taskId: number) => void;
}

export interface TaskListProps {
  tasks?: Task[];
  loading?: boolean;
  error?: string;
  onTaskUpdate?: (taskId: number, updates: Partial<Task>) => void;
  onTaskDelete?: (taskId: number) => void;
  onStatusChange?: (taskId: number, status: string) => void;
}
