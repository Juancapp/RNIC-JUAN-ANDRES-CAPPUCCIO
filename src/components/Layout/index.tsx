import {
  AppState,
  Keyboard,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { TasksList } from "../TasksList";
import Form from "../Form";
import { useContext, useEffect } from "react";
import { SafeArea, ViewContainer } from "./styles";
import { ContextProvider } from "../../context/contextProvider";

export default function Layout() {
  const isIos = Platform.OS === "ios";
  const { tasksData } = useContext(ContextProvider)!;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss;
      }}
    >
      <ViewContainer behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <StatusBar
          barStyle={isIos ? "light-content" : "dark-content"}
          backgroundColor={isIos ? "black" : "white"}
        />
        <SafeArea>
          <TasksList data={tasksData} />
          <Form />
        </SafeArea>
      </ViewContainer>
    </TouchableWithoutFeedback>
  );
}
