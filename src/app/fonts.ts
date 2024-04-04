import { Roboto, Work_Sans } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
});

export const workSans = Work_Sans({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});
