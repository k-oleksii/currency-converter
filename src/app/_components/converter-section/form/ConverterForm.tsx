'use client';

import { api } from '@/app/_util/api';
import { ICONS } from '@/app/_util/constants';
import {
  fromConvertCurrency,
  toConvertCurrency,
} from '@/app/_util/helpers/converter';
import { getIcon } from '@/app/_util/helpers/getIcon';
import { IExchangeRateItem } from '@/app/_util/types/types';
import { format } from 'date-fns';
import { FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../../button/Button';
import { DatePicker } from '../../form-elements/DatePicker';
import { Input } from '../../form-elements/Input';
import { CustomSelect } from '../../form-elements/Select';

const ConverterForm: FC = () => {
  const [fromCurrencyChanged, setFromCurrencyChanged] = useState(false);
  const [toCurrencyChanged, setToCurrencyChanged] = useState(false);
  const [exchangeData, setExchangeData] = useState<IExchangeRateItem[]>([]);

  const methods = useForm({
    mode: 'onTouched',

    defaultValues: {
      from: {
        currency: '0',
        currency_type: 'UAH',
      },
      to: {
        currency: '0',
        currency_type: 'USD',
      },
      date: new Date(),
    },
  });

  const { watch, setValue, handleSubmit } = methods;

  const fromCurrency = watch('from');
  const toCurrency = watch('to');
  const defaultDate = watch('date');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getCurrency(format(defaultDate, 'yyyyMMdd'));

        const uahCurrency = {
          r030: 980,
          txt: 'Українська гривня',
          rate: 1,
          cc: 'UAH',
          exchangedate: format(defaultDate, 'dd.MM.yyyy'),
        };

        const updatedExchangeData = [...response, uahCurrency];

        setExchangeData(updatedExchangeData);
      } catch (error) {
        throw new Error('Failed to fetch data' + error);
      }
    };

    fetchData();
  }, [defaultDate]);

  useEffect(() => {
    if (fromCurrencyChanged) {
      const result = fromConvertCurrency(
        fromCurrency.currency,
        fromCurrency.currency_type,
        toCurrency.currency_type,
        exchangeData
      );
      setValue('to.currency', result);
      setFromCurrencyChanged(false);
    }

    if (toCurrencyChanged) {
      const result = toConvertCurrency(
        toCurrency.currency,
        toCurrency.currency_type,
        fromCurrency.currency_type,
        exchangeData
      );
      setValue('from.currency', result);
      setToCurrencyChanged(false);
    }
  }, [
    fromCurrency.currency,
    fromCurrency.currency_type,
    toCurrency.currency_type,
    toCurrency.currency,
    exchangeData,
    fromCurrencyChanged,
    toCurrencyChanged,
    setValue,
  ]);

  const onSubmit = (data: any) => {
    console.log('form data', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-x-12">
          <div className="flex flex-col flex-1 gap-y-[30px]">
            <span className="font-medium font-xl text-gray">В мене є:</span>
            <div className="flex flex-wrap gap-x-[15px] gap-y-6">
              <div className="w-[220px]">
                <Input
                  type="text"
                  name="from.currency"
                  placeholder="0"
                  onChange={() => setFromCurrencyChanged(true)}
                />
              </div>
              <div className="flex-1">
                <CustomSelect
                  name="from.currency_type"
                  items={exchangeData}
                  onChange={() => setFromCurrencyChanged(true)}
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
                <Input
                  type="text"
                  name="to.currency"
                  placeholder="0.00"
                  onChange={() => setToCurrencyChanged(true)}
                />
              </div>
              <div className="flex-1">
                <CustomSelect
                  name="to.currency_type"
                  items={exchangeData}
                  onChange={() => setToCurrencyChanged(true)}
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
