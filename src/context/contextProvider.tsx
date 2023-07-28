import React, {
  useState,
  ReactNode,
  createContext,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";
import { data } from "../constants/data";
import { Task } from "../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type SetStateType<T> = Dispatch<SetStateAction<T>>;

interface ContextValues {
  tasksData: Task[] | [];
  setTasksData: SetStateType<Task[]>;
  selectedTask: Task | null;
  setSelectedTask: SetStateType<Task | null>;
}

export const ContextProvider = createContext<ContextValues | null>(null);

export const AppContext = ({ children }: { children: ReactNode }) => {
  const [tasksData, setTasksData] = useState<Task[] | []>([]);
  const [isSetted, setIsSetted] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const TASKS_DATA_KEY = "TASKS_DATA";

  useEffect(() => {
    const getStorage = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(TASKS_DATA_KEY);
        setTasksData(jsonValue != null ? JSON.parse(jsonValue) : data);
      } catch (e) {
        console.log(e);
      }
      setIsSetted(true);
    };
    getStorage();
  }, []);

  useEffect(() => {
    const updateStorage = async (value: Task[]) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(TASKS_DATA_KEY, jsonValue);
      } catch (e) {
        console.log(e);
      }
    };

    isSetted && updateStorage(tasksData);
  }, [tasksData]);

  const contextValue = {
    tasksData,
    setTasksData,
    selectedTask,
    setSelectedTask,
  };

  return (
    <ContextProvider.Provider value={contextValue}>
      {children}
    </ContextProvider.Provider>
  );
};
