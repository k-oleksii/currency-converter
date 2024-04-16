import { IInput } from '@/app/_util/types/types';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

export const Input: FC<IInput> = props => {
  const { register, setValue } = useFormContext();

  return (
    <div className="flex flex-col gap-2.5">
      <input
        type={props.type}
        placeholder={props.placeholder}
        {...register(props.name)}
        className="w-full h-[60px] p-2.5 font-semibold font-xl text-gray text-center border border-silver rounded"
        onChange={e => {
          setValue(props.name, e.target.value);

          if (props.onChange) {
            props.onChange(e);
          }
        }}
      />
    </div>
  );
};
