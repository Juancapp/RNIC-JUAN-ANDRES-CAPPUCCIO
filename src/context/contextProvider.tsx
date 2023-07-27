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
  isToEdit: boolean;
  setIsToEdit: SetStateType<boolean>;
}

export const ContextProvider = createContext<ContextValues | null>(null);

export const AppContext = ({ children }: { children: ReactNode }) => {
  const [tasksData, setTasksData] = useState<Task[] | []>([]);
  const [isSetted, setIsSetted] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isToEdit, setIsToEdit] = useState<boolean>(false);

  useEffect(() => {
    const getMyObject = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("tasksdata");
        setTasksData(jsonValue != null ? JSON.parse(jsonValue) : data);
      } catch (e) {
        console.log(e);
      }
      setIsSetted(true);
    };
    getMyObject();
  }, []);

  useEffect(() => {
    const updateStorage = async (value: Task[]) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("tasksdata", jsonValue);
      } catch (e) {
        console.log(e);
      }
    };

    isSetted && updateStorage(tasksData);
  }, [tasksData]);

  useEffect(() => {
    console.log("selectedTask: ", selectedTask);
  }, [selectedTask]);

  const contextValue = {
    tasksData,
    setTasksData,
    selectedTask,
    setSelectedTask,
    isToEdit,
    setIsToEdit,
  };

  return (
    <ContextProvider.Provider value={contextValue}>
      {children}
    </ContextProvider.Provider>
  );
};
