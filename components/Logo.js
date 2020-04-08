import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {Title} from './ui/typography';
import font from '../constants/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 280,
    resizeMode: 'contain',
  },
  title: {
    fontSize: font.big.size * 2, // Just a hack, not from brandbook.
    lineHeight: font.big.lineHeight * 1.5,
    textTransform: 'uppercase',
    marginBottom: 48, // Dirty hack.
  },
});

/**
 * Applicaiton main logo.
 */
const Logo = () => (
  <View styles={styles.container}>
    <Image source={require('../static/images/logo.png')} style={styles.logo} />
    <Title style={styles.title}>Find your pussy</Title>
  </View>
);

export default Logo;
