import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {Platform, StatusBar} from 'react-native';
import {SplashScreen} from 'expo';

// @todo Maybe we don't need such things?
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ApolloProvider, useQuery} from '@apollo/react-hooks';

import font from './constants/font';
import useLinking from './navigation/useLinking';
import createClient from './graphql/createClient';
import AUTH_TOKEN_QUERY from './graphql/queries/authToken';

import AnonymousScreen from './screens/AnonymousScreen';
import AuthorizedScreen from './screens/AuthorizedScreen';
import AppLayout from './components/AppLayout';

const Root = createStackNavigator();

/**
 * Providers-wrapped application
 */
const AppWithProviders = (props) => (
  <ApolloProvider client={createClient()}>
    <App {...props} />
  </ApolloProvider>
);

/**
 * Internal application with initialization thing such as
 * resources loading, user auth check, etc.
 */
const App = ({skipLoadingScreen}) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [initialNavigationState, setInitialNavigationState] = useState();
  const containerRef = useRef();

  // @todo What it is?
  const {getInitialState} = useLinking(containerRef);

  const {data, loading: isTokenLoading} = useQuery(AUTH_TOKEN_QUERY);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          [font.regular]: require('./static/fonts/Montserrat-Regular.ttf'),
          [font.bold]: require('./static/fonts/Montserrat-SemiBold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, [getInitialState]);

  if (!isLoadingComplete && !skipLoadingScreen && isTokenLoading) {
    return null;
  }

  return (
    <AppLayout>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <NavigationContainer
        ref={containerRef}
        initialState={initialNavigationState}
      >
        <Root.Navigator headerMode="none">
          {data.authToken ? (
            <Root.Screen name="Authorized" component={AuthorizedScreen} />
          ) : (
            <Root.Screen name="Anonymous" component={AnonymousScreen} />
          )}
        </Root.Navigator>
      </NavigationContainer>
    </AppLayout>
  );
};

App.propTypes = {
  skipLoadingScreen: PropTypes.bool,
};

App.defaultProps = {
  skipLoadingScreen: false,
};

export default AppWithProviders;
