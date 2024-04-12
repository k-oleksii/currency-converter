import { IHistory } from '@/app/_util/_types/types';
import { ICONS } from '@/app/_util/constants';
import { getIcon } from '@/app/_util/helpers/getIcon';
import { FC } from 'react';

const HistoryItem: FC<IHistory> = props => {
  const {
    date,
    inner_currency,
    inner_currency_name,
    outer_currency,
    outer_currency_name,
  } = props;
  return (
    <div className="flex items-center gap-5 min-h-[42px] mt-4 first:mt-0 px-4 py-1 text-lg leading-5 text-silver bg-white rounded">
      <span className="max-w-[25%]">{date}</span>
      <span className="max-w-[30%] font-semibold text-gray">
        {inner_currency} {inner_currency_name}
      </span>
      <span>{getIcon(ICONS.arrow)}</span>
      <span className="max-w-[30%] font-semibold text-gray">
        {outer_currency} {outer_currency_name}
      </span>
    </div>
  );
};

export default HistoryItem;
