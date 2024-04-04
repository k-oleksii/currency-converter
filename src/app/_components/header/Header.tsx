import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';

export default function Header() {
  return (
    <header className="bg-lightGray">
      <div className="w-full mx-auto px-4 xl:max-w-desktopContainer xl:px-0">
        <div className="flex items-center justify-between min-h-[91px] py-4">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}
