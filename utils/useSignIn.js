import {useEffect} from 'react';
// eslint-disable-next-line
// import AsyncStorage from '@react-native-community/async-storage';
import {useMutation} from '@apollo/react-hooks';

import AUTH_TOKEN_QUERY from '../graphql/queries/authToken';
import SIGN_IN_MUTATION from '../graphql/mutations/signIn';

/**
 * Hook for sign in process
 * @example
 *
 * const {signIn} = useSignIn();
 * signIn({variables: {
 *   login,
 *   password,
 * }})
 *
 * @returns {Object} result
 * @returns {Function} result.signIn
 * @returns {Boolean} result.loading
 */
const useSignIn = () => {
  const [signIn, {data, loading, client}] = useMutation(SIGN_IN_MUTATION);

  useEffect(() => {
    if (!data || !data.signIn.authToken) {
      return;
    }

    try {
      // @todo Uncomment for imitation of real logged in application. But you need log-out button :)
      // await AsyncStorage.setItem('@userToken', data.signIn.authToken);
      const result = client.readQuery({query: AUTH_TOKEN_QUERY});

      client.writeQuery({
        query: AUTH_TOKEN_QUERY,
        data: {
          ...result,
          authToken: data.signIn.authToken,
        },
      });
    } catch (error) {
      console.warn('[useSignIn] Saving error.', error);
    }
  }, [data, client]);

  return {signIn, loading};
};

export default useSignIn;
