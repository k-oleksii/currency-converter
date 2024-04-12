import { IHistory } from '../_types/types';

export const getSortData = (data: IHistory[]) => {
  const sortData = data
    ?.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    })
    .slice(0, 8);

  return sortData;
};
