import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currenciesThunk } from '../actions';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import EditExpenses from '../components/EditExpenses';

class Wallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editForm: false,
    };
  }

  componentDidMount() {
    const { getAllCurrencies } = this.props;
    getAllCurrencies();
  }

  editorModeOn = () => {
    this.setState({ editForm: true });
  }

  editorModeOff = () => {
    this.setState({ editForm: false });
  }

  render() {
    const { editForm } = this.state;

    return (
      <div>
        <Header />
        { editForm
          ? <EditExpenses editorModeOff={ this.editorModeOff } />
          : <ExpenseForm /> }
        <ExpenseTable editorModeOn={ this.editorModeOn } />
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
