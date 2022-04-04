import actions from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actions.SET_CURRENCIES:
    return { ...state,
      currencies: action.currencies };

  case actions.SET_EXPENSES:
    return { ...state,
      expenses: [...state.expenses,
        {
          id: state.expenses.length,
          ...action.expenses,
        }],
    };

    // ref: https://medium.com/@ralph1786/adding-and-removing-items-from-redux-store-6d1303ed32c6 //
  case actions.DEL_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((item) => item.id !== action.expense.id),
    };

  case actions.SELECT_EXPENSE_ID:
    return {
      ...state,
      expenseID: action.expenseID,
    };

  case actions.EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id !== action.expenses.id) {
          return expense;
        }
        return action.expenses;
      }),
    };

  default:
    return state;
  }
};

export default wallet;
