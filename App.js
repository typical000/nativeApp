import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SplashScreen} from 'expo';

// @todo We don't need such things
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import RootAnonymousScreen from './screens/RootAnonymousScreen';
import RootAuthorizedScreen from './screens/RootAuthorizedScreen';

import useLinking from './navigation/useLinking';

const Root = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App = ({skipLoadingScreen}) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [initialNavigationState, setInitialNavigationState] = useState();
  const containerRef = useRef();

  // @todo What is it?
  const {getInitialState} = useLinking(containerRef);

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
          'space-mono': require('./static/fonts/SpaceMono-Regular.ttf'),
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
  }, []);

  if (!isLoadingComplete && !skipLoadingScreen) {
    return null;
  }

  // @todo Check cookie after loading and based on it - open "anonymous" or "authorized" parts

  // @todo
  // How to overwrite headers: https://reactnavigation.org/docs/header-buttons

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <NavigationContainer
        ref={containerRef}
        initialState={initialNavigationState}
      >
        <Root.Navigator>
          <Root.Screen name="Anonymous" component={RootAnonymousScreen} />
          <Root.Screen name="Authorized" component={RootAuthorizedScreen} />
        </Root.Navigator>
      </NavigationContainer>
    </View>
  );
};

App.propTypes = {
  skipLoadingScreen: PropTypes.bool,
};

App.defaultProps = {
  skipLoadingScreen: false,
}

export default App;
