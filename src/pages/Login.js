import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUserEmail } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      enableButton: false,
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
    this.isEnabled();
  };

  // Regex: https://www.w3resource.com/javascript/form/email-validation.php
  isEnabled = () => {
    const { email, password } = this.state;
    const mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const five = 5;

    if (email.match(mailFormat) && password.length >= five) {
      this.setState({
        enableButton: true,
      });
    } else {
      this.setState({
        enableButton: false,
      });
    }
  }

  onButtonClick = () => {
    const { addEmail, history } = this.props;
    const { email } = this.state;
    addEmail(email);
    history.push('/carteira');
  };

  render() {
    const { email, password, enableButton } = this.state;
    return (
      <div>
        <input
          placeholder="email@test.com"
          type="email"
          name="email"
          value={ email }
          data-testid="email-input"
          onChange={ this.onInputChange }
          required
        />

        <input
          placeholder="password here"
          type="password"
          name="password"
          minLength="6"
          value={ password }
          data-testid="password-input"
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

Login.propTypes = {
  addEmail: PropTypes.func,
  history: PropTypes.objectOf(PropTypes.any),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  addEmail: (e) => dispatch(setUserEmail(e)),
});

export default connect(null, mapDispatchToProps)(Login);
