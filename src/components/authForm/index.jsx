import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import InlineError from '../../helpers/InlineError';
import './authcontainer.scss';
import { signInValidator } from '../../helpers/validate';
import { userLogin } from '../../actions/authActions/authActions';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: ''
      },
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    const errors = signInValidator(user);
    if (errors) {
      this.setState({ errors });
    }
    const { login } = this.props;
    login(user);
  }

  handleChange(event) {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({
      user,
      errors: {}
    });
  }

  render() {
    const { user, errors } = this.state;
    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="authContainer">
        <div className="shadow">
          <Form loading={this.props.auth.authIsLoading}>
            <Form.Field>
              <Input
                placeholder="UserName"
                name="username"
                value={user.email}
                onChange={this.handleChange}
              />
            </Form.Field>
            {<InlineError text={errors.email} />}
            <Form.Field>
              <Input
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={this.handleChange}
              />
            </Form.Field>
            {<InlineError text={errors.password} />}
            <Button type="submit" onClick={this.handleSubmit}>
              Login
            </Button>
            <span className="forgot">Forgot your password?</span>
          </Form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(userLogin(user))
});

const mapStateToProps = state => ({
  auth: state.authReducer
});

export { index as Login };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);

index.propTypes = {
  login: PropTypes.func,
  auth: PropTypes.object
};

index.defaultProps = {
  login: null,
  auth: {}
};
