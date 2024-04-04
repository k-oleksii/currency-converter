import { ICONS } from '@/app/_constants';
import { getIcon } from '@/app/_helpers/getIcon';
import Link from 'next/link';
import { socialsData } from './socialsData';

export default function Socials() {
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
}
