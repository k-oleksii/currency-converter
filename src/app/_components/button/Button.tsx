import classNames from 'classnames';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface IButton {
  color?: 'light' | 'blue';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  children: ReactNode;
}

const Button: FC<IButton> = ({
  color = 'blue',
  size = 'medium',
  href,
  children,
  ...props
}) => {
  const buttonClasses = classNames(
    'flex items-center justify-center w-full py-2 p-4 font-medium text-lg text-center border-none rounded cursor-pointer transition-all',
    {
      'text-gray bg-lightGray hover:bg-mistyGray hover:text-darkGray/80':
        color === 'light',
      'text-lightGray bg-blue hover:bg-lightBlue': color === 'blue',
    },
    {
      'min-h-[51px]': size === 'small',
      'min-h-[53px]': size === 'medium',
      'min-h-[60px]': size === 'large',
    }
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;