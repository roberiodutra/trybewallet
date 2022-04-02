import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class ExpenseTable extends Component {
  currencyExchanges = (elem) => {
    const currencyName = () => (elem.currency === 'USD'
      ? 'Dólar Comercial'
      : elem.exchangeRates[elem.currency].name.split('/')[0]);

    return (
      <>
        <td>{currencyName()}</td>
        <td>{Number(elem.exchangeRates[elem.currency].ask).toFixed(2)}</td>
        <td>{Number(elem.exchangeRates[elem.currency].ask * elem.value).toFixed(2)}</td>
      </>
    );
  };

  render() {
    const { expenses, delExpense } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((elem) => (
            <tr key={ elem.id }>
              <td>{elem.description}</td>
              <td>{elem.tag}</td>
              <td>{elem.method}</td>
              <td>{Number(elem.value).toFixed(2)}</td>
              {this.currencyExchanges(elem)}
              <td>Real</td>
              <td>

                <button
                  type="button"
                  onClick={ () => delExpense(elem) }
                  data-testid="delete-btn"
                >
                  Excluir
                </button>

              </td>
              <td>

                <button
                  type="button"
                  onClick={ () => editorMode() }
                  data-testid="edit-btn"
                >
                  Editar
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  delExpense: PropTypes.func,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delExpense: (del) => dispatch(deleteExpense(del)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
