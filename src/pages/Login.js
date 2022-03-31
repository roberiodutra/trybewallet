import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onEmailChange = () => {};

  onPasswordChange = () => {};

  onButtonClick = () => {};

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <input
          placeholder="email@test.com"
          type="email"
          name="email"
          value={ email }
          testId="email-input"
          onChange={ this.onEmailChange }
        />

        <input
          placeholder="password here"
          type="password"
          name="password"
          min={ 6 }
          value={ password }
          testId="password-input"
          onChange={ this.onPasswordChange }
        />

        <button
          type="button"
          onClick={ this.onButtonClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
