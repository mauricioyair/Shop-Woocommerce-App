import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View } from 'react-native';

import GlobalState from "./src/context/GlobalState";
import ProductsScreen from "./src/components/products/ProductsScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <GlobalState>
        <View>
          <ProductsScreen />          
        </View>
      </GlobalState>
    </SafeAreaProvider>
  );
}
