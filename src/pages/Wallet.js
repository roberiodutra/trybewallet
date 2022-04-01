import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currenciesThunk } from '../actions';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends Component {
  componentDidMount() {
    const { getAllCurrencies } = this.props;
    getAllCurrencies();
  }

  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
        <ExpenseTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  getAllCurrencies: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getAllCurrencies: () => dispatch(currenciesThunk()),
});

export default connect(null, mapDispatchToProps)(Wallet);
