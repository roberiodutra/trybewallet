import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onInputChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      this.setState({
        email: value,
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
    const { email, password } = this.state;
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
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
