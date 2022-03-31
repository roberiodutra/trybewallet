import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      enableButton: false,
    };
  }

  // Regex: https://www.w3resource.com/javascript/form/email-validation.php
  onInputChange = ({ target: { name, value } }) => {
    const { email, password } = this.state;
    const mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const five = 5;

    if (name === 'email') {
      this.setState({
        email: value.match(mailFormat),
      });
    }

    if (name === 'password') {
      this.setState({
        password: value,
      });
    }

    if (email && password.length >= five) {
      this.setState({
        enableButton: true,
      });
    }
  };

  onButtonClick = () => {};

  render() {
    const { email, password, enableButton } = this.state;
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
          disabled={ !enableButton }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
