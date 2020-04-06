import React, {useCallback} from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';

import useSignIn from '../../utils/useSignIn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    padding: 10,
  },
  action: {
    marginTop: 10,
    backgroundColor: '#0000fa',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  text: {
    fontSize: 15,
    color: '#fff',
  },
});

/**
 * Screen with sign in form. Nothing more.
 */
const SignInScreen = () => {
  const {signIn} = useSignIn();

  const handlePress = useCallback(() => {
    signIn({
      variables: {
        login: 'foo',
        password: 'bar',
      },
    });
  }, [signIn]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text>Welcome! Sign in.</Text>
      <RectButton style={styles.action} onPress={handlePress}>
        <Text style={styles.text}>Sign me in!</Text>
      </RectButton>
    </ScrollView>
  );
};

export default SignInScreen;
