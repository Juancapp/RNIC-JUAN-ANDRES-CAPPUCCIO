import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

import React from "react";
import { List } from "../screens/list";
import { EditTask } from "../screens/editTask";

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{ headerTitle: "Navigation" }}
    >
      <Stack.Screen
        name="List"
        component={List}
        options={{ headerTitle: "List" }}
      />
      <Stack.Screen
        name="EditTask"
        component={EditTask}
        options={{ headerTitle: "Edit Task" }}
      />
    </Stack.Navigator>
  );
};
