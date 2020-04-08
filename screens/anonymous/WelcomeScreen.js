import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo';
import Row from '../../components/ui/row';
import Container from '../../components/ui/container';
import Separator from '../../components/ui/separator';
import {Button, ButtonSecondary} from '../../components/ui/button';

const WelcomeScreen = ({navigation}) => {
  const onSignInPress = useCallback(() => {
    navigation.push('SignIn');
  }, [navigation]);

  const onSignUpPress = useCallback(() => {
    navigation.push('SignUp');
  }, [navigation]);

  return (
    <Container centered>
      <Row first>
        <Logo />
      </Row>
      <Row>
        <Button onPress={onSignInPress}>Sign in</Button>
      </Row>
      <Row>
        <Separator>OR</Separator>
      </Row>
      <Row last>
        <ButtonSecondary onPress={onSignUpPress}>Sign up</ButtonSecondary>
      </Row>
    </Container>
  );
};

WelcomeScreen.propTypes = {
  // From 'react-navtive' screen. @see App.js
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default WelcomeScreen;
