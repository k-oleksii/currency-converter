import { ICONS } from '@/app/_util/constants';
import { getIcon } from '@/app/_util/helpers/getIcon';
import Link from 'next/link';
import { FC } from 'react';

interface ISupport {
  iconName: string;
  phone: string;
  desc: string;
}

const Support: FC<ISupport> = ({ iconName, desc, phone }) => {
  return (
    <div className="flex items-baseline gap-[19px]">
      <span className="block text-darkGray">
        {getIcon(ICONS[iconName as keyof typeof ICONS])}
      </span>

      <div className="flex flex-col flex-1 gap-y-2.5">
        <Link
          href={`tel:${phone}`}
          className="font-medium text-darkGray leading-none hover:text-blue"
        >
          {phone}
        </Link>
        <p className="text-xs">{desc}</p>
      </div>
    </div>
  );
};

export default Support;
