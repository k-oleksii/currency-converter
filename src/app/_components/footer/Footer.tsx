import Logo from '../logo/Logo';
import NavList from '../nav-list/NavList';
import Socials from '../socials/Socials';
import Support from '../support/Support';

export default function Footer() {
  return (
    <div className="pt-[53px] pb-[60px] bg-lightGray">
      <div className="w-full mx-auto px-4 xl:max-w-container xl:px-0">
        <div className="grid grid-cols-5 gap-x-[40px]">
          <div>
            <Logo />
            <p>
              04128, м.Київ, вул. Хрещатик, 19 Ліцензія НБУ №156 Ⓒ ПАТ ЧіпЧендж,
              2019-2023
            </p>
          </div>
          <div>
            <NavList component="footer" />
          </div>
          <div>
            <Support
              iconName="phone"
              phone="3773"
              desc="Цілодобова підтримка"
            />
          </div>
          <div>
            <Support
              iconName="call"
              phone="8 800 111 22 33"
              desc="Безкожтовно для дзвінків в межах України"
            />
          </div>
          <div>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
