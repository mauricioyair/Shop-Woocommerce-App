import React from "react";
import { Text, View } from 'react-native';

import GlobalState from "./src/context/GlobalState";

export default function App() {
  return (
    <GlobalState>
      <View>
        <Text>Hola Mundo</Text>  
      </View>
    </GlobalState>
  );
}
