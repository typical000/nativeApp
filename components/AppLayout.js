import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import color from '../constants/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.appBackground,
  },
});

/**
 * Wrapping layout for entire application
 */
const AppLayout = ({children}) => (
  <View style={styles.container}>{children}</View>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
