import getCurrencies, { getExchanges } from '../services/awesomeAPI';

const actions = {
  SET_USER_EMAIL: 'SET_USER_EMAIL',
  SET_CURRENCIES: 'SET_CURRENCIES',
  SET_EXPENSES: 'SET_EXPENSES',
  DEL_EXPENSE: 'DEL_EXPENSE',
  SELECT_EXPENSE_ID: 'SELECT_EXPENSE_ID',
  EDIT_EXPENSE: 'EDIT_EXPENSE',
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

export const deleteExpense = (expense) => (
  {
    type: actions.DEL_EXPENSE, expense,
  });

export const selectExpenseId = (expenseID) => (
  {
    type: actions.SELECT_EXPENSE_ID, expenseID,
  });

export const editExpense = (expenses) => (
  {
    type: actions.EDIT_EXPENSE, expenses,
  });

export const currenciesThunk = () => async (dispatch) => {
  const currencies = await getCurrencies();
  dispatch(setCurrencies(currencies));
};

export const expenseThunk = (expenses) => async (dispatch) => {
  const exchangeRates = await getExchanges();
  dispatch(setExpenses({ ...expenses, exchangeRates }));
};

export default actions;
