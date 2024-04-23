import { ICONS } from '@/app/_util/constants';
import { getIcon } from '@/app/_util/helpers/getIcon';
import { FC } from 'react';

interface IEmpty {
  text: string;
}

const Empty: FC<IEmpty> = ({ text }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-[71px] h-[90px] text-gray">{getIcon(ICONS.empty)}</div>
      <span className="font-medium text-2xl text-gray">{text}</span>
    </div>
  );
};

export default Empty;
