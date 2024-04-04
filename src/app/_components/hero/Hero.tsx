import Image from 'next/image';
import heroImg from '/public/hero-bg.jpg';

export default function Hero() {
  return (
    <div className="relative min-h-[400px]">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Hero"
          layout="fill"
          priority
          placeholder="blur"
          className="object-cover"
        />
      </div>
      Hero
    </div>
  );
}
