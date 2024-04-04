import Logo from '@/app/_components/logo/Logo';
import { ICONS } from '@/app/_util/constants';
import { getIcon } from '@/app/_util/helpers/getIcon';
import Link from 'next/link';
import { FC } from 'react';
import NavList from '../nav-list/NavList';

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 grow-0	shrink-0 basis-auto bg-lightGray">
      <div className="w-full mx-auto px-4 xl:max-w-container xl:px-0">
        <div className="flex items-center justify-between gap-x-20 min-h-[91px] py-4">
          <Logo />
          <div className="flex items-center flex-1">
            <nav>
              <NavList />
            </nav>
            <Link
              href="/"
              className="flex gap-x-[15px] ml-auto text-base text-darkGray hover:text-blue transition-all"
            >
              {getIcon(ICONS.cabinet)}
              Особистий кабінет
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
