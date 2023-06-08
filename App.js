import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import GlobalState from "./src/context/GlobalState";
import ProductsStack from "./src/stacks/ProductsStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GlobalState>
          <ProductsStack />
        </GlobalState>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
