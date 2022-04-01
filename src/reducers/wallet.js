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
  default:
    return state;
  }
};

export default wallet;
