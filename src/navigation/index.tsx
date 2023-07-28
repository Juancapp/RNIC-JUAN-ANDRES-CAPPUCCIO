import React from "react";
import { List } from "../screens/list";
import { EditTask } from "../screens/editTask";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "../types/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="List"
        screenOptions={{ headerTitle: "Navigation" }}
      >
        <Stack.Screen name="EditTask" component={EditTask} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
