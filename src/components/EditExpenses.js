import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editExpense } from '../actions';

class EditExpenses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    this.selectExpenseToEdit();
  }

  selectExpenseToEdit = () => {
    const { expenses, expenseID } = this.props;
    const editedExpense = expenses.find((el) => el.id === expenseID);
    this.setState({ ...editedExpense });
  }

  onHandleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  onHandleClick = (e) => {
    e.preventDefault();
    const { editWaste, editorModeOff } = this.props;
    editWaste({ ...this.state });
    editorModeOff();
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
              type="number"
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
              defaultValue={ description }
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
              data-testid="currency-input"
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
            Editar despesa
          </button>
        </form>
      </section>
    );
  }
}

EditExpenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.arrayOf(PropTypes.object),
  editWaste: PropTypes.func,
  expenseID: PropTypes.number,
  editorModeOff: PropTypes.func,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
  expenseID: wallet.expenseID,
});

const mapDispatchToProps = (dispatch) => ({
  editWaste: (expense) => dispatch(editExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpenses);
