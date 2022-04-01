import getCurrencies, { getExchanges } from '../services/awesomeAPI';

const actions = {
  SET_USER_EMAIL: 'SET_USER_EMAIL',
  SET_CURRENCIES: 'SET_CURRENCIES',
  FETCH_API: 'FETCH_API',
};

export const setUserEmail = (email) => (
  {
    type: actions.SET_USER_EMAIL, email,
  });

export const setCurrencies = (currencies) => (
  {
    type: actions.SET_CURRENCIES, currencies,
  });

export const fetchAPI = (data) => (
  {
    type: actions.FETCH_API, data,
  });

export const currenciesThunk = () => async (dispatch) => {
  const currencies = await getCurrencies();
  dispatch(setCurrencies(currencies));
};

export const expenseThunk = () => async (dispatch) => {
  const exchange = await getExchanges();
  dispatch(fetchAPI(exchange));
};

export default actions;
