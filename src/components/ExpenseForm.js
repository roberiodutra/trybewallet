import React, { Component } from 'react';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onHandleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { value } = this.state;
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
        </form>
      </section>
    );
  }
}

export default ExpenseForm;
