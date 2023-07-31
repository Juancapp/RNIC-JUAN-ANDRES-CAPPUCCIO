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

export interface FormTask {
  title: string;
  description: string;
  limitDate?: string;
}

export type RootStackParamList = {
  List: undefined;
  EditTask: undefined;
  AddTask: undefined;
};
export interface ContextValues {
  tasksData: Task[];
  setTasksData: Dispatch<SetStateAction<Task[]>>;
  selectedTask: Task | null;
  setSelectedTask: Dispatch<SetStateAction<Task | null>>;
}

export enum Keys {
  SELECTED_TASK_DATA_KEY = "SELECTED_TASK_DATA",
  TASKS_DATA_KEY = "TASKS_DATA",
  NAVIGATION_KEY = "NAVIGATION",
}
