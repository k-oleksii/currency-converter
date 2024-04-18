'use client';

import { getSortData } from '@/app/_util/helpers/getSortData';
import { useHistoryStore } from '@/app/_util/store/history';
import { IHistory } from '@/app/_util/types/types';
import { FC, useEffect, useState } from 'react';
import Button from '../button/Button';
import Empty from '../empty/Empty';
import Loading from '../loading/Loading';
import HistoryItem from './HistoryItem';

const HistorySection: FC = () => {
  const { history, clearHistory, removeHistory } = useHistoryStore();
  const [loading, setLoading] = useState(true);
  const [dataHistory, setDataHistory] = useState<IHistory[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSortData(history);

        setDataHistory(data);
        setLoading(false);
      } catch (error) {
        throw new Error('Error fetching data:' + error);
      }
    };

    fetchData();
  }, [history]);

  const historyItemJSX = dataHistory?.map(item => (
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
          {loading ? (
            <Loading />
          ) : dataHistory.length === 0 ? (
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
