import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { IHistory } from '../types/types';

interface IHistoryStore {
  history: IHistory[];
  addHistory: (item: IHistory) => void;
  removeHistory: (id: string) => void;
  clearHistory: () => void;
}

export const useHistoryStore = create(
  persist<IHistoryStore>(
    set => ({
      history: [],
      addHistory: item => set(state => ({ history: [...state.history, item] })),
      removeHistory: id =>
        set(state => ({
          history: state.history.filter(item => item.id !== id),
        })),
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: 'history store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
