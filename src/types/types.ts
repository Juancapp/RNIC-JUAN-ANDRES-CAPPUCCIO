export interface Task {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  img?: string;
  limitDate: Date;
}

export interface CardProps {
  switchState?: (id: number) => void;
  data: Task;
}
export interface ButtonProps {
  onPress?: () => void;
  text?: string | number;
  toAdd?: boolean;
}

export interface TaskListProps {
  data: Task[];
}
