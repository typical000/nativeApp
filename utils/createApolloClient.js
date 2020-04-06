/* global __DEV__ */

import {Platform} from 'react-native';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';

/**
 * Just create a client instance. Nothing more :)
 */
const createApolloClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'http://localhost:4000/',
    }),
    name: Platform.OS,
    connectToDevTools: __DEV__,
  });

export default createApolloClient;
