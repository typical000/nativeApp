import gql from 'graphql-tag';

export default gql`
  query authTokenQuery {
    authToken @client
  }
`;
