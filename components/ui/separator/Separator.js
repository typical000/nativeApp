import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

import {Text} from '../typography';
import color from '../../../constants/color';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flex: 1,
    alignItems: 'center',
  },
  bar: {
    height: 1,
    backgroundColor: color.divider,
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
  },
  text: {
    paddingHorizontal: 16,
    backgroundColor: color.appBackground,
  },
});

/**
 * Separator between sections
 */
const Separator = ({children}) => (
  <View style={styles.container}>
    <View style={styles.bar} />
    <View style={styles.text}>
      <Text small>{children}</Text>
    </View>
  </View>
);

Separator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Separator;
