import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import color from '../../../constants/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.appBackground,
  },
  contentContainer: {
    paddingHorizontal: 32,
    paddingTop: 8,
    paddingBottom: 16,
    minHeight: '100%',
  },
  content: {
    flex: 1,
  },
  centered: {
    justifyContent: 'center',
  },
});

/**
 * Wrapping container around any type of content
 */
const Container = ({children, centered}) => (
  <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={[styles.content, centered && styles.centered]}>
        {children}
      </View>
    </ScrollView>
  </View>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool, // Means, that content will be centered vertically
};

Container.defaultProps = {
  centered: false,
};

export default Container;
