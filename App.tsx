import React, { useEffect } from "react";
import RNBootSplash from "react-native-bootsplash";
AppContext;

import Layout from "./src/components/Layout";
import { AppContext } from "./src/context/contextProvider";
import { NavigationContainer } from "@react-navigation/native";

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <AppContext>
      <NavigationContainer>
        <Layout />
      </NavigationContainer>
    </AppContext>
  );
}

export default App;
