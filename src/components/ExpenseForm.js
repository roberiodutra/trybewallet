import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expenseThunk } from '../actions';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  onHandleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  onHandleClick = (e) => {
    e.preventDefault();
    const { setExpenseState } = this.props;
    setExpenseState(this.state);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const categories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const paymentForm = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <section>
        <form>
          <label htmlFor="expense">
            Valor:
            <input
              type="text"
              name="value"
              value={ value }
              id="expense"
              onChange={ this.onHandleChange }
              data-testid="value-input"
            />
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              value={ description }
              id="description"
              onChange={ this.onHandleChange }
              data-testid="description-input"
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              value={ currency }
              id="currency"
              onChange={ this.onHandleChange }
            >
              { currencies.map((curr) => (
                <option
                  key={ curr }
                  value={ curr }
                >
                  { curr }
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="method">
            Método de pagamento:
            <select
              id="method"
              name="method"
              value={ method }
              onChange={ this.onHandleChange }
              data-testid="method-input"
            >
              {paymentForm.map((item) => (
                <option key={ item }>{ item }</option>
              ))}
            </select>
          </label>

          <label htmlFor="tag">
            Tag:
            <select
              id="tag"
              name="tag"
              value={ tag }
              onChange={ this.onHandleChange }
              data-testid="tag-input"
            >
              {categories.map((item) => (
                <option key={ item }>{ item }</option>
              ))}
            </select>
          </label>

          <button type="submit" onClick={ this.onHandleClick }>
            Adicionar despesa
          </button>
        </form>
      </section>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenseState: (state) => dispatch(expenseThunk(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
