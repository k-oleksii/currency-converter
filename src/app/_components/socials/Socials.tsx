import { ICONS } from '@/app/_util/constants';
import { getIcon } from '@/app/_util/helpers/getIcon';
import Link from 'next/link';
import { FC } from 'react';
import { socialsData } from './socialsData';

const Socials: FC = () => {
  return (
    <div className="flex items-center gap-x-[15px]">
      {socialsData?.map(item => (
        <Link
          href={item.url}
          key={item.name}
          className="text-darkGray hover:text-blue transition-all"
        >
          {getIcon(ICONS[item.name as keyof typeof ICONS])}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
