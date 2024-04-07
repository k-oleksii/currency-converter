import Image from 'next/image';
import { FC } from 'react';
import Button from '../button/Button';

interface IDetailsSection {
  title: string;
  desc: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const DetailsSection: FC<IDetailsSection> = ({
  title,
  desc,
  image,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="py-[120px]">
      <div className="w-full max-w-containerSm mx-auto">
        <div className="grid grid-cols-2 gap-x-[50px] items-center">
          <div className="flex flex-col max-w-[380px]">
            <h2 className="mb-[20px] text-[40px] leading-tight font-bold text-darkGray">
              {title}
            </h2>
            <p className="text-xl text-gray">{desc}</p>
            <div className="max-w-[251px] w-full mt-[26px]">
              <Button href={buttonLink} size="large">
                {buttonText}
              </Button>
            </div>
          </div>
          <div className="flex justify-end w-[436px]">
            <Image
              src={image}
              width="436"
              height="314"
              alt="Debit card"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
