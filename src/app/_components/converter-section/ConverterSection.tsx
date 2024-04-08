import { FC } from 'react';
import ConverterForm from './form/ConverterForm';

const ConvertSection: FC = () => {
  return (
    <section className="bg-lightGray py-20">
      <div className="max-w-containerMd w-full mx-auto">
        <div className="bg-white pt-[53px] pr-[68px] pb-[55px] pl-[48px] rounded">
          <h2 className="mb-[20px] text-[40px] leading-tight font-bold text-darkGray">
            Конвертер валют
          </h2>

          <ConverterForm />
        </div>
      </div>
    </section>
  );
};

export default ConvertSection;
