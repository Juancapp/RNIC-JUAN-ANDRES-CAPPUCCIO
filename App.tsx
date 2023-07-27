import React, { useEffect } from "react";
import RNBootSplash from "react-native-bootsplash";
AppContext;

import Layout from "./src/components/Layout";
import { AppContext } from "./src/context/contextProvider";

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <AppContext>
      <Layout />
    </AppContext>
  );
}

export default App;
