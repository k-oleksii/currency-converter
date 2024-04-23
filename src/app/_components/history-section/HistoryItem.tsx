import { ICONS } from '@/app/_util/constants';
import { getIcon } from '@/app/_util/helpers/getIcon';
import { IHistory } from '@/app/_util/types/types';
import { format } from 'date-fns';
import { FC } from 'react';

const HistoryItem: FC<IHistory> = props => {
  const { from, to, id, date, removeHistory } = props;

  return (
    <div className="relative flex items-center gap-5 min-h-[42px] px-4 py-1 text-lg leading-5 text-silver bg-white rounded group">
      <span className="max-w-[25%]">{format(date, 'yyyy.MM.dd')}</span>
      <span className="max-w-[30%] font-semibold text-gray">
        {from.curr} {from.curr_code}
      </span>
      <span>{getIcon(ICONS.arrow)}</span>
      <span className="max-w-[30%] font-semibold text-gray">
        {to.curr} {to.curr_code}
      </span>
      <button
        type="button"
        className="absolute top-0 right-0 text-gray hover:text-blue transition-all cursor-pointer opacity-0 group-hover:opacity-100"
        onClick={() => removeHistory(id)}
      >
        {getIcon(ICONS.close)}
      </button>
    </div>
  );
};

export default HistoryItem;
