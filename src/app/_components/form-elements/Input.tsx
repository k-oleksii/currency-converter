import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface IInput {
  type: string;
  placeholder?: string;
  name: string;
}

export const Input: FC<IInput> = props => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-2.5">
      <input
        type={props.type}
        placeholder={props.placeholder}
        {...register(props.name)}
        className="w-full h-[60px] p-2.5 font-semibold font-xl text-gray text-center border border-silver rounded"
      />
    </div>
  );
};
