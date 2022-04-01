import React, { Component } from 'react';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
    };
  }

  onHandleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description } = this.state;
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
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
