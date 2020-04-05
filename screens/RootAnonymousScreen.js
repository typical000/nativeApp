/* global __DEV__ */

import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    padding: 10,
  },
  action: {
    backgroundColor: '#fa0000',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  text: {
    fontSize: 15,
    color: '#fff'
  }
});

const RootAnonymousScreen = ({navigation}) => {
  // @todo Add real validation or something like this (using Formik, etc.)
  const onPress = useCallback(() => {
    // In case if we are in DEV mode - allow to return back for debugging purposes
    if (__DEV__) {
      // @todo Move to constants
      navigation.push('Authorized');
      return;
    }

    // @todo Move to constants
    navigation.replace('Authorized');
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* @todo Add real content */}
      <RectButton
        style={styles.action}
        onPress={onPress}
      >
        <Text style={styles.text}>
          Press me to authorize
        </Text>
      </RectButton>
    </ScrollView>
  );
};

RootAnonymousScreen.propTypes = {
  // From 'react-navtive' screen.
  // @see App.js
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
}

export default RootAnonymousScreen;
