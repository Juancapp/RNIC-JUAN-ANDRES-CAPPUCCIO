import React, { useState, ReactNode, createContext, useEffect } from "react";
import { data } from "../constants/data";
import { ContextValues, Keys, SetStateType, Task } from "../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ContextProvider = createContext<ContextValues | null>(null);

export const AppContext = ({ children }: { children: ReactNode }) => {
  const [tasksData, setTasksData] = useState<Task[] | []>([]);
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
      await AsyncStorage.setItem(Keys.TASKS_DATA_KEY, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getStorage = async (
    key: Keys,
    setState: SetStateType<Task[] | []> | SetStateType<Task | null>,
    elseData: Task | Task[] | null
  ) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const convertedData =
        jsonValue != null ? JSON.parse(jsonValue) : elseData;
      setState(convertedData);
    } catch (e) {
      console.log(e);
    }
    if (key === Keys.TASKS_DATA_KEY) setIsSetted(true);
  };

  useEffect(() => {
    storageConstants.forEach((element) => {
      getStorage(element.key, element.setState, element.elseData);
    });
  }, []);

  useEffect(() => {
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
