import Validator from 'validator';

export function validate(user) {
  const errors = {};
  if (Validator.isEmpty(user.username)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(user.email)) {
    errors.email = 'Invalid Email Address';
  }
  if (Validator.isEmpty(user.password)) {
    errors.password = 'Password field is required';
  } else if (!new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$', 'g').test(user.password)) {
    errors.password = 'Password must be at least 8 characters, with a number and uppercase letter';
  }
  return errors;
}

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

export function articleValidator(article) {
  const errors = {};
  if (Validator.isEmpty(article.title)) {
    errors.title = 'Title field is required';
  }
  if (Validator.isEmpty(article.description)) {
    errors.description = 'Description field is required';
  }
  if (Validator.isEmpty(article.category)) {
    errors.category = 'A category must be selected';
  }
  if (Validator.isEmpty(article.content)) {
    errors.content = 'Content is required';
  }
  if (Validator.isEmpty(article.tags)) {
    errors.tags = 'Atleast one tag must be selected';
  }
  return errors;
}
