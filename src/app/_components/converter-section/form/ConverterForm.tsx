'use client';

import { ICONS } from '@/app/_util/constants';
import {
  fromConvertCurrency,
  toConvertCurrency,
} from '@/app/_util/helpers/converter';
import { getGenerateID } from '@/app/_util/helpers/getGenerateId';
import { getIcon } from '@/app/_util/helpers/getIcon';
import { useGetExchangeData } from '@/app/_util/hooks/useGetExchangeData';
import { useHistoryStore } from '@/app/_util/store/history';
import { FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../../button/Button';
import { DatePicker } from '../../form-elements/DatePicker';
import { Input } from '../../form-elements/Input';
import { CustomSelect } from '../../form-elements/Select';

const ConverterForm: FC = () => {
  const [currentField, setCurrentField] = useState<null | string>(null);
  const [date, setDate] = useState<Date>(new Date());
  const exchangeData = useGetExchangeData(date);
  const { addHistory } = useHistoryStore();

  const methods = useForm({
    mode: 'onTouched',
    defaultValues: {
      from: {
        curr: '0',
        curr_code: 'UAH',
      },
      to: {
        curr: '0',
        curr_code: 'USD',
      },
      date: new Date(),
    },
  });

  const { watch, setValue, handleSubmit } = methods;

  const fromCurr = watch('from');
  const toCurr = watch('to');
  const defaultDate = watch('date');

  useEffect(() => {
    if (currentField === 'from' || currentField === 'to') {
      updateCurrencyValues();
    }
  }, [
    currentField,
    fromCurr.curr,
    fromCurr.curr_code,
    toCurr.curr_code,
    toCurr.curr,
    exchangeData,
    date,
  ]);

  useEffect(() => {
    setDate(defaultDate);
  }, [defaultDate]);

  const updateCurrencyValues = () => {
    const result =
      currentField === 'from'
        ? fromConvertCurrency(
            fromCurr.curr,
            fromCurr.curr_code,
            toCurr.curr_code,
            exchangeData
          )
        : toConvertCurrency(
            toCurr.curr,
            toCurr.curr_code,
            fromCurr.curr_code,
            exchangeData
          );

    setValue(`${currentField === 'from' ? 'to' : 'from'}.curr`, result);
  };

  const onSubmit = (data: any) => {
    const id = getGenerateID();

    addHistory({ id, ...data });
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
                  name="from.curr"
                  placeholder="0"
                  handleFocus={() => setCurrentField('from')}
                  handleBlur={() => setCurrentField(null)}
                />
              </div>
              <div className="flex-1">
                <CustomSelect
                  name="from.curr_code"
                  items={exchangeData}
                  handleFocus={() => setCurrentField('from')}
                  handleBlur={() => setCurrentField(null)}
                />
              </div>
              <div className="w-[220px]">
                <DatePicker
                  name="date"
                  handleFocus={() => setCurrentField('from')}
                  handleBlur={() => setCurrentField(null)}
                />
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
                  name="to.curr"
                  placeholder="0.00"
                  handleFocus={() => setCurrentField('to')}
                  handleBlur={() => setCurrentField(null)}
                />
              </div>
              <div className="flex-1">
                <CustomSelect
                  name="to.curr_code"
                  items={exchangeData}
                  handleFocus={() => setCurrentField('to')}
                  handleBlur={() => setCurrentField(null)}
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
