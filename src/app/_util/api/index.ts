const url = 'https://api.privatbank.ua/p24api/exchange_rates?date=12.04.2024';

export const api = {
  async getCurrency() {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  },
};
