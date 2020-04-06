import gql from 'graphql-tag';

export default gql`
  mutation SignInMutation($login: String!, $password: String!) {
    signIn(login: $login, password: $password) @client {
      authToken
      errors {
        general
        arguments {
          argument
          errors
        }
      }
    }
  }
`;
