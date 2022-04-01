const endpoint = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();

  return Object.keys(data).filter(
    (currency) => currency !== 'USDT',
  );
};

export const getExchanges = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export default getCurrencies;
