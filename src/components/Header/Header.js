import React from "react";
import { View, Image, StyleSheet } from "react-native";

import {sizes} from '../../resources/constants';
import logo from "../../assets/images/header/logo.png";
import cartBtnIcon from '../../assets/images/header/cart-icon.png';

const Header = props => {
  return(
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Image style={styles.cartBtn} source={cartBtnIcon} />
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
  logo: {
    width: 96,
    height: 17,
  },
  cartBtn: {
    width: 25,
    height: 25,
  },
});

export default Header;