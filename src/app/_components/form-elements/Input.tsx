import { IInput } from '@/app/_util/types/types';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const Input: FC<IInput> = props => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-2.5">
      <Controller
        name={props.name}
        control={control}
        render={({ field }) => (
          <input
            type={props.type}
            value={field.value || ''}
            onChange={field.onChange}
            onFocus={props.handleFocus}
            onBlur={props.handleBlur}
            placeholder={props.placeholder}
            className="w-full h-[60px] p-2.5 font-semibold font-xl text-gray text-center border border-silver rounded"
            inputMode="numeric"
          />
        )}
      />
    </div>
  );
};
