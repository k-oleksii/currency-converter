'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationData } from './navigationData';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex space-x-12">
        {navigationData?.map(item => {
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
    </nav>
  );
}
