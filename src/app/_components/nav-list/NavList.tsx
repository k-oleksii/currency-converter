'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { navData } from './navData';

interface INavList {
  component?: 'header' | 'footer';
}

const NavList: FC<INavList> = ({ component = 'header' }) => {
  const pathname = usePathname();

  const navListClasses = classNames('flex ', {
    'flex-col space-y-5 font-medium': component === 'footer',
    'items-center space-x-12': component === 'header',
  });

  return (
    <ul className={navListClasses}>
      {navData?.map(item => {
        return (
          <li key={item.name}>
            <Link
              href={item.url}
              className={`text-base ${
                pathname === item.url ? 'text-blue' : 'text-gray'
              } hover:text-blue transition-all`}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
