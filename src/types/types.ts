export interface Task {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  img?: string;
  limitDate?: string;
}

export interface CardProps {
  switchState?: (id: number) => void;
  data: Task;
}
export interface ButtonProps {
  onPress?: () => void;
  text: string | number;
  toAdd?: boolean;
  disabled?: boolean;
}

export interface TaskListProps {
  data: Task[];
}

export type RootStackParamList = {
  List: { data: Task[] };
  EditTask: undefined;
  AddTask: undefined;
};
