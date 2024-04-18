import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { api } from '../api';
import { IExchangeRateItem } from '../types/types';

export const useGetExchangeData = (initialDate: Date) => {
  const [exchangeData, setExchangeData] = useState<IExchangeRateItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getCurrency(format(initialDate, 'yyyyMMdd'));
        const uahCurrency = {
          r030: 980,
          txt: 'Українська гривня',
          rate: 1,
          cc: 'UAH',
          exchangedate: format(initialDate, 'dd.MM.yyyy'),
        };

        const updatedExchangeData = [...response, uahCurrency];
        setExchangeData(updatedExchangeData);
      } catch (error) {
        throw new Error('Failed to fetch data' + error);
      }
    };
    fetchData();
  }, [initialDate]);

  return Array.isArray(exchangeData) ? exchangeData : [];
};
