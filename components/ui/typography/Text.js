import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

import font from '../../../constants/font';
import color from '../../../constants/color';

const styles = StyleSheet.create({
  text: {
    color: color.text.default,
    fontFamily: font.type.regular,
    fontSize: font.normal.size,
    lineHeight: font.normal.lineHeight,
  },
  small: {
    fontSize: font.small.size,
    lineHeight: font.small.lineHeight,
  },
  muted: {
    color: color.text.muted,
  },
  centered: {
    textAlign: 'center',
  },
});

const StyledText = ({children, centered, small, muted, ...props}) => (
  <Text
    style={[
      styles.text,
      centered && styles.centered,
      muted && styles.muted,
      small && styles.small,
    ]}
    {...props}
  >
    {children}
  </Text>
);

StyledText.propTypes = {
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool,
  small: PropTypes.bool,
  muted: PropTypes.bool,
};

StyledText.defaultProps = {
  centered: true,
  small: false,
  muted: false,
};

export default StyledText;
