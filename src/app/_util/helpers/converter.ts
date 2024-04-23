import { IExchangeRateItem } from '@/app/_util/types/types';

export const fromConvertCurrency = (
  amount: string,
  fromCurr: string,
  toCurr: string,
  exchangeRates: IExchangeRateItem[]
) => {
  let fromRate = 1,
    toRate = 1;

  if (!isFinite(parseFloat(amount))) return '';

  exchangeRates?.forEach((item: IExchangeRateItem) => {
    if (item.cc === fromCurr) {
      fromRate = item.rate;
    }
    if (item.cc === toCurr) {
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

  if (!isFinite(parseFloat(amount))) return '';

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
