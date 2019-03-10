import { signInValidator } from './validate';

describe('Test validator', () => {
  it('should check if email field is empty', () => {
    const user = {
      username: '',
      password: 'passwordA23s'
    };
    const checkUser = signInValidator(user);
    expect(checkUser.email).toEqual('Email field is required');
  });

  it('should check if password is in right format', () => {
    const user = {
      username: 'faker@faker.com',
      password: 'p'
    };

    const checkUser = signInValidator(user);
    expect(checkUser.password).toEqual('Password must be at least 2 characters, with a number and uppercase letter');
  });


  it('should check if password is in right format', () => {
    const user = {
      username: 'faker@faker.com',
      password: ''
    };
    const checkUser = signInValidator(user);
    expect(checkUser.password).toEqual('Password field is required');
  });
});
