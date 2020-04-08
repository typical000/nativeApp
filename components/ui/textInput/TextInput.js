import React, {useCallback, useState} from 'react';
import {TextInput as NativeTextInput, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

import font from '../../../constants/font';
import color from '../../../constants/color';

const styles = StyleSheet.create({
  input: {
    fontFamily: font.type.bold,
    color: color.text.default,
    borderBottomWidth: 1,
    borderBottomColor: '#ff0000',
  },
  focused: {
    borderBottomColor: '#0000ff',
  },
});

/**
 * Basic text input styled to fit brandbook.
 */
const TextInput = ({error, onBlur, onFocus, ...props}) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = useCallback(
    (...args) => {
      setFocused(true);
      if (onFocus) onFocus.apply(this, args);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (...args) => {
      setFocused(false);
      if (onBlur) onBlur.apply(this, args);
    },
    [onBlur],
  );

  // @todo
  // Change font family for placeholder as described
  // https://stackoverflow.com/questions/35700955/how-to-change-font-family-for-textinput-placeholder-in-react-native

  return (
    <View>
      <NativeTextInput
        {...props}
        onBlur={handleBlur}
        onFocus={handleFocus}
        style={[styles.input, focused && styles.focused]}
        placeholderTextColor={color.text.muted}
      />
    </View>
  );
};

TextInput.propTypes = {
  error: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default TextInput;
