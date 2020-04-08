import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './anonymous/WelcomeScreen';
import SignInScreen from './anonymous/SignInScreen';
import SignUpScreen from './anonymous/SignUpScreen';
import ResetPasswordScreen from './anonymous/ResetPasswordScreen';

import {Title} from '../components/ui/typography';
import color from '../constants/color';

const Stack = createStackNavigator();

/**
 * Entry-point for all anonymous page routing
 */
const Anonymous = () => (
  <Stack.Navigator
    screenOptions={{
      // @todo Move to reusable module
      // eslint-disable-next-line
      headerTitle: ({children}) => <Title>{children}</Title>,
      headerTintColor: color.text.default,
      headerTitleAlign: 'center',
      // Remove default bottom shadow / border
      headerStyle: {
        shadowColor: 'transparent',
        elevation: 0,
        borderBottomWidth: 0,
      },
    }}
  >
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{title: 'Sign In'}}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{title: 'Sign Up'}}
    />
    <Stack.Screen
      name="ResetPassword"
      component={ResetPasswordScreen}
      options={{title: 'Reset Password'}}
    />
  </Stack.Navigator>
);

export default Anonymous;
