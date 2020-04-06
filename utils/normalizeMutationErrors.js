import isEmpty from 'lodash/isEmpty';

/**
 * Helper function to retrive errors in readable format
 * for usage inside forms (display validation, for e.g.).
 * Due to making better UX on frontend - we display only first error from arrived
 * array from backend.
 * As result we recieve:
 *
 * Example of input data:
 *
 * {
 *   arguments: [
 *     {argument: 'field1', errors: ['foo error']},
 *     {argument: 'field2', errors: ['bar error']}
 *   ],
 *   general: ['bar error'],
 * }
 *
 * The result will be:
 *
 *   {
 *     field1: 'foo error',
 *     field2: 'bar error',
 *     general: 'baz error',
 *   }
 *
 * @param {Object} errors
 * @param {Array} errors.arguments
 * @param {Array} errors.general
 * @returns {Object|null} null - in case if no errors occured
 */
const normalizeMutationErrors = (errors) => {
  const result = {};

  if (errors.arguments && errors.arguments.length) {
    errors.arguments.forEach((error) => {
      result[error.argument] = error.errors[0]; // eslint-disable-line prefer-destructuring
    });
  }

  if (errors.general && errors.general.length) {
    result.general = errors.general[0]; // eslint-disable-line prefer-destructuring
  }

  if (isEmpty(result)) return null;
  return result;
};

export default normalizeMutationErrors;
