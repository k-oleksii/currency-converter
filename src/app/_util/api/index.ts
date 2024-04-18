// const url = 'https://api.privatbank.ua/p24api/exchange_rates';
const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange';

export const api = {
  async getCurrency(date: string) {
    const response = await fetch(`${url}?date=${date}&json`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  },
};
