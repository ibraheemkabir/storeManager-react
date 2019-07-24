import Validator from 'validator';

export function signInValidator(user) {
  const errors = {};

  if (Validator.isEmpty(user.username)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isAlphanumeric(user.username)) {
    errors.email = 'Invalid Username';
  }
  if (Validator.isEmpty(user.password)) {
    errors.password = 'Password field is required';
  } else if (!new RegExp('^(?=.*[a-z]).{2,}$', 'g').test(user.password)) {
    errors.password = 'Password must be at least 2 characters, with a number and uppercase letter';
  }
  return errors;
}
