export interface Task {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
}

export interface CardProps {
  switchState?: (id: number) => void;
  data: Task;
}

export interface TasksListProps {
  switchState?: (id: number) => void;
  data: Task[];
}

export interface ButtonProps {
  onPress?: () => void;
  text?: string | number;
}
