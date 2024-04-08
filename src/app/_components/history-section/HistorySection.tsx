import { historyData } from '@/app/_mock-data/historyData';
import { getSortData } from '@/app/_util/helpers/getSortData';
import { FC } from 'react';
import Button from '../button/Button';
import HistoryItem from './HistoryItem';

const HistorySection: FC = () => {
  const historyItemJSX = getSortData(historyData)?.map(item => (
    <HistoryItem key={item.id} {...item} />
  ));

  return (
    <section className="py-20">
      <div className="max-w-containerMd w-full mx-auto">
        <div className="flex flex-col gap-y-8 py-[55px] pr-[68px] pl-[48px] rounded bg-lightGray">
          <div className="flex justify-between items-center gap-x-4 ">
            <h3 className="font-medium text-[28px] text-darkGray">
              Історія конвертації
            </h3>
            <div className="w-[187px]">
              <Button type="button" size="small">
                Очистити історію
              </Button>
            </div>
          </div>
          <div className="columns-2 gap-x-12">{historyItemJSX}</div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
