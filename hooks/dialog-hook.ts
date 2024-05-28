import { create } from 'zustand';

interface DialogProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: any;
  setData(data: any): void;
  toggle: () => void;
}

export const useDialog = create<DialogProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  data: {},
  setData: (data) => set({ data: { data } }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen }))
}));
