import {
  AppState,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles";
import { TasksList } from "../TasksList";
import Form from "../Form";
import { useEffect, useRef, useState } from "react";
import { data } from "../../constants/data";

export default function Layout() {
  const [tasksData, setTasksData] = useState(data);
  const isIos = Platform.OS === "ios";

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "background") {
        setTasksData([]);
      }
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
        <StatusBar
          barStyle={isIos ? "light-content" : "dark-content"}
          backgroundColor={isIos ? "black" : "white"}
        />
        <SafeAreaView style={styles.safeArea}>
          <TasksList switchState={switchState} data={tasksData} />
          <Form passData={handleFormData} />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
