import { ICONS } from '@/app/_util/constants';
import { getIcon } from '@/app/_util/helpers/getIcon';
import * as Popover from '@radix-ui/react-popover';
import { format, isValid, parse } from 'date-fns';
import { FC, useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { Controller, useFormContext } from 'react-hook-form';

interface IDatePicker {
  name: string;
}

export const DatePicker: FC<IDatePicker> = ({ name }) => {
  const { control, setValue } = useFormContext();
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  const [inputValue, setInputValue] = useState<string>(
    format(new Date(), 'dd.MM.y')
  );

  useEffect(() => {
    setValue(name, selected);
  }, [name, selected, setValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const date = parse(value, 'dd.MM.y', new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  const handleDateSelect = (newDate: Date | undefined) => {
    setSelected(newDate);
    if (newDate) {
      setInputValue(format(newDate, 'dd.MM.y'));
    } else {
      setInputValue('');
    }
    setValue(name, newDate);
  };

  return (
    <div className="relative">
      <Controller
        name={name}
        control={control}
        render={() => (
          <>
            <input
              type="text"
              placeholder={format(new Date(), 'dd.MM.y')}
              value={inputValue}
              onChange={handleInputChange}
              className="w-full h-[60px] p-2.5 pr-12 font-semibold font-xl text-gray text-center border border-silver rounded"
            />

            <div className="absolute flex items-center right-[17px] top-1/2 -translate-y-1/2">
              <Popover.Root>
                <Popover.Trigger className="text-gray hover:text-blue transition-all">
                  {getIcon(ICONS.calendar)}
                </Popover.Trigger>
                <Popover.Content
                  className="bg-white border border-silver rounded"
                  side="right"
                  sideOffset={30}
                >
                  <DayPicker
                    mode="single"
                    defaultMonth={selected}
                    selected={selected}
                    onSelect={handleDateSelect}
                    showOutsideDays
                    classNames={{
                      caption:
                        'flex justify-center py-2 mb-2 relative items-center',
                      caption_label: 'text-sm font-medium text-gray',
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
