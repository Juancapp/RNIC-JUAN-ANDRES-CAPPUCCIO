import React, {
  useState,
  ReactNode,
  createContext,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import { data } from "../constants/data";
import { ContextValues, Keys, Task } from "../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ContextProvider = createContext<ContextValues | null>(null);

export const AppContext = ({ children }: { children: ReactNode }) => {
  const [tasksData, setTasksData] = useState<Task[]>([]);
  const [isSetted, setIsSetted] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const storageConstants = [
    { key: Keys.TASKS_DATA_KEY, setState: setTasksData, elseData: data },
    {
      key: Keys.SELECTED_TASK_DATA_KEY,
      setState: setSelectedTask,
      elseData: null,
    },
  ];

  const updateStorage = async (value: Task[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(storageConstants[0].key, jsonValue);
    } catch (e) {
      console.error("Error:", e);
    }
  };

  const getStorage = async (
    key: Keys,
    setState:
      | Dispatch<SetStateAction<Task[]>>
      | Dispatch<SetStateAction<Task | null>>,
    elseData: Task | Task[] | null
  ) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const convertedData =
        jsonValue != null ? JSON.parse(jsonValue) : elseData;
      setState(convertedData);
    } catch (e) {
      console.log("Error", e);
    }
    key === Keys.TASKS_DATA_KEY && setIsSetted(true);
  };

  useEffect(() => {
    storageConstants.forEach((element) => {
      getStorage(element.key, element.setState, element.elseData);
    });
  }, []);

  useEffect(() => {
    isSetted && updateStorage(tasksData);
  }, [tasksData, isSetted]);

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
