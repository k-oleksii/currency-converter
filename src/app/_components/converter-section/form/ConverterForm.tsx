'use client';

import { ICONS } from '@/app/_util/constants';
import { getIcon } from '@/app/_util/helpers/getIcon';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../../button/Button';
import { DatePicker } from '../../form-elements/DatePicker';
import { Input } from '../../form-elements/Input';
import { CustomSelect } from '../../form-elements/Select';
import { currencyData } from './currencyData';

const ConverterForm = () => {
  const methods = useForm({
    mode: 'onTouched',
  });

  const onSubmit = (data: any) => {
    console.log('form data', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex items-center gap-x-12">
          <div className="flex flex-col flex-1 gap-y-[30px]">
            <span className="font-medium font-xl text-gray">В мене є:</span>
            <div className="flex flex-wrap gap-x-[15px] gap-y-6">
              <div className="w-[220px]">
                <Input type="text" name="inner_currency" />
              </div>
              <div className="flex-1">
                <CustomSelect
                  name="inner_currency_type"
                  defaultValue="Uan"
                  items={currencyData}
                />
              </div>
              <div className="w-[220px]">
                <DatePicker name="date" />
              </div>
            </div>
          </div>
          <div className="-mt-[22px]">{getIcon(ICONS.arrows)}</div>
          <div className="flex flex-col flex-1 gap-y-[30px]">
            <span className="font-medium font-xl text-gray">
              Хочу придбати:
            </span>
            <div className="flex flex-wrap justify-end gap-x-[15px] gap-y-6">
              <div className="w-[220px]">
                <Input type="text" name="outer_currency" />
              </div>
              <div className="flex-1">
                <CustomSelect
                  name="outer_currency_type"
                  defaultValue="USD"
                  items={currencyData}
                />
              </div>
              <div className="w-[220px]">
                <Button type="submit" size="large">
                  Зберегти результат
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ConverterForm;
