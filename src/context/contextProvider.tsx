import React, {
  useState,
  ReactNode,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";
import { data } from "../constants/data";
import { Task } from "../types/types";

interface ContextValues {
  tasksData: Task[];
  setTasksData: Dispatch<SetStateAction<Task[]>>;
}

export const ContextProvider = createContext<ContextValues | null>(null);

export const AppContext = ({ children }: { children: ReactNode }) => {
  const [tasksData, setTasksData] = useState(data);

  const contextValue = { tasksData, setTasksData };

  return (
    <ContextProvider.Provider value={contextValue}>
      {children}
    </ContextProvider.Provider>
  );
};
