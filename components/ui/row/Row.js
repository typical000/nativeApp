import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  row: {
    marginVertical: 8, // Instead of CSS it doesn't squash margins. So in real it's double
  },
  // Since rect-native doesn't support :first-chuld and :last-child things like CSS do.
  first: {
    marginTop: 0,
  },
  last: {
    marginBottom: 0,
  },
});

/**
 * Basic row for creating vertical rythm
 */
const Row = ({children, first, last, ...props}) => (
  <View
    style={[styles.row, first && styles.first, last && styles.last]}
    {...props}
  >
    {children}
  </View>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
  first: PropTypes.bool,
  last: PropTypes.bool,
};

Row.defaultProps = {
  first: false,
  last: false,
};

export default Row;
