import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './anonymous/WelcomeScreen';
import SignInScreen from './anonymous/SignInScreen';
import SignUpScreen from './anonymous/SignUpScreen';
import ResetPasswordScreen from './anonymous/ResetPasswordScreen';

const Stack = createStackNavigator();

/**
 * Entry-point for all anonymous page routing
 */
const Anonymous = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
  </Stack.Navigator>
);

export default Anonymous;
