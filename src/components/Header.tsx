import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {icon} from '../assets/icons';
import {Colors} from '../constants/Colors';

export const Header = () => {
  return (
    <View style={headerStyle.container}>
      <Image source={icon.logo} style={headerStyle.logo} />
    </View>
  );
};

const headerStyle = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  logo: {width: 45, height: 45},
});
