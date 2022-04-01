import getCurrencies from '../services/awesomeAPI';

const actions = {
  SET_USER_EMAIL: 'SET_USER_EMAIL',
  SET_CURRENCIES: 'SET_CURRENCIES',
};

export const setUserEmail = (email) => (
  {
    type: actions.SET_USER_EMAIL, email,
  });

export const setCurrencies = (currencies) => (
  {
    type: actions.SET_CURRENCIES, currencies,
  });

export const currenciesThunk = () => async (dispatch) => {
  const currencies = await getCurrencies();
  dispatch(setCurrencies(currencies));
};

export default actions;
