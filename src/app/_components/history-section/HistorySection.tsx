'use client';

import { getSortData } from '@/app/_util/helpers/getSortData';
import { useHistoryStore } from '@/app/_util/store/history';
import { FC } from 'react';
import Button from '../button/Button';
import Empty from '../empty/Empty';
import HistoryItem from './HistoryItem';

const HistorySection: FC = () => {
  const { history, clearHistory, removeHistory } = useHistoryStore();

  const historyItemJSX = getSortData(history)?.map(item => (
    <HistoryItem key={item.id} {...item} removeHistory={removeHistory} />
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
              <Button type="button" size="small" onClick={clearHistory}>
                Очистити історію
              </Button>
            </div>
          </div>
          {history.length === 0 ? (
            <Empty text="Your history is empty!" />
          ) : (
            <div className="grid grid-cols-2 gap-y-4 gap-x-12">
              {historyItemJSX}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
