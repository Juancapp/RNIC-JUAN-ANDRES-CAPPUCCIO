import { Dispatch, SetStateAction } from "react";

export interface Task {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  img?: string;
  limitDate?: string;
  isActive: boolean;
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

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export interface ContextValues {
  tasksData: Task[] | [];
  setTasksData: SetStateType<Task[] | []>;
  selectedTask: Task | null;
  setSelectedTask: SetStateType<Task | null>;
}
export enum Keys {
  SELECTED_TASK_DATA_KEY = "SELECTED_TASK_DATA",
  TASKS_DATA_KEY = "TASKS_DATA",
  NAVIGATION_KEY = "NAVIGATION",
}
