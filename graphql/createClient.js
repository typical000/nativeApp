/* global __DEV__ */

import {Platform} from 'react-native';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';

import resolvers from './resolvers';

/**
 * Just create a client instance. Nothing more :)
 */
const createApolloClient = () => {
  const {defaults, resolvers: localStateResolvers} = resolvers;

  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: 'http://localhost:4000/',
  });

  const client = new ApolloClient({
    cache,
    link,
    resolvers: localStateResolvers,
    name: Platform.OS,
    connectToDevTools: __DEV__,
  });

  cache.writeData({
    data: {...defaults},
  });

  return client;
};

export default createApolloClient;
