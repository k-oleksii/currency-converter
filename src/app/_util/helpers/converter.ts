import { IExchangeRateItem } from '@/app/_util/types/types';

export const fromConvertCurrency = (
  amount: string,
  fromCurrency: string,
  toCurrency: string,
  exchangeRates: IExchangeRateItem[]
) => {
  let fromRate = 1,
    toRate = 1;

  exchangeRates.forEach((item: IExchangeRateItem) => {
    if (item.cc === fromCurrency) {
      fromRate = item.rate;
    }
    if (item.cc === toCurrency) {
      toRate = item.rate;
    }
  });

  const result = (parseFloat(amount) / toRate) * fromRate;
  return result.toFixed(2);
};

export const toConvertCurrency = (
  amount: string,
  toCurrency: string,
  fromCurrency: string,
  exchangeRates: IExchangeRateItem[]
) => {
  let fromRate = 1,
    toRate = 1;

  exchangeRates.forEach((item: IExchangeRateItem) => {
    if (item.cc === toCurrency) {
      fromRate = item.rate;
    }
    if (item.cc === fromCurrency) {
      toRate = item.rate;
    }
  });

  const result = (parseFloat(amount) / toRate) * fromRate;
  return result.toFixed(2);
};
