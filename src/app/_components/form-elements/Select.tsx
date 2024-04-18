import { ICONS } from '@/app/_util/constants';
import { getIcon } from '@/app/_util/helpers/getIcon';
import { ISelect } from '@/app/_util/types/types';
import * as Select from '@radix-ui/react-select';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const CustomSelect: FC<ISelect> = ({
  items,
  name,
  handleFocus,
  handleBlur,
}) => {
  const { control } = useFormContext();

  return (
    <div className="relative flex flex-col gap-2.5">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select.Root
            onValueChange={newValue => {
              field.onChange(newValue);
            }}
            onOpenChange={handleFocus}
            value={field.value}
          >
            <Select.Trigger className="flex justify-between items-center gap-2 w-full h-[60px] px-[17px] py-4 font-semibold font-xl uppercase text-gray text-center border border-silver rounded">
              <Select.Value aria-label={field.value}>
                {field.value}
              </Select.Value>
              <Select.Icon>{getIcon(ICONS.chevronDown)}</Select.Icon>
            </Select.Trigger>
            <Select.SelectContent
              onCloseAutoFocus={handleBlur}
              position="popper"
              sideOffset={5}
              className="min-w-[127px] max-h-[300px] select w-full right-0 bg-white border border-silver rounded overflow-hidden	"
            >
              <Select.Viewport>
                {items?.map(item => (
                  <Select.Item
                    key={item.r030}
                    value={item.cc}
                    className="px-[17px] py-2 font-semibold font-xl uppercase text-gray cursor-pointer hover:bg-lightGray border-b border-silver last:border-b-0"
                  >
                    <Select.ItemText>{item.cc}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.SelectContent>
          </Select.Root>
        )}
      />
    </div>
  );
};
