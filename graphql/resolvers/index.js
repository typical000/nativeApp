import merge from 'lodash/merge';
import auth from './auth';

/**
 * Exports all defaults and resolvers together to use inside Apollo client.
 * @see createClient.js
 */
export default merge(auth);
