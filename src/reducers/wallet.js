import actions from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actions.SET_CURRENCIES:
    return { ...state, currencies: action.currencies };
  case actions.SET_EXPENSES:
    return { ...state,
      expenses: [...state.expenses,
        {
          id: state.expenses.length,
          ...action.expenses,
        }],
    };
  default:
    return state;
  }
};

export default wallet;
