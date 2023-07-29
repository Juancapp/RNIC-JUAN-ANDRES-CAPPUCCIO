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
  onPress: () => void;
}
export interface ButtonProps {
  onPress?: () => void;
  text: string | number;
  toAdd?: boolean;
  variant?: "primary" | "delete";
  disabled?: boolean;
}

export type RootStackParamList = {
  List: undefined;
  EditTask: undefined;
  AddTask: undefined;
};

export const SELECTED_TASK_DATA_KEY = "SELECTED_TASK_DATA";
