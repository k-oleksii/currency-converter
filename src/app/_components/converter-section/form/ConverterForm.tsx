'use client';

import { ICONS } from '@/app/_util/constants';
import { getIcon } from '@/app/_util/helpers/getIcon';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../../button/Button';
import { DatePicker } from '../../form-elements/DatePicker';
import { Input } from '../../form-elements/Input';
import { CustomSelect } from '../../form-elements/Select';

const ConverterForm = ({ data }) => {
  const methods = useForm({
    mode: 'onTouched',
    defaultValues: {
      from: {
        currency: '0',
        currency_type: 'UAN',
      },
      to: {
        currency: '0.00',
        currency_type: 'USD',
      },
      date: new Date(),
    },
  });

  const fromCurrency = methods.watch('from');
  const toCurrency = methods.watch('to');

  useEffect(() => {
    const cur = data?.find(item => item.currency === toCurrency.currency_type);

    if (fromCurrency.currency || fromCurrency.currency_type) {
      const result = parseFloat(fromCurrency.currency) / Number(cur.saleRateNB);
      methods.setValue('to.currency', result.toFixed(2));
    }
  }, [fromCurrency.currency, fromCurrency.currency_type]);

  useEffect(() => {
    const cur = data?.find(item => item.currency === toCurrency.currency_type);

    if (toCurrency.currency || toCurrency.currency_type) {
      const result = parseFloat(toCurrency.currency) * Number(cur.saleRateNB);
      methods.setValue('from.currency', result.toFixed(2));
    }
  }, [toCurrency.currency, toCurrency.currency_type]);

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
                <Input type="text" name="from.currency" />
              </div>
              <div className="flex-1">
                <CustomSelect name="from.currency_type" items={data} />
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
                <Input type="text" name="to.currency" />
              </div>
              <div className="flex-1">
                <CustomSelect name="to.currency_type" items={data} />
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
