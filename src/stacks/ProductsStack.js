import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductsScreen from "../components/products/ProductsScreen";
import ProductDetailsScreen from "../components/products/ProductDetailsScreen";
import CartScreen from "../components/cart/CartScreen";
import CheckoutScreen from "../components/checkout/CheckoutScreen";

const Stack = createStackNavigator();

const ProductsStack = () => {
  return(
    <Stack.Navigator screenOptions={{ headerTintColor: 'white',headerStyle: { backgroundColor: 'black'} }}>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Products Details" component={ProductDetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  )
}

export default ProductsStack;