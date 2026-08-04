import { create } from 'zustand';

const useStore = create((set) => ({
  menuOpen: false,
  switchMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
}));

export default useStore;