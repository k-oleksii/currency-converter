'use server';

import { api } from '../api';

async function getExchangeRate(data) {
  const { exchangeRate } = await api.getCurrency('12.04.2024');

  return exchangeRate;
}

export default getExchangeRate;
