import React, { useEffect } from "react";
import { List } from "../screens/list";
import { EditTask } from "../screens/editTask";

import { Keys, RootStackParamList } from "../types/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AddTask } from "../screens/addTask";
import AddTaskIcon from "../assets/icons/AddTask.svg";
import ListIcon from "../assets/icons/List.svg";
import { colors } from "../constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const TabScreenOne = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="EditTask" component={EditTask} />
    </Stack.Navigator>
  );
};

export const TotalNavigator = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();
  const NAVIGATION_KEY = Keys.NAVIGATION_KEY;

  useEffect(() => {
    const getStorageNavigationState = async () => {
      const jsonValue = await AsyncStorage.getItem(NAVIGATION_KEY);
      const initialState = jsonValue ? JSON.parse(jsonValue) : undefined;
      if (initialState !== undefined) {
        setInitialState(initialState);
      }
      setIsReady(true);
    };

    if (!isReady) {
      getStorageNavigationState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) => {
        AsyncStorage.setItem(NAVIGATION_KEY, JSON.stringify(state));
      }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name === Routes.SCREEN_ONE) {
              return (
                <ListIcon stroke={!focused ? "gray" : colors.primaryButton} />
              );
            }
            if (route.name === Routes.SCREEN_TWO) {
              return (
                <AddTaskIcon
                  stroke={!focused ? "gray" : colors.primaryButton}
                />
              );
            }
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name={Routes.SCREEN_ONE} component={TabScreenOne} />
        <Tab.Screen name={Routes.SCREEN_TWO} component={AddTask} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
