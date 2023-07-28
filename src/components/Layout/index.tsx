import {
  Keyboard,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";

import { SafeArea, ViewContainer } from "./styles";
import { StackNavigator } from "../../navigation";

export default function Layout() {
  const isIos = Platform.OS === "ios";

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
          <StackNavigator />
        </SafeArea>
      </ViewContainer>
    </TouchableWithoutFeedback>
  );
}
