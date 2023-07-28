import React, { useContext, useEffect, useState } from "react";
import RNBootSplash from "react-native-bootsplash";
AppContext;
import {
  Keyboard,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";

import { SafeArea, ViewContainer } from "./styles";
import { TotalNavigator } from "./src/navigation";

import { AppContext } from "./src/context/contextProvider";

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  const isIos = Platform.OS === "ios";

  return (
    <AppContext>
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
            <TotalNavigator />
          </SafeArea>
        </ViewContainer>
      </TouchableWithoutFeedback>
    </AppContext>
  );
}

export default App;
