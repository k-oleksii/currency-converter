import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-x-2.5">
      <Image
        src="/logo.svg"
        alt="Чіп Чендж"
        width="23"
        height="23"
        priority
      ></Image>
      <span className="font-bold text-xl leading-5 text-darkGray">
        Чіп Чендж
      </span>
    </Link>
  );
}
