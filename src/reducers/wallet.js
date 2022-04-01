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
  default:
    return state;
  }
};

export default wallet;
