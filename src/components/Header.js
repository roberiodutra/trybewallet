import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, totalExpenses = 0 } = this.props;

    return (
      <header>
        <span data-testid="email-field">{email}</span>
        {' '}
        <span data-testid="total-field">{totalExpenses}</span>
        {' '}
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  totalExpenses: PropTypes.bool,
}.isRequired;

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  totalExpenses: wallet.totalExpenses,
});

export default connect(mapStateToProps)(Header);
