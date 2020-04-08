import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

import font from '../../../constants/font';
import color from '../../../constants/color';

const styles = StyleSheet.create({
  title: {
    color: color.text.default,
    fontFamily: font.type.bold,
    fontSize: font.big.size,
    lineHeight: font.big.lineHeight,
  },
  centered: {
    textAlign: 'center',
  },
});

const Title = ({children, centered, style, ...props}) => (
  <Text style={[styles.title, centered && styles.centered, style]} {...props}>
    {children}
  </Text>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.number, // For web env
    PropTypes.objectOf(PropTypes.any), // For native env.
  ]),
};

Title.defaultProps = {
  centered: true,
};

export default Title;
