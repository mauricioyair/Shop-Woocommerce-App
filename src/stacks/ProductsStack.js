import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductsScreen from "../components/products/ProductsScreen";
import ProductDetailsScreen from "../components/products/ProductDetailsScreen";
import CartScreen from "../components/cart/CartScreen";

const Stack = createStackNavigator();

const ProductsStack = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Products Details" component={ProductDetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  )
}

export default ProductsStack;