import React, {useCallback} from 'react';
import {StyleSheet, Text} from 'react-native';
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
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    color: '#fff',
  },
});

const WelcomeScreen = ({navigation}) => {
  const onSignInPress = useCallback(() => {
    navigation.push('SignIn');
  }, [navigation]);

  const onSignUpPress = useCallback(() => {
    navigation.push('SignUp');
  }, [navigation]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* @todo Add real content */}
      <RectButton style={styles.action} onPress={onSignInPress}>
        <Text style={styles.text}>Sign In</Text>
      </RectButton>

      <RectButton style={styles.action} onPress={onSignUpPress}>
        <Text style={styles.text}>Sign Up</Text>
      </RectButton>
    </ScrollView>
  );
};

WelcomeScreen.propTypes = {
  // From 'react-navtive' screen. @see App.js
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default WelcomeScreen;
