import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import color from '../../../constants/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.appBackground,
  },
  contentContainer: {
    padding: 32,
  },

  centered: {
    flex: 1,
    justifyContent: 'center',
  },
});

/**
 * Wrapping container around any type of content
 */
const Container = ({children, centered}) => (
  <ScrollView
    style={[styles.container]}
    contentContainerStyle={[
      styles.contentContainer,
      centered && styles.centered,
    ]}
  >
    {children}
  </ScrollView>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool, // Means, that content will be centered vertically
};

Container.defaultProps = {
  centered: false,
};

export default Container;
