import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductsScreen from "../components/products/ProductsScreen";

const Stack = createStackNavigator();

const ProductsStack = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Products" component={ProductsScreen} />
    </Stack.Navigator>
  )
}

export default ProductsStack;