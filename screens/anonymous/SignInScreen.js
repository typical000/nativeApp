import React, {useCallback} from 'react';

import Row from '../../components/ui/row';
import Container from '../../components/ui/container';
import {Text, TextMuted} from '../../components/ui/typography';
import {ButtonPrimary} from '../../components/ui/button';
import useSignIn from '../../utils/useSignIn';

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
    <Container>
      <Row first>
        <Text>Welcome! Sign in, please.</Text>
      </Row>
      <Row>
        <ButtonPrimary onPress={handlePress}>Sign me in!</ButtonPrimary>
      </Row>
      <Row>
        <TextMuted small>Don&apos;t click on it!</TextMuted>
      </Row>
    </Container>
  );
};

export default SignInScreen;
