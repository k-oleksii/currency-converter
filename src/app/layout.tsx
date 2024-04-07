import type { Metadata } from 'next';
import Footer from './_components/footer/Footer';
import Header from './_components/header/Header';
import { roboto } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Currency Converter',
  description: 'Currency Converter - basic',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />

        <main className="flex-1 bg-white">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
