import { ICONS } from '@/app/_util/constants';
import { getIcon } from '@/app/_util/helpers/getIcon';
import * as Popover from '@radix-ui/react-popover';
import { format } from 'date-fns';
import { FC, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { Controller, useFormContext } from 'react-hook-form';

interface IDatePicker {
  name: string;
  handleFocus: () => void;
  handleBlur: () => void;
}

export const DatePicker: FC<IDatePicker> = ({
  name,
  handleFocus,
  handleBlur,
}) => {
  const { control } = useFormContext();
  const [inputValue, setInputValue] = useState<string>(
    format(new Date(), 'dd.MM.y')
  );

  return (
    <div className="relative">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <input
              type="text"
              placeholder={format(new Date(), 'dd.MM.y')}
              value={inputValue}
              className="w-full h-[60px] p-2.5 pr-12 font-semibold font-xl text-gray text-center border border-silver rounded"
              readOnly
            />

            <div className="absolute flex items-center right-[17px] top-1/2 -translate-y-1/2">
              <Popover.Root>
                <Popover.Trigger
                  onFocus={handleFocus}
                  className="text-gray hover:text-blue transition-all"
                >
                  {getIcon(ICONS.calendar)}
                </Popover.Trigger>
                <Popover.Content
                  onCloseAutoFocus={handleBlur}
                  className="bg-white border border-silver rounded"
                  side="right"
                  sideOffset={30}
                >
                  <DayPicker
                    mode="single"
                    defaultMonth={new Date()}
                    selected={field.value}
                    onSelect={day => {
                      const newDay = day as Date;
                      field.onChange(newDay);
                      setInputValue(format(newDay, 'dd.MM.y'));
                    }}
                    captionLayout="dropdown-buttons"
                    fromYear={2010}
                    toYear={new Date().getFullYear()}
                    showOutsideDays
                    classNames={{
                      caption:
                        'flex justify-center py-2 mb-2 relative items-center',
                      caption_label: 'hidden',
                      caption_dropdowns:
                        'text-sm flex flex-col items-center gap-2',
                      dropdown_month: 'flex items-center gap-2',
                      dropdown_year: 'flex items-center gap-2',
                      nav: 'flex items-center',
                      nav_button:
                        'flex justify-center items-center h-4 w-4 hover:text-darkGray',
                      nav_button_previous: 'absolute left-1',
                      nav_button_next: 'absolute right-1',
                      nav_icon: 'block w-3 h-3',
                      table: 'w-full border-collapse',
                      head_row: 'flex font-medium text-gray',
                      head_cell: 'm-0.5 w-7 font-normal text-sm',
                      row: 'flex w-full mt-2',
                      cell: 'flex items-center justify-center m-0.5 text-sm',
                      day: 'h-7 w-7',
                      day_selected: 'rounded-md bg-blue/60 text-lightGray',
                      day_today: 'rounded-md bg-blue/40 text-lightGray',
                      day_outside:
                        'ext-gray opacity-50 aria-selected:bg-gray aria-selected:text-gray aria-selected:bg-opacity-10',
                      day_disabled: 'text-gray opacity-50',
                      day_hidden: 'invisible',
                    }}
                  />
                </Popover.Content>
              </Popover.Root>
            </div>
          </>
        )}
      />
    </div>
  );
};
