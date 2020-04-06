/* eslint-disable no-bitwise */

import AsyncStorage from '@react-native-community/async-storage';

/**
 * @param {Number} ms
 * @returns {Promise}
 */
const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * @param {Number} len
 * @returns {String}
 */
const randomToken = (size) => {
  const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return [...Array(size)].reduce(
    (entry) => entry + list[~~(Math.random() * list.length)],
    '',
  );
};

/**
 * @const {String}
 */
const GENERAL_ERROR_MESSAGE =
  'Something went wrong. Please repeat operation soon';

/**
 * @const {String}
 */
const ARGUMENT_ERROR_MESSAGE = 'This login is reserved.';

export default {
  resolvers: {
    Query: {
      authToken: async () => {
        let userToken;

        try {
          userToken = await AsyncStorage.getItem('@userToken');
        } catch (e) {
          // Restoring token failed
          console.warn(e);
        }

        return userToken;
      },
    },
    Mutation: {
      signIn: async (_, args) => {
        // Imitate real server that validates data
        await wait(2000);

        return {
          authToken: randomToken(36),
          errors: {
            // Just an example how we can handle argument validation on server
            arguments:
              args.login === 'foo'
                ? [
                    {
                      argument: 'login',
                      errors: ARGUMENT_ERROR_MESSAGE,
                      __typename: 'MutationPayloadError',
                    },
                  ]
                : [],
            // Another example, how to handle general errors
            general: args.password === 'bar' ? [GENERAL_ERROR_MESSAGE] : [],
            __typename: 'MutationPayloadErrors',
          },
          __typename: 'SignInPayload',
        };
      },
    },
  },
};
