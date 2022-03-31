import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validEmail: false,
    };
  }

  // Regex: https://www.w3resource.com/javascript/form/email-validation.php
  onInputChange = ({ target: { name, value } }) => {
    const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (name === 'email') {
      this.setState({
        email: value,
        validEmail: value.match(mailFormat),
      });
    }

    if (name === 'password') {
      this.setState({
        password: value,
      });
    }
  };

  onButtonClick = () => {};

  render() {
    const { email, password, validEmail } = this.state;
    return (
      <div>
        <input
          placeholder="email@test.com"
          type="email"
          name="email"
          value={ email }
          testId="email-input"
          onChange={ this.onInputChange }
          required
        />

        <input
          placeholder="password here"
          type="password"
          name="password"
          minLength="6"
          value={ password }
          testId="password-input"
          onChange={ this.onInputChange }
          required
        />

        <button
          type="button"
          onClick={ this.onButtonClick }
          disabled={ !validEmail }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
