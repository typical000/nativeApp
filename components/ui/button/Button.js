import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
import PropTypes from 'prop-types';

import color from '../../../constants/color';
import font from '../../../constants/font';

/**
 * @const {String}
 */
const RADIUS = 100;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: RADIUS,
  },
  button: {
    borderRadius: RADIUS,
  },
  text: {
    textAlign: 'center',
    fontFamily: font.type.bold,
    fontSize: font.big.size,
    lineHeight: font.big.lineHeight,
  },
});

/**
 * Basic and default button based on brandbook
 */
const Button = ({onPress, type, children}) => {
  /**
   * Memoized data based on gradient, or not of button
   */
  const [Wrapper, wrapperProps, wrapperStyles, textStyles] = useMemo(() => {
    const haveGradient = color.button[type].backgroundStart;

    return [
      // Component to be applied as "wrapper"
      haveGradient ? LinearGradient : View,
      // Wrapper props
      haveGradient
        ? {
            colors: [
              color.button[type].backgroundStart,
              color.button[type].backgroundEnd,
            ],
            start: [0, 0],
            end: [1, 1],
          }
        : {},
      // Wrapper styles
      haveGradient
        ? {}
        : {
            backgroundColor: color.button[type].background,
          },
      // Text color styles
      {color: color.button[type].color},
    ];
  }, [type]);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Wrapper style={[styles.wrapper, wrapperStyles]} {...wrapperProps}>
        <Text style={[styles.text, textStyles]}>{children}</Text>
      </Wrapper>
    </TouchableOpacity>
  );
};

Button.TYPE = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

Button.propTypes = {
  type: PropTypes.oneOf(Object.values(Button.TYPE)),
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: Button.TYPE.DEFAULT,
};

export default Button;
