import {create} from 'zustand';

const usePageStore = create(set => ({
  currentPage: 1,
  changePage: (target) => set({ currentPage: target }),
}));

export default usePageStore;

//currentPageStore.js