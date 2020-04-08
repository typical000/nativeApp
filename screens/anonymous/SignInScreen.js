import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

import Row from '../../components/ui/row';
import Container from '../../components/ui/container';
import {Text} from '../../components/ui/typography';
import TextInput from '../../components/ui/textInput';
import {ButtonPrimary} from '../../components/ui/button';
import useSignIn from '../../utils/useSignIn';

/**
 * Screen with sign in form. Nothing more.
 */
const SignInScreen = ({navigation}) => {
  const {signIn} = useSignIn();

  const handleSignInPress = useCallback(() => {
    signIn({
      variables: {
        login: 'foo',
        password: 'bar',
      },
    });
  }, [signIn]);

  const handleResetPasswordPress = useCallback(() => {
    navigation.push('ResetPassword');
  }, [navigation]);

  return (
    <Container>
      <Row first>
        <Text>Welcome! Sign in, please.</Text>
      </Row>

      <Row>
        <TextInput
          onChangeText={() => {
            console.log('CHANGE');
          }}
          onBlur={() => {
            console.log('BLUR');
          }}
          keyboardType="email-address"
          placeholder="Your email"
        />
      </Row>

      <Row align={Row.ALIGN.LEFT}>
        <Text small onPress={handleResetPasswordPress}>
          Forgot password?
        </Text>
      </Row>
      <Row last>
        <ButtonPrimary onPress={handleSignInPress}>Log in</ButtonPrimary>
      </Row>
    </Container>
  );
};

SignInScreen.propTypes = {
  // From 'react-navtive' screen. @see App.js
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignInScreen;
