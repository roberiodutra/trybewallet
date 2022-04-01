import getCurrencies, { getExchanges } from '../services/awesomeAPI';

const actions = {
  SET_USER_EMAIL: 'SET_USER_EMAIL',
  SET_CURRENCIES: 'SET_CURRENCIES',
  SET_EXPENSES: 'SET_EXPENSES',
};

export const setUserEmail = (email) => (
  {
    type: actions.SET_USER_EMAIL, email,
  });

export const setCurrencies = (currencies) => (
  {
    type: actions.SET_CURRENCIES, currencies,
  });

export const setExpenses = (expenses) => (
  {
    type: actions.SET_EXPENSES, expenses,
  });

export const currenciesThunk = () => async (dispatch) => {
  const currencies = await getCurrencies();
  dispatch(setCurrencies(currencies));
};

export const expenseThunk = (expenses) => async (dispatch) => {
  const exchange = await getExchanges();
  dispatch(setExpenses({ ...expenses, exchange }));
};

export default actions;
