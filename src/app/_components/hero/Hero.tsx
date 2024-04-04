import Image from 'next/image';
import { FC } from 'react';
import Button from '../button/Button';
import heroImg from '/public/hero-bg.jpg';

const Hero: FC = () => {
  return (
    <section className="relative min-h-[400px] pt-[85px] pb-[99px]">
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
      <div className="relative w-full max-w-containerSm mx-auto">
        <div className="grid grid-cols-2 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-[54px] leading-tight font-bold text-lightGray">
              Чіп Чендж
            </h1>
            <p className="font-medium text-xl text-mistyGray">
              Обмінник валют - навчальний
            </p>
            <div className="max-w-[234px] w-full mt-[26px]">
              <Button href="/converter" color="light">
                Конвертер валют
              </Button>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/card-debit.png"
              alt="Debit card"
              width="341"
              height="216"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
