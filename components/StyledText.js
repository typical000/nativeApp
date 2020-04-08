/* eslint-disable react/prop-types */

import * as React from 'react';
import {Text} from 'react-native';

export function MonoText(props) {
  return <Text {...props} style={props.style} />;
  // return <Text {...props} style={[props.style, {fontFamily: 'space-mono'}]} />;
}

export default {MonoText};
