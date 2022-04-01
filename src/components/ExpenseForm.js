import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
    };
  }

  onHandleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, paymentMethod } = this.state;
    return (
      <div>
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
              {currencies.map((curr) => (
                <option
                  key={ curr }
                  value={ curr }
                >
                  { curr }
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="paymentMethod">
            Método de pagamento:
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={ paymentMethod }
              onChange={ this.onHandleChange }
              data-testid="method-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

export default connect(mapStateToProps)(ExpenseForm);
