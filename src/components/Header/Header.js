import React from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";

import {sizes} from '../../resources/constants';
import cartBtnIcon from '../../assets/images/header/cart-icon.png';
import goBackBtn from "../../assets/images/header/go-back-icon.png";

const Header = props => {
  const {route, navigation} = props;
  const isProductsSreen = route.name === "Products";

  return(
    <View style={styles.container}>
      {!isProductsSreen && (
        <Pressable onPress={() => navigation.goBack()}>
          <Image style={styles.arrowIcon} source={goBackBtn} />
        </Pressable>
      )}      
      <Text style={styles.logo}>Shop-Woocomerce</Text>
      <Pressable onPress={() => navigation.navigate('Cart')}>
        <Image style={styles.cartBtn} source={cartBtnIcon} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: sizes.headerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  arrowIcon: {
    width: 25,
    height: 21,
  }, 
  cartBtn: {
    width: 25,
    height: 25,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Header;