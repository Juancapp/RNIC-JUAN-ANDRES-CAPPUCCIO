import React, { useEffect } from "react";
import RNBootSplash from "react-native-bootsplash";

import Layout from "./src/components/Layout";

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return <Layout />;
}

export default App;
