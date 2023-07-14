/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  AppState,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import Card from "./src/components/Card";
import { data } from "./src/constants/data";
import { TasksList } from "./src/components/TasksList";
import Form from "./src/components/Form";
import { styles } from "./styles";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const [tasksData, setTasksData] = useState(data);

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        setTasksData([]);
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const handleFormData = (data: { title: string; description: string }) => {
    const newTask = {
      ...data,
      id: tasksData.length,
      isDone: false,
    };
    if (data.title !== "" && data.description !== "")
      setTasksData([...tasksData, newTask]);
  };

  const switchState = (id: number) => {
    setTasksData((prevTasksData) => {
      return prevTasksData
        .map((task) => {
          if (task.id === id) {
            return { ...task, isDone: !task.isDone };
          }
          return task;
        })
        .sort((a, b) => a.id - b.id);
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss;
      }}
    >
      <KeyboardAvoidingView
        style={styles.viewContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <SafeAreaView style={styles.safeArea}>
          <TasksList switchState={switchState} data={tasksData} />
          <Form passData={handleFormData} />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default App;
