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
  // Alignment
  left: {
    alignItems: 'flex-start',
  },
  stretch: {
    alignItems: 'stretch',
  },
  center: {
    alignItems: 'center',
  },
  right: {
    alignItems: 'flex-end',
  },
});

/**
 * Basic row for creating vertical rythm
 */
const Row = ({children, first, last, align, ...props}) => (
  <View
    style={[
      styles.row,
      styles[align],
      first && styles.first,
      last && styles.last,
    ]}
    {...props}
  >
    {children}
  </View>
);

Row.ALIGN = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
  STRETCH: 'stretch',
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  first: PropTypes.bool,
  last: PropTypes.bool,
  align: PropTypes.oneOf(Object.values(Row.ALIGN)),
};

Row.defaultProps = {
  first: false,
  last: false,
  align: Row.ALIGN.STRETCH,
};

export default Row;
