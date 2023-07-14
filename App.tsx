/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
  Keyboard,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import Card from "./src/components/Card";
import { data } from "./src/constants/data";
import { TasksList } from "./src/components/TasksList";
import Form from "./src/components/Form";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const [tasksData, setTasksData] = useState(data);

  const handleFormData = (data: { title: string; description: string }) => {
    const { title, description } = data;
    const newTask = {
      id: tasksData.length,
      title: title,
      description: description,
      isDone: false,
    };
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

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss;
        }}
      >
        <View>
          <TasksList switchState={switchState} data={tasksData} />
          <Form passData={handleFormData} />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default App;
