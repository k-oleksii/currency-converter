import { useEffect, useState } from 'react';
import { api } from '../api';

export const useGetExchange = () => {
  const [] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await api.getCurrency();

      console.log(res);
    };

    fetch();
  }, []);
};
