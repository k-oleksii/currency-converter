import { FC } from 'react';
import Logo from '../logo/Logo';
import NavList from '../nav-list/NavList';
import Socials from '../socials/Socials';
import Support from '../support/Support';

const Footer: FC = () => {
  return (
    <div className="grow-0	shrink-0 basis-auto pt-[53px] pb-[60px] bg-lightGray">
      <div className="w-full mx-auto px-4 xl:max-w-container xl:px-0">
        <div className="flex justify-between items-start gap-x-[40px]">
          <div className="flex flex-col gap-4 max-w-[183px]">
            <Logo />
            <p className="text-xs leading-4">
              04128, м.Київ, вул. Хрещатик, 19 Ліцензія НБУ №156
              <br />Ⓒ ПАТ ЧіпЧендж, 2019-2023
            </p>
          </div>
          <NavList component="footer" />
          <Support iconName="phone" phone="3773" desc="Цілодобова підтримка" />
          <div className="max-w-[183px]">
            <Support
              iconName="call"
              phone="8 800 111 22 33"
              desc="Безкожтовно для дзвінків в межах України"
            />
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Footer;
