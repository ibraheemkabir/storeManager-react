import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import './authcontainer.scss';

export default function index() {
  return (
    <div className="authContainer">
      <div className="shadow">
        <Form>
          <Form.Field>
            <input label="username" placeholder="UserName" />
          </Form.Field>
          <Form.Field>
            <input placeholder="Password" />
          </Form.Field>
          <Button type="submit">Login</Button>
          <span>Forgot your password?</span>
        </Form>
      </div>
    </div>
  );
}
