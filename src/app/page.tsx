import Image from 'next/image';
import Button from './_components/button/Button';
import Hero from './_components/hero/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-[120px]">
        <div className="w-full max-w-containerSm mx-auto">
          <div className="grid grid-cols-2 gap-x-[50px] items-center">
            <div className="flex flex-col max-w-[380px]">
              <h2 className="mb-[20px] text-[40px] leading-tight font-bold text-darkGray">
                Конвертер валют
              </h2>
              <p className="text-xl text-gray">
                Переважна діяльність банківської групи за останні чотири звітні
                квартали становить 50 і більше відсотків.
              </p>
              <div className="max-w-[251px] w-full mt-[26px]">
                <Button href="/converter" size="large">
                  Конвертер валют
                </Button>
              </div>
            </div>
            <div className="flex justify-end w-[436px]">
              <Image
                src="/card-bg.png"
                width="436"
                height="314"
                alt="Debit card"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
